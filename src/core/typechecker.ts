import {
	ASTArrayNode,
	ASTBinaryNode,
	ASTCallNode,
	ASTClassNode,
	ASTExpressionNode,
	ASTFieldNode,
	ASTForeachNode,
	ASTIndexNode,
	ASTInterfaceNode,
	ASTLambdaNode,
	ASTMemberNode,
	ASTMethodNode,
	ASTNewNode,
	ASTNode,
	ASTNodeType,
	ASTParameterNode,
	ASTReturnNode,
	ASTTypeNode,
	ASTUnaryNode,
	ASTVariableNode
} from './ast';
import {
	buildTypeSubstitutionMap,
	ClassRefType,
	ClassSymbol,
	FieldSymbol,
	InterfaceRefType,
	InterfaceSymbol,
	LambdaType,
	MethodSymbol,
	MixedType,
	NullableType,
	ParameterSymbol,
	PrimitiveClassTypes,
	substituteType,
	Type,
	TypeParameterSymbol,
	Types,
	TypeScope,
	TypeVariable,
	wrapType
} from "../language/type_objects";
import {Autoboxing} from "../language/autoboxing";
import {NativeFunction, NativeFunctions} from "../library/native_functions";
import {GRAMMAR} from "../language/grammar";
import {throwTypeError} from "./errors"
import {ClassDefinition, InterfaceDefinition} from "./interpreter_objects";
import {ObjectRegistry} from "./interpreter_registry";


const globalFunctionTypeRegistry = new NativeFunctions()
	.getGlobalFunctionTypeRegistry();

export class StatementResult {
	didReturn: boolean;
	returnType: Type | null;

	constructor(didReturn: boolean, returnType: Type | null) {
		this.didReturn = didReturn;
		this.returnType = returnType;
	}

	static withReturn(returnType: Type): StatementResult {
		return new StatementResult(true, returnType);
	}

	static noReturn(): StatementResult {
		return new StatementResult(false, null);
	}
}

export class TypeChecker {
	objectRegistry: ObjectRegistry;

	constructor(objectRegistry: ObjectRegistry) {
		this.objectRegistry = objectRegistry;
	}

	collectAllSymbolsFromNode(ast: ASTNode): void {
		for (const node of ast.children) {
			if (node instanceof ASTInterfaceNode) {
				this.registerInterfaceSymbol(node)
			} else if (node instanceof ASTClassNode) {
				this.registerClassSymbol(node);
			}
		}
	}

	collectAllSymbolsFromRegistry(objectRegistry: ObjectRegistry): void {
		const objectDefinitions: MapIterator<ClassDefinition | InterfaceDefinition> = objectRegistry
			.fetchAllObjectDefinitions()
			.values();

		for (let objectDef of objectDefinitions) {
			if (objectDef instanceof InterfaceDefinition) {
				this.registerInterfaceSymbol(objectDef.node);
			} else {
				this.registerClassSymbol(objectDef.node);
			}
		}
	}

	check(ast: ASTNode): void {
		this.collectAllSymbolsFromNode(ast);
		this.validateInheritance();
		this.checkProgram(ast);
		this.checkInterfaceBodies();
		this.checkClassesBodies();
		this.checkClassesImplements();
	}

	validateInheritance() {
		for (const classSymbol of this.objectRegistry.classes.all()) {
			if (classSymbol.superClass && !this.objectRegistry.types.hasSymbol(classSymbol.superClass)) {
				this.typeError(`Unknown superclass ${classSymbol.superClass}`, classSymbol.node);
			}
		}
	}

	checkProgram(ast: ASTNode): void {
		const scope = new TypeScope();
		for (const node of ast.children) {
			this.checkStatement(node, scope);
		}
	}

	checkClassesBodies(): void {
		for (const objectSymbol of this.objectRegistry.types.allClassSymbols()) {
			const instanceScope = new TypeScope();
			instanceScope.currentObjectSymbol = objectSymbol;

			objectSymbol.typeParameterSymbols.forEach(typeParameter => {
				instanceScope.defineTypeBinding(
					typeParameter.name,
					new TypeVariable(typeParameter.name)
				);
			});

			if (objectSymbol.constructorMethodSymbol) {
				const constructorSymbol = objectSymbol.constructorMethodSymbol;
				const constructorScope = new TypeScope(instanceScope);

				objectSymbol.typeParameterSymbols.forEach(typeParameterSymbol => {
					constructorScope.defineTypeBinding(
						typeParameterSymbol.name,
						new TypeVariable(typeParameterSymbol.name)
					);
				});

				for (const parameterSymbol of constructorSymbol.parameterSymbols) {
					constructorScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
				}

				this.checkBody(constructorSymbol.body, constructorScope);
			}

			for (const methodSymbol of objectSymbol.instanceMethodSymbols.values()) {
				const methodScope = new TypeScope(instanceScope);

				methodSymbol.typeParameterSymbols.forEach(typeParameterSymbol => {
					methodScope.defineTypeBinding(
						typeParameterSymbol.name,
						new TypeVariable(typeParameterSymbol.name)
					);
				});

				for (const parameterSymbol of methodSymbol.parameterSymbols) {
					methodScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
				}

				const hasBody = methodSymbol.body && methodSymbol.body.length > 0;
				if (hasBody) {
					const actual = this.checkBody(methodSymbol.body, methodScope);
					this.checkReturnType(methodSymbol.returnType, actual, methodSymbol.node);
				}
			}

			for (const methodSymbol of objectSymbol.staticMethodSymbols.values()) {
				const staticScope = new TypeScope(instanceScope);

				methodSymbol.typeParameterSymbols.forEach(typeParameterSymbol => {
					staticScope.defineTypeBinding(
						typeParameterSymbol.name,
						new TypeVariable(typeParameterSymbol.name)
					);
				});

				for (const parameterSymbol of methodSymbol.parameterSymbols) {
					staticScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
				}

				const hasBody = methodSymbol.body && methodSymbol.body.length > 0;
				if (hasBody) {
					const actual = this.checkBody(methodSymbol.body, staticScope);
					this.checkReturnType(methodSymbol.returnType, actual, methodSymbol.node);
				}
			}
		}
	}

