import {ASTClassNode, ASTFieldNode, ASTInterfaceNode, ASTMethodNode, ASTNode, ASTNodeType} from "../syntax/ast.ts";
import {throwRuntimeError} from "../infrastructure/errors.ts";
import {
	ClassSymbol,
	createParameterSymbol,
	FieldSymbol,
	InterfaceRefType,
	InterfaceSymbol,
	MethodSymbol,
	Type,
	TypeParameterSymbol,
	Types,
	TypeScope,
	TypeVariable,
	wrapType
} from "../shared/type_objects.ts";
import type {RuntimeClassType, RuntimeInstanceType, RuntimeInterfaceType} from "../model/runtime_model.ts";
import {buildRuntimeClass, buildRuntimeInterface} from "../shared/ast_objects.ts";

export class ClassRegistry {
	private readonly map: Map<string, RuntimeClassType> = new Map();

	all(): IterableIterator<RuntimeClassType> {
		return this.map.values();
	}

	set(name: string, runtimeClass: RuntimeClassType): void {
		this.map.set(name, runtimeClass);
	}

	get(name: string): RuntimeClassType {
		const runtimeClass: RuntimeClassType | null = this.map.get(name) || null;
		if (!runtimeClass) {
			throwRuntimeError(`Class ${name} not found.`);
		}
		return runtimeClass;
	}

	has(name: string): boolean {
		return this.map.has(name);
	}
}

export class InterfaceRegistry {
	private readonly map: Map<string, RuntimeInterfaceType> = new Map();

	all(): IterableIterator<RuntimeInterfaceType> {
		return this.map.values();
	}

	set(name: string, runtimeInterface: RuntimeInterfaceType): void {
		this.map.set(name, runtimeInterface);
	}
}

export class RuntimeInstanceRegistry {
	private readonly map: Map<string, RuntimeInstanceType> = new Map<string, RuntimeInstanceType>();

	all(): RuntimeInstanceType[] {
		return Array.from(this.map.values());
	}

	set(instance: RuntimeInstanceType): void {
		this.map.set(instance.id, instance);
	}

	get(id: string): RuntimeInstanceType | null {
		return this.map.get(id) || null;
	}

