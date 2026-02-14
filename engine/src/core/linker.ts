import {DependencyLoader} from "./dependencies";
import {ASTImportNode, ASTNode} from "./ast";
import {NativeClasses} from "../library/native_classes";
import {Environment, InterfaceDefinition} from "./interpreter_objects";
import {ObjectRegistry} from "./interpreter_registry";
import type {AbstractFileLoader} from "./loaders.ts";
import type {NativeClass} from "../library/native_class.ts";
import {throwDependencyError} from "./errors.ts";

const nativeClasses = new NativeClasses();

export class Linker {
	environment: Environment;
	objectRegistry: ObjectRegistry;
	dependencyLoader: DependencyLoader;

	constructor(environment: Environment, objectRegistry: ObjectRegistry, fileLoader: AbstractFileLoader) {
		this.environment = environment;
		this.objectRegistry = objectRegistry;
		this.dependencyLoader = new DependencyLoader(environment, objectRegistry, fileLoader);
	}

	linkSources(ast: ASTNode): Promise<void> {
		return this.dependencyLoader
		           .collectProgramDependencies(ast)
		           .then(dependencies => {
			           for (const dependency of dependencies.values()) {
				           const objectDefinitions = dependency.objectRegistry
				                                               .fetchAllObjectDefinitions()
				                                               .values();
				           for (let objectDef of objectDefinitions) {
					           if (objectDef instanceof InterfaceDefinition) {
						           this.objectRegistry.interfaces.set(objectDef.name, objectDef);
					           } else {
						           this.objectRegistry.classes.set(objectDef.name, objectDef);
					           }
					           this.environment.define(objectDef.name, objectDef);
				           }
			           }
		           })
		           .then(() => this.loadNativeClasses(ast))
	}

	loadNativeClasses(ast: ASTNode): void {
		for (const node of ast.children) {
			if (node instanceof ASTImportNode) {
				if (node.from === null) {
					const className = node.names[0];
					if (!className) {
						throwDependencyError(`Invalid import node ${node.type}.`, node?.span);
					}
					const nativeClass: NativeClass | null = nativeClasses.classes.get(className) || null;
					if (!nativeClass) {
						throwDependencyError(`Unknown native class ${className}`, node?.span);
					}
					const classDef = nativeClass.getClassDefinition();
					if (!classDef) {
						throwDependencyError(`Class definition for native class ${className} not found.`, node?.span);
					}
					if (this.objectRegistry.classes.has(className)) {
						throwDependencyError(`Could not resolve class ${className}.`, node?.span);
					}
					this.objectRegistry.classes.set(className, classDef);
					this.environment.define(className, classDef);
				}
			}
		}
	}
}
