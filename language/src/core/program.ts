import {Source} from "./syntax/source.ts";
import {ObjectRegistry} from "./infrastructure/runtime_registry.ts";
import {TypeChecker} from "./typechecker.ts";
import {TestSuites} from "./testsuites.ts";
import {Interpreter} from "./interpreter.ts";
import {FetchFileLoader} from "./file_loader.ts";
import {ASTNode} from "./syntax/ast.ts";
import {Parser} from "./parser.ts";
import {EventPipeline} from "./infrastructure/event_pipeline.ts";
import {RuntimeScope} from "./shared/ast_objects.ts";
import type {ValueScope} from "./model/runtime_model.ts";
import {ReflectionClass} from "./reflection.ts";
import {DependencyResolver} from "./dependency_resolver.ts";
import {RuntimeBootstrap} from "./runtime_bootstrap.ts";

export class LyraScriptProgram {
	private readonly environment: ValueScope = new RuntimeScope();
	private readonly objectRegistry: ObjectRegistry = new ObjectRegistry();
	private readonly eventPipeline: EventPipeline;
	private readonly typeChecker: TypeChecker = new TypeChecker(this.objectRegistry);
	private readonly runtimeBootstrap: RuntimeBootstrap = new RuntimeBootstrap(this.environment, this.objectRegistry);
	private readonly dependencyResolver: DependencyResolver = new DependencyResolver(
		this.environment,
		this.objectRegistry,
		new FetchFileLoader()
	);
	private readonly reflection: ReflectionClass;

	private interpreter: Interpreter;
	private testSuite: TestSuites;

	private readonly isDebug: boolean = false;
	private startTime: number = 0;

	constructor(isDebug: boolean = false, globalEventPipeline: EventPipeline = new EventPipeline()) {
		this.isDebug = isDebug;

		this.interpreter = new Interpreter(
			this.environment,
			this.objectRegistry,
			globalEventPipeline
		);

		this.reflection = new ReflectionClass(this.interpreter);

		this.testSuite = new TestSuites(
			this.environment,
			this.objectRegistry,
			globalEventPipeline
		);

		this.eventPipeline = globalEventPipeline;
	}

	getGlobalObjectRegistry(): ObjectRegistry {
		return this.objectRegistry;
	}


	getGlobalEnvironment(): ValueScope {
		return this.environment;
	}

	getGlobalEventPipeline(): EventPipeline {
		return this.eventPipeline;
	}

	getReflection(): ReflectionClass {
		return this.reflection;
	}

	async executeSource(source: Source): Promise<void> {
		const ast: ASTNode = await this.runPipeline(source);

		this.debugMeasureStartTime();
		this.interpreter.run(ast);
		this.debugMeasureEndTime('interpreter');
	}

	async executeTest(source: Source): Promise<void> {
		const ast: ASTNode = await this.runPipeline(source);

		this.debugMeasureStartTime();
		this.testSuite.run(ast);
		this.debugMeasureEndTime('test');
	}

	debug(value: any): void {
		if (this.isDebug) {
			console.log(value);
		}
	}

	debugMeasureStartTime(): void {
		this.startTime = this.debugTimestamp();
	}

	debugMeasureEndTime(message: string): void {
		this.debug(message + ': ' + (this.debugTimestamp() - this.startTime) + 'ms');
	}

	debugTimestamp(): number {
		if (!this.isDebug) {
			return 0;
		}
		return performance.now();
	}

	private async runPipeline(source: Source): Promise<ASTNode> {
		this.debugMeasureStartTime();
		const ast: ASTNode = new Parser(source).parse();
		this.debugMeasureEndTime('parser');
		this.debug(ast);

		this.runtimeBootstrap.initialize();
		this.objectRegistry.collectAll(ast);
		await this.dependencyResolver.resolve(ast);
		this.runtimeBootstrap.loadNativeImports(ast);
		this.runtimeBootstrap.finalize();

		this.debugMeasureStartTime();
		this.typeChecker.check(ast);
		this.debugMeasureEndTime('typechecker');

		return ast;
	}
}