	delete(instance: RuntimeInstanceType): void {
		this.map.delete(instance.id);
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

	declareClassSymbol(node: ASTClassNode): void {
		if (this.hasSymbol(node.name)) {
			return;
		}

		const classSymbol = new ClassSymbol(node);
		this.addClassSymbol(classSymbol);

		for (const name of node.typeParameters) {
			classSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
		}
	}

	populateClassSymbol(node: ASTClassNode, objectRegistry: ObjectRegistry): void {
		const classSymbol = this.getClassSymbol(node.name);
		const classScope = new TypeScope();

		if (classSymbol.instanceFieldSymbols.size > 0
		    || classSymbol.staticFieldSymbols.size > 0
		    || classSymbol.instanceMethodSymbols.size > 0
		    || classSymbol.staticMethodSymbols.size > 0
		    || classSymbol.constructorMethodSymbol !== null
		    || classSymbol.implementsInterfaces.length > 0) {
			return;
		}

		if (classSymbol.superClass && this.classSymbols.has(classSymbol.superClass)) {
			classSymbol.superClassSymbol = this.getClassSymbol(classSymbol.superClass);
		}

		for (const typeParameterSymbol of classSymbol.typeParameterSymbols) {
			classScope.defineTypeBinding(typeParameterSymbol.name, new TypeVariable(typeParameterSymbol.name));
		}

		for (const typeNode of node.implementsInterfaces) {
			const interfaceType: Type = wrapType(typeNode, objectRegistry, classScope);
			if (!(interfaceType instanceof InterfaceRefType)) {
				throwRuntimeError(`Expected interface type, got ${interfaceType}.`, typeNode?.span);
			}

			classSymbol.implementsInterfaces.push(interfaceType);
		}

		for (const memberNode of node.children) {
			if (memberNode.type === ASTNodeType.FIELD && memberNode instanceof ASTFieldNode) {
				const fieldSymbol = new FieldSymbol(
					memberNode,
					memberNode.fieldType
					? wrapType(memberNode.fieldType, objectRegistry, classScope)
					: Types.MIXED
				);

				fieldSymbol.owner = classSymbol;

				const target = memberNode.modifiers.static
				               ? classSymbol.staticFieldSymbols
				               : classSymbol.instanceFieldSymbols;

				target.set(fieldSymbol.name, fieldSymbol);
				continue;
			}

			if ((memberNode.type === ASTNodeType.METHOD || memberNode.type === ASTNodeType.CONSTRUCTOR)
			    && memberNode instanceof ASTMethodNode) {
				const methodScope = new TypeScope(classScope);
				const methodSymbol = new MethodSymbol(memberNode);

				methodSymbol.owner = classSymbol;

				for (const name of memberNode.typeParameters) {
					methodSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
					methodScope.defineTypeBinding(name, new TypeVariable(name));
				}

				methodSymbol.parameterSymbols = memberNode.parameters.map(parameterNode =>
					                                                          createParameterSymbol(
						                                                          parameterNode,
						                                                          objectRegistry,
						                                                          methodScope
					                                                          )
				);

				methodSymbol.returnType = memberNode.returnType
				                          ? wrapType(memberNode.returnType, objectRegistry, methodScope)
				                          : Types.VOID;

				if (memberNode.type === ASTNodeType.CONSTRUCTOR) {
					classSymbol.constructorMethodSymbol = methodSymbol;
				} else if (methodSymbol.isStatic) {
					classSymbol.staticMethodSymbols.set(methodSymbol.name, methodSymbol);
				} else {
					classSymbol.instanceMethodSymbols.set(methodSymbol.name, methodSymbol);
				}
			}
		}
	}

	declareInterfaceSymbol(node: ASTInterfaceNode): void {
		if (this.hasSymbol(node.name)) {
			return;
		}

		const interfaceSymbol = new InterfaceSymbol(node);
		this.addInterfaceSymbol(interfaceSymbol);

		for (const name of node.typeParameters) {
			interfaceSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
		}
	}

	populateInterfaceSymbol(node: ASTInterfaceNode, objectRegistry: ObjectRegistry): void {
		const interfaceSymbol = this.getInterfaceSymbol(node.name);
		const interfaceScope = new TypeScope();

		if (interfaceSymbol.staticFieldSymbols.size > 0
		    || interfaceSymbol.instanceMethodSymbols.size > 0
		    || interfaceSymbol.extendsInterfaces.length > 0) {
			return;
		}

		for (const typeParameterSymbol of interfaceSymbol.typeParameterSymbols) {
			interfaceScope.defineTypeBinding(typeParameterSymbol.name, new TypeVariable(typeParameterSymbol.name));
		}

		for (const interfaceName of node.extendsInterfaces) {
			interfaceSymbol.extendsInterfaces.push(this.getInterfaceSymbol(interfaceName));
		}

		for (const memberNode of node.children) {
			if (memberNode.type === ASTNodeType.FIELD && memberNode instanceof ASTFieldNode) {
				const fieldSymbol = new FieldSymbol(
					memberNode,
					memberNode.fieldType
					? wrapType(memberNode.fieldType, objectRegistry, interfaceScope)
					: Types.MIXED
				);

				fieldSymbol.owner = interfaceSymbol;
				interfaceSymbol.staticFieldSymbols.set(fieldSymbol.name, fieldSymbol);
				continue;
			}

			if (memberNode.type === ASTNodeType.METHOD && memberNode instanceof ASTMethodNode) {
				const methodScope = new TypeScope(interfaceScope);
				const methodSymbol = new MethodSymbol(memberNode);

				methodSymbol.owner = interfaceSymbol;

				for (const name of memberNode.typeParameters) {
					methodSymbol.typeParameterSymbols.push(new TypeParameterSymbol(name));
					methodScope.defineTypeBinding(name, new TypeVariable(name));
				}

				methodSymbol.parameterSymbols = memberNode.parameters.map(parameterNode =>
					                                                          createParameterSymbol(
						                                                          parameterNode,
						                                                          objectRegistry,
						                                                          methodScope
					                                                          )
				);

				methodSymbol.returnType = memberNode.returnType
				                          ? wrapType(memberNode.returnType, objectRegistry, methodScope)
				                          : Types.VOID;

				interfaceSymbol.instanceMethodSymbols.set(methodSymbol.name, methodSymbol);
			}
		}
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

	public getInterfaceSymbol(name: string): InterfaceSymbol {
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
	public readonly instances: RuntimeInstanceRegistry = new RuntimeInstanceRegistry();
	public readonly types: TypeRegistry = new TypeRegistry();

	fetchAllObjectDefinitions(): Map<string, RuntimeClassType | RuntimeInterfaceType> {
		const map = new Map();

		for (const runtimeInterface of this.interfaces.all()) {
			map.set(runtimeInterface.className, runtimeInterface);
		}

		for (const runtimeClass of this.classes.all()) {
			map.set(runtimeClass.className, runtimeClass);
		}

		return map;
	}

	collectAll(ast: ASTNode): void {
		for (const node of ast.children) {
			if (node instanceof ASTInterfaceNode) {
				this.interfaces.set(node.name, buildRuntimeInterface(node));
				this.types.declareInterfaceSymbol(node);
			} else if (node instanceof ASTClassNode) {
				this.classes.set(node.name, buildRuntimeClass(node));
				this.types.declareClassSymbol(node);
			}
		}

		for (const node of ast.children) {
			if (node instanceof ASTInterfaceNode) {
				this.types.populateInterfaceSymbol(node, this);
			} else if (node instanceof ASTClassNode) {
				this.types.populateClassSymbol(node, this);
			}
		}
	}
}




