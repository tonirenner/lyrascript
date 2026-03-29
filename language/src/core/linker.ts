import {Dependency, DependencyLoader} from "./linker/dependencies.ts";
import {ASTClassNode, ASTImportNode, ASTNode} from "./syntax/ast.ts";
import {NativeClasses} from "../library/native_classes.ts";
import {NativeFunctions} from "../library/native_functions.ts";
import type {AbstractFileLoader} from "./linker/loaders.ts";
import type {NativeClass} from "../library/native_class.ts";
import {throwDependencyError} from "./infrastructure/errors.ts";
import type {ObjectRegistry} from "./infrastructure/runtime_registry.ts";
import type {SourceSpan} from "./syntax/source.ts";
import type {RuntimeClassType, RuntimeInterfaceType, ValueScope} from "./model/runtime_model.ts";
import {Value} from "./model/runtime_model.ts";

const nativeClasses = new NativeClasses();
const nativeFunctions = new NativeFunctions();

export class Linker {
	private environment: ValueScope;
	private objectRegistry: ObjectRegistry;
	private dependencyLoader: DependencyLoader;

	constructor(environment: ValueScope, objectRegistry: ObjectRegistry, fileLoader: AbstractFileLoader) {
		this.environment = environment;
		this.objectRegistry = objectRegistry;
		this.dependencyLoader = new DependencyLoader(environment, objectRegistry, fileLoader);
	}

	public async linkSources(ast: ASTNode): Promise<void> {
		this.registerNativeClasses();
		this.registerNativeFunctions();
		this.declareNativeClassTypes();
		this.objectRegistry.collectAll(ast);

		return await this.dependencyLoader.collectDefaultDependencies()
		                 .then((dependencies: Map<string, Dependency>): void => {
			                 this.loadDependencies(dependencies);
		                 })
		                 .then(async (): Promise<void> => {
			                 const dependencies: Map<string, Dependency> = await this.dependencyLoader
			                                                                         .collectProgramDependencies(ast);
			                 this.loadDependencies(dependencies);
			                 this.loadNativeClassesFromAST(ast);
			                 this.populateNativeClassTypes();
		                 });
	}

	private loadDependencies(dependencies: Map<string, Dependency>): void {

		for (const dependency of dependencies.values()) {

			if (dependency.url === '.') {
				this.loadNativeClassFromDependency(dependency);
				continue;
			}

			const objectDefinitions = dependency.objectRegistry
			                                    .fetchAllObjectDefinitions()
			                                    .values();

			for (const objectDef of objectDefinitions) {
				if (this.isRuntimeInterface(objectDef)) {
					if (!this.objectRegistry.types.hasSymbol(objectDef.className)) {
						this.objectRegistry.types.addInterfaceSymbol(
							dependency.objectRegistry.types.getInterfaceSymbol(objectDef.className)
						);
					}

					this.objectRegistry.interfaces.set(objectDef.className, objectDef);
				} else {
					if (!this.objectRegistry.types.hasSymbol(objectDef.className)) {
						this.objectRegistry.types.addClassSymbol(
							dependency.objectRegistry.types.getClassSymbol(objectDef.className)
						);
					}

					this.objectRegistry.classes.set(objectDef.className, objectDef);
				}

				this.environment.define(objectDef.className, Value(objectDef, objectDef.className));
			}
		}
	}

	private loadNativeClass(className: string, span: SourceSpan | null = null): void {
		const nativeClass: NativeClass | null = nativeClasses.registry.get(className) || null;
		if (!nativeClass) {
			throwDependencyError(`Unknown native class ${className}`, span);
		}
		const classDef: RuntimeClassType = nativeClass.getRuntimeClass();
		if (this.objectRegistry.classes.has(className)) {
			return;
		}

		this.objectRegistry.classes.set(className, classDef);
		this.declareNativeClassType(className);
		this.populateNativeClassType(className);
		this.environment.define(className, Value(classDef, className, classDef));
	}

	private loadNativeClassesFromAST(ast: ASTNode): void {
		for (const node of ast.children) {
			if (node instanceof ASTImportNode) {
				if (node.from === null) {
					const className: string | undefined = node.names[0];
					if (!className) {
						throwDependencyError(`Invalid import node ${node.type}.`, node?.span);
					}
					this.loadNativeClass(className, node.span);
				}
			}
		}
	}

	private loadNativeClassFromDependency(dependency: Dependency) {
		const className: string | undefined = dependency.names[0];
		if (!className) {
			throwDependencyError(`Invalid import from dependency.`);
		}

		this.loadNativeClass(className);
	}

	private isRuntimeInterface(
		objectDef: RuntimeClassType | RuntimeInterfaceType
	): objectDef is RuntimeInterfaceType {
		return !("findMethod" in objectDef);
	}

	private declareNativeClassType(className: string): void {
		const nativeClass: NativeClass | null = nativeClasses.registry.get(className) || null;
		if (!nativeClass || this.objectRegistry.types.hasSymbol(className)) {
			return;
		}

		const ast = nativeClass.getAst();
		for (const node of ast.children) {
			if (node instanceof ASTClassNode && node.name === className) {
				this.objectRegistry.types.declareClassSymbol(node);
				return;
			}
		}
	}

	private populateNativeClassType(className: string): void {
		const nativeClass: NativeClass | null = nativeClasses.registry.get(className) || null;
		if (!nativeClass) {
			return;
		}

		const ast = nativeClass.getAst();
		for (const node of ast.children) {
			if (node instanceof ASTClassNode && node.name === className) {
				this.objectRegistry.types.populateClassSymbol(node, this.objectRegistry);
				return;
			}
		}
	}

	private registerNativeClasses(): void {
		for (const nativeClass of nativeClasses.registry.values()) {
			if (!nativeClass.isAutoloadAble) {
				continue;
			}

			const runtimeClass = nativeClass.getRuntimeClass();

			this.objectRegistry.classes.set(nativeClass.name, runtimeClass);
			this.environment.define(nativeClass.name, Value(runtimeClass, runtimeClass.className, runtimeClass));
		}
	}

	private declareNativeClassTypes(): void {
		for (const nativeClass of nativeClasses.registry.values()) {
			if (!nativeClass.isAutoloadAble) {
				continue;
			}

			this.declareNativeClassType(nativeClass.name);
		}
	}

	private populateNativeClassTypes(): void {
		for (const nativeClass of nativeClasses.registry.values()) {
			if (!nativeClass.isAutoloadAble) {
				continue;
			}

			this.populateNativeClassType(nativeClass.name);
		}
	}

	private registerNativeFunctions(): void {
		const globalFunctions = nativeFunctions.getGlobalFunctions();
		const globalFunctionTypes = nativeFunctions.getGlobalFunctionTypes();

		for (const name in globalFunctions) {
			this.environment.define(
				name,
				Value(
					globalFunctions[name] as Function,
					globalFunctionTypes.get(name).returnType.name
				)
			);
		}
	}
}




