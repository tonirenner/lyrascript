import {GRAMMAR} from "../language/grammar";
import {
	ASTClassNode,
	ASTFieldNode,
	ASTInterfaceNode,
	ASTMethodNode,
	ASTNode,
	ASTNodeType,
	ASTParameterNode,
	ASTTypeNode
} from "./ast";

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
		throw new Error(`Undefined variable ${name}`);
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
		throw new Error(`Undefined variable ${name}`);
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

	findMethod(name: string): ASTMethodNode {
		const node = this.node
		                 .children
		                 .find(node => node.name === name);

		if (node instanceof ASTMethodNode) {
			return node;
		}

		throw new Error(`Method ${name} not found in class ${this.name}.`);
	}

	static constructFromAST(node: ASTClassNode): ClassDefinition {
		const instanceFields: ClassFieldDefinition[] = [];
		const instanceMethods: { [index: string]: ClassMethodDefinition } = {};
		const staticFields: ClassFieldDefinition[] = [];
		const staticMethods: { [index: string]: ClassMethodDefinition } = {};
		let constructorMethod: ClassMethodDefinition | null = null;

		for (const child of node.children) {
			switch (child.type) {
				case ASTNodeType.FIELD: {
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

						break;
					} else {
						throw new Error(`Invalid field node ${child.type}.`);
					}
				}
				case ASTNodeType.CONSTRUCTOR:
				case ASTNodeType.METHOD: {
					if (child instanceof ASTMethodNode) {
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

						break;
					} else {
						throw new Error(`Invalid method node ${child.type}.`);
					}
				}
				default: {
					throw new Error(`Unhandled node ${child.type}.`);
				}
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
			switch (child.type) {
				case ASTNodeType.FIELD: {
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
						break;
					} else {
						throw new Error(`Invalid field node ${child.type}.`);
					}
				}
				case ASTNodeType.METHOD: {
					if (child instanceof ASTMethodNode) {
						const method = new ClassMethodDefinition(
							child.name,
							child.parameters,
							child.returnType,
							child.modifiers,
							child.children
						);

						instanceMethods[method.name] = method;
						break;
					} else {
						throw new Error(`Invalid method node ${child.type}.`);
					}
				}
				default: {
					throw new Error(`Unhandled node ${child.type}.`);
				}
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

