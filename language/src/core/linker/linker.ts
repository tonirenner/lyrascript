import {Dependency, DependencyLoader} from "./dependencies";
import {ASTImportNode, ASTNode} from "../ast";
import {NativeClasses} from "../../library/native_classes";
import {ClassDefinition, Environment, InterfaceDefinition} from "../interpreter/interpreter_objects";
import {ObjectRegistry} from "../interpreter/interpreter_registry";
import type {AbstractFileLoader} from "../loaders";
import type {NativeClass} from "../../library/native_class";
import {throwDependencyError} from "../errors";
import type {SourceSpan} from "../parser/parser_source.ts";

const nativeClasses = new NativeClasses();

export class Linker {
	private environment: Environment;
	private objectRegistry: ObjectRegistry;
	private dependencyLoader: DependencyLoader;

	constructor(environment: Environment, objectRegistry: ObjectRegistry, fileLoader: AbstractFileLoader) {
		this.environment = environment;
		this.objectRegistry = objectRegistry;
		this.dependencyLoader = new DependencyLoader(environment, objectRegistry, fileLoader);
	}

	public async linkSources(ast: ASTNode): Promise<void> {
		return await this.dependencyLoader.collectDefaultDependencies()
		                 .then((dependencies: Map<string, Dependency>): void => {
			                 this.loadDependencies(dependencies);
		                 })
		                 .then(async (): Promise<void> => {
			                 const dependencies: Map<string, Dependency> = await this.dependencyLoader
			                                                                         .collectProgramDependencies(ast);
			                 this.loadDependencies(dependencies);
			                 this.loadNativeClassesFromAST(ast);
		                 });
	}

	private loadDependencies(dependencies: Map<string, Dependency>) {
		for (const dependency of dependencies.values()) {

			if (dependency.url === '.') {
				this.loadNativeClassFromDependency(dependency);
				continue;
			}

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
	}

	private loadNativeClass(className: string, span: SourceSpan | null = null): void {
		const nativeClass: NativeClass | null = nativeClasses.registry.get(className) || null;
		if (!nativeClass) {
			throwDependencyError(`Unknown native class ${className}`, span);
		}
		const classDef: ClassDefinition = nativeClass.getClassDefinition();
		if (this.objectRegistry.classes.has(className)) {
			return;
		}
		this.objectRegistry.classes.set(className, classDef);
		this.environment.define(className, classDef);
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
}