	checkInterfaceBodies(): void {
		for (const objectSymbol of this.objectRegistry.types.allInterfaceSymbols()) {
			const instanceScope = new TypeScope();
			instanceScope.currentObjectSymbol = objectSymbol;

			objectSymbol.typeParameterSymbols.forEach(typeParameter => {
				instanceScope.defineTypeBinding(
					typeParameter.name,
					new TypeVariable(typeParameter.name)
				);
			});

			for (const methodSymbol of objectSymbol.instanceMethodSymbols.values()) {
				const methodScope = new TypeScope(instanceScope);

				methodSymbol.typeParameterSymbols.forEach(typeParameterSymbol => {
					methodScope.defineTypeBinding(
						typeParameterSymbol.name,
						new TypeVariable(typeParameterSymbol.name)
					);
				});

				for (const parameterSymbol of methodSymbol.parameterSymbols) {
					methodScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
				}

				const hasBody = methodSymbol.body && methodSymbol.body.length > 0;
				if (hasBody) {
					const actual = this.checkBody(methodSymbol.body, methodScope);
					this.checkReturnType(methodSymbol.returnType, actual, methodSymbol.node);
				}
			}
		}
	}

	checkClassesImplements(): void {
		for (const classSymbol of this.objectRegistry.types.allClassSymbols()) {
			for (const interfaceRefType of classSymbol.implementsInterfaces) {
				this.checkImplementsInterface(classSymbol, interfaceRefType);
			}
		}
	}

	checkImplementsInterface(classSymbol: ClassSymbol, interfaceRefType: InterfaceRefType): void {
		const interfaceSymbol = interfaceRefType.interfaceSymbol;

		const substitutionMap = buildTypeSubstitutionMap(
			interfaceSymbol.typeParameterSymbols,
			interfaceRefType.typeArguments
		);

		for (const interfaceMethodSymbol of interfaceSymbol.instanceMethodSymbols.values()) {
			const classMethodSymbol = this.resolveInstanceMethode(
				classSymbol,
				interfaceMethodSymbol.name
			);

			if (!classMethodSymbol) {
				this.typeError(
					`Class ${classSymbol.name} does not implement method ${interfaceMethodSymbol.name} from interface ${interfaceSymbol.name}`,
					classSymbol.node
				);
			}

			this.checkMethodCompatibility(
				classMethodSymbol,
				interfaceMethodSymbol,
				substitutionMap
			);
		}
	}

	checkMethodCompatibility(classMethodSymbol: MethodSymbol, interfaceMethodSymbol: MethodSymbol, substitutionMap: Map<string, Type>): void {
		if (classMethodSymbol.parameterSymbols.length !== interfaceMethodSymbol.parameterSymbols.length) {
			this.typeError(`Method ${classMethodSymbol.name} has wrong parameter count`);
		}

		for (let i = 0; i < interfaceMethodSymbol.parameterSymbols.length; i++) {
			const parameterSymbol: ParameterSymbol | null = interfaceMethodSymbol.parameterSymbols[i] || null;

			if (!parameterSymbol) {
				this.typeError(`Method ${classMethodSymbol.name} has too many parameters`);
				break;
			}

			const expectedType: Type = substituteType(parameterSymbol.parameterType, substitutionMap);

			const actualType: Type = parameterSymbol.parameterType;

			if (!expectedType.accepts(actualType)) {
				this.typeError(`Parameter ${i + 1} of ${classMethodSymbol.name} incompatible with interface`);
			}
		}

		const expectedReturn: Type = substituteType(interfaceMethodSymbol.returnType, substitutionMap);

		if (!expectedReturn.accepts(classMethodSymbol.returnType)) {
			this.typeError(`Return type of ${classMethodSymbol.name} incompatible with interface`);
		}
	}

