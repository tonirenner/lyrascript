import {Parser} from "./core/parser.ts";
import {wrapJsError} from "./core/shared/errors.ts";
import {fetchSource, Source} from "./core/parser/source";
import {ASTNode} from "./core/shared/ast.ts";
import {Tokenizer} from "./core/tokenizer.ts";
import {Token} from "./core/shared/grammar.ts";
import {LyraScriptProgram} from "./core/program";
import {EventPipeline} from "./core/shared/event_pipeline.ts";
import {State} from "./core/shared/state.ts";
import {HTMLElementCreator} from "./host/dom";
import type {ByteCodeInstructions} from "./core/virtualmachine/bytecode.ts";


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
	compileSource: (source: Source, isDebug: boolean = false): Promise<ByteCodeInstructions> => compileSource(source,
	                                                                                                          isDebug),
	compileFromUrl: (url: string, isDebug: boolean = false): Promise<ByteCodeInstructions> => compileFromUrl(url,
	                                                                                                         isDebug),
	executeBytecode: (bytecode: ByteCodeInstructions, isDebug: boolean = false): void => executeBytecode(bytecode,
	                                                                                                     isDebug),
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
			.executeSource(source);
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}
		throw error;
	}
}

async function compileSource(source: Source, isDebug: boolean = false): Promise<ByteCodeInstructions> {
	try {
		return await Program(isDebug)
			.compileSource(source);
	} catch (error) {
		if (error instanceof Error) {
			console.error(wrapJsError(error, source)
				              .format());
		}
		throw error;
	}
}

async function compileFromUrl(url: string, isDebug: boolean = false): Promise<ByteCodeInstructions> {
	return await compileSource(await fetchSource(url), isDebug);
}

function executeBytecode(bytecode: ByteCodeInstructions, isDebug: boolean = false): void {
	Program(isDebug)
		.executeBytecode(bytecode);
}

async function executeFromUrl(url: string, isDebug: boolean = false): Promise<void> {
	return await execute(await fetchSource(url), isDebug);
}

async function executeFromString(code: string, isDebug: boolean = false): Promise<void> {
	const source = new Source(code);

	try {
		return await Program(isDebug)
			.executeSource(source);
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
