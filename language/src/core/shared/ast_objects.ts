import {throwRuntimeError} from "./errors.ts";
import {
	type AccessAttributes,
	LyraNativeObject,
	type Modifiers,
	Return,
	type RuntimeClass,
	type RuntimeField,
	type RuntimeInstance,
	type RuntimeInstanceType,
	type RuntimeInterface,
	type RuntimeLambda,
	type RuntimeMethod,
	type RuntimeValue,
	type ValueScope
} from "../contracts/runtime_model.ts";
import {
	ASTCallNode,
	ASTClassNode,
	ASTFieldNode,
	ASTInterfaceNode,
	ASTLambdaNode,
	ASTMethodNode,
	ASTNode,
	ASTParameterNode,
	ASTTypeNode
} from "./ast.ts";
import {GRAMMAR} from "./ast_grammar.ts";
import {type EventDispatch, LYRA_EVENTS} from "../contracts/runtime_events.ts";
import * as crypto from "node:crypto";
import type {ASTInterpreter} from "../contracts/ast_interpreter.ts";
import {ReturnValue, wrapNativeInstance} from "./ast_objects_conversion.ts";

export class RuntimeScope implements ValueScope {

	readonly parent?: ValueScope;
	readonly values: Map<string, RuntimeValue> = new Map();

	constructor(parent?: ValueScope) {
		this.parent = parent;
	}

	define(name: string, value: RuntimeValue): void {
		this.values.set(name, value);
	}

	assign(name: string, value: RuntimeValue): void {
		if (this.values.has(name)) {
			this.values.set(name, value);
			return;
		}

		if (this.parent) {
			this.parent.assign(name, value);
			return;
		}

		throwRuntimeError(`Undefined variable ${name}`);
	}

	get(name: string): RuntimeValue {
		if (this.values.has(name)) {
			return this.values.get(name)!;
		}

		if (this.parent) {
			return this.parent.get(name);
		}

		throwRuntimeError(`Undefined variable ${name}`);
	}

	has(name: string): boolean {
		if (this.values.has(name)) {
			return true;
		}

		return this.parent?.has(name) ?? false;
	}

}

export function convertModifiers(modifiers: Modifiers): AccessAttributes {

	return {
		visibility: modifiers.public ? 'public' : 'private',
		open: modifiers.open,
		static: modifiers.static,
		readonly: modifiers.readonly
	};

}

export function buildRuntimeField(node: ASTFieldNode): RuntimeField<ASTNode> {

	return {
		modifiers: convertModifiers(node.modifiers),
		name: node.name,
		type: node.fieldType?.name,
		initializer: node.init ?? undefined
	};

}

export function buildRuntimeMethod(node: ASTMethodNode)
	: RuntimeMethod<ASTMethodNode, ASTParameterNode, ASTTypeNode | null, ASTNode[]> {

	return {
		name: node.name,
		parameters: node.parameters,
		returnType: node.returnType,
		modifiers: convertModifiers(node.modifiers),
		isConstructor: node.name === GRAMMAR.CONSTRUCTOR,
		body: node.children,
		origin: node
	};

}

export function buildRuntimeClass(node: ASTClassNode)
	: RuntimeClass<
	ASTClassNode,
	ASTMethodNode,
	ASTNode,
	ASTParameterNode,
	ASTTypeNode | null,
	ASTNode[]
> {

	const instanceFields = new Map<string, RuntimeField<ASTNode>>();
	const staticFields = new Map<string, RuntimeField<ASTNode>>();

	const instanceMethods = new Map<string, RuntimeMethod<ASTMethodNode, ASTParameterNode, ASTTypeNode | null, ASTNode[]>>();
	const staticMethods = new Map<string, RuntimeMethod<ASTMethodNode, ASTParameterNode, ASTTypeNode | null, ASTNode[]>>();

	let constructorMethod: RuntimeMethod<ASTMethodNode, ASTParameterNode, ASTTypeNode | null, ASTNode[]> | undefined;

	for (const child of node.children) {

		if (child instanceof ASTFieldNode) {

			const field = buildRuntimeField(child);

			if (field.modifiers.static) {
				staticFields.set(field.name, field);
			} else {
				instanceFields.set(field.name, field);
			}

		} else if (child instanceof ASTMethodNode) {

			const method = buildRuntimeMethod(child);

			if (method.isConstructor) {
				constructorMethod = method;
			} else if (method.modifiers.static) {
				staticMethods.set(method.name, method);
			} else {
				instanceMethods.set(method.name, method);
			}

		} else {
			throwRuntimeError(`Unhandled node ${child.type}`);
		}

	}

	return {
		className: node.name,
		superClassName: node.superClass?.name,
		modifiers: convertModifiers(node.modifiers),

		instanceFields,
		staticFields,

		instanceMethods,
		staticMethods,

		constructorMethod,

		origin: node,

		findMethod(name: string): RuntimeMethod<ASTMethodNode, ASTParameterNode, ASTTypeNode | null, ASTNode[]> | undefined {

			if (instanceMethods.has(name)) {
				return instanceMethods.get(name);
			}

			if (staticMethods.has(name)) {
				return staticMethods.get(name);
			}

			return undefined;
		}
	};

}

