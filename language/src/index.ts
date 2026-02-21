import {Parser} from "./core/parser/parser";
import {wrapJsError} from "./core/errors";
import {fetchSource, Source} from "./core/parser/parser_source";
import {ASTNode} from "./core/ast";
import {Tokenizer} from "./core/tokenizer/tokenizer";
import {Token} from "./core/grammar";
import {LyraScriptProgram} from "./core/program";
import {EventPipeline} from "./core/event/pipeline";
import {State} from "./core/event/state";
import {HTMLElementCreator} from "./host/dom";

export {WebLyraScript} from "./host/engine";
export {WebApplicationRuntime} from "./host/runtime";

const Lyra = {
	Source,
	Parser,
	Tokenizer,
	EventPipeline,
	HTMLElementCreator,
	State,
	Program: (isDebug: boolean): LyraScriptProgram => Program(isDebug),
	execute: (source: Source, isDebug: boolean = false): Promise<void> => execute(source, isDebug),
	executeFromString: (code: string, isDebug: boolean = false): Promise<void> => executeFromString(code, isDebug),
	executeFromUrl: async (url: string, isDebug: boolean = false): Promise<void> => executeFromUrl(url, isDebug),
	executeTest: (source: Source, isDebug: boolean = false): Promise<void> => executeTest(source, isDebug),
	executeTestString: (code: string, isDebug: boolean = false): Promise<void> => executeTestString(code, isDebug),
	executeTestUrl: (url: string, isDebug: boolean = false): Promise<void> => executeTestUrl(url, isDebug),
	tokenize: (source: Source): Token[] => tokenize(source),
	tokenizeUrl: (url: string): Promise<Token[]> => tokenizeUrl(url),
	parseTree: (source: Source): ASTNode => parseTree(source),
	parseTreeUrl: (url: string): Promise<ASTNode> => parseTreeUrl(url),
};

function Program(isDebug: boolean = false): LyraScriptProgram {
	return new LyraScriptProgram(isDebug);
}

async function execute(source: Source, isDebug: boolean = false): Promise<void> {
	try {
		return await Program(isDebug)
			.execute(source);
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}
		throw error;
	}
}

async function executeFromUrl(url: string, isDebug: boolean = false): Promise<void> {
	return await execute(await fetchSource(url), isDebug);
}

async function executeFromString(code: string, isDebug: boolean = false): Promise<void> {
	const source = new Source(code);

	try {
		return await Program(isDebug)
			.execute(source);
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}
		throw error;
	}
}

async function executeTest(source: Source, isDebug = false): Promise<void> {
	try {
		return await Program(isDebug)
			.executeTest(source);
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}
		throw error;
	}
}

async function executeTestUrl(url: string, isDebug: boolean = false): Promise<void> {
	return await executeTest(await fetchSource(url), isDebug);
}

async function executeTestString(code: string, isDebug: boolean = false): Promise<void> {
	const source = new Source(code);

	try {
		return await Program(isDebug)
			.executeTest(source);
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
