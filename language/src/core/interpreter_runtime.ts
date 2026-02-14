import {ClassDefinition, ClassMethodDefinition, Environment, Instance, ReturnValue} from "./interpreter_objects";
import {ObjectRegistry} from "./interpreter_registry";
import {
	ASTAnnotationNode,
	ASTArrayNode,
	ASTAssignmentNode,
	ASTBinaryNode,
	ASTCallNode,
	ASTClassNode,
	ASTExpressionNode,
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
	ASTVariableNode
} from "./ast";
import {GRAMMAR, TYPE_ENUM} from "./grammar.ts";
import {NativeClasses} from "../library/native_classes";
import {NativeFunction, NativeFunctions} from "../library/native_functions";
import {castValue, fromLyraValue, LyraNativeObject, returnValue, wrapNativeInstance} from "./interpreter_conversion";
import {throwRuntimeError} from "./errors";
import {AutoboxedTypes} from "./autoboxing.ts";
import {LyraArray} from "../library/classes/array";
import type {Span} from "./parser_source.ts";

const nativeClasses = new NativeClasses();
const nativeFunctions = new NativeFunctions();
const globalFunctions = nativeFunctions.getGlobalFunctions();
const globalFunctionTypeRegistry = nativeFunctions.getGlobalFunctionTypeRegistry();

export class AbstractFunctionCall {
	node: ASTNode;
	objectRegistry: ObjectRegistry;
	functionEnv: Environment;

	constructor(node: ASTNode, objectRegistry: ObjectRegistry, functionEnv: Environment) {
		this.node = node;
		this.objectRegistry = objectRegistry;
		this.functionEnv = functionEnv;
	}

	getASTCallNode(): ASTCallNode | null {
		if (this.node instanceof ASTCallNode) {
			return this.node;
		}
		throwRuntimeError(`Invalid native function call ${this.node.type}.`, this.node.span);
		return null// never reached
	}

	/**
	 * @return {ASTLambdaNode}
	 */
	getASTLambdaNode(): ASTLambdaNode | null {
		if (this.node instanceof ASTLambdaNode) {
			return this.node;
		}
		throwRuntimeError(`Invalid lambda call ${this.node.type}.`, this.node.span);
		return null; // never reached
	}
}

export class LambdaFunctionCall extends AbstractFunctionCall {
	evalCall(thisValue: Instance | null, ...args: any[]): any {
		const node = this.getASTLambdaNode();
		if (node === null) {
			throwRuntimeError("Invalid function call.");
		}

		const closureEnv = new Environment(this.functionEnv);

		for (let i = 0; i < node.parameters.length; i++) {
			const parameter: ASTParameterNode | null = node.parameters[i] || null;
			if (!parameter) {
				continue;
			}
			closureEnv.define(parameter.name, args[i]);
		}

		return evalBlock(node.children, this.objectRegistry, closureEnv, thisValue, node.returnType);
	}
}

export class NativeFunctionCall extends AbstractFunctionCall {
	evalCall(thisValue: Instance | null, ...args: any[]): any {
		const callNode: ASTCallNode | null = this.getASTCallNode();
		if (callNode === null) {
			throwRuntimeError('Invalid function call.');
		}

		let result: any = this.resolveCall(thisValue)[callNode.callee.name](...args);
		if (result instanceof LyraNativeObject) {
			result = wrapNativeInstance(result, this.objectRegistry);
		} else {
			result = returnValue(result);
		}

		return evalBlock(
			[result],
			this.objectRegistry,
			this.functionEnv,
			thisValue,
			this.lookupFunctionType(callNode.callee.name).returnType
		);
	}

	lookupFunctionType(name: string): NativeFunction {
		return globalFunctionTypeRegistry.get(name);
	}

	resolveCall(thisValue: Instance | null): any {
		const node: ASTCallNode | null = this.getASTCallNode();
		if (node === null) {
			throwRuntimeError("Invalid function call.");
		}

		return evalExpression(node.callee, this.objectRegistry, this.functionEnv, thisValue);
	}
}

