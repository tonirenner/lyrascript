import {ASTClassNode, ASTInterfaceNode, ASTNode} from "./ast.ts";
import {throwRuntimeError} from "./errors.ts";
import {type ClassDefinition, InterfaceDefinition, RuntimeInstance} from "./runtime_model.ts";
import {ASTModelFactory} from "./ast_model_factory.ts";
import {type ClassSymbol, InterfaceSymbol} from "./type_objects.ts";

export class ClassRegistry {
	map: Map<string, ClassDefinition> = new Map();

	register(node: ASTClassNode): void {
		this.set(node.name, ASTModelFactory.createClass(node));
	}

	all(): IterableIterator<ClassDefinition> {
		return this.map.values();
	}

	set(name: string, classDefinition: ClassDefinition): void {
		this.map.set(name, classDefinition);
	}

	get(name: string): ClassDefinition {
		const classDef: ClassDefinition | null = this.map.get(name) || null;
		if (!classDef) {
			throwRuntimeError(`Class ${name} not found.`);
		}
		return classDef;
	}

	has(name: string): boolean {
		return this.map.has(name);
	}
}

export class InterfaceRegistry {
	map: Map<string, InterfaceDefinition> = new Map();

	register(node: ASTInterfaceNode): void {
		this.set(node.name, ASTModelFactory.createInterface(node));
	}

	all(): IterableIterator<InterfaceDefinition> {
		return this.map.values();
	}

	set(name: string, interfaceDefinition: InterfaceDefinition): void {
		this.map.set(name, interfaceDefinition);
	}
}

export class InstanceRegistry {
	private instances: Map<string, RuntimeInstance> = new Map<string, RuntimeInstance>();

	register(instance: RuntimeInstance): void {
		this.instances.set(instance.id, instance);
	}

	unregister(instance: RuntimeInstance): void {
		this.instances.delete(instance.id);
	}

	get(id: string): RuntimeInstance | null {
		return this.instances.get(id) || null;
	}

	allInstances(): RuntimeInstance[] {
		return Array.from(this.instances.values());
	}
}

export class TypeRegistry {
	classSymbols: Map<string, ClassSymbol> = new Map();
	interfaceSymbols: Map<string, InterfaceSymbol> = new Map();

	allClassSymbols(): IterableIterator<ClassSymbol> {
		return this.classSymbols.values();
	}

	allInterfaceSymbols(): IterableIterator<InterfaceSymbol> {
		return this.interfaceSymbols.values();
	}

	addClassSymbol(symbol: ClassSymbol): void {
		this.classSymbols.set(symbol.name, symbol);
	}

	addInterfaceSymbol(symbol: InterfaceSymbol): void {
		this.interfaceSymbols.set(symbol.name, symbol);
	}

	hasSymbol(name: string): boolean {
		return this.classSymbols.has(name) || this.interfaceSymbols.has(name);
	}

	public getClassSymbol(name: string): ClassSymbol {
		const symbol: ClassSymbol | undefined = this.classSymbols.get(name);
		if (symbol === undefined) {
			throwRuntimeError(`Symbol ${name} not found.`);
		}
		return symbol;
	}

	public getInteraceSymbol(name: string): InterfaceSymbol {
		const symbol: InterfaceSymbol | undefined = this.interfaceSymbols.get(name);
		if (symbol === undefined) {
			throwRuntimeError(`Symbol ${name} not found.`);
		}
		return symbol;
	}
}

export class ObjectRegistry {
	public readonly classes: ClassRegistry = new ClassRegistry();
	public readonly interfaces: InterfaceRegistry = new InterfaceRegistry();
	public readonly instances: InstanceRegistry = new InstanceRegistry();
	public readonly types: TypeRegistry = new TypeRegistry();

	fetchAllObjectDefinitions(): Map<string, ClassDefinition | InterfaceDefinition> {
		const map = new Map();

		for (const classDef of this.interfaces.all()) {
			map.set(classDef.name, classDef);
		}

		for (const classDef of this.classes.all()) {
			map.set(classDef.name, classDef);
		}

		return map;
	}

	collectAll(ast: ASTNode): void {
		for (const node of ast.children) {
			if (node instanceof ASTInterfaceNode) {
				this.interfaces.register(node);
			} else if (node instanceof ASTClassNode) {
				this.classes.register(node);
			}
		}
	}
}

