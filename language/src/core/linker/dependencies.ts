import {ObjectRegistry} from "../runtime/runtime_registry.ts";
import {ASTImportNode, ASTNode, ASTNodeType} from "../shared/ast.ts";
import {Source} from "../parser/source.ts";
import {Parser} from "../parser.ts";
import type {AbstractFileLoader} from "./loaders.ts";
import {throwRuntimeError} from "../shared/errors.ts";
import type {Environment} from "../runtime/runtime_model.ts";

export class Dependency {
	objectRegistry: ObjectRegistry = new ObjectRegistry();
	names: string[];
	url: string;
	ast: ASTNode | null = null;

	constructor(names: string[], url: string = '.') {
		this.names = names;
		this.url = url;
	}
}

export class DependencyLoader {
	environment: Environment;
	objectRegistry: ObjectRegistry;
	fileLoader: AbstractFileLoader;

	constructor(environment: Environment, objectRegistry: ObjectRegistry, fileLoader: AbstractFileLoader) {
		this.environment = environment;
		this.objectRegistry = objectRegistry;
		this.fileLoader = fileLoader;
	}

	async parseDependency(dependency: Dependency): Promise<void> {
		return await this.parseFile(dependency.url)
		                 .then(ast => dependency.ast = ast)
		                 .then(ast => dependency.objectRegistry.collectAll(ast));
	}

	async collectDependencies(dependency: Dependency, dependencies: Map<string, Dependency>): Promise<void> {
		return await this.collectProgramDependencies(dependency.ast)
		                 .then(classDependencies => {
			                 classDependencies.forEach(classDependency => {
				                 if (dependencies.has(classDependency.url)) {
					                 return;
				                 }
				                 dependencies.set(classDependency.url, classDependency);
			                 });
		                 });
	}

	async collectProgramDependencies(ast: ASTNode | null): Promise<Map<string, Dependency>> {
		if (ast === null) {
			return new Map();
		}

		const dependencies: Map<string, Dependency> = this.collectClassDependencies(ast);
		for (const dependency of dependencies.values()) {
			if (dependency.url === '.') {
				continue;
			}
			await this.parseDependency(dependency);
			await this.collectDependencies(dependency, dependencies);
		}

		return dependencies;
	}

	async collectDefaultDependencies(): Promise<Map<string, Dependency>> {
		const dependencies: Map<string, Dependency> = this.defaultDependencies();

		for (const dependency of dependencies.values()) {
			await this.parseDependency(dependency);
			await this.collectDependencies(dependency, dependencies);
		}

		return dependencies;
	}

	defaultDependencies(): Map<string, Dependency> {
		const dependencies: Dependency[] = [
			new Dependency(['Iterator', 'Iterable'], '/library/contracts.lyra')
		];

		const defaultDependencies = new Map();
		for (const dependency of dependencies) {
			defaultDependencies.set(dependency.url, dependency);
		}

		return defaultDependencies;
	}

	collectClassDependencies(ast: ASTNode): Map<string, Dependency> {
		const classDependencies = new Map();

		for (const node of ast.children) {
			if (node.type === ASTNodeType.IMPORT) {
				if (node instanceof ASTImportNode) {
					if (node.from === null) {
						classDependencies.set(node.names[0], new Dependency(node.names));
						continue;
					}
					if (classDependencies.has(node.from)) {
						continue;
					}
					classDependencies.set(node.from, new Dependency(node.names, node.from));
				} else {
					throwRuntimeError(`Invalid import node ${node.type}.`, node?.span);
				}
			}
		}

		return classDependencies;
	}

	async parseFile(url: string): Promise<ASTNode> {
		return this.fileLoader
		           .load(url)
		           .then(code => this.parserSource(new Source(code, url)));
	}

	parserSource(source: Source): ASTNode {
		return new Parser(source).parse();
	}
}