export function registerNativeClasses(objectRegistry: ObjectRegistry, environment: Environment): void {
	for (const nativeClass of nativeClasses.classes.values()) {
		if (nativeClass.isAutoloadAble) {
			const classDef = nativeClass.getClassDefinition();
			if (classDef === null) {
				throwRuntimeError("Class definition is null.");
			}
			objectRegistry.classes.set(nativeClass.name, classDef);
			environment.define(nativeClass.name, classDef);
		}
	}
}

export function registerNativeFunctions(environment: Environment): void {
	for (const name in globalFunctions) {
		const globalFunction: any = globalFunctions[name];
		if (!globalFunction) {
			throwRuntimeError("Global function is null.");
		}
		environment.define(name, globalFunctions);
	}
}

export function evalNode(node: ASTNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any {
	if (node.isExpression) {
		return new ReturnValue(evalExpression(node, objectRegistry, environment, thisValue));
	}

	switch (node.type) {
		case ASTNodeType.PROGRAMM: {
			for (const child of node.children) {
				evalNode(child, objectRegistry, environment, thisValue);
			}
			return null;
		}
		case ASTNodeType.IMPORT:
		case ASTNodeType.INTERFACE: {
			return null;
		}
		case ASTNodeType.CLASS: {
			if (node instanceof ASTClassNode) {
				return evalClass(node, objectRegistry, environment);
			}
			throwRuntimeError(`Invalid class node ${node.type}.`, node.span);
			break;
		}
		case ASTNodeType.VARIABLE: {
			if (node instanceof ASTVariableNode) {
				const value = node.init
					? evalExpression(node.init, objectRegistry, environment, thisValue)
					: null;
				environment.define(node.name, value);
				return null;
			}
			throwRuntimeError(`Invalid variable node ${node.type}.`, node.span);
			break;
		}
		case ASTNodeType.IF: {
			if (node instanceof ASTIfNode) {
				return evalIf(node, objectRegistry, environment, thisValue);
			}
			throwRuntimeError(`Invalid if node ${node.type}.`, node.span);
			break;
		}
		case ASTNodeType.MATCH: {
			if (node instanceof ASTMatchNode) {
				return evalMatch(node, objectRegistry, environment, thisValue);
			}
			throwRuntimeError(`Invalid match node ${node.type}.`, node.span);
			break;
		}
		case ASTNodeType.FOREACH: {
			if (node instanceof ASTForeachNode) {
				return evalForeach(node, objectRegistry, environment, thisValue);
			}
			throwRuntimeError(`Invalid foreach node ${node.type}.`, node.span);
			break;
		}
		case ASTNodeType.EXPRESSION: {
			if (node instanceof ASTExpressionNode) {
				return evalExpression(node.expr, objectRegistry, environment, thisValue);
			}
			throwRuntimeError(`Invalid expression node ${node.type}.`, node.span);
			break;
		}
		case ASTNodeType.RETURN: {
			if (node instanceof ASTReturnNode) {
				const value = node.argument
					? evalExpression(node.argument, objectRegistry, environment, thisValue)
					: null;
				return new ReturnValue(value);
			}
			throwRuntimeError(`Invalid return node ${node.type}.`, node.span);
			break;
		}
		default: {
			throwRuntimeError(`Unhandled node ${node.type}.`, node.span);
		}
	}
}

export function createInstanceFromNode(node: ASTClassNode): Instance {
	return new Instance(ClassDefinition.constructFromAST(node));
}

export function registerInstance(node: ASTClassNode, objectRegistry: ObjectRegistry): Instance {
	let classDef: ClassDefinition;

	if (objectRegistry.classes.has(node.name)) {
		classDef = objectRegistry.classes.get(node.name);
	} else {
		classDef = ClassDefinition.constructFromAST(node);

		objectRegistry.classes.set(node.name, classDef);
	}

	return new Instance(classDef);
}

export function evalNativeInstance(expr: ASTNewNode, classDef: ClassDefinition, objectRegistry: ObjectRegistry, environment: Environment): Instance {
	const instance: Instance = new Instance(classDef);
	const constructor: ClassMethodDefinition | null = classDef.constructorMethod;
	const constructorEnv: Environment = new Environment(environment);

	const constructorArgs: any[] = evalMethodArguments(
		expr,
		constructor
			? constructor.parameters
			: [],
		objectRegistry,
		environment,
		instance
	);

	constructorEnv.define(GRAMMAR.THIS, instance);

	if (classDef.nativeInstance === null) {
		throwRuntimeError('Class has no native instance');
	}

	const nativeInstance = new classDef.nativeInstance(...constructorArgs.map(fromLyraValue));
	if (nativeInstance instanceof LyraNativeObject) {
		instance.__nativeInstance = nativeInstance;
	}

	return instance;
}

export function evalInstance(expr: ASTNewNode, classDef: ClassDefinition, objectRegistry: ObjectRegistry, environment: Environment): Instance {
	const instance = new Instance(classDef);

	if (classDef.constructorMethod) {
		const constructor = classDef.constructorMethod;
		const constructorEnv = new Environment(environment);

		const constructorArgs = evalMethodArguments(expr,
		                                            constructor.parameters,
		                                            objectRegistry,
		                                            environment,
		                                            instance);

		constructorEnv.define(GRAMMAR.THIS, instance);

		for (let i = 0; i < constructorArgs.length; i++) {
			const parameter: ASTParameterNode | null = constructor.parameters[i] || null;
			if (parameter) {
				constructorEnv.define(parameter.name, constructorArgs[i]);
			}
		}

		for (const child of constructor.children) {
			evalNode(child, objectRegistry, constructorEnv, instance);
		}
	}

	return instance;
}

export function evalClass(node: ASTClassNode, objectRegistry: ObjectRegistry, environment: Environment): void {
	const instance = registerInstance(node, objectRegistry);
	let rawValue;
	for (const field of instance.__classDef.instanceFields) {
		rawValue = field.initializer
			? evalExpression(field.initializer, objectRegistry, environment)
			: null;

		instance.__instanceFields[field.name] = castValue(rawValue, field.type);
	}
	for (const field of instance.__classDef.staticFields) {
		rawValue = field.initializer
			? evalExpression(field.initializer, objectRegistry, environment)
			: null;

		instance.__staticFields[field.name] = castValue(rawValue, field.type);
	}
	environment.define(node.name, instance);
}

export function evalNew(expr: ASTNewNode, objectRegistry: ObjectRegistry, environment: Environment): Instance {
	if (!objectRegistry.classes.has(expr.name)) {
		throwRuntimeError(`Unknown class ${expr.name}.`, expr.span);

	}
	const classDef = objectRegistry.classes.get(expr.name);
	if (classDef.nativeInstance) {
		return evalNativeInstance(expr, classDef, objectRegistry, environment);
	}
	return evalInstance(expr, classDef, objectRegistry, environment);
}

export function evalExpression(expr: ASTNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any {
	switch (expr.type) {
		case ASTNodeType.STRING:
		case ASTNodeType.NUMBER:
		case ASTNodeType.BOOLEAN: {
			return expr.value;
		}
		case ASTNodeType.NULL: {
			return null;
		}
		case ASTNodeType.IDENTIFIER: {
			return environment.get(expr.name);
		}
		case ASTNodeType.THIS: {
			if (!thisValue) {
				throwRuntimeError(`this used outside of method.`, expr.span);
			}
			return thisValue;
		}
		case ASTNodeType.BINARY: {
			if (expr instanceof ASTBinaryNode) {
				const left: any = castValue(evalExpression(expr.left, objectRegistry, environment, thisValue))
				const right: any = castValue(evalExpression(expr.right, objectRegistry, environment, thisValue))

				switch (expr.operator) {
					case GRAMMAR.PLUS: {
						return left + right;
					}
					case GRAMMAR.MINUS: {
						return left - right;
					}
					case GRAMMAR.MULTIPLY: {
						return left * right;
					}
					case GRAMMAR.DIVIDE: {
						return left / right;
					}
					case GRAMMAR.MODULUS: {
						return left % right;
					}
					case GRAMMAR.LESS_THAN: {
						return left < right;
					}
					case GRAMMAR.GREATER_THAN: {
						return left > right;
					}
					case GRAMMAR.LESS_EQUAL: {
						return left <= right;
					}
					case GRAMMAR.GREATER_EQUAL: {
						return left >= right;
					}
					case GRAMMAR.EQUAL: {
						return left === right;
					}
					case GRAMMAR.NOT_EQUAL: {
						return left !== right;
					}
					case GRAMMAR.AND: {
						return left && right;
					}
					case GRAMMAR.OR: {
						return left || right;
					}
					default: {
						throwRuntimeError(`Unknown operator ${expr.operator}`);
					}
				}
			}
			throwRuntimeError(`Invalid binary expression ${expr.type}`);
			break;
		}
		case ASTNodeType.UNARY: {
			if (expr instanceof ASTUnaryNode) {
				return evalUnary(expr, objectRegistry, environment, thisValue);
			}
			throwRuntimeError(`Invalid unary expression ${expr.type}.`, expr.span);
			break;
		}
		case ASTNodeType.ASSIGNMENT: {
			if (expr instanceof ASTAssignmentNode) {
				return evalAssign(expr, objectRegistry, environment, thisValue);
			}
			throwRuntimeError(`Invalid assignment expression ${expr.type}`, expr.span);
			break;
		}
		case ASTNodeType.MEMBER: {
			if (expr instanceof ASTMemberNode) {
				return evalMember(expr, environment);
			}
			throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
			break;
		}
		case ASTNodeType.CALL: {
			if (expr instanceof ASTCallNode) {
				return evalCall(expr, objectRegistry, environment, thisValue);
			}
			throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
			break;
		}
		case ASTNodeType.NEW: {
			if (expr instanceof ASTNewNode) {
				return evalNew(expr, objectRegistry, environment);
			}
			throwRuntimeError(`Invalid call expression ${expr.type}`, expr.span);
			break;
		}
		case ASTNodeType.ARRAY: {
			if (expr instanceof ASTArrayNode) {
				const values = [];
				for (const elem of expr.elements) {
					values.push(evalExpression(elem, objectRegistry, environment, thisValue));
				}

				const classDef = objectRegistry.classes.get('Array');
				const instance = new Instance(classDef);

				instance.__nativeInstance = new classDef.nativeInstance(fromLyraValue(values));

				return instance;
			}
			throwRuntimeError(`Invalid array expression ${expr.type}`, expr.span);
			break;
		}
		case ASTNodeType.INDEX: {
			if (expr instanceof ASTIndexNode) {
				if (!expr.object) {
					throwRuntimeError(`Index access on null.`, expr.span);
					break;
				}

				if (!expr.index) {
					throwRuntimeError(`Access with unspecific index.`, expr.span);
					break;
				}

				const object = evalExpression(expr.object, objectRegistry, environment, thisValue);
				const index = evalExpression(expr.index, objectRegistry, environment, thisValue);

				if (!(object instanceof LyraArray || object.__nativeInstance instanceof LyraArray)) {
					throwRuntimeError('Index access on non-array', expr.span);
					break;
				}

				const target = object instanceof LyraArray ? object : object.__nativeInstance;
				const value = target.values[index];

				if (value instanceof LyraNativeObject) {
					return wrapNativeInstance(value, objectRegistry);
				}

				return value;
			}
			throwRuntimeError(`Invalid index expression ${expr.type}`, expr.span);
			break;
		}
		case ASTNodeType.LAMBDA: {
			if (expr instanceof ASTLambdaNode) {
				return evalLambda(expr, objectRegistry, environment);
			}
			throwRuntimeError(`Invalid lambda expression ${expr.type}`, expr.span);
			break;
		}
		default: {
			throwRuntimeError(`Unhandled expression ${expr.type}.`, expr.span);
		}
	}
}

export function evalLambda(node: ASTLambdaNode, objectRegistry: ObjectRegistry, lambdaEnv: Environment): LambdaFunctionCall {
	return new LambdaFunctionCall(node, objectRegistry, lambdaEnv)
}

export function evalAssign(expr: ASTAssignmentNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any {
	const value = evalExpression(expr.right, objectRegistry, environment, thisValue);

	if (expr.left.type === ASTNodeType.MEMBER) {
		if (expr.left instanceof ASTMemberNode) {
			const object = evalExpression(expr.left.object, objectRegistry, environment, thisValue);

			if (expr.left.object.type === ASTNodeType.IDENTIFIER) {
				object.__staticFields[expr.left.property] = value;
			} else {
				object.__instanceFields[expr.left.property] = value;
			}
		} else {
			throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
		}
	} else {
		environment.set(expr.left.name, value);
	}
	return value;
}

export function evalMember(expr: ASTMemberNode, environment: Environment): any {
	const object = environment.get(expr.object.name);

	if (expr.property in object.__instanceFields) {
		return object.__instanceFields[expr.property];
	}

	if (expr.property in object.__staticFields) {
		return object.__staticFields[expr.property];
	}

	throwRuntimeError(`Unknown member ${expr.property}`, expr.span);

}

export function evalCall(expr: ASTCallNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any {
	// super call inside constructor
	if (expr.callee.type === ASTNodeType.IDENTIFIER && expr.callee.name === GRAMMAR.SUPER) {
		if (!thisValue || !thisValue.__classDef?.superClass) {
			throwRuntimeError('super() used outside of subclass constructor');
			return null; // never reached
		}

		const superClassDef = objectRegistry.classes.get(thisValue.__classDef.superClass);
		const constructorMethod = superClassDef.constructorMethod;

		if (!constructorMethod) {
			return null;
		}

		const constructorEnv = new Environment(environment);
		constructorEnv.define(GRAMMAR.THIS, thisValue);

		bindMethodParameters(expr,
		                     constructorMethod.parameters,
		                     objectRegistry,
		                     constructorEnv,
		                     environment,
		                     thisValue
		);

		for (const child of constructorMethod.children) {
			evalNode(child, objectRegistry, constructorEnv, thisValue);
		}

		return null;
	}

	if (expr.callee.type === ASTNodeType.MEMBER) {
		if (expr.callee instanceof ASTMemberNode) {
			if (expr.callee.object.type === ASTNodeType.IDENTIFIER) {
				const className = expr.callee.object.name;

				if (objectRegistry.classes.has(className)) {
					return evalStaticCall(expr, className, objectRegistry, environment, thisValue);
				}
			}
			return evalInstanceCall(expr, objectRegistry, environment, thisValue);
		}

		return null;
	}

	return evalFunctionCall(expr, objectRegistry, environment, thisValue);
}

export function evalFunctionCall(expr: ASTCallNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null) {
	const functionCall = evalExpression(expr.callee, objectRegistry, environment, thisValue);
	const args = evalCallArguments(expr, objectRegistry, environment, thisValue);

	if (functionCall instanceof LambdaFunctionCall) {
		return functionCall.evalCall(thisValue, ...args);
	}

	return (new NativeFunctionCall(expr, objectRegistry, environment)).evalCall(thisValue, ...args);
}

export function evalStaticCall(expr: ASTCallNode, className: string, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null) {

	if (!(expr.callee instanceof ASTMemberNode)) {
		throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
		return null;
	}

	const classDef = objectRegistry.classes.get(className);
	const method = classDef.staticMethods[expr.callee.property];

	if (!method) {
		throwRuntimeError(`Static method ${className}.${expr.callee.property} not found`, expr.callee.span);
		return null;
	}

	if (classDef.nativeInstance && classDef.nativeInstance[method.name]) {
		const args = evalMethodArguments(expr, method.parameters, objectRegistry, environment, thisValue)
		const rawArgs = args.map(fromLyraValue);
		const result = classDef.nativeInstance[method.name](...rawArgs);

		if (result instanceof LyraNativeObject) {
			return wrapNativeInstance(result, objectRegistry);
		}

		return evalBlock([returnValue(result)],
		                 objectRegistry,
		                 new Environment(environment),
		                 thisValue,
		                 method.returnType
		);
	}

	const methodEnv = new Environment(environment);

	bindMethodParameters(expr, method.parameters, objectRegistry, methodEnv, environment, thisValue);

	return evalBlock(method.children, objectRegistry, methodEnv, thisValue, method.returnType);
}

export function evalInstanceCall(expr: ASTCallNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null) {
	if (!(expr.callee instanceof ASTMemberNode)) {
		throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
		return null;
	}

	// Objekt auswerten (u | this | super)
	let target = evalExpression(expr.callee.object, objectRegistry, environment, thisValue);

	target = autoBoxIfNeeded(target, objectRegistry, expr.callee.span);

	if (!target || !target.__classDef) {
		throwRuntimeError('Instance call on non-object', expr.callee.span);
	}

	let classDef = target.__classDef;

	// super.method()
	if (expr.callee.object.type === ASTNodeType.IDENTIFIER && expr.callee.object.name === 'super') {
		const superName = classDef.superClass;
		if (!superName) {
			throwRuntimeError('super used but no superclass', expr.callee.span);
		}
		classDef = objectRegistry.classes.get(superName);
	}


	const method = resolveInstanceMethod(classDef, objectRegistry, expr.callee.property);
	if (!method) {
		throwRuntimeError(`Method ${expr.callee.property} not found on ${classDef.name}`, expr.callee.span);
		return null;
	}

	const methodEnv = new Environment(environment);
	methodEnv.define(GRAMMAR.THIS, target);

	if (target.__nativeInstance && method.name in target.__nativeInstance) {
		const args = evalMethodArguments(expr, method.parameters, objectRegistry, environment, thisValue);
		const rawArgs = args.map(fromLyraValue);
		const result = target.__nativeInstance[method.name](...rawArgs);

		if (result instanceof LyraNativeObject) {
			return wrapNativeInstance(result, objectRegistry);
		}

		return evalBlock([returnValue(result)], objectRegistry, methodEnv, target, method.returnType);
	}

	bindMethodParameters(expr, method.parameters, objectRegistry, methodEnv, environment, thisValue);

	return evalBlock(method.children, objectRegistry, methodEnv, target, method.returnType);
}

export function resolveInstanceMethod(classDef: ClassDefinition, objectRegistry: ObjectRegistry, methodName: string): ClassMethodDefinition | null {
	if (classDef.instanceMethods[methodName]) {
		return classDef.instanceMethods[methodName];
	}

	if (classDef.superClass) {
		const superDef = objectRegistry.classes.get(classDef.superClass);
		return resolveInstanceMethod(superDef, objectRegistry, methodName);
	}

	return null;
}

export function bindMethodParameters(
	callNode: ASTCallNode,
	parameters: ASTParameterNode[],
	objectRegistry: ObjectRegistry,
	methodEnv: Environment,
	environment: Environment,
	thisValue: Instance | null = null
) {

	const args = callNode.arguments;
	for (let i = 0; i < parameters.length; i++) {
		const parameter: ASTParameterNode | null = parameters[i] || null;
		const argument: any = args[i] || null;

		if (!parameter) {
			throwRuntimeError('Missing parameter name in method call.');
			break; // never reached
		}

		let rawValue;

		if (argument) {
			rawValue = evalExpression(argument, objectRegistry, environment, thisValue);
		} else if (parameter?.defaultValue) {
			rawValue = evalExpression(parameter.defaultValue, objectRegistry, environment, thisValue);
		}

		const casted = parameter.typeAnnotation
			? castValue(rawValue, parameter.typeAnnotation.name)
			: castValue(rawValue, TYPE_ENUM.MIXED);

		methodEnv.define(parameter.name, casted);
	}
}

export function evalCallArguments(node: ASTCallNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any[] {
	if (node.callee instanceof ASTLambdaNode) {
		const lambda = node.callee;
		return evalMethodArguments(node, lambda.parameters, objectRegistry, environment, thisValue);
	}

	if (node.callee.type === ASTNodeType.IDENTIFIER) {
		return node.arguments.map(argument => {
			return castValue(
				evalExpression(argument, objectRegistry, environment, thisValue),
				argument.type
			);
		});
	}

	if (node.callee instanceof ASTMemberNode) {
		const moduleName = node.callee.object.name;
		const methodName = node.callee.property;

		throwRuntimeError(`Unknown function ${moduleName}.${methodName}`, node.span);
	}

	return []; // never reached
}

function evalMethodArguments(expr: ASTCallNode | ASTNewNode, parameters: ASTParameterNode[], objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any[] {
	const args = [];

	for (let i = 0; i < parameters.length; i++) {
		const parameter: ASTParameterNode | null = parameters[i] || null;
		const argument = expr.arguments[i] || null;

		let value;

		if (argument) {
			value = evalExpression(argument, objectRegistry, environment, thisValue);
		} else if (parameter?.defaultValue) {
			value = evalExpression(parameter.defaultValue, objectRegistry, environment, thisValue);
		} else {
			throwRuntimeError(`[RuntimeError] Missing argument '${parameter?.name}'`, expr.span);
		}

		args.push(value);
	}

	return args.map((argument, i) => {
		const parameter = parameters[i];
		return parameter?.typeAnnotation
			? castValue(argument, parameter.typeAnnotation.name)
			: castValue(argument, TYPE_ENUM.MIXED);
	});
}

export function evalIf(node: ASTIfNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any {
	const condition = castValue(
		evalExpression(node.condition, objectRegistry, environment, thisValue),
		TYPE_ENUM.BOOLEAN
	);

	// THEN
	if (condition === true) {
		return evalBlock(node.then.children, objectRegistry, new Environment(environment), thisValue);
	}

	// ELSE
	if (node.else) {
		if (node.else instanceof ASTIfNode) {
			return evalIf(node.else, objectRegistry, environment, thisValue);
		}

		return evalBlock(node.else.children, objectRegistry, new Environment(environment), thisValue);
	}

	return null;
}

export function evalMatch(node: ASTMatchNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any {
	const matchValue = evalExpression(node.expression, objectRegistry, environment);

	for (const caseNode of node.cases) {
		if (caseNode.test === null) {
			continue;
		}

		const testValue = evalExpression(caseNode.test, objectRegistry, environment, thisValue);

		if (testValue === matchValue) {
			return evalMatchCase(caseNode, objectRegistry, environment, thisValue);
		}
	}

	if (node.defaultCase) {
		return evalMatchCase(node.defaultCase, objectRegistry, environment, thisValue);
	}

	return null;
}

export function evalMatchCase(node: ASTMatchCaseNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any {
	return evalBlock(node.children, objectRegistry, new Environment(environment), thisValue);
}

export function evalForeach(node: ASTForeachNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any {
	let iterable = evalExpression(node.iterable, objectRegistry, environment, thisValue);

	if (!(iterable instanceof Instance)) {
		throwRuntimeError(`foreach expects an object implementing Iterable`, node.iterable.span);
	}

	const iteratorMethod = resolveInstanceMethod(
		iterable.__classDef,
		objectRegistry,
		'iterator'
	);

	if (!iteratorMethod) {
		throwRuntimeError(`Object does not implement Iterable (missing iterator())`, node.iterable.span);
	}

	const iterator = evalInstanceCall(
		(() => {
			return new ASTCallNode(new ASTMemberNode(node.iterable, 'iterator'));
		})(),
		objectRegistry,
		environment,
		thisValue
	);

	if (!(iterator instanceof Instance)) {
		throwRuntimeError(`iterator() must return an Iterator object`, node.iterable.span);
	}

	callIteratorMethod(iterator, 'rewind', objectRegistry, environment);

	while (callIteratorMethod(iterator, 'hasNext', objectRegistry, environment)) {
		const value = callIteratorMethod(iterator, 'current', objectRegistry, environment);

		const loopEnv = new Environment(environment);

		loopEnv.define(node.iterator, value);

		const result = evalBlock(node.body, objectRegistry, loopEnv, thisValue);
		if (result instanceof ReturnValue) {
			return result;
		}

		callIteratorMethod(iterator, 'next', objectRegistry, environment);
	}

	return null;
}

export function callIteratorMethod(iterator: Instance, methodName: string, objectRegistry: ObjectRegistry, environment: Environment): any {
	return callInstanceMethod(
		iterator,
		iterator.__classDef.findMethod(methodName),
		[],
		objectRegistry,
		environment
	);
}

export function evalUnary(node: ASTUnaryNode, objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null): any {
	const value = evalExpression(node.argument, objectRegistry, environment, thisValue);

	switch (node.operator) {
		case GRAMMAR.EXCLAMATION_MARK:
			return !castValue(value);
	}

	throwRuntimeError(`Unsupported unary operator ${node.operator}`, node.span);
}

export function evalBlock(blockNodes: ASTNode[], objectRegistry: ObjectRegistry, environment: Environment, thisValue: Instance | null = null, returnType: ASTTypeNode | null = null): any {
	for (const blockNode of blockNodes) {
		const result = evalNode(blockNode, objectRegistry, environment, thisValue);
		if (result instanceof ReturnValue) {
			return castValue(result.value, returnType?.name);
		}
	}
	return null;
}

export function evalAnnotationValue(node: ASTNode): any {
	switch (node.type) {
		case ASTNodeType.STRING:
		case ASTNodeType.NUMBER:
		case ASTNodeType.BOOLEAN:
		case ASTNodeType.IDENTIFIER: {
			return castValue(node.value);
		}

		case ASTNodeType.ARRAY : {
			if (node instanceof ASTArrayNode) {
				return node.elements.map(child => evalAnnotationValue(child));
			}
			throwRuntimeError(`Invalid annotation property value: ${node.type}`, node.span);
			break;
		}

		default: {
			throwRuntimeError(`Unsupported annotation expression: ${node.type}`, node.span);
		}
	}
}

export function evalAnnotationProperties(annotation: ASTAnnotationNode): { [key: string]: any } {
	const properties: { [key: string]: any } = {};

	for (const [key, valueNode] of annotation.properties) {
		properties[key] = evalAnnotationValue(valueNode);
	}

	return properties;
}

export function callInstanceMethod(instance: Instance, methodNode: ASTMethodNode, args: any[], objectRegistry: ObjectRegistry, environment: Environment): any {
	const methodEnv = new Environment(environment);

	methodEnv.define(GRAMMAR.THIS, instance);

	if (instance.__nativeInstance && methodNode.name in instance.__nativeInstance) {
		const rawArgs = args.map(fromLyraValue);
		const result = instance.__nativeInstance[methodNode.name](...rawArgs);

		if (result instanceof LyraNativeObject) {
			return wrapNativeInstance(result, objectRegistry);
		}

		return evalBlock([returnValue(result)], objectRegistry, methodEnv, instance, methodNode.returnType);
	}

	for (let i = 0; i < methodNode.parameters.length; i++) {
		const parameter: ASTParameterNode | null = methodNode.parameters[i] || null;
		const argument: any = args[i] || null;

		if (!parameter) {
			throwRuntimeError('Method parameter is null.');
		}

		let value;
		if (!argument) {
			value = parameter.defaultValue
				? evalNode(parameter.defaultValue, objectRegistry, methodEnv, instance)
				: null;
		} else {
			value = args[i];
		}

		methodEnv.define(parameter.name, value);
	}

	return evalBlock(methodNode.children, objectRegistry, methodEnv, instance, methodNode.returnType);
}

export function autoBoxIfNeeded(value: any, objectRegistry: ObjectRegistry, span: Span | null = null): Instance {
	if (value instanceof Instance) {
		return value;
	}

	if (typeof value === TYPE_ENUM.NUMBER) {
		return createBoxedInstance(
			AutoboxedTypes.getClassName(TYPE_ENUM.NUMBER),
			value,
			objectRegistry,
			span
		);
	}

	if (typeof value === TYPE_ENUM.STRING) {
		return createBoxedInstance(
			AutoboxedTypes.getClassName(TYPE_ENUM.STRING),
			value,
			objectRegistry,
			span
		);
	}

	if (typeof value === TYPE_ENUM.BOOLEAN) {
		return createBoxedInstance(
			AutoboxedTypes.getClassName(TYPE_ENUM.BOOLEAN),
			value,
			objectRegistry,
			span
		);
	}

	return value;
}

export function createBoxedInstance(className: string, primitiveValue: any, objectRegistry: ObjectRegistry, span: Span | null = null): Instance {
	const classDef = objectRegistry.classes.get(className);

	if (!classDef) {
		throwRuntimeError(`Autoboxing failed: ${className} not defined`, span);
	}

	const instance = new Instance(classDef);

	instance.__nativeInstance = new classDef.nativeInstance(fromLyraValue(primitiveValue));

	return instance;
}
