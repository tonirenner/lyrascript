import {Tokenizer} from "./tokenizer";
import {throwDependencyError} from "./errors";
import type {Token} from "./grammar";

export class Source {
	static NEWLINE = '\n';

	private code: string;
	public readonly url: string;

	constructor(code: string, url: string = '<inline>') {
		this.url = url;
		this.code = code;
	}

	get length(): number {
		return this.code.length;
	}

	getTokenizer(): Tokenizer {
		return new Tokenizer(this);
	}

	slice(start: number, end: number): string {
		return this.code.slice(start, end);
	}

	charAt(index: number): string {
		return this.code.charAt(index);
	}

	startsWith(text: string, position?: number): boolean {
		return this.code.startsWith(text, position);
	}
}

export class SourceSpan {
	source: Source;
	start: number;
	end: number;
	line: number;
	column: number;

	constructor(source: Source, start: number, end: number) {
		this.source = source;
		this.start = start;
		this.end = end;

		const before = source.slice(0, start);
		const lines = before.split(Source.NEWLINE);

		this.line = lines.length;
		this.column = (lines[lines.length - 1] || '').length + 1;
	}

	text(): string {
		return this.source.slice(this.start, this.end);
	}
}

export function spanFrom(startToken: Token, endToken: Token): SourceSpan {
	return new SourceSpan(startToken.source, startToken.start, endToken.end);
}

export async function fetchSource(url: string): Promise<Source> {
	const response = await fetch(url);
	if (!response.ok) {
		throwDependencyError(`Failed to load script: ${url}`);
	}

	return new Source(await response.text(), url);
}
