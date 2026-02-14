import {Source, Span} from "./parser_source";

class ErrorTypes {
	static TYPE_ERROR: string = 'TypeError';
	static TOKEN_ERROR: string = 'TokenError';
	static PARSER_ERROR: string = 'ParserError';
	static RUNTIME_ERROR: string = 'RuntimeError';
	static INTERNAL_ERROR: string = 'InternalError';
}

export class LyraError extends Error {
	kind: string;
	span: Span | null = null;
	override cause: string | null = null;

	constructor(
		kind: string,
		message: string,
		span: Span | null = null,
		cause: string | null = null
	) {
		super(message);
		this.kind = kind;
		this.span = span;
		this.cause = cause;
	}

	format(): string {
		if (this.span) {

			return `
[${this.kind}] ${this.message}
  at ${this.span.source.url}:${this.span.line}:${this.span.column}

${this.span.text()}
${" ".repeat(this.span.column)}${"^".repeat(this.span.end - this.span.start)}
`;
		}

		return `[${this.kind}] ${this.message}`;
	}
}

export class LyraTokenError extends LyraError {
	constructor(message: string, span: Span | null = null, cause: string | null = null) {
		super(
			ErrorTypes.TOKEN_ERROR,
			message,
			span,
			cause
		);
	}
}

export class LyraTypeError extends LyraError {
	constructor(message: string, span: Span | null = null, cause: string | null = null) {
		super(
			ErrorTypes.TYPE_ERROR,
			message,
			span,
			cause
		);
	}
}

export class LyraParserError extends LyraError {
	constructor(message: string, span: Span | null = null, cause: string | null = null) {
		super(
			ErrorTypes.PARSER_ERROR,
			message,
			span,
			cause
		);
	}
}

export class LyraRuntimeError extends LyraError {
	constructor(message: string, span: Span | null = null, cause: string | null = null) {
		super(
			ErrorTypes.RUNTIME_ERROR,
			message,
			span,
			cause
		);
	}
}

/**
 * @throws {Error}
 */
export function throwTokenError(message: string, span: Span | null = null, cause: string | null = null): LyraTokenError {
	throw new LyraTokenError(message, span, cause);
}

/**
 * @throws {Error}
 */
export function throwTypeError(message: string, span: Span | null = null, cause: string | null = null): LyraTypeError {
	throw new LyraTypeError(message, span, cause);
}

/**
 * @throws {Error}
 */
export function throwParserError(message: string, span: Span | null = null, cause: string | null = null): LyraParserError {
	throw new LyraParserError(message, span, cause);
}

/**
 * @throws {Error}
 */
export function throwRuntimeError(message: string, span: Span | null = null, cause: string | null = null): LyraRuntimeError {
	throw new LyraRuntimeError(message, span, cause);
}

/**
 * @throws {Error}
 */
export function wrapJsError(error: Error, source: Source): LyraError {
	if (error instanceof LyraError) {
		return error;
	}

	return new LyraError(
		ErrorTypes.INTERNAL_ERROR,
		error.message || String(error),
		new Span(source, 0, source.length)
	);
}
