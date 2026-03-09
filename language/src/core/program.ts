import {Source} from "./parser/source";
import {Environment} from "./runtime/objects";
import {ObjectRegistry} from "./runtime/runtime_registry";
import {TypeChecker} from "./typechecker.ts";
import {Linker} from "./linker/linker";
import {TestSuites} from "./testsuites.ts";
import {Interpreter} from "./interpreter/interpreter";
import {FetchFileLoader} from "./linker/loaders.ts";
import {ASTNode} from "./ast";
import {Parser} from "./parser/parser";
import {EventPipeline} from "./event/pipeline";
import {Compiler} from "./virtualmachine/compiler.ts";
import {VirtualMachine} from "./virtualmachine/virtualmachine.ts";
import type {ByteCodeInstructions} from "./virtualmachine/bytecode.ts";

export class LyraScriptProgram {
	private readonly environment: Environment = new Environment();
	private readonly objectRegistry: ObjectRegistry = new ObjectRegistry();
	private readonly eventPipeline: EventPipeline;
	private readonly compiler: Compiler = new Compiler();
	private readonly virtualMachine: VirtualMachine = new VirtualMachine(this.objectRegistry, this.environment);
	private readonly typeChecker: TypeChecker = new TypeChecker(this.objectRegistry);
	private readonly linker: Linker = new Linker(this.environment, this.objectRegistry, new FetchFileLoader());

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


	getGlobalEnvironment(): Environment {
		return this.environment;
	}

	getGlobalEventPipeline(): EventPipeline {
		return this.eventPipeline;
	}

	async executeSource(source: Source): Promise<void> {
		return this.runPipeline(source)
		           .then((ast: ASTNode): void => {
			           this.debugMeasureStartTime();
			           this.interpreter.run(ast);
			           this.debugMeasureEndTime('interpreter');
		           });
	}

	async executeTest(source: Source): Promise<void> {
		return this.runPipeline(source)
		           .then((ast: ASTNode): void => {
			           this.debugMeasureStartTime();
			           this.testSuite.run(ast);
			           this.debugMeasureEndTime('test');
		           });
	}

	async compileSource(source: Source): Promise<ByteCodeInstructions> {
		return this.runPipeline(source)
		           .then((ast: ASTNode): ByteCodeInstructions => {
			           this.debugMeasureStartTime();
			           const bytecode: ByteCodeInstructions = this.compiler.compile(ast);
			           this.debugMeasureEndTime('compiler');
			           return bytecode;
		           });
	}

	executeBytecode(bytecode: ByteCodeInstructions): void {
		console.log(this.virtualMachine.execute(bytecode));
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
		this.debugMeasureStartTime()
		const ast: ASTNode = new Parser(source).parse();
		this.debugMeasureEndTime('parser')
		this.debug(ast);

		return this.linker.linkSources(ast)
		           .then((): void => {
			           this.typeChecker.collectAllSymbolsFromRegistry(this.objectRegistry);
		           })
		           .then((): ASTNode => {
			           this.debugMeasureStartTime();
			           this.typeChecker.check(ast);
			           this.debugMeasureEndTime('typechecker');

			           return ast;
		           });
	}
}