	checkStatement(node: ASTNode, scope: TypeScope): StatementResult {
		switch (node.type) {
			case ASTNodeType.RETURN:
				if (node instanceof ASTReturnNode) {
					return StatementResult.withReturn(
						this.checkExpression(node.argument, scope)
					);
				}
				break;
			case ASTNodeType.VARIABLE:
				if (node instanceof ASTVariableNode) {
					this.checkVariable(node, scope);
					return StatementResult.noReturn();
				}
				break;
			case ASTNodeType.FOREACH:
				if (node instanceof ASTForeachNode) {
					return StatementResult.withReturn(
						this.checkForeach(node, scope)
					);
				}
				break;
			case ASTNodeType.EXPRESSION:
				if (node instanceof ASTExpressionNode) {
					this.checkExpression(node.expr, scope);
					return StatementResult.noReturn();
				}
				break;
		}

		return StatementResult.noReturn();
	}

	checkVariable(node: ASTVariableNode, scope: TypeScope): void {
		const declaredType: Type | null = node.typeAnnotation
			? this.wrapType(node.typeAnnotation, scope)
			: null;

		const actualType: Type = this.checkExpression(node.init, scope, declaredType);

		if (declaredType && !declaredType.accepts(actualType)) {
			this.typeError(`Type mismatch: ${declaredType} <> ${actualType}`, node);
		}

		scope.defineType(node.name, declaredType ?? actualType);
	}

	checkForeach(node: ASTForeachNode, scope: TypeScope): Type {
		let iterableType: Type = this.checkExpression(node.iterable, scope);

		iterableType = Autoboxing.autoboxIfNeeded(iterableType, this.objectRegistry);

		if (iterableType instanceof ClassRefType && iterableType.classSymbol.name === 'Array') {
			if (iterableType.typeArguments.length !== 1) {
				this.typeError('Array in foreach musst have exactly one type argument.', node.iterable);
			}

			const elementType: Type | null = iterableType.typeArguments[0] || null;

			if (elementType === null) {
				this.typeError('Array in foreach must have exactly one type argument.', node.iterable);
				return Types.NULL;
			}

			const loopScope = new TypeScope(scope);
			loopScope.defineType(node.iterator, elementType);

			return this.checkBody(node.body, loopScope);

		}

		this.typeError(`foreach expects Array<T>, got ${iterableType.toString()}`, node.iterable);
		return Types.NULL;
	}

	checkExpression(expr: ASTNode | null, scope: TypeScope, expectedType: Type | null = null): Type {
		if (expr === null) {
			this.typeError('Expression expected, got null.', expr);
			return Types.NULL;
		}

		switch (expr.type) {
			case ASTNodeType.NUMBER:
				return Types.NUMBER;

			case ASTNodeType.STRING:
				return Types.STRING;

			case ASTNodeType.BOOLEAN:
				return Types.BOOLEAN;

			case ASTNodeType.NULL:
				return Types.NULL;

			case ASTNodeType.ARRAY: {
				if (expr instanceof ASTArrayNode) {
					return this.checkArrayExpression(expr, scope, expectedType);
				}
				break;
			}

			case ASTNodeType.INDEX: {
				if (expr instanceof ASTIndexNode) {
					const objectType = this.checkExpression(expr.object, scope);
					const index = this.checkExpression(expr.index, scope);

					if (objectType instanceof ClassRefType) {
						return objectType.typeArguments[0] || Types.MIXED;
					}

					this.typeError(`Cannot index ${objectType.name} with ${index.name}`, expr);
				}
				break;
			}

			case ASTNodeType.UNARY: {
				if (expr instanceof ASTUnaryNode) {
					return this.checkUnaryExpression(expr, scope);
				}
				break;
			}

			case ASTNodeType.MEMBER: {
				if (expr instanceof ASTMemberNode) {
					return this.checkMemberExpression(expr, scope);
				}
				break;
			}

			case ASTNodeType.THIS: {
				return this.checkThisExpression(scope);
			}

			case ASTNodeType.IDENTIFIER:
				return this.checkIdentifierExpression(expr, scope);

			case ASTNodeType.NEW: {
				if (expr instanceof ASTNewNode) {
					return this.checkNewExpression(expr, scope, expectedType);
				}
				break;
			}

			case ASTNodeType.BINARY: {
				if (expr instanceof ASTBinaryNode) {
					return this.checkBinaryExpression(expr, scope);
				}
				break;
			}

			case ASTNodeType.LAMBDA: {
				if (expr instanceof ASTLambdaNode) {
					return this.checkLambdaExpression(expr, scope);
				}
				break;
			}

			case ASTNodeType.CALL: {
				if (expr instanceof ASTCallNode) {
					return this.checkCallExpression(expr, scope);
				}
				break;
			}
		}

		return Types.MIXED;
	}

