import {
	ASTArrayNode,
	ASTAssignmentNode,
	ASTBinaryNode,
	ASTBreakNode,
	ASTCallNode,
	ASTContinueNode,
	ASTElseNode,
	ASTExpressionNode,
	ASTFieldNode,
	ASTForeachNode,
	ASTIfNode,
	ASTIndexNode,
	ASTLambdaNode,
	ASTMatchCaseNode,
	ASTMatchNode,
	ASTMemberNode,
	ASTMethodNode,
	ASTNewNode,
	ASTNode,
	ASTNodeType,
	ASTParameterNode,
	ASTReturnNode,
	ASTTypeNode,
	ASTUnaryNode,
	ASTVariableNode,
	ASTWhileNode,
	ASTVDomExpressionNode,
	ASTVDomNode
} from './syntax/ast.ts';
import {
	buildTypeSubstitutionMap,
	ClassRefType,
	ClassSymbol,
	createParameterSymbol,
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
	Types,
	TypeScope,
	TypeVariable,
	wrapType
} from "./shared/type_objects.ts";
import {Type_autoboxing} from "./shared/type_autoboxing.ts";
import {NativeFunction, NativeFunctions} from "../library/native_functions.ts";
import {LyraError, LyraTypeError} from "./infrastructure/errors.ts"
import type {ObjectRegistry} from "./infrastructure/runtime_registry.ts";
import {GRAMMAR} from "./syntax/ast_grammar.ts";
import type {StackFrame} from "./model/runtime_model.ts";


