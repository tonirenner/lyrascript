import {Parser} from "./core/parser";
import {Interpreter} from "./core/interpreter";
import {Environment} from "./core/interpreter_objects";
import {ObjectRegistry} from "./core/interpreter_registry";
import {TypeChecker} from "./core/typechecker";
import {Linker} from "./core/linker";
import {FetchFileLoader} from "./core/loaders";
import {TestSuites} from "./core/testsuites";
import {wrapJsError} from "./core/errors";
import {Source} from "./core/parser_source";
import type {ASTNode} from "./core/ast.ts";
import {Tokenizer} from "./core/tokenizer.ts";
import type {Token} from "./language/grammar.ts";

export class LyraScript {
	private globalEnv: Environment = new Environment();
	private globalObjectRegistry: ObjectRegistry = new ObjectRegistry();
	private typeChecker: TypeChecker = new TypeChecker(this.globalObjectRegistry);
	private linker: Linker = new Linker(this.globalEnv, this.globalObjectRegistry, new FetchFileLoader());
	private interpreter: Interpreter = new Interpreter(this.globalEnv, this.globalObjectRegistry);
	private testSuite: TestSuites = new TestSuites(this.globalEnv, this.globalObjectRegistry);

	private readonly isDebug: boolean = false;
	private startTime: number = 0;

	constructor(isDebug: boolean = false) {
		this.isDebug = isDebug;
	}

	async run(source: Source): Promise<void> {
		return this.runPipeline(source)
		           .then((ast: ASTNode) => {
			           this.debugMeasureStartTime();
			           this.interpreter.run(ast);
			           this.debugMeasureEndTime('interpreter');
		           });
	}

	async test(source: Source): Promise<void> {
		return this.runPipeline(source)
		           .then((ast: ASTNode) => {
			           this.debugMeasureStartTime();
			           this.testSuite.run(ast);
			           this.debugMeasureEndTime('test');
		           });
	}

	private runPipeline(source: Source): Promise<ASTNode> {
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

export async function fetchSource(url: string): Promise<Source> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to load script: ${url}`);
	}

	return new Source(await response.text());
}

export async function run(url: string, isDebug: boolean = false): Promise<void> {
	return await runFromSource(await fetchSource(url), isDebug);
}

export async function runFromSource(source: Source, isDebug: boolean = false): Promise<void> {
	try {
		const lyraScript = new LyraScript(isDebug);

		return await lyraScript.run(source);
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}
		throw error;
	}
}

export async function runFromString(code: string, isDebug: boolean = false): Promise<void> {
	const source = new Source(code);

	try {
		const lyraScript = new LyraScript(isDebug);

		return await lyraScript.run(source);
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}
		throw error;
	}
}

export async function test(url: string, isDebug: boolean = false): Promise<void> {
	return await testFromSource(await fetchSource(url), isDebug);
}

export async function testFromSource(source: Source, isDebug = false): Promise<void> {
	try {
		const lyraScript = new LyraScript(isDebug);

		return await lyraScript.test(source);
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}
		throw error;
	}
}

export async function testFromString(code: string, isDebug: boolean = false): Promise<void> {
	const source = new Source(code);

	try {
		const lyraScript = new LyraScript(isDebug);

		return await lyraScript.test(source);
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}
		throw error;
	}
}

export async function tokens(url: string): Promise<Token[]> {
	return new Tokenizer(await fetchSource(url)).tokenize();
}

export async function ast(url: string): Promise<ASTNode> {
	return new Parser(await fetchSource(url)).parse();
}
