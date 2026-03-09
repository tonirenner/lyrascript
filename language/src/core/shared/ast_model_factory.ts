import {ASTClassNode, ASTFieldNode, ASTInterfaceNode, ASTMethodNode, ASTNode} from "./ast.ts";
import {ClassDefinition, ClassFieldDefinition, ClassMethodDefinition, InterfaceDefinition} from "./runtime_model.ts";
import {GRAMMAR} from "./ast_grammar.ts";
import {throwRuntimeError} from "./errors.ts";

export class ASTModelFactory {

	static createClass(node: ASTClassNode): ClassDefinition {

		const instanceFields: ClassFieldDefinition[] = [];
		const staticFields: ClassFieldDefinition[] = [];

		const instanceMethods: { [key: string]: ClassMethodDefinition } = {};
		const staticMethods: { [key: string]: ClassMethodDefinition } = {};

		let constructorMethod: ClassMethodDefinition | null = null;

		for (const child of node.children) {

			if (child instanceof ASTFieldNode) {

				const field: ClassFieldDefinition = this.createField(child);

				if (field.modifiers.static) {
					staticFields.push(field);
				} else {
					instanceFields.push(field);
				}

			} else if (child instanceof ASTMethodNode) {

				const method: ClassMethodDefinition = this.createMethod(child);

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
			node.name,
			node.superClass?.name || null,
			instanceFields,
			instanceMethods,
			staticFields,
			staticMethods,
			constructorMethod,
			node.modifiers.open,
			node
		);
	}

	static createInterface(node: ASTInterfaceNode): InterfaceDefinition {

		const staticFields: ClassFieldDefinition[] = [];
		const instanceMethods: { [key: string]: ClassMethodDefinition } = {};

		for (const child of node.children) {

			if (child instanceof ASTFieldNode) {

				staticFields.push(this.createField(child));

			} else if (child instanceof ASTMethodNode) {

				const method: ClassMethodDefinition = this.createMethod(child);

				instanceMethods[method.name] = method;

			} else {
				throwRuntimeError(`Unhandled node ${child.type}.`);
			}
		}

		return new InterfaceDefinition(node.name, staticFields, instanceMethods, node);
	}

	static createField(node: ASTFieldNode): ClassFieldDefinition {

		const type: string | null = node.fieldType
			? node.fieldType.name
			: null;

		return new ClassFieldDefinition(
			node.name,
			type,
			node.modifiers,
			node.init
				? (): ASTNode | null => node.init
				: null
		);
	}


	static createMethod(node: ASTMethodNode): ClassMethodDefinition {
		const returnType: string | null = node.returnType
			? node.returnType.name
			: null;

		const isConstructor: boolean = node.name === GRAMMAR.CONSTRUCTOR;

		return new ClassMethodDefinition(
			node.name,
			node.parameters,
			returnType,
			node.modifiers,
			(): ASTNode[] => node.children,
			isConstructor
		);
	}
}
