import type {EventDispatch} from "./runtime_events.ts";
import {GRAMMAR, TYPE_ENUM} from "../shared/ast_grammar.ts";

export type RuntimeClassType = RuntimeClass<any, any, any, any, any, any>;
export type RuntimeInterfaceType = RuntimeInterface<any, any, any, any, any, any>;
export type RuntimeInstanceType = RuntimeInstance<any, any, any, any, any, any>;
export type RuntimeMethodType = RuntimeMethod<any, any, any, any>;

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

	[index: string]: any;
}

export interface Serializable {
	[index: string]: any;
}

export class LyraNativeObject implements RuntimeNativeObject, Serializable {
	readonly className: string;

	constructor(className: string) {
		this.className = className;
	}

	public serialize(): Serializable {
		const object: Serializable = {};

		object[this.className] = Object
			.keys(this)
			.filter(key => key !== 'className')
			.reduce((object: Serializable, key: string): Serializable => {
				const copy: Serializable = Object.assign({}, this);
				object[key] = copy[key];
				return object;
			}, {});

		return object;
	}

	public toString(): string {
		return JSON.stringify({className: this.className}, null, 2);
	}
}

export class LyraObjectView extends LyraNativeObject {
	private instance: RuntimeInstanceType;

	constructor(instance: RuntimeInstanceType) {
		super(instance.runtimeClass.className);

		this.instance = instance;

		return new Proxy(this, {
			get: (_: any, name: string): any => {

				if (this.instance.instanceFields.has(name)) {
					return this.instance.instanceFields.get(name)!;
				}

				if (this.instance.staticFields.has(name)) {
					return this.instance.staticFields.get(name)!;
				}

				if (name in this) {
					const self: { [index: string]: any } = this;
					return self[name];
				}
			},

			set: (_: any, name: string, value: any): any => {
				if (this.instance.instanceFields.has(name)) {
					this.instance.instanceFields.set(name, Value(value));
				}

				if (this.instance.staticFields.has(name)) {
					this.instance.staticFields.set(name, Value(value));
				}
			},
		})
	}

	public override serialize(): Serializable {
		const object: Serializable = {};

		object[this.className] = {...this.instance?.instanceFields};

		return object;
	}

	public override toString(): string {
		return JSON.stringify(this.serialize(), null, 2);
	}
}


export interface RuntimeInstance<TClassOrigin, TMethodOrigin, TInit, TParameter, TReturnType, TBody> {
	readonly id: string;

	readonly runtimeClass: RuntimeClass<TClassOrigin, TMethodOrigin, TInit, TParameter, TReturnType, TBody>;
	readonly instanceFields: Map<string, RuntimeValue>;
	readonly staticFields: Map<string, RuntimeValue>;

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

	readonly instanceFields: Map<string, RuntimeField<TInit>>;
	readonly staticFields: Map<string, RuntimeField<TInit>>;

	readonly instanceMethods: Map<string, RuntimeMethod<TMethodOrigin, TParameter, TReturnType, TBody>>;
	readonly staticMethods: Map<string, RuntimeMethod<TMethodOrigin, TParameter, TReturnType, TBody>>;

	readonly constructorMethod?: RuntimeMethod<TMethodOrigin, TParameter, TReturnType, TBody>;

	nativeRuntimeConstructor?: RuntimeNativeObject | any;

	findMethod(name: string): RuntimeMethod<TMethodOrigin, TParameter, TReturnType, TBody> | undefined;
}

export interface RuntimeInterface<TClassOrigin, TMethodOrigin, TInit, TParameter, TReturnType, TBody> extends RuntimeElement<TClassOrigin> {
	readonly className: string;

	readonly staticFields: RuntimeField<TInit>[];
	readonly instanceMethods: RuntimeMethod<TMethodOrigin, TParameter, TReturnType, TBody>[];
}

export interface RuntimeLambda {
	call(args: RuntimeValue[]): RuntimeValue;
}

export interface RuntimeFunction {
	call(args: RuntimeValue[]): RuntimeValue;
}

export interface RuntimeType {
	name: string
	runtimeClass?: RuntimeClass<any, any, any, any, any, any>
}

export interface RuntimeValue {
	type: RuntimeType;
	value: any;

	toNativeRuntimeValue(expectedType?: string): RuntimeValue;

	asRuntimeInstance(): RuntimeInstanceType;
}

export interface ExecutionContext {
	scope: ValueScope
	instance?: RuntimeInstanceType
	method?: RuntimeMethod<any, any, any, any>
}

export interface CallFrame {
	method: RuntimeMethod<any, any, any, any>
	ip: number
	locals: RuntimeValue[]
}


export interface VirtualMachineState {
	stack: RuntimeValue[]
	frames: CallFrame[]
	globals: ValueScope
}

export class SuperClass {
	public readonly type: string;
	public readonly name: string;

	constructor(type: string, name: string) {
		this.type = type;
		this.name = name;
	}
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

export function Value(
	value: any,
	name: string = typeof value,
	runtimeClass?: RuntimeClass<any, any, any, any, any, any>
): RuntimeValue {
	return {
		type: {
			name: name,
			runtimeClass: runtimeClass
		} as RuntimeType,
		value: value,
		toNativeRuntimeValue(expectedType?: string): RuntimeValue {

			if (!expectedType) {
				switch (this.type.name) {
					case TYPE_ENUM.NULL:
						return Value(null);

					case TYPE_ENUM.BOOLEAN:
						return typeof this.value === TYPE_ENUM.BOOLEAN
							? Value(this.value)
							: Value(this.value === GRAMMAR.TRUE);

					case TYPE_ENUM.NUMBER:
						return Value(Number(this.value));

					case TYPE_ENUM.STRING:
						return Value(String(this.value));

					default:
						return Value(this.value, this.type.name, this.type.runtimeClass);
				}
			}

			switch (expectedType) {
				case TYPE_ENUM.STRING:
					return Value(String(value));

				case TYPE_ENUM.NUMBER:
					return Value(Number(value));

				case TYPE_ENUM.BOOLEAN:
					return typeof this.value === TYPE_ENUM.BOOLEAN
					       ? Value(this.value)
					       : Value(this.value === 'true');

				case TYPE_ENUM.NULL:
					return Value(null);
			}

			return Value(this.value, this.type.name, this.type.runtimeClass);
		},
		any(): any {

			return this.value as any;
		},
		number(): number {

			return this.value as number;
		},
		string(): string {

			return this.value as string;
		},
		boolean(): boolean {

			return this.value as boolean;
		},
		asRuntimeInstance(): RuntimeInstanceType {

			return this.value as RuntimeInstanceType;
		}
	} as RuntimeValue;
}

export class Return extends Error {
	constructor(public readonly value: RuntimeValue) {
		super('RuntimeReturn');
	}
}

export type VChild = VText | VElement | VComponent;
export type Props = Record<string, any>;

export interface VNode {
	type: 'component' | 'element' | 'text';
	dom?: Node;
}

export interface VElement extends VNode {
	type: 'element';
	tag: string;
	props?: Props;
	children: VChild[];
}

export interface VComponent extends VNode {
	type: 'component';
	className: string;
	instance?: RuntimeInstanceType;
	props?: Props & { children?: VChild[] };
	subTree?: VChild;
}

export interface VText extends VNode {
	type: 'text';
	value: string;
}