	checkBinaryExpression(expr: ASTBinaryNode, scope: TypeScope): Type {
		const left: Type = this.checkExpression(expr.left, scope);
		const right: Type = this.checkExpression(expr.right, scope);
		const op: string = expr.operator;

		if (GRAMMAR.ARITHMETIC.includes(op)) {
			if (left.accepts(Types.NUMBER) && right.accepts(Types.NUMBER)) {
				return Types.NUMBER;
			}
			if (left.accepts(Types.STRING) || right.accepts(Types.STRING)) {
				return Types.STRING;
			}
			this.typeError(`Arithmetic operator '${op}' requires numbers`, expr);
		}

		if (GRAMMAR.COMPARISON.includes(op)) {
			if (left.accepts(Types.NUMBER) && right.accepts(Types.NUMBER)) {
				return Types.BOOLEAN;
			}
			this.typeError(`Comparison '${op}' requires numbers`, expr);
		}

		if (GRAMMAR.EQUALITY.includes(op)) {
			if (left.accepts(right)) {
				return Types.BOOLEAN;
			}
			this.typeError(`Cannot compare ${left.name} with ${right.name}`, expr);
		}

		if (GRAMMAR.LOGICAL.includes(op)) {
			if (left.accepts(Types.BOOLEAN) && right.accepts(Types.BOOLEAN)) {
				return Types.BOOLEAN;
			}
			this.typeError(`Logical operator '${op}' requires booleans`, expr);
		}

		this.typeError(`Invalid binary operation`, expr);
		return Types.NULL;
	}

	checkFieldAccess(node: ASTMemberNode, classSymbol: ClassSymbol, fieldSymbol: FieldSymbol, scope: TypeScope): void {
		if (fieldSymbol.isPublic) {
			return;
		}

		if (!scope.currentObjectSymbol) {
			this.typeError(`Cannot access private member ${node.property} of ${classSymbol.name}`, node);
		}

		if (scope.currentObjectSymbol !== fieldSymbol.owner) {
			if (scope.currentObjectSymbol instanceof ClassSymbol
				&& scope.currentObjectSymbol.superClassSymbol !== fieldSymbol.owner) {
				this.typeError(`Cannot access private member ${node.property} of ${classSymbol.name}`, node);

			}
		}
	}

	checkInstanceMethodAccess(node: ASTMemberNode, classSymbol: ClassSymbol, methodSymbol: MethodSymbol, scope: TypeScope): void {
		if (methodSymbol.isPublic) {
			return;
		}

		if (!scope.currentObjectSymbol) {
			this.typeError(`Cannot access private method ${node.property} of ${classSymbol.name}`, node);
		}

		if (scope.currentObjectSymbol !== methodSymbol.owner) {
			if (scope.currentObjectSymbol instanceof ClassSymbol
				&& scope.currentObjectSymbol.superClassSymbol !== methodSymbol.owner) {
				this.typeError(`Cannot access private method ${node.property} of ${classSymbol.name}`, node);

			}
		}
	}

	checkStaticMethodAccess(classSymbol: ClassSymbol, methodSymbol: MethodSymbol, scope: TypeScope): void {
		if (!methodSymbol.isStatic) {
			this.typeError(`Cannot call instance method ${classSymbol.name}.${methodSymbol.name} as static method`);
			return;
		}

		if (methodSymbol.isPublic) {
			return;
		}

		if (!scope.currentObjectSymbol) {
			this.typeError(`Cannot access private method ${methodSymbol.name} of ${classSymbol.name}`,
			               methodSymbol.node);
		}

		if (scope.currentObjectSymbol !== methodSymbol.owner) {
			if (scope.currentObjectSymbol instanceof ClassSymbol
				&& scope.currentObjectSymbol.superClassSymbol !== methodSymbol.owner) {
				this.typeError(`Cannot access private method ${methodSymbol.name} of ${classSymbol.name}`,
				               methodSymbol.node);

			}
		}
	}

	checkMemberExpression(node: ASTMemberNode, scope: TypeScope): Type {
		const objectType: Type = this.checkExpression(node.object, scope);

		if (objectType instanceof ClassRefType) {
			const classSymbol: ClassSymbol = objectType.classSymbol;

			const instanceFieldSymbol: FieldSymbol | null = classSymbol.resolveInstanceFieldSymbol(node.property);
			if (instanceFieldSymbol) {
				this.checkFieldAccess(node, classSymbol, instanceFieldSymbol, scope);
				return instanceFieldSymbol.fieldType;
			}

			const staticFieldSymbol: FieldSymbol | null = classSymbol.resolveStaticFieldSymbol(node.property);
			if (staticFieldSymbol) {
				this.checkFieldAccess(node, classSymbol, staticFieldSymbol, scope);
				return staticFieldSymbol.fieldType;
			}

			this.typeError(`Unknown member ${node.property}`, node);
		}

		this.typeError("Cannot access member of non-object", node);
		return Types.NULL;
	}

	checkThisExpression(scope: TypeScope): ClassRefType {
		if (scope.currentObjectSymbol instanceof ClassSymbol) {
			return new ClassRefType(scope.currentObjectSymbol);
		}
		throw new Error('this outside of class');
	}

