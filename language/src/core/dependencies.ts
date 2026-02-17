import {ObjectRegistry} from "./interpreter_registry";
import {ASTImportNode, ASTNode, ASTNodeType} from "./ast";
import {Source} from "./parser_source";
import {Parser} from "./parser";
import {Environment} from "./interpreter_objects";
import type {AbstractFileLoader} from "./loaders";
import {throwRuntimeError} from "./errors";

export class Dependency {
	objectRegistry: ObjectRegistry = new ObjectRegistry();
	names: string[];
	url: string;
	ast: ASTNode | null = null;

	constructor(names: string[], url: string) {
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

		const defaultDependencies = this.defaultDependencies();
		for (const dependency of defaultDependencies.values()) {
			await this.parseDependency(dependency);
		}

		const dependencies = this.collectClassDependencies(ast);
		for (const dependency of dependencies.values()) {
			await this.parseDependency(dependency);
			await this.collectDependencies(dependency, dependencies);
		}

		return new Map([...defaultDependencies, ...dependencies]);
	}

	defaultDependencies(): Map<string, Dependency> {
		const dependencies = [
			new Dependency(['Iterator', 'Iterable'], '/library/contracts.lyra')
		];

		const map = new Map();
		for (const dependency of dependencies) {
			map.set(dependency.url, dependency);
		}

		return map;
	}

	collectClassDependencies(ast: ASTNode): Map<string, Dependency> {
		const classDependencies = new Map();

		for (const node of ast.children) {
			if (node.type === ASTNodeType.IMPORT) {
				if (node instanceof ASTImportNode) {
					if (node.from === null) {
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

	parseFile(url: string): Promise<ASTNode> {
		return this.fileLoader
		           .load(url)
		           .then(code => this.parserSource(new Source(code, url)));
	}

	parserSource(source: Source): ASTNode {
		return new Parser(source).parse();
	}
}
