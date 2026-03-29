import {Source} from "./syntax/source.ts";
import {ObjectRegistry} from "./infrastructure/runtime_registry.ts";
import {TypeChecker} from "./typechecker.ts";
import {TestSuites} from "./testing/testsuites.ts";
import {Interpreter} from "./interpreter.ts";
import {ASTNode} from "./syntax/ast.ts";
import {Parser} from "./parser.ts";
import {EventPipeline} from "./infrastructure/event_pipeline.ts";
import {RuntimeScope} from "./shared/ast_objects.ts";
import type {RuntimeValue, ValueScope} from "./model/runtime_model.ts";
import {ReflectionClass} from "./reflection.ts";
import {DependencyResolver} from "./loading/dependency_resolver.ts";
import {RuntimeBootstrap} from "./runtime_bootstrap.ts";
import {AbstractFileLoader, FetchFileLoader} from "./loading/file_loader.ts";
import type {BytecodeModule} from "./bytecode/bytecode_module.ts";
import {BytecodeCompiler} from "./compiler/bytecode_compiler.ts";
import {VirtualMachine} from "./vm/virtual_machine.ts";

export class LyraScriptProgram {
	private readonly environment: ValueScope = new RuntimeScope();
	private readonly objectRegistry: ObjectRegistry = new ObjectRegistry();
	private readonly eventPipeline: EventPipeline;
	private readonly typeChecker: TypeChecker = new TypeChecker(this.objectRegistry);
	private readonly runtimeBootstrap: RuntimeBootstrap = new RuntimeBootstrap(this.environment, this.objectRegistry);
	private readonly dependencyResolver: DependencyResolver;
	private readonly reflection: ReflectionClass;
	private readonly bytecodeCompiler: BytecodeCompiler = new BytecodeCompiler();
	private runtimeInitialized: boolean = false;
	private runtimeFinalized: boolean = false;

	private interpreter: Interpreter;
	private testSuite: TestSuites;

	private readonly isDebug: boolean = false;
	private startTime: number = 0;

	constructor(
		isDebug: boolean = false,
		globalEventPipeline: EventPipeline = new EventPipeline(),
		fileLoader: AbstractFileLoader = new FetchFileLoader()
	) {
		this.isDebug = isDebug;
		this.dependencyResolver = new DependencyResolver(
			this.environment,
			this.objectRegistry,
			fileLoader
		);

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
		await this.interpreter.runAsync(ast);
		this.debugMeasureEndTime('interpreter');
	}

	async executeTest(source: Source): Promise<void> {
		const ast: ASTNode = await this.runPipeline(source);

		this.debugMeasureStartTime();
		this.testSuite.run(ast);
		this.debugMeasureEndTime('test');
	}

	async compileBytecode(source: Source): Promise<BytecodeModule> {
		const ast: ASTNode = await this.runPipeline(source);

		this.debugMeasureStartTime();
		const module = this.bytecodeCompiler.compile(ast);
		this.debugMeasureEndTime('bytecode-compile');

		return module;
	}

	async executeBytecode(source: Source): Promise<RuntimeValue> {
		const module = await this.compileBytecode(source);

		return await this.executeBytecodeModule(module);
	}

	async executeBytecodeModule(module: BytecodeModule): Promise<RuntimeValue> {
		this.initializeRuntime();
		await this.dependencyResolver.resolveDefaults();
		this.finalizeRuntime();

		this.debugMeasureStartTime();
		const result = new VirtualMachine(this.environment).execute(module);
		this.debugMeasureEndTime('vm');

		return result;
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

		this.initializeRuntime();
		this.objectRegistry.collectAll(ast);
		await this.dependencyResolver.resolve(ast, source.url);
		this.runtimeBootstrap.loadNativeImports(ast);
		this.finalizeRuntime();

		this.debugMeasureStartTime();
		this.typeChecker.check(ast);
		this.debugMeasureEndTime('typechecker');

		return ast;
	}

	private initializeRuntime(): void {
		if (this.runtimeInitialized) {
			return;
		}

		this.runtimeBootstrap.initialize();
		this.runtimeInitialized = true;
	}

	private finalizeRuntime(): void {
		if (this.runtimeFinalized) {
			return;
		}

		this.runtimeBootstrap.finalize();
		this.runtimeFinalized = true;
	}
}