	checkIdentifierExpression(node: ASTNode, scope: TypeScope): Type {
		if (scope.hasType(node.name)) {
			return scope.getType(node.name);
		}
		if (this.objectRegistry.types.hasSymbol(node.name)) {
			return new ClassRefType(this.objectRegistry.types.getClassSymbol(node.name));
		}
		this.typeError(`Undefined identifier ${node.name}`, node);
		return Types.NULL;
	}

	checkNewExpression(node: ASTNewNode, scope: TypeScope, expectedType: Type | null = null): ClassRefType {
		const classSymbol: ClassSymbol = this.objectRegistry.types.getClassSymbol(node.name);

		let instanceType;
		if (node.typeAnnotation.typeArguments.length > 0) {
			const typeArguments = node
				.typeAnnotation
				.typeArguments
				.map(typeArgument => this.wrapType(typeArgument, scope));

			if (typeArguments.length !== classSymbol.typeParameterSymbols.length) {
				this.typeError(`Wrong number of type arguments`, node);
			}

			instanceType = new ClassRefType(classSymbol, typeArguments);
		} else if (expectedType instanceof ClassRefType) {
			instanceType = expectedType;
		} else {
			instanceType = new ClassRefType(
				classSymbol,
				classSymbol.typeParameterSymbols.map(() => Types.MIXED)
			);
		}

		if (classSymbol.constructorMethodSymbol) {
			this.checkCallArguments(classSymbol.constructorMethodSymbol, node.arguments, scope);
		}

		if (expectedType && !expectedType.accepts(instanceType)) {
			this.typeError(`Type mismatch: ${expectedType} <> ${instanceType}`, node);
		}

		return instanceType;
	}

	checkArrayExpression(node: ASTArrayNode, scope: TypeScope, expectedType: Type | null = null): ClassRefType {

		if (node.elements.length === 0) {
			if (expectedType instanceof ClassRefType) {
				expectedType = expectedType.typeArguments[0] || null;
			}

			return this.newArrayTypeOf(expectedType || Types.MIXED);
		}

		const classRefName = PrimitiveClassTypes.getClassRefName(PrimitiveClassTypes.ARRAY);

		let expectedTypeOfItem: Type;
		if (expectedType instanceof ClassRefType && expectedType.classSymbol.name === classRefName) {
			expectedTypeOfItem = expectedType.typeArguments[0] || Types.MIXED;
		} else if (node.elements[0]) {
			expectedTypeOfItem = this.checkExpression(node.elements[0], scope, expectedType);
		} else {
			throw new Error('Array expression must have at least one element');
		}

		for (const item of node.elements) {
			const actualTypeOfItem: Type = this.checkExpression(item, scope, expectedTypeOfItem);
			if (!expectedTypeOfItem.accepts(actualTypeOfItem)) {
				this.typeError(
					`Array elements must have same type, got ${expectedTypeOfItem} and ${actualTypeOfItem}`,
					node
				);
			}
		}

		return this.newArrayTypeOf(expectedTypeOfItem);
	}

	checkUnaryExpression(node: ASTUnaryNode, scope: TypeScope): Type {
		const operand = this.checkExpression(node.argument, scope);
		const op = node.operator;
		if (op === GRAMMAR.EXCLAMATION_MARK) {
			if (operand.equals(Types.BOOLEAN)) {
				return Types.BOOLEAN;
			}
			this.typeError(`Unary '!' requires boolean, got ${operand.name}`, node);
		}
		this.typeError(`Invalid unary operator ${op}`, node);
		return Types.NULL;
	}

	checkLambdaExpression(node: ASTLambdaNode, scope: TypeScope): LambdaType {
		const lambdaScope = new TypeScope(scope);
		const parameters = node.parameters.map(parameterNode => {
			const parameterSymbol: ParameterSymbol = this.parameterNodeToSymbol(parameterNode);

			lambdaScope.defineType(parameterNode.name, parameterSymbol.parameterType);

			return parameterSymbol;
		});

		if (node.children[0]) {
			return new LambdaType(parameters, this.checkExpression(node.children[0], lambdaScope));
		}

		throw new Error('Lambda expression must have a return type');
	}

	checkCallExpression(node: ASTCallNode, scope: TypeScope): Type {
		const callee = node.callee;

		if (callee.type === ASTNodeType.IDENTIFIER && callee.name === GRAMMAR.SUPER) {
			return this.checkSuperConstructorCall(node, scope);
		}

		// Class.method()
		if (callee instanceof ASTMemberNode
			&& callee.object.type === ASTNodeType.IDENTIFIER
			&& this.objectRegistry.types.hasSymbol(callee.object.name)
		) {
			return this.checkStaticCall(
				callee.object.name,
				callee.property,
				node.arguments,
				scope
			);
		}

		// expr.method()
		if (callee instanceof ASTMemberNode) {
			return this.checkInstanceCall(callee, node.arguments, scope);
		}

		// Identifier: Variable / Lambda
		if (callee.type === ASTNodeType.IDENTIFIER) {
			if (scope.hasType(callee.name)) {
				const type = scope.getType(callee.name);
				if (type instanceof LambdaType) {
					return this.checkLambdaCall(type, node.arguments, scope);
				}
				this.typeError(`Cannot call non-function ${callee.name}`, node);
			}

			// Fallback: globale Funktion
			return this.checkFunctionCall(callee.name, node.arguments, scope);
		}

		return Types.MIXED;
	}