const globalFunctionTypeRegistry = new NativeFunctions()
	.getGlobalFunctionTypes();

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
	private readonly traceStack: StackFrame[] = [];

	constructor(objectRegistry: ObjectRegistry) {
		this.objectRegistry = objectRegistry;
	}

	check(ast: ASTNode): void {
		return this.withTrace(this.createTraceFrame("function", "typecheck", ast), () => {
			this.validateInheritance();
			this.checkProgram(ast);
			this.checkInterfaceBodies();
			this.checkClassesBodies();
			this.checkClassesImplements();
		});
	}

	private createTraceFrame(
		kind: StackFrame["kind"],
		name: string,
		node: ASTNode | null = null,
		className?: string
	): StackFrame {
		return {
			kind,
			name,
			className,
			span: node?.span
				? {
					source: node.span.source.url,
					line: node.span.line,
					column: node.span.column,
					text: node.span.text(),
					lineText: node.span.lineText(),
					length: node.span.end - node.span.start
				}
				: null
		};
	}

	private captureTraceFrames(): StackFrame[] {
		return [...this.traceStack].reverse();
	}

	private enrichError(error: unknown): never {
		if (error instanceof LyraError) {
			if (error.stackFrames.length === 0) {
				error.stackFrames = this.captureTraceFrames();
			}

			throw error;
		}

		if (error instanceof Error) {
			const typeError = new LyraTypeError(error.message || String(error));
			typeError.stackFrames = this.captureTraceFrames();
			throw typeError;
		}

		const typeError = new LyraTypeError(String(error));
		typeError.stackFrames = this.captureTraceFrames();
		throw typeError;
	}

	private withTrace<T>(frame: StackFrame, action: () => T): T {
		this.traceStack.push(frame);

		try {
			return action();
		} catch (error) {
			return this.enrichError(error);
		} finally {
			this.traceStack.pop();
		}
	}

	private validateInheritance(): void {
		for (const classSymbol of this.objectRegistry.types.allClassSymbols()) {
			if (classSymbol.superClass && !this.objectRegistry.types.hasSymbol(classSymbol.superClass)) {
				this.typeError(`Unknown superclass ${classSymbol.superClass}`, classSymbol.node);
			}
		}
	}

	private checkProgram(ast: ASTNode): void {
		const scope = new TypeScope();
		for (const node of ast.children) {
			this.checkStatement(node, scope);
		}
	}

	private checkClassesBodies(): void {
		for (const objectSymbol of this.objectRegistry.types.allClassSymbols()) {
			this.withTrace(this.createTraceFrame("function", objectSymbol.name, objectSymbol.node, objectSymbol.name), () => {
				const instanceScope = new TypeScope();
				instanceScope.currentObjectSymbol = objectSymbol;

				objectSymbol.typeParameterSymbols.forEach(typeParameter => {
					instanceScope.defineTypeBinding(
						typeParameter.name,
						new TypeVariable(typeParameter.name)
					);
				});

				if (objectSymbol.constructorMethodSymbol) {
					const constructorSymbol: MethodSymbol = objectSymbol.constructorMethodSymbol;
					const constructorScope = new TypeScope(instanceScope);

					constructorScope.currentMethodSymbol = constructorSymbol;

					objectSymbol.typeParameterSymbols.forEach(typeParameterSymbol => {
						constructorScope.defineTypeBinding(
							typeParameterSymbol.name,
							new TypeVariable(typeParameterSymbol.name)
						);
					});

					for (const parameterSymbol of constructorSymbol.parameterSymbols) {
						constructorScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
					}

					this.withTrace(
						this.createTraceFrame("constructor", GRAMMAR.CONSTRUCTOR, constructorSymbol.node, objectSymbol.name),
						() => this.checkBody(constructorSymbol.body, constructorScope)
					);
				}

				this.checkFieldInitializers(objectSymbol, instanceScope);

				for (const methodSymbol of objectSymbol.instanceMethodSymbols.values()) {
					const methodScope = new TypeScope(instanceScope);

					methodSymbol.typeParameterSymbols.forEach(typeParameterSymbol => {
						methodScope.defineTypeBinding(
							typeParameterSymbol.name,
							new TypeVariable(typeParameterSymbol.name)
						);
					});

					methodScope.currentMethodSymbol = methodSymbol;

					for (const parameterSymbol of methodSymbol.parameterSymbols) {
						methodScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
					}

					const hasBody: boolean = methodSymbol.body && methodSymbol.body.length > 0;
					if (hasBody) {
						this.withTrace(this.createTraceFrame("method", methodSymbol.name, methodSymbol.node, objectSymbol.name), () => {
							const actual: Type = this.checkBody(methodSymbol.body, methodScope);
							this.checkReturnType(methodSymbol.returnType, actual, methodSymbol.node);
						});
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

					staticScope.currentMethodSymbol = methodSymbol;

					for (const parameterSymbol of methodSymbol.parameterSymbols) {
						staticScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
					}

					const hasBody: boolean = methodSymbol.body && methodSymbol.body.length > 0;
					if (hasBody) {
						this.withTrace(this.createTraceFrame("function", methodSymbol.name, methodSymbol.node, objectSymbol.name), () => {
							const actual: Type = this.checkBody(methodSymbol.body, staticScope);
							this.checkReturnType(methodSymbol.returnType, actual, methodSymbol.node);
						});
					}
				}
			});
		}
	}

	private checkInterfaceBodies(): void {
		for (const objectSymbol of this.objectRegistry.types.allInterfaceSymbols()) {
			const instanceScope = new TypeScope();
			instanceScope.currentObjectSymbol = objectSymbol;

			objectSymbol.typeParameterSymbols.forEach(typeParameter => {
				instanceScope.defineTypeBinding(
					typeParameter.name,
					new TypeVariable(typeParameter.name)
				);
			});

			for (const fieldSymbol of objectSymbol.staticFieldSymbols.values()) {
				this.checkFieldInitializer(fieldSymbol, instanceScope);
			}

			for (const methodSymbol of objectSymbol.instanceMethodSymbols.values()) {
				const methodScope = new TypeScope(instanceScope);

				methodSymbol.typeParameterSymbols.forEach(typeParameterSymbol => {
					methodScope.defineTypeBinding(
						typeParameterSymbol.name,
						new TypeVariable(typeParameterSymbol.name)
					);
				});

				methodScope.currentMethodSymbol = methodSymbol;

				for (const parameterSymbol of methodSymbol.parameterSymbols) {
					methodScope.defineType(parameterSymbol.name, parameterSymbol.parameterType);
				}

				const hasBody: boolean = methodSymbol.body && methodSymbol.body.length > 0;
				if (hasBody) {
					const actual: Type = this.checkBody(methodSymbol.body, methodScope);
					this.checkReturnType(methodSymbol.returnType, actual, methodSymbol.node);
				}
			}
		}
	}

	private checkClassesImplements(): void {
		for (const classSymbol of this.objectRegistry.types.allClassSymbols()) {
			for (const interfaceRefType of classSymbol.implementsInterfaces) {
				this.checkImplementsInterface(classSymbol, interfaceRefType);
			}
		}
	}

	private checkImplementsInterface(classSymbol: ClassSymbol, interfaceRefType: InterfaceRefType): void {
		const interfaceSymbol: InterfaceSymbol = interfaceRefType.interfaceSymbol;

		const substitutionMap: Map<string, Type> = buildTypeSubstitutionMap(
			interfaceSymbol.typeParameterSymbols,
			interfaceRefType.typeArguments
		);

		for (const interfaceMethodSymbol of this.collectInterfaceMethods(interfaceSymbol)) {
			const classMethodSymbol: MethodSymbol = this.resolveInstanceMethode(
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

	private checkMethodCompatibility(
		classMethodSymbol: MethodSymbol,
		interfaceMethodSymbol: MethodSymbol,
		substitutionMap: Map<string, Type>
	): void {
		if (classMethodSymbol.parameterSymbols.length !== interfaceMethodSymbol.parameterSymbols.length) {
			this.typeError(`Method ${classMethodSymbol.name} has wrong parameter count`);
		}

		for (let i = 0; i < interfaceMethodSymbol.parameterSymbols.length; i++) {
			const parameterSymbol: ParameterSymbol | null = interfaceMethodSymbol.parameterSymbols[i] || null;
			const classParameterSymbol: ParameterSymbol | null = classMethodSymbol.parameterSymbols[i] || null;

			if (!parameterSymbol || !classParameterSymbol) {
				this.typeError(`Method ${classMethodSymbol.name} has too many parameters`);
				break;
			}

			const expectedType: Type = substituteType(parameterSymbol.parameterType, substitutionMap);

			const actualType: Type = classParameterSymbol.parameterType;

			if (!expectedType.accepts(actualType)) {
				this.typeError(`Parameter ${i + 1} of ${classMethodSymbol.name} incompatible with interface`);
			}
		}

		const expectedReturn: Type = substituteType(interfaceMethodSymbol.returnType, substitutionMap);

		if (!expectedReturn.accepts(classMethodSymbol.returnType)) {
			this.typeError(`Return type of ${classMethodSymbol.name} incompatible with interface`);
		}
	}

	private checkStatement(node: ASTNode, scope: TypeScope): StatementResult {
		switch (node.type) {
			case ASTNodeType.RETURN:
				if (node instanceof ASTReturnNode) {
					return StatementResult.withReturn(
						node.argument
						? this.checkExpression(node.argument, scope)
						: Types.VOID
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
					return this.checkForeach(node, scope);
				}
				break;
			case ASTNodeType.WHILE:
				if (node instanceof ASTWhileNode) {
					return this.checkWhile(node, scope);
				}
				break;
			case ASTNodeType.BREAK:
				if (node instanceof ASTBreakNode) {
					return this.checkBreak(node, scope);
				}
				break;
			case ASTNodeType.CONTINUE:
				if (node instanceof ASTContinueNode) {
					return this.checkContinue(node, scope);
				}
				break;
			case ASTNodeType.IF:
				if (node instanceof ASTIfNode) {
					return this.checkIf(node, scope);
				}
				break;
			case ASTNodeType.MATCH:
				if (node instanceof ASTMatchNode) {
					return this.checkMatch(node, scope);
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

	private checkVariable(node: ASTVariableNode, scope: TypeScope): void {
		const declaredType: Type | null = node.typeAnnotation
		                                  ? this.wrapType(node.typeAnnotation, scope)
		                                  : null;

		if (node.init === null) {
			if (declaredType === null) {
				this.typeError(`Variable ${node.name} requires either a type annotation or an initializer`, node);
			}

			scope.defineType(node.name, declaredType);
			return;
		}

		const actualType: Type = this.checkExpression(node.init, scope, declaredType);

		if (declaredType && !declaredType.accepts(actualType)) {
			this.typeError(`Type mismatch: ${declaredType} <> ${actualType}`, node);
		}

		scope.defineType(node.name, declaredType ?? actualType);
	}

	private checkForeach(node: ASTForeachNode, scope: TypeScope): StatementResult {
		let iterableType: Type = this.checkExpression(node.iterable, scope);

		iterableType = Type_autoboxing.autoboxIfNeeded(iterableType, this.objectRegistry);

		if (iterableType instanceof ClassRefType && iterableType.classSymbol.name === 'Array') {
			if (iterableType.typeArguments.length !== 1) {
				this.typeError('Array in foreach musst have exactly one type argument.', node.iterable);
			}

			const elementType: Type | null = iterableType.typeArguments[0] || null;

			if (elementType === null) {
				this.typeError('Array in foreach must have exactly one type argument.', node.iterable);
			}

			const loopScope = new TypeScope(scope);
			loopScope.loopDepth++;
			loopScope.defineType(node.iterator, elementType);

			return this.checkBodyResult(node.body, loopScope);

		}

		this.typeError(`foreach expects Array<T>, got ${iterableType.toString()}`, node.iterable);
	}

	private checkWhile(node: ASTWhileNode, scope: TypeScope): StatementResult {
		const conditionType: Type = this.checkExpression(node.condition, scope);
		this.checkAssignable(Types.BOOLEAN, conditionType, node.condition);

		const loopScope = new TypeScope(scope);
		loopScope.loopDepth++;
		this.checkBodyResult(node.body, loopScope);

		return StatementResult.noReturn();
	}

	private checkBreak(node: ASTBreakNode, scope: TypeScope): StatementResult {
		if (scope.loopDepth <= 0) {
			this.typeError('break used outside of loop', node);
		}

		return StatementResult.noReturn();
	}

	private checkContinue(node: ASTContinueNode, scope: TypeScope): StatementResult {
		if (scope.loopDepth <= 0) {
			this.typeError('continue used outside of loop', node);
		}

		return StatementResult.noReturn();
	}

	private checkIf(node: ASTIfNode, scope: TypeScope): StatementResult {
		const conditionType: Type = this.checkExpression(node.condition, scope);
		this.checkAssignable(Types.BOOLEAN, conditionType, node.condition);

		const thenResult = this.checkBodyResult(node.then.children, new TypeScope(scope));
		const elseResult = node.else
		                   ? this.checkElseBranch(node.else, scope)
		                   : StatementResult.noReturn();

		return this.mergeBranchResults(thenResult, elseResult, node);
	}

	private checkElseBranch(node: ASTIfNode | ASTElseNode, scope: TypeScope): StatementResult {
		if (node instanceof ASTIfNode) {
			return this.checkIf(node, scope);
		}

		return this.checkBodyResult(node.children, new TypeScope(scope));
	}

	private checkMatch(node: ASTMatchNode, scope: TypeScope): StatementResult {
		const expressionType: Type = this.checkExpression(node.expression, scope);
		const caseResults: StatementResult[] = [];

		for (const matchCase of node.cases) {
			caseResults.push(this.checkMatchCase(matchCase, expressionType, scope));
		}

		if (node.defaultCase) {
			caseResults.push(this.checkMatchCase(node.defaultCase, expressionType, scope));
		}

		if (caseResults.length === 0) {
			return StatementResult.noReturn();
		}

		let combinedResult = caseResults[0] || StatementResult.noReturn();
		for (let i = 1; i < caseResults.length; i++) {
			const currentResult = caseResults[i];
			if (currentResult) {
				combinedResult = this.mergeBranchResults(combinedResult, currentResult, node);
			}
		}

		if (!node.defaultCase) {
			return StatementResult.noReturn();
		}

		return combinedResult;
	}

	private checkMatchCase(node: ASTMatchCaseNode, expressionType: Type, scope: TypeScope): StatementResult {
		if (node.test) {
			const testType: Type = this.checkExpression(node.test, scope, expressionType);
			this.checkAssignable(expressionType, testType, node.test);
		}

		return this.checkBodyResult(node.children, new TypeScope(scope));
	}

	private checkExpression(expr: ASTNode | null, scope: TypeScope, expectedType: Type | null = null): Type {
		if (expr === null) {
			this.typeError('Expression expected, got null.', expr);
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

			case ASTNodeType.ASSIGNMENT: {
				if (expr instanceof ASTAssignmentNode) {
					return this.checkAssignment(expr, scope);
				}
				break;
			}

			case ASTNodeType.VDOM: {
				if (expr instanceof ASTVDomNode) {
					return this.checkVDomNode(expr, scope);
				}
				break;
			}

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
				return this.checkThisExpression(expr, scope);
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
					return this.checkLambdaExpression(
						expr,
						scope,
						expectedType instanceof LambdaType
						? expectedType
						: null
					);
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

	private checkBinaryExpression(expr: ASTBinaryNode, scope: TypeScope): Type {
		const left: Type = this.checkExpression(expr.left, scope);
		const right: Type = this.checkExpression(expr.right, scope);
		const op: string = expr.operator;
		if (left instanceof ClassRefType) {
			const methodSymbol: MethodSymbol = this.resolveInstanceMethode(
				left.classSymbol,
				op
			);
			const substitutionMap: Map<string, Type> = buildTypeSubstitutionMap(
				methodSymbol.typeParameterSymbols,
				left.typeArguments
			);

			this.checkCallArguments(methodSymbol, [expr.right], scope, substitutionMap);

			return substituteType(methodSymbol.returnType, substitutionMap);
		}

		if (left instanceof ClassRefType && right instanceof ClassRefType) {
			if (left.accepts(right)) {
				return left;
			}
		}

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
	}


	private checkAssignment(node: ASTAssignmentNode, scope: TypeScope): Type {
		const leftType: Type = this.checkExpression(node.left, scope);
		const rightType: Type = this.checkExpression(node.right, scope);

		this.checkAssignable(leftType, rightType, node.right);

		this.checkReadonly(node.left, scope);

		return leftType;
	}

	private checkReadonly(node: ASTNode, scope: TypeScope): void {
		if (node instanceof ASTMemberNode) {
			const objectType: Type = this.checkExpression(node.object, scope);
			if (!(objectType instanceof ClassRefType)) {
				this.typeError(`Cannot assign to non-object`, node);
			}

			const classSymbol: ClassSymbol = objectType.classSymbol;
			const staticFieldSymbol: FieldSymbol | null = classSymbol.resolveStaticFieldSymbol(node.property);
			if (staticFieldSymbol) {
				return;
			}

			const instanceFieldSymbol: FieldSymbol | null = classSymbol.resolveInstanceFieldSymbol(node.property);
			if (!instanceFieldSymbol) {
				this.typeError(`Unknown member ${node.property}`, node);
			}

			if (!instanceFieldSymbol.isReadonly) {
				return;
			}

			const inConstructor: boolean = scope.currentMethodSymbol?.name === GRAMMAR.CONSTRUCTOR;
			let isThis: boolean = false;
			if (scope.currentObjectSymbol instanceof ClassSymbol) {
				isThis = scope.currentObjectSymbol === objectType.classSymbol;
			}

			if (!(inConstructor && isThis)) {
				this.typeError(`Cannot assign to readonly property '${instanceFieldSymbol.name}'`, node);
			}
		}
	}

	private checkFieldAccess(
		node: ASTMemberNode,
		classSymbol: ClassSymbol,
		fieldSymbol: FieldSymbol,
		scope: TypeScope
	): void {
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

	private checkInstanceMethodAccess(
		node: ASTMemberNode,
		classSymbol: ClassSymbol,
		methodSymbol: MethodSymbol,
		scope: TypeScope
	): void {
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

	private checkStaticMethodAccess(classSymbol: ClassSymbol, methodSymbol: MethodSymbol, scope: TypeScope): void {
		if (!methodSymbol.isStatic) {
			this.typeError(`Cannot call instance method ${classSymbol.name}.${methodSymbol.name} as static method`);
			return;
		}

		if (methodSymbol.isPublic) {
			return;
		}

		if (!scope.currentObjectSymbol) {
			this.typeError(
				`Cannot access private method ${methodSymbol.name} of ${classSymbol.name}`,
				methodSymbol.node
			);
		}

		if (scope.currentObjectSymbol !== methodSymbol.owner) {
			if (scope.currentObjectSymbol instanceof ClassSymbol
			    && scope.currentObjectSymbol.superClassSymbol !== methodSymbol.owner) {
				this.typeError(
					`Cannot access private method ${methodSymbol.name} of ${classSymbol.name}`,
					methodSymbol.node
				);

			}
		}
	}

	private checkMemberExpression(node: ASTMemberNode, scope: TypeScope): Type {
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
	}

	private checkThisExpression(node: ASTNode, scope: TypeScope): ClassRefType {
		if (scope.currentObjectSymbol instanceof ClassSymbol) {
			return new ClassRefType(scope.currentObjectSymbol);
		}
		this.typeError('this outside of class', node);
	}

	private checkIdentifierExpression(node: ASTNode, scope: TypeScope): Type {
		if (scope.hasType(node.name)) {
			return scope.getType(node.name);
		}
		if (this.objectRegistry.types.hasSymbol(node.name)) {
			return new ClassRefType(this.objectRegistry.types.getClassSymbol(node.name));
		}
		this.typeError(`Undefined identifier ${node.name}`, node);
	}

	private checkNewExpression(node: ASTNewNode, scope: TypeScope, expectedType: Type | null = null): ClassRefType {
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

	private checkArrayExpression(node: ASTArrayNode, scope: TypeScope, expectedType: Type | null = null): ClassRefType {

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
			this.typeError('Array expression must have at least one element', node);
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

	private checkUnaryExpression(node: ASTUnaryNode, scope: TypeScope): Type {
		const operand: Type = this.checkExpression(node.argument, scope);
		const op: string = node.operator;

		if (operand instanceof ClassRefType) {
			const methodName = op === GRAMMAR.PLUS
			                   ? GRAMMAR.UNARY_PLUS
			                   : op === GRAMMAR.MINUS
			                     ? GRAMMAR.UNARY_MINUS
			                     : op;
			const methodSymbol: MethodSymbol = this.resolveInstanceMethode(
				operand.classSymbol,
				methodName
			);
			const substitutionMap: Map<string, Type> = buildTypeSubstitutionMap(
				methodSymbol.typeParameterSymbols,
				operand.typeArguments
			);

			this.checkCallArguments(methodSymbol, [], scope, substitutionMap);

			return substituteType(methodSymbol.returnType, substitutionMap);
		}

		switch (op) {
			case GRAMMAR.EXCLAMATION_MARK: {
				if (operand.equals(Types.BOOLEAN)) {
					return Types.BOOLEAN;
				}
				this.typeError(`Unary '!' requires boolean, got ${operand.name}`, node);
			}
			case GRAMMAR.MINUS: {
				if (operand.equals(Types.NUMBER)) {
					return Types.NUMBER;
				}
				this.typeError(`Unary '-' requires number, got ${operand.name}`, node);
			}
			case GRAMMAR.PLUS: {
				if (operand.equals(Types.NUMBER)) {
					return Types.NUMBER;
				}
				this.typeError(`Unary '+' requires number, got ${operand.name}`, node);
			}
		}
		this.typeError(`Invalid unary operator ${op}`, node);
	}

	private checkLambdaExpression(
		node: ASTLambdaNode,
		scope: TypeScope,
		expectedLambdaType: LambdaType | null = null
	): LambdaType {
		return this.withTrace(this.createTraceFrame("lambda", "<lambda>", node, scope.currentObjectSymbol?.name), () => {
			const lambdaScope = new TypeScope(scope);
			const parameters: ParameterSymbol[] = node.parameters.map((parameterNode: ASTParameterNode): ParameterSymbol => {
				const parameterSymbol: ParameterSymbol = createParameterSymbol(
					parameterNode,
					this.objectRegistry
				);

				this.checkParameterDefaultType(parameterSymbol);

				lambdaScope.defineType(parameterNode.name, parameterSymbol.parameterType);

				return parameterSymbol;
			});

			const declaredReturnType: Type = this.wrapType(node.returnType, lambdaScope);
			const targetReturnType: Type = declaredReturnType instanceof MixedType && expectedLambdaType
			                               ? expectedLambdaType.returnType
			                               : declaredReturnType;

			const lambdaExpressionBody = node.children.length === 1 && this.isExpressionNode(node.children[0] || null);

			if (lambdaExpressionBody) {
				const bodyNode = node.children[0] || null;
				if (bodyNode === null) {
					this.typeError('Lambda expression must have a return type', node);
				}

				const actualReturnType = this.checkExpression(bodyNode, lambdaScope, targetReturnType);
				const lambdaReturnType = declaredReturnType instanceof MixedType
				                         ? actualReturnType
				                         : declaredReturnType;

				this.checkAssignable(targetReturnType, actualReturnType, bodyNode);

				return new LambdaType(parameters, lambdaReturnType);
			}

			if (node.children.length > 0) {
				const bodyReturnType = this.checkBody(node.children, lambdaScope);
				const lambdaReturnType = declaredReturnType instanceof MixedType
				                         ? bodyReturnType
				                         : declaredReturnType;

				this.checkReturnType(targetReturnType, bodyReturnType, node);

				return new LambdaType(parameters, lambdaReturnType);
			}

			this.typeError('Lambda expression must have a return type', node);
		});
	}

	private checkCallExpression(node: ASTCallNode, scope: TypeScope): Type {
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

		if (callee instanceof ASTLambdaNode) {
			return this.checkLambdaCall(this.checkLambdaExpression(callee, scope), node.arguments, scope);
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

	private checkSuperConstructorCall(node: ASTCallNode, scope: TypeScope): Type {
		const currentClass = scope.currentObjectSymbol;

		if (!(currentClass instanceof ClassSymbol)) {
			this.typeError('super() used outside of class', node);
		}

		if (!currentClass.superClass) {
			this.typeError('super() used outside of class hierarchy', node);
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

	private checkCallOnNullObjectType(objectType: Type, node: ASTNode): void {
		if (objectType.equals(Types.NULL)) {
			this.typeError(`Cannot call method on null`, node);
		}
		if (objectType instanceof NullableType) {
			this.typeError(`Cannot call method on nullable type ${objectType}`, node);
		}
	}

	private checkInstanceCall(callee: ASTMemberNode, callArguments: ASTNode[], scope: TypeScope): Type {
		let objectType: Type = this.checkExpression(callee.object, scope);

		objectType = Type_autoboxing.autoboxIfNeeded(objectType, this.objectRegistry);

		this.checkCallOnNullObjectType(objectType, callee);

		if (objectType instanceof ClassRefType) {
			const methodSymbol: MethodSymbol = this.resolveInstanceMethode(
				objectType.classSymbol,
				callee.property
			);

			if (methodSymbol.isStatic) {
				this.typeError(
					`Cannot call static method ${callee.property} on instance of ${callee.object.name}`,
					callee
				);
			}

			this.checkInstanceMethodAccess(callee, objectType.classSymbol, methodSymbol, scope);

			const owner: ClassSymbol | InterfaceSymbol | null = methodSymbol.owner;

			if (owner === null) {
				this.typeError(`Cannot call method on non-object`, callee);
			}

			const substitutionMap: Map<string, Type> = buildTypeSubstitutionMap(
				owner.typeParameterSymbols,
				objectType.typeArguments
			);

			this.checkCallArguments(methodSymbol, callArguments, scope, substitutionMap);

			return substituteType(methodSymbol.returnType, substitutionMap);
		}

		this.typeError(`Cannot call method on non-object`, callee);
	}

	private checkStaticCall(className: string, methodName: string, callArguments: ASTNode[], scope: TypeScope): Type {
		const classSymbol: ClassSymbol = this.objectRegistry.types.getClassSymbol(className);

		const methodSymbol: MethodSymbol | null = classSymbol.staticMethodSymbols.get(methodName) || null;
		if (!methodSymbol) {
			this.typeError(`Unknown static method ${className}.${methodName}`);
		}

		this.checkStaticMethodAccess(classSymbol, methodSymbol, scope)

		this.checkCallArguments(methodSymbol, callArguments, scope);

		return methodSymbol.returnType;
	}

	private checkLambdaCall(lambda: LambdaType, callArguments: ASTNode[], scope: TypeScope): Type {

		this.checkCallArguments(lambda, callArguments, scope);

		return lambda.returnType;
	}

	private checkFunctionCall(name: string, callArguments: ASTNode[], scope: TypeScope): Type {
		if (!globalFunctionTypeRegistry.has(name)) {
			this.typeError(`Unknown function ${name}`);
		}

		const nativeFunction: NativeFunction = globalFunctionTypeRegistry.get(name);

		this.checkCallArguments(nativeFunction, callArguments, scope);

		return nativeFunction.returnType
		       ? this.wrapType(nativeFunction.returnType, scope)
		       : Types.VOID;
	}

	private parametersSymbolsFromCallableSymbol(callableSymbol: MethodSymbol | LambdaType | NativeFunction): ParameterSymbol[] {
		if (callableSymbol instanceof NativeFunction) {
			return callableSymbol
				.parameterNodes
				.map(parameterNode => {
					const parameterSymbol = createParameterSymbol(
						parameterNode,
						this.objectRegistry
					);

					this.checkParameterDefaultType(parameterSymbol);

					return parameterSymbol;
				});
		}

		return callableSymbol.parameterSymbols
	}

	private checkCallArguments(
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

			if (parameterSymbol) {
				const expectedType: Type = substituteType(parameterSymbol.parameterType, substitutionMap);

				if (callArgument) {
					actualType = this.checkExpression(callArgument, callScope, expectedType);
				} else if (parameterSymbol.defaultType) {
					actualType = this.checkParameterDefaultType(parameterSymbol);
				} else {
					this.typeError(`Missing argument ${parameterSymbol.name}`, callArgument);
				}

				this.checkAssignable(expectedType, actualType, callArguments[i]);
			}
		}
	}

	private checkAssignable(expectedType: Type, actualType: Type, node: ASTNode | null = null): void {
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

		this.typeError(`Type mismatch: ${expectedType} <> ${actualType}`, node);
	}

	private checkBody(children: ASTNode[], scope: TypeScope): Type {
		return this.checkBodyResult(children, scope).returnType ?? Types.MIXED;
	}

	private checkBodyResult(children: ASTNode[], scope: TypeScope): StatementResult {
		let returnType: Type = Types.MIXED;
		let didReturn = false;

		for (const child of children) {
			const statementResult = this.checkStatement(child, scope);
			if (!statementResult.didReturn || !statementResult.returnType) {
				continue;
			}

			if (didReturn) {
				returnType = this.mergeReturnTypes(returnType, statementResult.returnType, child);
				continue;
			}

			didReturn = true;
			returnType = statementResult.returnType;
		}

		return didReturn
		       ? StatementResult.withReturn(returnType)
		       : StatementResult.noReturn();
	}

	private checkReturnType(expectedType: Type, actualType: Type, node: ASTNode): void {
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
		}

		// typ-inkompatibel
		if (!expectedType.accepts(actualType)) {
			this.typeError(`Return type mismatch: expected ${expectedType}, got ${actualType}`, node);
		}
	}

	private checkVDomNode(node: ASTVDomNode, scope: TypeScope): Type {
		for (const value of node.props.values()) {
			this.checkExpression(value, scope);
		}

		for (const child of node.children) {
			if (child instanceof ASTVDomNode) {
				this.checkVDomNode(child, scope);
				continue;
			}

			if (child instanceof ASTVDomExpressionNode) {
				this.checkExpression(child.expr, scope);
			}
		}

		try {
			const classSymbol: ClassSymbol = this.objectRegistry.types.getClassSymbol(node.tag);

			const methodSymbol: MethodSymbol = this.resolveInstanceMethode(classSymbol, 'render');

			if (!methodSymbol) {
				this.typeError(`Component '${node.tag}' has no render() method`, node);
			}

			this.checkAssignable(methodSymbol.returnType, Types.VNODE, node);

			return Types.VNODE;
		} catch (e) {
		}

		return Types.VNODE;
	}

	private resolveInstanceMethode(classSymbol: ClassSymbol, methodName: string): MethodSymbol {
		/** @type {MethodSymbol|null} */
		const methodSymbol: MethodSymbol | null = this.resolveInHierarchy(
			classSymbol,
			classSymbol => classSymbol.instanceMethodSymbols.get(methodName) || null
		);

		if (!methodSymbol) {
			this.typeError(`Unknown method ${classSymbol.name}.${methodName}`, classSymbol.node);
		}

		return methodSymbol;
	}

	private checkFieldInitializers(classSymbol: ClassSymbol, scope: TypeScope): void {
		for (const fieldSymbol of classSymbol.instanceFieldSymbols.values()) {
			this.checkFieldInitializer(fieldSymbol, scope);
		}

		for (const fieldSymbol of classSymbol.staticFieldSymbols.values()) {
			this.checkFieldInitializer(fieldSymbol, scope);
		}
	}

	private checkFieldInitializer(fieldSymbol: FieldSymbol, scope: TypeScope): void {
		const initializer = fieldSymbol.node.init;
		if (!initializer) {
			return;
		}

		this.withTrace(this.createTraceFrame("function", fieldSymbol.name, fieldSymbol.node, scope.currentObjectSymbol?.name), () => {
			const fieldScope = new TypeScope(scope);
			const actualType = this.checkExpression(initializer, fieldScope, fieldSymbol.fieldType);
			this.checkAssignable(fieldSymbol.fieldType, actualType, initializer);
		});
	}

	private mergeBranchResults(left: StatementResult, right: StatementResult, node: ASTNode): StatementResult {
		if (!left.didReturn || !right.didReturn || !left.returnType || !right.returnType) {
			return StatementResult.noReturn();
		}

		return StatementResult.withReturn(
			this.mergeReturnTypes(left.returnType, right.returnType, node)
		);
	}

	private mergeReturnTypes(left: Type, right: Type, node: ASTNode): Type {
		if (left.accepts(right)) {
			return left;
		}

		if (right.accepts(left)) {
			return right;
		}

		this.typeError(`Incompatible return types: ${left} <> ${right}`, node);
	}

	private collectInterfaceMethods(interfaceSymbol: InterfaceSymbol, visited: Set<string> = new Set()): MethodSymbol[] {
		if (visited.has(interfaceSymbol.name)) {
			return [];
		}

		visited.add(interfaceSymbol.name);

		const methods: MethodSymbol[] = [];

		for (const parentInterface of interfaceSymbol.extendsInterfaces) {
			methods.push(...this.collectInterfaceMethods(parentInterface, visited));
		}

		for (const methodSymbol of interfaceSymbol.instanceMethodSymbols.values()) {
			methods.push(methodSymbol);
		}

		return methods;
	}

	private isExpressionNode(node: ASTNode | null): boolean {
		if (node === null) {
			return false;
		}

		if (node.isExpression) {
			return true;
		}

		return [
			ASTNodeType.NUMBER,
			ASTNodeType.STRING,
			ASTNodeType.BOOLEAN,
			ASTNodeType.NULL,
			ASTNodeType.IDENTIFIER,
			ASTNodeType.THIS
		].includes(node.type);
	}

	private resolveInHierarchy(classSymbol: ClassSymbol, resolver: (classSymbol: ClassSymbol) => any): any {
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

	private newArrayTypeOf(elementType: Type): ClassRefType {
		const className: string | null = PrimitiveClassTypes.getClassRefName(PrimitiveClassTypes.ARRAY);

		if (className === null) {
			this.typeError('Internal error: Cannot find class name for array type.');
		}

		return new ClassRefType(this.objectRegistry.types.getClassSymbol(className), [elementType]);
	}

	private checkParameterDefaultType(parameterSymbol: ParameterSymbol): Type {
		if (!parameterSymbol.defaultType) {
			return Types.MIXED;
		}

		const defaultType: Type = this.checkExpression(parameterSymbol.defaultType, new TypeScope());

		if (defaultType
		    && !defaultType.equals(Types.MIXED)
		    && !parameterSymbol.parameterType.equals(defaultType)) {
			this.typeError(
				`Default value for parameter '${parameterSymbol.name}' does not match type.`,
				parameterSymbol.node
			);
		}

		return defaultType;
	}

	private wrapType(type: ASTTypeNode, scope: TypeScope): Type {
		return wrapType(type, this.objectRegistry, scope);
	}


	private typeError(message: string, node: ASTNode | null = null): never {
		const error = new LyraTypeError(message, node?.span);
		error.stackFrames = this.captureTraceFrames();
		throw error;
	}
}




