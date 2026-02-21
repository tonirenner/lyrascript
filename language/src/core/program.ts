import {Source} from "./parser/parser_source";
import {Environment} from "./interpreter/interpreter_objects";
import {ObjectRegistry} from "./interpreter/interpreter_registry";
import {TypeChecker} from "./types/typechecker";
import {Linker} from "./linker/linker";
import {TestSuites} from "./tests/testsuites";
import {Interpreter} from "./interpreter/interpreter";
import {FetchFileLoader} from "./loaders";
import {ASTNode} from "./ast";
import {Parser} from "./parser/parser";
import {EventPipeline} from "./event/pipeline";

export class LyraScriptProgram {
	private globalEnvironment: Environment = new Environment();
	private globalObjectRegistry: ObjectRegistry = new ObjectRegistry();
	private globalEventPipeline: EventPipeline;

	private typeChecker: TypeChecker = new TypeChecker(this.globalObjectRegistry);
	private linker: Linker = new Linker(this.globalEnvironment, this.globalObjectRegistry, new FetchFileLoader());

	private interpreter: Interpreter;
	private testSuite: TestSuites;

	private readonly isDebug: boolean = false;
	private startTime: number = 0;

	constructor(isDebug: boolean = false, globalEventPipeline: EventPipeline = new EventPipeline()) {
		this.isDebug = isDebug;

		this.interpreter = new Interpreter(
			this.globalEnvironment,
			this.globalObjectRegistry,
			globalEventPipeline
		);

		this.testSuite = new TestSuites(
			this.globalEnvironment,
			this.globalObjectRegistry,
			globalEventPipeline
		);

		this.globalEventPipeline = globalEventPipeline;
	}

	getGlobalObjectRegistry(): ObjectRegistry {
		return this.globalObjectRegistry;
	}


	getGlobalEnvironment(): Environment {
		return this.globalEnvironment;
	}

	getGlobalEventPipeline(): EventPipeline {
		return this.globalEventPipeline;
	}

	async execute(source: Source): Promise<void> {
		return this.runPipeline(source)
		           .then((ast: ASTNode) => {
			           this.debugMeasureStartTime();
			           this.interpreter.run(ast);
			           this.debugMeasureEndTime('interpreter');
		           });
	}

	async executeTest(source: Source): Promise<void> {
		return this.runPipeline(source)
		           .then((ast: ASTNode) => {
			           this.debugMeasureStartTime();
			           this.testSuite.run(ast);
			           this.debugMeasureEndTime('test');
		           });
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
		           .then(() => {
			           this.typeChecker.collectAllSymbolsFromRegistry(this.globalObjectRegistry);
		           })
		           .then(() => {
			           this.debugMeasureStartTime();
			           this.typeChecker.check(ast);
			           this.debugMeasureEndTime('typechecker');

			           return ast;
		           });
	}
}