	checkSuperConstructorCall(node: ASTCallNode, scope: TypeScope): Type {
		const currentClass = scope.currentObjectSymbol;

		if (!(currentClass instanceof ClassSymbol)) {
			this.typeError('super() used outside of class', node);
			return Types.NULL;
		}

		if (!currentClass.superClass) {
			this.typeError('super() used outside of class hierarchy', node);
			return Types.NULL;
		}

		const superSymbol: ClassSymbol = this.objectRegistry.types.getClassSymbol(currentClass.superClass);
		if (!superSymbol.constructorMethodSymbol) {
			if (node.arguments.length > 0) {
				this.typeError('Super constructor takes no arguments', node);
			}
			return Types.VOID;
		}

		this.checkCallArguments(superSymbol.constructorMethodSymbol, node.arguments, scope);

		return Types.VOID;
	}

	checkCallOnNullObjectType(objectType: Type, node: ASTNode): void {
		if (objectType.equals(Types.NULL)) {
			this.typeError(`Cannot call method on null`, node);
		}
		if (objectType instanceof NullableType) {
			this.typeError(`Cannot call method on nullable type ${objectType}`, node);
		}
	}

	checkInstanceCall(callee: ASTMemberNode, callArguments: ASTNode[], scope: TypeScope): Type {
		let objectType: Type = this.checkExpression(callee.object, scope);

		objectType = Autoboxing.autoboxIfNeeded(objectType, this.objectRegistry);

		this.checkCallOnNullObjectType(objectType, callee);

		if (objectType instanceof ClassRefType) {
			const methodSymbol: MethodSymbol = this.resolveInstanceMethode(
				objectType.classSymbol,
				callee.property
			);

			if (methodSymbol.isStatic) {
				this.typeError(`Cannot call static method ${callee.property} on instance of ${callee.object.name}`,
				               callee);
			}

			this.checkInstanceMethodAccess(callee, objectType.classSymbol, methodSymbol, scope);

			const owner: ClassSymbol | InterfaceSymbol | null = methodSymbol.owner;

			if (owner === null) {
				this.typeError(`Cannot call method on non-object`, callee);
				return Types.NULL;
			}

			const substitutionMap: Map<string, Type> = buildTypeSubstitutionMap(
				owner.typeParameterSymbols,
				objectType.typeArguments
			);

			this.checkCallArguments(methodSymbol, callArguments, scope, substitutionMap);

			return substituteType(methodSymbol.returnType, substitutionMap);
		}

		this.typeError(`Cannot call method on non-object`, callee);
		return Types.NULL;
	}

	checkStaticCall(className: string, methodName: string, callArguments: ASTNode[], scope: TypeScope): Type {
		const classSymbol: ClassSymbol = this.objectRegistry.types.getClassSymbol(className);

		const methodSymbol: MethodSymbol | null = classSymbol.staticMethodSymbols.get(methodName) || null;
		if (!methodSymbol) {
			this.typeError(`Unknown static method ${className}.${methodName}`);
			return Types.NULL;
		}

		this.checkStaticMethodAccess(classSymbol, methodSymbol, scope)

		this.checkCallArguments(methodSymbol, callArguments, scope);

		return methodSymbol.returnType;
	}

	checkLambdaCall(lambda: LambdaType, callArguments: ASTNode[], scope: TypeScope): Type {

		this.checkCallArguments(lambda, callArguments, scope);

		return lambda.returnType;
	}

	checkFunctionCall(name: string, callArguments: ASTNode[], scope: TypeScope): Type {
		if (!globalFunctionTypeRegistry.has(name)) {
			this.typeError(`Unknown function ${name}`);
			return Types.NULL;
		}

		const nativeFunction: NativeFunction = globalFunctionTypeRegistry.get(name);

		this.checkCallArguments(nativeFunction, callArguments, scope);

		return nativeFunction.returnType
			? this.wrapType(nativeFunction.returnType, scope)
			: Types.VOID;
	}

	parametersSymbolsFromCallableSymbol(callableSymbol: MethodSymbol | LambdaType | NativeFunction): ParameterSymbol[] {
		if (callableSymbol instanceof NativeFunction) {
			return callableSymbol
				.parameterNodes
				.map(parameterNode => this.parameterNodeToSymbol(parameterNode));
		}

		return callableSymbol.parameterSymbols
	}

