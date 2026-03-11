import type {EventDispatch} from "./runtime_events.ts";

export interface ValueScope {
	readonly parent?: ValueScope;
	readonly values: Map<string, RuntimeValue>;

	define(name: string, value: RuntimeValue): void;

	assign(name: string, value: RuntimeValue): void;

	get(name: string): RuntimeValue;

	has(name: string): boolean;
}

export type Visibility =
	| 'public'
	| 'private'

export interface AccessAttributes {
	visibility: Visibility

	open: boolean;
	static: boolean;
	readonly: boolean;
}

export interface RuntimeNativeObject {
	readonly className: string;
}

export interface RuntimeObjectView extends RuntimeNativeObject {
}

export interface Serializable {
	[index: string]: any;
}

export interface RuntimeInstance<TClassOrigin, TMethodOrigin, TInit, TParameter, TReturnType, TBody> {
	readonly id: string;

	readonly runtimeClass: RuntimeClass<TClassOrigin, TMethodOrigin, TInit, TParameter, TReturnType, TBody>;
	readonly instanceFields: Map<string, RuntimeValue>;

	isDirty: boolean;
	nativeRuntimeObject?: RuntimeNativeObject;

	invalidate(dispatcher: EventDispatch): void;

	clean(dispatcher: EventDispatch): void;
}

export interface RuntimeElement<TOrigin> {
	readonly origin?: TOrigin
}

export interface RuntimeField<TInit> {
	readonly modifiers: AccessAttributes;

	readonly name: string;
	readonly type?: string;
	readonly initializer?: TInit;
}

export interface RuntimeMethod<TOrigin, TParameter, TReturnType, TBody> extends RuntimeElement<TOrigin> {
	readonly modifiers: AccessAttributes;

	readonly name: string;
	readonly parameters: TParameter[];
	readonly returnType?: TReturnType;
	readonly isConstructor: boolean;

	readonly body: TBody;
}

export interface RuntimeClass<TClassOrigin, TMethodOrigin, TInit, TParameter, TReturnType, TBody> extends RuntimeElement<TClassOrigin> {
	readonly modifiers: AccessAttributes;

	readonly className: string;
	readonly superClassName?: string;

	readonly instanceFields: RuntimeField<TInit>[];
	readonly staticFields: RuntimeField<TInit>[];

	readonly instanceMethods: RuntimeMethod<TMethodOrigin, TParameter, TReturnType, TBody>[];
	readonly staticMethods: RuntimeMethod<TMethodOrigin, TParameter, TReturnType, TBody>[];

	readonly constructorMethod?: RuntimeMethod<TMethodOrigin, TParameter, TReturnType, TBody>;

	nativeConstructor?: (...args: RuntimeValue[]) => RuntimeNativeObject
}

export interface RuntimeInterface<TClassOrigin, TMethodOrigin, TInit, TParameter, TReturnType, TBody> extends RuntimeElement<TClassOrigin> {
	readonly className: string;

	readonly staticFields: RuntimeField<TInit>[];
	readonly instanceMethods: RuntimeMethod<TMethodOrigin, TParameter, TReturnType, TBody>[];
}

export interface RuntimeType {
	name: string
	runtimeClass?: RuntimeClass<unknown, unknown, unknown, unknown, unknown, unknown>
}

export interface RuntimeValue {
	type: RuntimeType;
	value: unknown;
}

export interface RuntimeReturnValue {
	value: RuntimeValue;
}

export interface ExecutionContext {
	scope: ValueScope
	instance?: RuntimeInstance<unknown, unknown, unknown, unknown, unknown, unknown>
	method?: RuntimeMethod<unknown, unknown, unknown, unknown>
}

export interface CallFrame {
	method: RuntimeMethod<unknown, unknown, unknown, unknown>
	ip: number
	locals: RuntimeValue[]
}


export interface VirtualMachineState {
	stack: RuntimeValue[]
	frames: CallFrame[]
	globals: ValueScope
}

export class Modifiers {
	open: boolean = false;
	public: boolean = false;
	private: boolean = false;
	static: boolean = false;
	readonly: boolean = false;

	/**
	 * @param {{}} attributes
	 */
	constructor(attributes: { [index: string]: boolean } = {}) {
		for (let attribute of Object.keys(attributes)) {
			if (this.hasOwnProperty(attribute)) {
				const modifiers: { [index: string]: any } = this;
				modifiers[attribute] = attributes[attribute];
			}
		}
	}
}
