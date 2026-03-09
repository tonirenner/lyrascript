import {ObjectRegistry} from "../runtime/runtime_registry.ts";
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
	ASTNewNode,
	ASTNode,
	ASTNodeType,
	ASTOperatorNode,
	ASTParameterNode,
	ASTReturnNode,
	ASTUnaryNode,
	ASTVariableNode,
	ASTVDomExpressionNode,
	ASTVDomNode,
	ASTVDomTextNode
} from "../shared/ast.js";
import {GRAMMAR, TYPE_ENUM} from "../shared/grammar.ts";
import {NativeClasses} from "../../library/native_classes.ts";
import {NativeFunctions, NativeFunctionTypeRegistry} from "../../library/native_functions.ts";
import {fromLyraValue, returnValue, wrapNativeInstance} from "../runtime/ast_conversion.ts";
import {throwRuntimeError} from "../shared/errors.ts";
import {AutoboxedTypes} from "../runtime/type_autoboxing.ts";
import {LyraArray} from "../../library/classes/array.ts";
import type {VChild} from "../runtime/runtime_vdom.ts";
import type {EventPipeline} from "../event/pipeline.ts";
import {
	ClassDefinition,
	ClassMethodDefinition,
	Environment,
	ExecutionStop,
	LyraNativeObject,
	ReturnValue,
	RuntimeInstance
} from "../runtime/runtime_model.ts";
import {ASTModelFactory} from "../runtime/ast_model_factory.ts";
import {ASTRuntimeInstanceFactory} from "../runtime/ast_instance_factory.ts";
import {toNativeValue} from "../runtime/conversion.ts";

const nativeClasses = new NativeClasses();
const nativeFunctions = new NativeFunctions();
const globalFunctions = nativeFunctions.getGlobalFunctions();
const globalFunctionTypeRegistry: NativeFunctionTypeRegistry = nativeFunctions.getGlobalFunctionTypeRegistry();

export abstract class AbstractFunctionCall {
	private readonly node: ASTNode;
	protected readonly functionEnv: Environment;
	protected readonly objectRegistry: ObjectRegistry;
	protected readonly eventPipeline: EventPipeline;
	protected readonly thisValue: RuntimeInstance | null = null;

	constructor(
		node: ASTNode,
		objectRegistry: ObjectRegistry,
		functionEnv: Environment,
		eventPipeline: EventPipeline,
		thisValue: RuntimeInstance | null = null
	) {
		this.node = node;
		this.objectRegistry = objectRegistry;
		this.functionEnv = functionEnv;
		this.eventPipeline = eventPipeline;
		this.thisValue = thisValue;
	}

	protected getCallNode(): ASTCallNode {
		if (!(this.node instanceof ASTCallNode)) {
			throwRuntimeError(`Invalid native function call ${this.node.type}.`, this.node.span);
		}
		return this.node;
	}

	protected getLambdaNode(): ASTLambdaNode {
		if (!(this.node instanceof ASTLambdaNode)) {
			throwRuntimeError(`Invalid lambda call ${this.node.type}.`, this.node.span);
		}
		return this.node;
	}

	abstract evalCall(...args: any[]): any;
}

export class LambdaFunctionCall extends AbstractFunctionCall {
	evalCall(...args: any[]): any {
		const node: ASTLambdaNode = this.getLambdaNode();
		const closureEnv: Environment = new Environment(this.functionEnv);

		for (let i: number = 0; i < node.parameters.length; i++) {
			const parameter: ASTParameterNode | null = node.parameters[i] || null;
			if (!parameter) {
				continue;
			}
			closureEnv.define(parameter.name, args[i]);
		}

		return evalReturn(
			node.children,
			this.objectRegistry,
			closureEnv,
			this.eventPipeline,
			this.thisValue,
			node.returnType?.name
		);
	}
}

export class NativeFunctionCall extends AbstractFunctionCall {
	evalCall(...args: any[]): any {
		const callNode: ASTCallNode = this.getCallNode();

		let result: any = this.resolveCall()(...args);
		if (result instanceof LyraNativeObject) {
			result = wrapNativeInstance(result, this.objectRegistry);
		} else {
			result = returnValue(result);
		}

		return evalReturn(
			[result],
			this.objectRegistry,
			this.functionEnv,
			this.eventPipeline,
			this.thisValue,
			globalFunctionTypeRegistry.get(callNode.callee.name).returnType?.name
		);
	}

