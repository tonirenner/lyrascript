import {ASTClassNode, ASTInterfaceNode, ASTNode} from "./ast";
import {ClassDefinition, InterfaceDefinition} from "./interpreter_objects";
import {ClassSymbol, InterfaceSymbol} from "./type_objects.ts";
import {throwRuntimeError} from "./errors.ts";

export class ClassRegistry {
	map: Map<string, ClassDefinition> = new Map();

	register(node: ASTClassNode): void {
		this.set(node.name, ClassDefinition.constructFromAST(node));
	}

	all(): IterableIterator<ClassDefinition> {
		return this.map.values();
	}

	set(name: string, classDefinition: ClassDefinition): void {
		this.map.set(name, classDefinition);
	}

	get(name: string): ClassDefinition {
		const classDef = this.map.get(name);
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
		this.set(node.name, InterfaceDefinition.constructFromAST(node));
	}

	all(): IterableIterator<InterfaceDefinition> {
		return this.map.values();
	}

	set(name: string, interfaceDefinition: InterfaceDefinition): void {
		this.map.set(name, interfaceDefinition);
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
	classes = new ClassRegistry();
	interfaces = new InterfaceRegistry();
	types = new TypeRegistry();

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

