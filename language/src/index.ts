import {Parser} from "./core/parser.ts";
import {wrapJsError} from "./core/infrastructure/errors.ts";
import {fetchSource, Source} from "./core/syntax/source.ts";
import {ASTNode} from "./core/syntax/ast.ts";
import {Tokenizer} from "./core/syntax/tokenizer.ts";
import {Token} from "./core/syntax/ast_grammar.ts";
import {LyraScriptProgram} from "./core/program.ts";
import {EventPipeline} from "./core/infrastructure/event_pipeline.ts";
import {State} from "./core/infrastructure/runtime_state.ts";
import {HTMLElementCreator} from "./host/dom/dom_patcher.ts";

export {WebLyraScript} from "./host/engine/web_engine.ts";
export {WebApplicationRuntime} from "./host/runtime/application_runtime.ts";

const Lyra = {
	Source,
	Parser,
	Tokenizer,
	EventPipeline,
	HTMLElementCreator,
	State,
	Program: createProgram,
	execute,
	executeFromString,
	executeFromUrl,
	executeTest,
	executeTestString,
	executeTestUrl,
	tokenize: (source: Source): Token[] => tokenize(source),
	tokenizeUrl: (url: string): Promise<Token[]> => tokenizeUrl(url),
	parseTree: (source: Source): ASTNode => parseTree(source),
	parseTreeUrl: (url: string): Promise<ASTNode> => parseTreeUrl(url),
};

function createProgram(isDebug: boolean = false): LyraScriptProgram {
	return new LyraScriptProgram(isDebug);
}

async function execute(source: Source, isDebug: boolean = false): Promise<void> {
	return runWithSourceContext(
		source,
		() => createProgram(isDebug)
			.executeSource(source)
	);
}

async function executeFromUrl(url: string, isDebug: boolean = false): Promise<void> {
	return execute(await fetchSource(url), isDebug);
}

async function executeFromString(code: string, isDebug: boolean = false): Promise<void> {
	const source = new Source(code);
	return execute(source, isDebug);
}

async function executeTest(source: Source, isDebug = false): Promise<void> {
	return runWithSourceContext(
		source,
		() => createProgram(isDebug)
			.executeTest(source)
	);
}

async function executeTestUrl(url: string, isDebug: boolean = false): Promise<void> {
	return executeTest(await fetchSource(url), isDebug);
}

async function executeTestString(code: string, isDebug: boolean = false): Promise<void> {
	const source = new Source(code);
	return executeTest(source, isDebug);
}

async function runWithSourceContext<T>(source: Source, action: () => Promise<T>): Promise<T> {
	try {
		return await action();
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}

		throw error;
	}
}

export function tokenize(source: Source): Token[] {
	return new Tokenizer(source).tokenize();
}

export async function tokenizeUrl(url: string): Promise<Token[]> {
	return tokenize(await fetchSource(url));
}

export function parseTree(source: Source): ASTNode {
	return new Parser(source).parse();
}

export async function parseTreeUrl(url: string): Promise<ASTNode> {
	return parseTree(await fetchSource(url));
}

export default Lyra;




