import {GRAMMAR} from "../grammar";
import {
	ASTClassNode,
	ASTFieldNode,
	ASTInterfaceNode,
	ASTMethodNode,
	ASTNewNode,
	ASTNode,
	ASTParameterNode,
	ASTTypeNode
} from "../ast";
import {throwRuntimeError} from "../errors";
import type {ObjectRegistry} from "./interpreter_registry.ts";
import {evalExpression, evalMethodArguments, evalNode} from "./interpreter_runtime.ts";
import {castValue, fromLyraValue, LyraNativeObject} from "./interpreter_conversion.ts";

export class Environment {
	parent: Environment | null;
	values: { [index: string]: any };

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
		return this.values[name] || (this.parent && this.parent.has(name));
	}
}

export class Instance {
	__classDef: ClassDefinition;
	__instanceFields: { [index: string]: any };
	__staticFields: { [index: string]: any };
	__nativeInstance: any | null = null;

	constructor(classDef: ClassDefinition) {
		this.__classDef = classDef;
		this.__instanceFields = {};
		this.__staticFields = {};
		this.__nativeInstance = null;
	}

	initializeInstanceFields(objectRegistry: ObjectRegistry, environment: Environment): void {
		this.__classDef.initializeInstanceFields(this, objectRegistry, environment);
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

export class SuperClass {
	type: string;
	name: string;

	constructor(type: string, name: string) {
		this.type = type;
		this.name = name;
	}
}

export class ReturnValue {
	value: any;

	constructor(value: any) {
		this.value = value;
	}
}

export class ClassFieldDefinition {
	name: string;
	type: string | null;
	modifiers: Modifiers;
	initializer: ASTNode | null = null;

	constructor(name: string, type: string | null, modifiers: Modifiers, initializer: ASTNode | null = null) {
		this.name = name;
		this.type = type;
		this.modifiers = modifiers;
		this.initializer = initializer;
	}
}

export class ClassMethodDefinition {
	name: string;
	parameters: ASTParameterNode[];
	returnType: ASTTypeNode | null;
	modifiers: Modifiers;
	children: ASTNode[];
	isConstructor: boolean;

	constructor(name: string, parameters: ASTParameterNode[], returnType: ASTTypeNode | null, modifiers: Modifiers, children: ASTNode[]) {
		this.name = name;
		this.parameters = parameters;
		this.returnType = returnType;
		this.modifiers = modifiers;
		this.children = children;
		this.isConstructor = name === GRAMMAR.CONSTRUCTOR;
	}
}

export class ClassDefinition {
	node: ASTClassNode;
	name: string;
	superClass: string | null = null;
	instanceFields: ClassFieldDefinition[];
	instanceMethods: { [index: string]: ClassMethodDefinition };
	staticFields: ClassFieldDefinition[];
	staticMethods: { [index: string]: ClassMethodDefinition };
	constructorMethod: ClassMethodDefinition | null = null;
	nativeInstance: any = null;
	isOpen: boolean = false;

	constructor(
		classNode: ASTClassNode,
		superClass: string | null,
		name: string,
		instanceFields: ClassFieldDefinition[],
		instanceMethods: { [index: string]: ClassMethodDefinition },
		staticFields: ClassFieldDefinition[],
		staticMethods: { [index: string]: ClassMethodDefinition },
		constructorMethod: ClassMethodDefinition | null = null
	) {
		this.node = classNode;
		this.superClass = superClass;
		this.name = name;
		this.instanceFields = instanceFields;
		this.instanceMethods = instanceMethods;
		this.staticFields = staticFields;
		this.staticMethods = staticMethods;
		this.constructorMethod = constructorMethod;
		this.isOpen = classNode.modifiers.open;
	}

	static fromAST(node: ASTClassNode): ClassDefinition {
		const instanceFields: ClassFieldDefinition[] = [];
		const instanceMethods: { [index: string]: ClassMethodDefinition } = {};
		const staticFields: ClassFieldDefinition[] = [];
		const staticMethods: { [index: string]: ClassMethodDefinition } = {};
		let constructorMethod: ClassMethodDefinition | null = null;

		for (const child of node.children) {
			if (child instanceof ASTFieldNode) {
				const field = new ClassFieldDefinition(
					child.name,
					child.fieldType
						? child.fieldType.name
						: null,
					child.modifiers,
					child.init
				);

				if (field.modifiers.static) {
					staticFields.push(field);
				} else {
					instanceFields.push(field);
				}
			} else if (child instanceof ASTMethodNode) {
				const method = new ClassMethodDefinition(
					child.name,
					child.parameters,
					child.returnType,
					child.modifiers,
					child.children
				);
				if (method.isConstructor) {
					constructorMethod = method;
				} else if (method.modifiers.static) {
					staticMethods[method.name] = method;
				} else {
					instanceMethods[method.name] = method;
				}
			} else {
				throwRuntimeError(`Unhandled node ${child.type}.`);
			}
		}

		return new ClassDefinition(
			node,
			node.superClass?.name || null,
			node.name,
			instanceFields,
			instanceMethods,
			staticFields,
			staticMethods,
			constructorMethod
		);
	}

	findMethod(name: string): ASTMethodNode {
		const node = this.node
		                 .children
		                 .find(node => node.name === name);

		if (node instanceof ASTMethodNode) {
			return node;
		}

		throwRuntimeError(`Method ${name} not found in class ${this.name}.`);
	}

	constructEmptyInstance(): Instance {
		return new Instance(this);
	}

	constructNewInstanceWithoutArguments(objectRegistry: ObjectRegistry, environment: Environment): Instance {
		return this.constructNewInstance([], objectRegistry, environment);
	}

	constructNewInstance(args: ASTNode[], objectRegistry: ObjectRegistry, environment: Environment): Instance {
		const newNode = new ASTNewNode(args, new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, this.name));

		return this.constructInstanceByNewNode(newNode, objectRegistry, environment);
	}

	constructInstanceByNewNode(expr: ASTNewNode, objectRegistry: ObjectRegistry, environment: Environment): Instance {
		const instance = this.constructEmptyInstance();

		instance.initializeInstanceFields(objectRegistry, environment);

		if (!this.constructorMethod) {
			return instance;
		}

		const constructor: ClassMethodDefinition = this.constructorMethod;
		const constructorEnv = new Environment(environment);

		const constructorArgs = evalMethodArguments(
			expr,
			constructor.parameters,
			objectRegistry,
			environment,
			instance
		);

		constructorEnv.define(GRAMMAR.THIS, instance);

		for (let i = 0; i < constructorArgs.length; i++) {
			const parameter: ASTParameterNode | undefined = constructor.parameters[i];
			if (parameter) {
				constructorEnv.define(parameter.name, constructorArgs[i]);
			}
		}

		for (const child of constructor.children) {
			evalNode(child, objectRegistry, constructorEnv, instance);
		}

		return instance;
	}

	constructNativeInstanceByNewNode(expr: ASTNewNode, objectRegistry: ObjectRegistry, environment: Environment): Instance {
		const instance: Instance = this.constructEmptyInstance();
		const constructor: ClassMethodDefinition | null = this.constructorMethod;
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

		if (this.nativeInstance === null) {
			throwRuntimeError('Class has no native instance');
		}

		const nativeInstance = new this.nativeInstance(...constructorArgs.map(fromLyraValue));
		if (nativeInstance instanceof LyraNativeObject) {
			instance.__nativeInstance = nativeInstance;
		}

		return instance;
	}

	initializeInstanceFields(instance: Instance, objectRegistry: ObjectRegistry, environment: Environment): void {
		let rawValue;
		for (const field of this.instanceFields) {
			rawValue = field.initializer
				? evalExpression(field.initializer, objectRegistry, environment)
				: null;

			instance.__instanceFields[field.name] = castValue(rawValue, field.type);
		}
		for (const field of this.staticFields) {
			rawValue = field.initializer
				? evalExpression(field.initializer, objectRegistry, environment)
				: null;

			instance.__staticFields[field.name] = castValue(rawValue, field.type);
		}
	}
}

export class InterfaceDefinition {
	node: ASTInterfaceNode;
	name: string;
	staticFields: ClassFieldDefinition[];
	instanceMethods: { [index: string]: ClassMethodDefinition };

