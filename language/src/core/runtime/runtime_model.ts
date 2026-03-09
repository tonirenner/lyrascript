import {throwRuntimeError} from "../errors";
import type {EventPipeline} from "../event/pipeline";
import LyraEvents from "../event/events";
import {castValue} from "./runtime_conversion";


/* =========================================================
   Environment
   ========================================================= */

export class Environment {

	private readonly parent: Environment | null;
	private readonly values: { [index: string]: any };

	constructor(parent: Environment | null = null) {
		this.parent = parent;
		this.values = Object.create(null);
	}

	define(name: string, value: any): void {
		this.values[name] = value;
	}

	get(name: string): any {

		if (name in this.values) {
			return this.values[name];
		}

		if (this.parent) {
			return this.parent.get(name);
		}

		throwRuntimeError(`Undefined variable ${name}`);
	}

	set(name: string, value: any): void {

		if (name in this.values) {
			this.values[name] = value;
			return;
		}

		if (this.parent) {
			this.parent.set(name, value);
			return;
		}

		throwRuntimeError(`Undefined variable ${name}`);
	}

	has(name: string): boolean {
		return name in this.values || (this.parent?.has(name) ?? false);
	}
}


/* =========================================================
   RuntimeInstance
   ========================================================= */

export class RuntimeInstance {

	public readonly id: string;
	public readonly __classDef: ClassDefinition;
	public readonly __instanceFields: { [index: string]: any };
	public readonly __staticFields: { [index: string]: any };

	public __nativeInstance: any | null = null;
	public __fieldsInitialized: boolean = false;
	public __isDirty: boolean = false;

	constructor(classDef: ClassDefinition) {
		this.__classDef = classDef;
		this.__instanceFields = {};
		this.__staticFields = {};
		this.id = RuntimeInstance.generateUUID();
	}

	private static generateUUID(): string {
		return self.crypto.randomUUID();
	}

	public markDirty(eventPipeline: EventPipeline): void {

		this.__isDirty = true;

		eventPipeline.emit(LyraEvents.LYRA_INSTANCE_DIRTY_STATE, {instance: this});
	}

	public markClean(eventPipeline: EventPipeline): void {

		this.__isDirty = false;

		eventPipeline.emit(LyraEvents.LYRA_INSTANCE_CLEAN_STATE, {instance: this});
	}

	findMethod(name: string): ClassMethodDefinition {
		return this.__classDef.findMethod(name);
	}

	hasProperty(name: string): boolean {
		try {
			return this.__classDef.findField(name).modifiers.public;
		} catch {
		}
		return false;
	}

	setProperty(name: string, value: any, expected: any = null): void {
		const field: ClassFieldDefinition = this.__classDef.findField(name);

		if (!field.modifiers.public) {
			throwRuntimeError(`Field ${name} is not public.`);
		}

		this.__instanceFields[name] = castValue(value, expected);
	}

	initializeFields(environment: Environment): void {
		this.__classDef.initializeInstanceFields(this, environment);
	}
}


/* =========================================================
   Modifiers
   ========================================================= */

export class Modifiers {

	public readonly open: boolean = false;
	public readonly public: boolean = false;
	public readonly private: boolean = false;
	public readonly static: boolean = false;
	public readonly readonly: boolean = false;

	constructor(attributes: { [index: string]: boolean } = {}) {
		for (const attribute of Object.keys(attributes)) {
			if (this.hasOwnProperty(attribute)) {
				const modifiers: { [index: string]: any } = this;
				modifiers[attribute] = attributes[attribute];
			}
		}
	}
}


/* =========================================================
   SuperClass
   ========================================================= */

export class SuperClass {
	constructor(
		public readonly type: string,
		public readonly name: string
	) {
		this.type = type;
		this.name = name;
	}
}


/* =========================================================
   Execution Control
   ========================================================= */

export class ExecutionStop extends Error {

	constructor(
		public readonly returnValue: ReturnValue,
		public readonly returnType: string | null
	) {
		super('Execution stopped with return.');
	}
}

export class ReturnValue {

	value: any;

