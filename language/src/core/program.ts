import {Source} from "./parser_source";
import {Environment} from "./interpreter_objects";
import {ObjectRegistry} from "./interpreter_registry";
import {TypeChecker} from "./typechecker";
import {Linker} from "./linker";
import {TestSuites} from "./testsuites";
import {Interpreter} from "./interpreter";
import {FetchFileLoader} from "./loaders";
import {ASTNode} from "./ast";
import {Parser} from "./parser";

export class LyraScriptProgram {
	private globalEnvironment: Environment = new Environment();
	private globalObjectRegistry: ObjectRegistry = new ObjectRegistry();

	private typeChecker: TypeChecker = new TypeChecker(this.globalObjectRegistry);

	private linker: Linker = new Linker(this.globalEnvironment, this.globalObjectRegistry, new FetchFileLoader());

	private interpreter: Interpreter = new Interpreter(this.globalEnvironment, this.globalObjectRegistry);

	private testSuite: TestSuites = new TestSuites(this.globalEnvironment, this.globalObjectRegistry);

	private readonly isDebug: boolean = false;
	private startTime: number = 0;

	constructor(isDebug: boolean = false) {
		this.isDebug = isDebug;
	}

	getGlobalObjectRegistry(): ObjectRegistry {
		return this.globalObjectRegistry;
	}


	getGlobalEnvironment(): Environment {
		return this.globalEnvironment;
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
}