	constructor(
		interfaceNode: ASTInterfaceNode,
		name: string,
		staticFields: ClassFieldDefinition[],
		instanceMethods: { [index: string]: ClassMethodDefinition },
	) {
		this.node = interfaceNode;
		this.name = name;
		this.staticFields = staticFields;
		this.instanceMethods = instanceMethods;
	}

	static constructFromAST(node: ASTInterfaceNode): InterfaceDefinition {
		const staticFields: ClassFieldDefinition[] = [];
		const instanceMethods: { [index: string]: ClassMethodDefinition } = {};

		for (const child of node.children) {
			if (child instanceof ASTFieldNode) {
				const field = new ClassFieldDefinition(
					child.name,
					child.fieldType
						? child.fieldType.name
						: null,
					child.modifiers,
					child.init ?? null
				);

				staticFields.push(field);
			} else if (child instanceof ASTMethodNode) {
				const method = new ClassMethodDefinition(
					child.name,
					child.parameters,
					child.returnType,
					child.modifiers,
					child.children
				);

				instanceMethods[method.name] = method;
			} else {
				throwRuntimeError(`Unhandled node ${child.type}.`);
			}
		}

		return new InterfaceDefinition(
			node,
			node.name,
			staticFields,
			instanceMethods
		);
	}
}