	resolveCall(): any {
		const node: ASTCallNode | null = this.getCallNode();

		if (node === null) {
			throwRuntimeError('Invalid function call.');
		}

		return evalExpression(
			node.callee,
			this.objectRegistry,
			this.functionEnv,
			this.eventPipeline,
			this.thisValue
		)[node.callee.name];
	}
}

export function registerNativeClasses(objectRegistry: ObjectRegistry, environment: Environment): void {
	for (const nativeClass of nativeClasses.registry.values()) {
		if (nativeClass.isAutoloadAble) {
			const classDef: ClassDefinition = nativeClass.getClassDefinition();
			objectRegistry.classes.set(nativeClass.name, classDef);
			environment.define(nativeClass.name, classDef);
		}
	}
}

export function registerNativeFunctions(environment: Environment): void {
	for (const name in globalFunctions) {
		const globalFunction: any = globalFunctions[name];
		if (!globalFunction) {
			throwRuntimeError('Global function is null.');
		}
		environment.define(name, globalFunctions);
	}
}

export function evalNode(
	node: ASTNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {
	if (node.isExpression) {
		return new ReturnValue(evalExpression(node, objectRegistry, environment, eventPipeline, thisValue));
	}

	switch (node.type) {
		case ASTNodeType.PROGRAM: {
			for (const child of node.children) {
				evalNode(child, objectRegistry, environment, eventPipeline, thisValue);
			}
			return null;
		}
		case ASTNodeType.IMPORT:
		case ASTNodeType.INTERFACE: {
			return null;
		}
		case ASTNodeType.CLASS: {
			return evalClass(node as ASTClassNode, objectRegistry, environment);
		}
		case ASTNodeType.VARIABLE: {
			if (node instanceof ASTVariableNode) {
				const value: any = node.init
					? evalExpression(node.init, objectRegistry, environment, eventPipeline, thisValue)
					: null;
				environment.define(node.name, value);
				return null;
			}
			throwRuntimeError(`Invalid variable node ${node.type}.`, node.span);
		}
		case ASTNodeType.IF: {
			return evalIf(node as ASTIfNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.MATCH: {
			return evalMatch(node as ASTMatchNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.FOREACH: {
			return evalForeach(node as ASTForeachNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.VDOM: {
			return evalVDomNode(node as ASTVDomNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.EXPRESSION: {
			return evalExpression(
				(node as ASTExpressionNode).expr,
				objectRegistry,
				environment,
				eventPipeline,
				thisValue
			);
		}
		case ASTNodeType.RETURN: {
			if (node instanceof ASTReturnNode) {
				const value: any = node.argument
					? evalExpression(node.argument, objectRegistry, environment, eventPipeline, thisValue)
					: null;
				return new ReturnValue(value);
			}
			throwRuntimeError(`Invalid return node ${node.type}.`, node.span);
		}
		default: {
			throwRuntimeError(`Unhandled node ${node.type}.`, node.span);
		}
	}
}

export function createRuntimeInstance(node: ASTClassNode, objectRegistry: ObjectRegistry): RuntimeInstance {

	let classDef: ClassDefinition;

	if (objectRegistry.classes.has(node.name)) {
		classDef = objectRegistry.classes.get(node.name);
	} else {
		classDef = ASTModelFactory.createClass(node);

		objectRegistry.classes.set(node.name, classDef);
	}

	return ASTRuntimeInstanceFactory.createRuntimeInstance(classDef);
}

export function createNativeRuntimeInstanceByNewNode(
	expr: ASTNewNode,
	classDef: ClassDefinition,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline
): RuntimeInstance {

	return ASTRuntimeInstanceFactory.createNativeByNewNode(classDef, expr, objectRegistry, environment, eventPipeline);
}

export function createRuntimeInstanceByNewNode(
	expr: ASTNewNode,
	classDef: ClassDefinition,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline
): RuntimeInstance {

	return ASTRuntimeInstanceFactory.newRuntimeInstanceByNewNode(
		classDef,
		expr,
		objectRegistry,
		environment,
		eventPipeline
	);
}

export function evalClass(
	node: ASTClassNode,
	objectRegistry: ObjectRegistry,
	environment: Environment): void {

	const instance: RuntimeInstance = createRuntimeInstance(node, objectRegistry);

	instance.initializeFields(environment);

	environment.define(node.name, instance);
}

export function evalNew(
	expr: ASTNewNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline
): RuntimeInstance {

	if (!objectRegistry.classes.has(expr.name)) {
		throwRuntimeError(`Unknown class ${expr.name}.`, expr.span);
	}

	const classDef: ClassDefinition = objectRegistry.classes.get(expr.name);
	if (classDef.nativeInstance) {
		return createNativeRuntimeInstanceByNewNode(expr, classDef, objectRegistry, environment, eventPipeline);
	}

	return createRuntimeInstanceByNewNode(expr, classDef, objectRegistry, environment, eventPipeline);
}

export function evalExpression(
	expr: ASTNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {

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
			return evalBinary(expr as ASTBinaryNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.UNARY: {
			return evalUnary(expr as ASTUnaryNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.ASSIGNMENT: {
			return evalAssign(expr as ASTAssignmentNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.MEMBER: {
			return evalMember(expr as ASTMemberNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.CALL: {
			return evalCall(expr as ASTCallNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.VDOM: {
			return evalVDomNode(expr as ASTVDomNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.NEW: {
			return evalNew(expr as ASTNewNode, objectRegistry, environment, eventPipeline);
		}
		case ASTNodeType.ARRAY: {
			return evalArray(expr as ASTArrayNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.INDEX: {
			return evalIndex(expr as ASTIndexNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		case ASTNodeType.LAMBDA: {
			return evalLambda(expr as ASTLambdaNode, objectRegistry, environment, eventPipeline, thisValue);
		}
		default: {
			throwRuntimeError(`Unhandled expression ${expr.type}.`, expr.span);
		}
	}
}

export function evalBinary(
	expr: ASTBinaryNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {

	const left: any = toNativeValue(evalExpression(expr.left, objectRegistry, environment, eventPipeline, thisValue));
	const right: any = toNativeValue(evalExpression(expr.right, objectRegistry, environment, eventPipeline, thisValue));

	if (left instanceof RuntimeInstance && right instanceof RuntimeInstance) {

		if (left.__classDef.nativeInstance && right.__classDef.nativeInstance) {

			const methodName: string | undefined = ASTOperatorNode.OVERLOADABLE_OPERATOR_METHOD_MAP.get(expr.operator);
			if (!methodName) {
				throwRuntimeError(`Unknown operator ${expr.operator}`);
			}

			return callInstanceMethod(
				left,
				left.findMethod(methodName),
				[right],
				objectRegistry,
				environment,
				eventPipeline
			);
		}

		return callInstanceMethod(
			left,
			left.findMethod(expr.operator),
			[right],
			objectRegistry,
			environment,
			eventPipeline
		);
	}

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

export function evalArray(
	expr: ASTArrayNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): RuntimeInstance {

	const values: any[] = [];
	for (const elem of expr.elements) {
		values.push(evalExpression(elem, objectRegistry, environment, eventPipeline, thisValue));
	}

	const classDef: ClassDefinition = objectRegistry.classes.get('Array');
	return ASTRuntimeInstanceFactory.createNativeRuntimeInstance(classDef, fromLyraValue(values))
}


export function evalIndex(
	expr: ASTIndexNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null): any {

	if (!expr.object) {
		throwRuntimeError(`Index access on null.`, expr.span);
	}

	if (!expr.index) {
		throwRuntimeError(`Access with unspecific index.`, expr.span);
	}

	const object: any = evalExpression(expr.object, objectRegistry, environment, eventPipeline, thisValue);
	const index: any = evalExpression(expr.index, objectRegistry, environment, eventPipeline, thisValue);

	if (!(object instanceof LyraArray || object.__nativeInstance instanceof LyraArray)) {
		throwRuntimeError('Index access on non-array', expr.span);
	}

	const target: any = object instanceof LyraArray ? object : object.__nativeInstance;
	const value: any = target.values[index];

	if (value instanceof LyraNativeObject) {
		return wrapNativeInstance(value, objectRegistry);
	}

	return value;
}

export function evalLambda(
	node: ASTLambdaNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): LambdaFunctionCall {

	return new LambdaFunctionCall(node, objectRegistry, environment, eventPipeline, thisValue)
}

export function evalAssign(
	expr: ASTAssignmentNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {

	const value: any = evalExpression(expr.right, objectRegistry, environment, eventPipeline, thisValue);

	if (expr.left.type === ASTNodeType.MEMBER) {
		if (expr.left instanceof ASTMemberNode) {
			const object: RuntimeInstance = evalExpression(
				expr.left.object,
				objectRegistry,
				environment,
				eventPipeline,
				thisValue
			) as RuntimeInstance;

			if (expr.left.object.type === ASTNodeType.IDENTIFIER) {
				object.__staticFields[expr.left.property] = value;
			} else {
				object.__instanceFields[expr.left.property] = value;
			}

			object.markDirty(eventPipeline);
		} else {
			throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
		}
	} else {
		environment.set(expr.left.name, value);
	}
	return value;
}

export function evalMember(
	expr: ASTMemberNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {

	const object: RuntimeInstance | null = evalExpression(
		expr.object,
		objectRegistry,
		environment,
		eventPipeline,
		thisValue
	) as RuntimeInstance;

	if (!object) {
		throwRuntimeError(`Member access on null.`, expr.span);
	}

	if (expr.property in object.__instanceFields) {
		return object.__instanceFields[expr.property];
	}

	if (expr.property in object.__staticFields) {
		return object.__staticFields[expr.property];
	}

	throwRuntimeError(`Property '${expr.property}' not found`, expr.span);
}

export function evalCall(
	expr: ASTCallNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {

	// super call inside constructor
	if (expr.callee.type === ASTNodeType.IDENTIFIER && expr.callee.name === GRAMMAR.SUPER) {
		if (!thisValue || !thisValue.__classDef?.superClass) {
			throwRuntimeError('super() used outside of subclass constructor');
		}

		const superClassDef = objectRegistry.classes.get(thisValue.__classDef.superClass);
		const constructorMethod = superClassDef.constructorMethod;

		if (!constructorMethod) {
			return null;
		}

		const constructorEnv = new Environment(environment);
		constructorEnv.define(GRAMMAR.THIS, thisValue);

		bindMethodParameters(
			expr,
			constructorMethod.parameters,
			objectRegistry,
			constructorEnv,
			environment,
			eventPipeline,
			thisValue
		);

		for (const child of constructorMethod.body()) {
			evalNode(child, objectRegistry, constructorEnv, eventPipeline, thisValue);
		}

		return null;
	}

	if (expr.callee.type === ASTNodeType.MEMBER) {
		if (expr.callee instanceof ASTMemberNode) {
			if (expr.callee.object.type === ASTNodeType.IDENTIFIER) {
				const className: string = expr.callee.object.name;

				if (objectRegistry.classes.has(className)) {
					return evalStaticCall(expr, className, objectRegistry, environment, eventPipeline, thisValue);
				}
			}
			return evalInstanceCall(expr, objectRegistry, environment, eventPipeline, thisValue);
		}

		return null;
	}

	return evalFunctionCall(expr, objectRegistry, environment, eventPipeline, thisValue);
}

export function evalFunctionCall(
	expr: ASTCallNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null): any {

	const functionCall: any = evalExpression(expr.callee, objectRegistry, environment, eventPipeline, thisValue);
	const args: any[] = evalCallArguments(expr, objectRegistry, environment, eventPipeline, thisValue);

	if (functionCall instanceof LambdaFunctionCall) {
		return functionCall.evalCall(...args);
	}

	return (new NativeFunctionCall(expr, objectRegistry, environment, eventPipeline, thisValue)).evalCall(...args);
}

export function evalStaticCall(
	expr: ASTCallNode,
	className: string,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {

	if (!(expr.callee instanceof ASTMemberNode)) {
		throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
	}

	const classDef: ClassDefinition = objectRegistry.classes.get(className);
	const methodDef: ClassMethodDefinition | undefined = classDef.staticMethods[expr.callee.property];

	if (!methodDef) {
		throwRuntimeError(`Static method ${className}.${expr.callee.property} not found`, expr.callee.span);
	}

	if (classDef.nativeInstance && classDef.nativeInstance[methodDef.name]) {
		const args: any[] = evalMethodArguments(
			expr,
			methodDef.parameters,
			objectRegistry,
			environment,
			eventPipeline,
			thisValue
		);
		const rawArgs: any[] = args.map(fromLyraValue);
		const result: any = classDef.nativeInstance[methodDef.name](...rawArgs);

		if (result instanceof LyraNativeObject) {
			return wrapNativeInstance(result, objectRegistry);
		}

		return evalReturn(
			[returnValue(result)],
			objectRegistry,
			new Environment(environment),
			eventPipeline,
			thisValue,
			methodDef.returnType
		);
	}

	const methodEnv = new Environment(environment);

	bindMethodParameters(expr, methodDef.parameters, objectRegistry, methodEnv, environment, eventPipeline, thisValue);

	return evalReturn(methodDef.body(), objectRegistry, methodEnv, eventPipeline, thisValue, methodDef.returnType);
}

export function evalInstanceCall(
	expr: ASTCallNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null): any {

	if (!(expr.callee instanceof ASTMemberNode)) {
		throwRuntimeError(`Invalid member expression ${expr.type}`, expr.span);
	}

	// Objekt auswerten (u | this | super)
	let target: any = evalExpression(expr.callee.object, objectRegistry, environment, eventPipeline, thisValue);

	target = autoBoxIfNeeded(target, objectRegistry);

	if (!target || !target.__classDef) {
		throwRuntimeError('Instance call on non-object', expr.callee.span);
	}

	let classDef: ClassDefinition = target.__classDef;

	// super.method()
	if (expr.callee.object.type === ASTNodeType.IDENTIFIER && expr.callee.object.name === 'super') {
		const superName = classDef.superClass;
		if (!superName) {
			throwRuntimeError('super used but no superclass', expr.callee.span);
		}
		classDef = objectRegistry.classes.get(superName);
	}


	const methodDef: ClassMethodDefinition | null = resolveInstanceMethod(
		classDef,
		objectRegistry,
		expr.callee.property
	);

	if (!methodDef) {
		throwRuntimeError(`Method ${expr.callee.property} not found on ${classDef.name}`, expr.callee.span);
	}

	const methodEnv = new Environment(environment);
	methodEnv.define(GRAMMAR.THIS, target);

	if (target.__nativeInstance && methodDef.name in target.__nativeInstance) {
		const args: any[] = evalMethodArguments(
			expr,
			methodDef.parameters,
			objectRegistry,
			environment,
			eventPipeline,
			thisValue
		);

		const rawArgs: any = args.map(fromLyraValue);
		const result: any = target.__nativeInstance[methodDef.name](...rawArgs);

		if (result instanceof LyraNativeObject) {
			return wrapNativeInstance(result, objectRegistry);
		}

		return evalReturn(
			[returnValue(result)],
			objectRegistry,
			methodEnv,
			eventPipeline,
			target,
			methodDef.returnType
		);
	}

	bindMethodParameters(expr, methodDef.parameters, objectRegistry, methodEnv, environment, eventPipeline, thisValue);

	return evalReturn(methodDef.body(), objectRegistry, methodEnv, eventPipeline, target, methodDef.returnType);
}

export function resolveInstanceMethod(
	classDef: ClassDefinition,
	objectRegistry: ObjectRegistry,
	methodName: string
): ClassMethodDefinition | null {
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
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): void {

	const args: ASTNode[] = callNode.arguments;
	for (let i: number = 0; i < parameters.length; i++) {
		const parameter: ASTParameterNode | null = parameters[i] || null;
		const argument: any = args[i] || null;

		if (!parameter) {
			throwRuntimeError('Missing parameter name in method call.');
		}

		let rawValue;

		if (argument) {
			rawValue = evalExpression(argument, objectRegistry, environment, eventPipeline, thisValue);
		} else if (parameter?.defaultValue) {
			rawValue = evalExpression(parameter.defaultValue, objectRegistry, environment, eventPipeline, thisValue);
		}

		const casted = parameter.typeAnnotation
			? toNativeValue(rawValue, parameter.typeAnnotation.name)
			: toNativeValue(rawValue, TYPE_ENUM.MIXED);

		methodEnv.define(parameter.name, casted);
	}
}

export function evalCallArguments(
	node: ASTCallNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any[] {

	if (node.callee instanceof ASTLambdaNode) {
		const lambda: ASTLambdaNode = node.callee;
		return evalMethodArguments(node, lambda.parameters, objectRegistry, environment, eventPipeline, thisValue);
	}

	if (node.callee.type === ASTNodeType.IDENTIFIER) {
		return node.arguments.map((argument: ASTNode): any => {
			return toNativeValue(
				evalExpression(argument, objectRegistry, environment, eventPipeline, thisValue),
				argument.type
			);
		});
	}

	let moduleName: string = 'unknown';
	let methodName: string = 'unknown';

	if (node.callee instanceof ASTMemberNode) {
		moduleName = node.callee.object.name;
		methodName = node.callee.property;
	}

	throwRuntimeError(`Unknown function ${moduleName}.${methodName}`, node.span);
}

export function evalMethodArguments(
	expr: ASTCallNode | ASTNewNode,
	parameters: ASTParameterNode[],
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any[] {

	const args: any[] = [];

	for (let i: number = 0; i < parameters.length; i++) {
		const parameter: ASTParameterNode | null = parameters[i] || null;
		const argument: ASTNode | null = expr.arguments[i] || null;

		let value;

		if (argument) {
			value = evalExpression(argument, objectRegistry, environment, eventPipeline, thisValue);
		} else if (parameter?.defaultValue) {
			value = evalExpression(parameter.defaultValue, objectRegistry, environment, eventPipeline, thisValue);
		} else {
			throwRuntimeError(`[RuntimeError] Missing argument '${parameter?.name}'`, expr.span);
		}

		args.push(value);
	}

	return args.map((argument, i): any => {
		const parameter: ASTParameterNode | undefined = parameters[i];
		return parameter?.typeAnnotation
			? toNativeValue(argument, parameter.typeAnnotation.name)
			: toNativeValue(argument, TYPE_ENUM.MIXED);
	});
}

export function evalIf(
	node: ASTIfNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {
	const condition: any = toNativeValue(
		evalExpression(node.condition, objectRegistry, environment, eventPipeline, thisValue),
		TYPE_ENUM.BOOLEAN
	);

	// THEN
	if (condition === true) {
		return evalBlock(node.then.children, objectRegistry, new Environment(environment), eventPipeline, thisValue);
	}

	// ELSE
	if (node.else) {
		if (node.else instanceof ASTIfNode) {
			return evalIf(node.else, objectRegistry, environment, eventPipeline, thisValue);
		}

		return evalBlock(node.else.children, objectRegistry, new Environment(environment), eventPipeline, thisValue);
	}

	return null;
}

export function evalMatch(
	node: ASTMatchNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {
	const matchValue: any = evalExpression(node.expression, objectRegistry, environment, eventPipeline);

	for (const caseNode of node.cases) {
		if (caseNode.test === null) {
			continue;
		}

		const testValue = evalExpression(caseNode.test, objectRegistry, environment, eventPipeline, thisValue);

		if (testValue === matchValue) {
			return evalMatchCase(caseNode, objectRegistry, environment, eventPipeline, thisValue);
		}
	}

	if (node.defaultCase) {
		return evalMatchCase(node.defaultCase, objectRegistry, environment, eventPipeline, thisValue);
	}

	return null;
}

export function evalMatchCase(
	node: ASTMatchCaseNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {
	return evalBlock(node.children, objectRegistry, new Environment(environment), eventPipeline, thisValue);
}

export function evalForeach(
	node: ASTForeachNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {

	let iterable: any = evalExpression(node.iterable, objectRegistry, environment, eventPipeline, thisValue);

	if (!(iterable instanceof RuntimeInstance)) {
		throwRuntimeError(`foreach expects an object implementing Iterable`, node.iterable.span);
	}

	const iteratorMethod: ClassMethodDefinition | null = resolveInstanceMethod(
		iterable.__classDef,
		objectRegistry,
		'iterator'
	);

	if (!iteratorMethod) {
		throwRuntimeError(`Object does not implement Iterable (missing iterator())`, node.iterable.span);
	}

	const iterator: any = evalInstanceCall(
		new ASTCallNode(new ASTMemberNode(node.iterable, 'iterator')),
		objectRegistry,
		environment,
		eventPipeline,
		thisValue
	);

	if (!(iterator instanceof RuntimeInstance)) {
		throwRuntimeError(`iterator() must return an Iterator object`, node.iterable.span);
	}

	callIteratorMethod(iterator, 'rewind', objectRegistry, environment, eventPipeline);

	while (callIteratorMethod(iterator, 'hasNext', objectRegistry, environment, eventPipeline)) {
		const value = callIteratorMethod(iterator, 'current', objectRegistry, environment, eventPipeline);

		const loopEnv = new Environment(environment);

		loopEnv.define(node.iterator, value);

		const result = evalBlock(node.body, objectRegistry, loopEnv, eventPipeline, thisValue);
		if (result instanceof ReturnValue) {
			return result;
		}

		callIteratorMethod(iterator, 'next', objectRegistry, environment, eventPipeline);
	}

	return null;
}

export function callIteratorMethod(
	iterator: RuntimeInstance,
	methodName: string,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline
): any {

	return callInstanceMethod(
		iterator,
		iterator.findMethod(methodName),
		[],
		objectRegistry,
		environment,
		eventPipeline
	);
}

export function evalUnary(
	node: ASTUnaryNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): any {

	const value: any = toNativeValue(
		evalExpression(
			node.argument,
			objectRegistry,
			environment,
			eventPipeline,
			thisValue
		)
	);

	if (value instanceof RuntimeInstance) {
		let op: string = node.operator;

		if (op === GRAMMAR.PLUS) {
			op = GRAMMAR.UNARY_PLUS;
		} else if (op === GRAMMAR.MINUS) {
			op = GRAMMAR.UNARY_MINUS;
		}

		return callInstanceMethod(
			value,
			value.findMethod(op),
			[],
			objectRegistry,
			environment,
			eventPipeline
		);
	}

	switch (node.operator) {
		case GRAMMAR.EXCLAMATION_MARK: {
			return !value;
		}
		case GRAMMAR.MINUS: {
			return -value;
		}
		case GRAMMAR.PLUS: {
			return +value;
		}
	}

	throwRuntimeError(`Unsupported unary operator ${node.operator}`, node.span);
}

export function evalVDomNode(
	node: ASTVDomNode,
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null
): VChild {

	const props: Record<string, any> = {};

	for (const [name, value] of node.props) {
		props[name] = evalExpression(value, objectRegistry, environment, eventPipeline, thisValue);
	}

	const isComponent: boolean = objectRegistry.classes.has(node.tag);

	const children: VChild[] = [];
	let textBuffer: string[] = [];

	const flushTextBuffer: () => void = (): void => {
		if (textBuffer.length === 0) {
			return;
		}
		children.push({
			              type: 'text',
			              value: textBuffer.join(''),
			              dom: undefined
		              });
		textBuffer = [];
	}

	for (const child of node.children) {
		switch (true) {
			case child instanceof ASTVDomTextNode: {
				textBuffer.push(child.value);
				break;
			}
			case child instanceof ASTVDomExpressionNode: {
				textBuffer.push(evalExpression(child.expr, objectRegistry, environment, eventPipeline, thisValue));
				break;
			}
			case child instanceof ASTVDomNode: {
				children.push(evalVDomNode(child, objectRegistry, environment, eventPipeline, thisValue) as VChild);
			}
		}

		flushTextBuffer();
	}

	flushTextBuffer();

	if (isComponent) {
		return {
			type: 'component',
			className: node.tag,
			props: {...props, children},
			subTree: undefined,
			instance: undefined,
			dom: undefined
		};
	}

	return {
		type: 'element',
		tag: node.tag,
		props,
		children,
		dom: undefined
	};
}

export function evalReturn(
	blockNodes: ASTNode[],
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null,
	returnType: string | null = null
): any {
	try {
		return evalBlock(blockNodes, objectRegistry, environment, eventPipeline, thisValue, returnType);
	} catch (executionStop) {
		if (executionStop instanceof ExecutionStop) {
			return toNativeValue(executionStop.returnValue.value, executionStop.returnType);
		}
		throw executionStop;
	}
}

export function evalBlock(
	blockNodes: ASTNode[],
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline,
	thisValue: RuntimeInstance | null = null,
	returnType: string | null = null
): any {
	for (const blockNode of blockNodes) {
		const returnValue: any = evalNode(blockNode, objectRegistry, environment, eventPipeline, thisValue);
		if (returnValue instanceof ReturnValue) {
			throw new ExecutionStop(returnValue, returnType);
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
			return toNativeValue(node.value);
		}

		case ASTNodeType.ARRAY : {
			if (node instanceof ASTArrayNode) {
				return node.elements.map((child: ASTNode): any => evalAnnotationValue(child));
			}
			throwRuntimeError(`Invalid annotation property value: ${node.type}`, node.span);
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

export function callInstanceMethod(
	target: RuntimeInstance,
	methodDefinition: ClassMethodDefinition,
	args: any[],
	objectRegistry: ObjectRegistry,
	environment: Environment,
	eventPipeline: EventPipeline
): any {
	const methodEnv = new Environment(environment);

	methodEnv.define(GRAMMAR.THIS, target);

	if (target.__nativeInstance && methodDefinition.name in target.__nativeInstance) {
		const rawArgs: any[] = args.map(fromLyraValue);
		const result: any = target.__nativeInstance[methodDefinition.name](...rawArgs);

		if (result instanceof LyraNativeObject) {
			return wrapNativeInstance(result, objectRegistry);
		}

		return evalReturn(
			[returnValue(result)],
			objectRegistry,
			methodEnv,
			eventPipeline,
			target,
			methodDefinition.returnType
		);
	}

	for (let i: number = 0; i < methodDefinition.parameters.length; i++) {
		const parameter: ASTParameterNode | null = methodDefinition.parameters[i] || null;
		const argument: any = args[i] || null;

		if (!parameter) {
			throwRuntimeError('Method parameter is null.');
		}

		let value;
		if (!argument) {
			value = parameter.defaultValue
				? evalNode(parameter.defaultValue, objectRegistry, methodEnv, eventPipeline, target)
				: null;
		} else {
			value = args[i];
		}

		methodEnv.define(parameter.name, value);
	}

	return evalReturn(
		methodDefinition.body(),
		objectRegistry,
		methodEnv,
		eventPipeline,
		target,
		methodDefinition.returnType
	);
}

export function autoBoxIfNeeded(value: any, objectRegistry: ObjectRegistry): RuntimeInstance {
	if (value instanceof RuntimeInstance) {
		return value;
	}

	if (typeof value === TYPE_ENUM.NUMBER) {
		return createBoxedInstance(AutoboxedTypes.getClassName(TYPE_ENUM.NUMBER), value, objectRegistry);
	}

	if (typeof value === TYPE_ENUM.STRING) {
		return createBoxedInstance(AutoboxedTypes.getClassName(TYPE_ENUM.STRING), value, objectRegistry);
	}

	if (typeof value === TYPE_ENUM.BOOLEAN) {
		return createBoxedInstance(AutoboxedTypes.getClassName(TYPE_ENUM.BOOLEAN), value, objectRegistry);
	}

	return value;
}

export function createBoxedInstance(className: string, primitiveValue: any, objectRegistry: ObjectRegistry): RuntimeInstance {
	const classDef: ClassDefinition = objectRegistry.classes.get(className);

	return ASTRuntimeInstanceFactory.createNativeRuntimeInstance(classDef, fromLyraValue(primitiveValue))
}