	constructor(value: any) {
		this.value = value;
	}
}


/* =========================================================
   ClassFieldDefinition
   ========================================================= */

export class ClassFieldDefinition {
	constructor(
		public readonly name: string,
		public readonly type: string | null,
		public readonly modifiers: Modifiers,
		public readonly initializer: ((env: Environment) => any) | null = null
	) {

		this.name = name;
		this.type = type;
		this.modifiers = modifiers;
		this.initializer = initializer;
	}
}


/* =========================================================
   ClassMethodDefinition
   ========================================================= */

export class ClassMethodDefinition {
	constructor(
		public readonly name: string,
		public readonly parameters: string[],
		public readonly returnType: string | null,
		public readonly modifiers: Modifiers,
		public readonly body: Function,
		public readonly isConstructor: boolean = false
	) {

		this.name = name;
		this.parameters = parameters;
		this.returnType = returnType;
		this.modifiers = modifiers;
		this.body = body;
		this.isConstructor = isConstructor;
	}
}


/* =========================================================
   ClassDefinition
   ========================================================= */

export class ClassDefinition {

	public nativeInstance: any = null;


	constructor(
		public readonly name: string,
		public readonly superClass: string | null,
		public readonly instanceFields: ClassFieldDefinition[],
		public readonly instanceMethods: { [index: string]: ClassMethodDefinition },
		public readonly staticFields: ClassFieldDefinition[],
		public readonly staticMethods: { [index: string]: ClassMethodDefinition },
		public readonly constructorMethod: ClassMethodDefinition | null = null,
		public readonly isOpen: boolean = false
	) {

		this.name = name;
		this.superClass = superClass;
		this.instanceFields = instanceFields;
		this.instanceMethods = instanceMethods;
		this.staticFields = staticFields;
		this.staticMethods = staticMethods;
		this.constructorMethod = constructorMethod;
		this.isOpen = isOpen;
	}

	findMethod(name: string): ClassMethodDefinition {

		const methodDefinition: ClassMethodDefinition | undefined = this.instanceMethods[name];

		if (!methodDefinition) {
			throwRuntimeError(`Method ${name} not found in class ${this.name}.`);
		}

		return methodDefinition;
	}

	findField(name: string): ClassFieldDefinition {
		let fieldDefinition: ClassFieldDefinition | undefined = this
			.instanceFields
			.find((field: ClassFieldDefinition): boolean => field.name === name);

		if (!fieldDefinition) {
			fieldDefinition = this
				.staticFields
				.find((field: ClassFieldDefinition): boolean => field.name === name);
		}

		if (!fieldDefinition) {
			throwRuntimeError(`Field ${name} not found in class ${this.name}.`);
		}

		return fieldDefinition;
	}

	constructEmptyInstance(): RuntimeInstance {
		return new RuntimeInstance(this);
	}

	constructNativeInstance(args: any[] = []): RuntimeInstance {
		const instance: RuntimeInstance = this.constructEmptyInstance();

		instance.__nativeInstance = new this.nativeInstance(...args);

		return instance;
	}

	initializeInstanceFields(instance: RuntimeInstance, environment: Environment): void {

		if (instance.__fieldsInitialized) {
			return;
		}

		let rawValue;

		for (const field of this.instanceFields) {

			rawValue = field.initializer
				? field.initializer(environment)
				: null;

			instance.__instanceFields[field.name] = castValue(rawValue, field.type);
		}

		for (const field of this.staticFields) {
			rawValue = field.initializer
				? field.initializer(environment)
				: null;

			instance.__staticFields[field.name] = castValue(rawValue, field.type);
		}

		instance.__fieldsInitialized = true;
	}
}


/* =========================================================
   InterfaceDefinition
   ========================================================= */

export class InterfaceDefinition {

	constructor(
		public readonly name: string,
		public readonly staticFields: ClassFieldDefinition[],
		public readonly instanceMethods: {
			[index: string]: ClassMethodDefinition
		}) {

		this.name = name;
		this.staticFields = staticFields;
		this.instanceMethods = instanceMethods;
	}
}
