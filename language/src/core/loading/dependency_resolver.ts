import {Dependency, DependencyLoader} from "./dependency_loader.ts";
import type {AbstractFileLoader} from "./file_loader.ts";
import type {ObjectRegistry} from "../infrastructure/runtime_registry.ts";
import type {RuntimeClassType, RuntimeInterfaceType, ValueScope} from "../model/runtime_model.ts";
import {Value} from "../model/runtime_model.ts";
import type {ASTNode} from "../syntax/ast.ts";

export class DependencyResolver {
	private readonly dependencyLoader: DependencyLoader;

	constructor(
		private readonly environment: ValueScope,
		private readonly objectRegistry: ObjectRegistry,
		fileLoader: AbstractFileLoader
	) {
		this.dependencyLoader = new DependencyLoader(environment, objectRegistry, fileLoader);
	}

	public async resolve(ast: ASTNode): Promise<void> {
		this.loadDependencies(await this.dependencyLoader.collectDefaultDependencies());
		this.loadDependencies(await this.dependencyLoader.collectProgramDependencies(ast));
	}

	private loadDependencies(dependencies: Map<string, Dependency>): void {
		for (const dependency of dependencies.values()) {
			if (dependency.url === ".") {
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

	private isRuntimeInterface(
		objectDef: RuntimeClassType | RuntimeInterfaceType
	): objectDef is RuntimeInterfaceType {
		return !("findMethod" in objectDef);
	}
}