	checkCallArguments(
		callableSymbol: MethodSymbol | LambdaType | NativeFunction,
		callArguments: ASTNode[],
		scope: TypeScope,
		substitutionMap: Map<string, Type> = new Map()
	): void {
		const callScope = new TypeScope(scope);

		let parameterSymbols = this.parametersSymbolsFromCallableSymbol(callableSymbol);

		if (callArguments.length > parameterSymbols.length) {
			this.typeError("Argument count mismatch");
		}

		let actualType: Type;
		for (let i: number = 0; i < parameterSymbols.length; i++) {
			const parameterSymbol: ParameterSymbol | null = parameterSymbols[i] || null;
			const callArgument: ASTNode | null = callArguments[i] || null;

			if (parameterSymbol === null) {
				this.typeError('Malformed parameter.');
				break;
			}
			const expectedType: Type = substituteType(parameterSymbol.parameterType, substitutionMap);

			if (callArgument) {
				actualType = this.checkExpression(callArgument, callScope, expectedType);
			} else if (parameterSymbol.defaultType) {
				actualType = parameterSymbol.defaultType;
			} else {
				this.typeError(`Missing argument ${parameterSymbol.name}`, callArgument);
				return;
			}

			this.checkAssignable(expectedType, actualType, callArguments[i]);
		}
	}

	checkAssignable(expectedType: Type, actualType: Type, node: ASTNode | null = null): void {
		if (expectedType.equals(actualType)) {
			return;
		}

		if (expectedType instanceof MixedType) {
			return;
		}

		if (expectedType instanceof NullableType) {
			if (actualType === Types.NULL) {
				return;
			}
			if (expectedType.inner.accepts(actualType)) {
				return;
			}
		}

		if (expectedType.accepts(actualType)) {
			return;
		}

// @ts-expect-error TS(2339): Property 'span' does not exist on type 'never'.
		this.typeError(`Type mismatch: ${expectedType} <> ${actualType}`, node?.span);
	}

	checkBody(children: ASTNode[], scope: TypeScope): Type {
		let returnType: Type = Types.MIXED;

		for (const child of children) {
			const statementResult = this.checkStatement(child, scope);
			if (statementResult.didReturn && statementResult.returnType) {
				returnType = statementResult.returnType;
			}
		}

		return returnType;
	}

	checkReturnType(expectedType: Type, actualType: Type, node: ASTMethodNode): void {
		// void-Methode
		if (expectedType === Types.VOID) {
			if (actualType !== Types.MIXED && actualType !== Types.VOID) {
				this.typeError(`Cannot return ${actualType} from void method`, node);
			}
			return;
		}

		// kein return vorhanden
		if (actualType === Types.MIXED) {
			this.typeError(`Missing return statement (expected ${expectedType})`, node);
			return;
		}

		// typ-inkompatibel
		if (!expectedType.accepts(actualType)) {
			this.typeError(`Return type mismatch: expected ${expectedType}, got ${actualType}`, node);
		}
	}

	resolveInstanceMethode(classSymbol: ClassSymbol, methodName: string): MethodSymbol {
		/** @type {MethodSymbol|null} */
		const methodSymbol: MethodSymbol | null = this.resolveInHierarchy(
			classSymbol,
			classSymbol => classSymbol.instanceMethodSymbols.get(methodName) || null
		);

		if (!methodSymbol) {
			throw new Error(`Unknown method ${classSymbol.name}.${methodName}`);
		}

		return methodSymbol;
	}

	resolveInHierarchy(classSymbol: ClassSymbol, resolver: (classSymbol: ClassSymbol) => any): any {
		let current: ClassSymbol | null = classSymbol;

		while (current) {
			const result = resolver(current);
			if (result !== undefined && result !== null) {
				return result;
			}

			if (!current.superClass) {
				return null;
			}

			current = this.objectRegistry.types.getClassSymbol(current.superClass);
		}

		return null;
	}

	newArrayTypeOf(elementType: Type): ClassRefType {
		const className: string | null = PrimitiveClassTypes.getClassRefName(PrimitiveClassTypes.ARRAY);

		if (className === null) {
			throw new Error('Internal error: Cannot find class name for array type.');
		}

		return new ClassRefType(this.objectRegistry.types.getClassSymbol(className), [elementType]);
	}

	wrapType(type: ASTTypeNode, scope: TypeScope): Type {
		return wrapType(type, this.objectRegistry, scope);
	}

	parameterNodeToSymbol(parameterNode: ASTParameterNode, scope: TypeScope = new TypeScope()): ParameterSymbol {
		const parameterType = parameterNode.typeAnnotation
			? this.wrapType(parameterNode.typeAnnotation, scope)
			: Types.MIXED;

		let defaultType = null;
		if (parameterNode.defaultValue) {
			defaultType = this.checkExpression(parameterNode.defaultValue, new TypeScope());

			if (defaultType
				&& !parameterType.equals(Types.MIXED)
				&& !parameterType.equals(defaultType)) {
				this.typeError(
					`Default value for parameter '${parameterNode.name}' does not match type.`,
					parameterNode
				);
			}
		}

		return new ParameterSymbol(
			parameterNode.name,
			parameterType,
			defaultType,
			parameterNode
		);
	}

