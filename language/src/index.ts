import {Parser} from "./core/parser";
import {wrapJsError} from "./core/errors";
import {fetchSource, Source} from "./core/parser_source";
import {ASTNode} from "./core/ast";
import {Tokenizer} from "./core/tokenizer";
import {Token} from "./core/grammar";
import {LyraScriptProgram} from "./core/program.ts";

export {Tokenizer} from "./core/tokenizer";
export {Parser} from "./core/parser";
export {Source} from "./core/parser_source";
export {WebLyraScript} from "./host/engine";
export {WebApplicationRuntime} from "./host/runtime";

export function Program(isDebug: boolean = false): LyraScriptProgram {
	return new LyraScriptProgram(isDebug);
}

export async function executeSourceFromUrl(url: string, isDebug: boolean = false): Promise<void> {
	return await executeSource(await fetchSource(url), isDebug);
}

export async function executeSource(source: Source, isDebug: boolean = false): Promise<void> {
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

export async function executeSourceFromString(code: string, isDebug: boolean = false): Promise<void> {
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

export async function executeTestFromUrl(url: string, isDebug: boolean = false): Promise<void> {
	return await executeTestFromSource(await fetchSource(url), isDebug);
}

export async function executeTestFromSource(source: Source, isDebug = false): Promise<void> {
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

export async function executeTestFromString(code: string, isDebug: boolean = false): Promise<void> {
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

export async function tokens(url: string): Promise<Token[]> {
	return tokensFromSource(await fetchSource(url));
}

export function tokensFromSource(source: Source): Token[] {
	return new Tokenizer(source).tokenize();
}

export async function ast(url: string): Promise<ASTNode> {
	return astFromSource(await fetchSource(url));
}

export function astFromSource(source: Source): ASTNode {
	return new Parser(source).parse();
}