export function buildRuntimeInterface(node: ASTInterfaceNode):
	RuntimeInterface<
		ASTInterfaceNode,
		ASTMethodNode,
		ASTNode,
		ASTParameterNode,
		ASTTypeNode | null,
		ASTNode[]
	> {

	const staticFields: RuntimeField<ASTNode>[] = [];
	const instanceMethods: RuntimeMethod<ASTMethodNode, ASTParameterNode, ASTTypeNode | null, ASTNode[]>[] = [];

	for (const child of node.children) {

		if (child instanceof ASTFieldNode) {

			staticFields.push(buildRuntimeField(child));

		} else if (child instanceof ASTMethodNode) {

			instanceMethods.push(buildRuntimeMethod(child));

		} else {
			throwRuntimeError(`Unhandled node ${child.type}`);
		}

	}

	return {
		className: node.name,
		staticFields,
		instanceMethods,
		origin: node
	};

}

export function createRuntimeInstance(
	runtimeClass: RuntimeClass<any, any, any, any, any, any>
): RuntimeInstanceType {


	return {


		id: crypto.randomUUID(),

		runtimeClass,

		instanceFields: new Map<string, RuntimeValue>(),
		staticFields: new Map<string, RuntimeValue>(),

		isDirty: false,

		invalidate(dispatcher: EventDispatch): void {
			this.isDirty = true;

			dispatcher.emit(LYRA_EVENTS.INSTANCE_DIRTY_STATE, {instance: this});
		},

		clean(dispatcher: EventDispatch): void {
			this.isDirty = false;

			dispatcher.emit(LYRA_EVENTS.INSTANCE_CLEAN_STATE, {instance: this});
		}
	};

}

export class RuntimeLambdaFunction implements RuntimeLambda {

	constructor(private readonly interpreter: ASTInterpreter,
	            private readonly node: ASTLambdaNode,
	            private readonly scope: ValueScope) {

	}

	call(args: RuntimeValue[]): RuntimeValue {
		const lambdaScope: ValueScope = new RuntimeScope(this.scope);

		for (let i: number = 0; i < this.node.parameters.length; i++) {

			const parameter: ASTParameterNode | undefined = this.node.parameters[i];
			const argument: RuntimeValue | undefined = args[i];

			if (!parameter) {
				throwRuntimeError(`Missing parameter for argument ${i}`);
			}
			if (!argument) {
				throwRuntimeError(`Missing argument for parameter ${parameter?.name}`);
			}

			lambdaScope.define(parameter.name, argument);
		}

		this.interpreter.pushContext({
			scope: lambdaScope,
			instance: this.interpreter.currentContext.instance
		});

		try {
			if (this.node.children.length === 1 && this.node.children[0]?.isExpression) {
				return this.interpreter.evalExpression(this.node.children[0]);
			}

			return this.interpreter.evalBlock(this.node.children);
		} catch (returnValue) {
			if (returnValue instanceof Return) {
				return returnValue.value;
			}
			throw returnValue;
		} finally {
			this.interpreter.popContext();
		}
	}
}


export class RuntimeNativeFunction {

	constructor(
		private readonly interpreter: ASTInterpreter,
		private readonly node: ASTCallNode
	) {
	}

	call(args: RuntimeValue[]): RuntimeValue {
		let result: any = this.resolveFunction()(...args.map((arg: RuntimeValue): any => arg.value));

		if (result instanceof LyraNativeObject) {
			return wrapNativeInstance(result, this.interpreter.objectRegistry);
		}

		result = ReturnValue(result);

		return this.interpreter.evalReturn(
			[result],
			new RuntimeScope(this.interpreter.runtimeScope),
			this.interpreter.nativeFunctions
			    .getGlobalFunctionTypes()
			    .get(this.node.callee.name)?.returnType?.name
		);
	}

	private resolveFunction(): any {
		const functionObject: any = this.interpreter.evalExpression(this.node.callee).value;
		if (typeof functionObject === 'function') {
			return functionObject;
		}

		const functionName: string = this.node.callee.name;
		if (!functionObject || !(functionName in functionObject)) {
			throwRuntimeError(`Function ${functionName} not found`, this.node.span);
		}

		return functionObject[functionName];
	}
}