	registerClassSymbol(classNode: ASTClassNode): void {
		if (this.objectRegistry.types.hasSymbol(classNode.name)) {
			return;
		}

		const classScope = new TypeScope();
		const classSymbol = new ClassSymbol(classNode);

		try {
			if (classSymbol.superClass) {
				classSymbol.superClassSymbol = this.objectRegistry.types.getClassSymbol(classSymbol.superClass);
			}
		} catch (e) {
		}

		this.objectRegistry.types.addClassSymbol(classSymbol);

		classNode.typeParameters.forEach(name => {
			classSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
			classScope.defineTypeBinding(name, new TypeVariable(name));
		});

		for (const typeNode of classNode.implementsInterfaces) {
			const interfaceType: Type = this.wrapType(typeNode, classScope);
			if (interfaceType instanceof InterfaceRefType) {
				classSymbol.implementsInterfaces.push(interfaceType);
				continue;
			}
			this.typeError(`Expected interface type, got ${interfaceType}`, typeNode);
		}

		for (const memberNode of classNode.children) {
			if (memberNode.type === ASTNodeType.FIELD && memberNode instanceof ASTFieldNode) {
				const target: Map<string, FieldSymbol> = memberNode.modifiers.static
					? classSymbol.staticFieldSymbols
					: classSymbol.instanceFieldSymbols;

				const fieldSymbol = new FieldSymbol(
					memberNode,
					memberNode.fieldType
						? this.wrapType(memberNode.fieldType, classScope)
						: Types.MIXED
				);

				fieldSymbol.owner = classSymbol;

				target.set(fieldSymbol.name, fieldSymbol);
			}

			if ((memberNode.type === ASTNodeType.METHOD || memberNode.type === ASTNodeType.CONSTRUCTOR)
				&& memberNode instanceof ASTMethodNode) {

				const methodScope = new TypeScope(classScope);
				const methodSymbol = new MethodSymbol(memberNode);

				methodSymbol.owner = classSymbol;

				memberNode.typeParameters.forEach(name => {
					methodSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
					methodScope.defineTypeBinding(name, new TypeVariable(name));
				});

				methodSymbol.parameterSymbols = memberNode
					.parameters
					.map(parameterNode => this.parameterNodeToSymbol(parameterNode, methodScope));

				methodSymbol.returnType = memberNode.returnType
					? this.wrapType(memberNode.returnType, methodScope)
					: Types.VOID;

				if (memberNode.type === ASTNodeType.CONSTRUCTOR) {
					classSymbol.constructorMethodSymbol = methodSymbol;
				} else {
					const target = methodSymbol.isStatic
						? classSymbol.staticMethodSymbols
						: classSymbol.instanceMethodSymbols;

					target.set(memberNode.name, methodSymbol);
				}
			}
		}
	}

	registerInterfaceSymbol(interfaceNode: ASTInterfaceNode): void {
		if (this.objectRegistry.types.hasSymbol(interfaceNode.name)) {
			return;
		}

		const interfaceScope = new TypeScope();
		const interfaceSymbol = new InterfaceSymbol(interfaceNode);

		this.objectRegistry.types.addInterfaceSymbol(interfaceSymbol);

		interfaceNode.typeParameters.forEach(name => {
			interfaceSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
			interfaceScope.defineTypeBinding(name, new TypeVariable(name));
		});

		for (const interfaceName of interfaceNode.extendsInterfaces) {
			const interfaceSymbol: InterfaceSymbol = this.objectRegistry.types.getInteraceSymbol(interfaceName);

			interfaceSymbol.extendsInterfaces.push(interfaceSymbol);
		}

		for (const memberNode of interfaceNode.children) {
			if (memberNode.type === ASTNodeType.FIELD && memberNode instanceof ASTFieldNode) {
				const fieldSymbol = new FieldSymbol(
					memberNode,
					memberNode.fieldType
						? this.wrapType(memberNode.fieldType, interfaceScope)
						: Types.MIXED
				);

				fieldSymbol.owner = interfaceSymbol;

				interfaceSymbol.staticFieldSymbols.set(fieldSymbol.name, fieldSymbol);
			}

			if ((memberNode.type === ASTNodeType.METHOD) && memberNode instanceof ASTMethodNode) {

				const methodScope = new TypeScope(interfaceScope);
				const methodSymbol = new MethodSymbol(memberNode);

				methodSymbol.owner = interfaceSymbol;
				methodSymbol.isStatic = memberNode.modifiers.static;

				memberNode.typeParameters.forEach(name => {
					methodSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
					methodScope.defineTypeBinding(name, new TypeVariable(name));
				});

				methodSymbol.parameterSymbols = memberNode
					.parameters
					.map(parameterNode => this.parameterNodeToSymbol(parameterNode, methodScope));

				methodSymbol.returnType = memberNode.returnType
					? this.wrapType(memberNode.returnType, methodScope)
					: Types.VOID;

				interfaceSymbol.instanceMethodSymbols.set(memberNode.name, methodSymbol);
			}
		}
	}

	/**
	 * @throws {Error}
	 */
	typeError(message: string, node: ASTNode | null = null): void {
		throwTypeError(message, node?.span);
	}
}
