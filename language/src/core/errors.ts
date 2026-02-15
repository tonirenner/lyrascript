import {Source, SourceSpan} from "./parser_source";

class ErrorTypes {
	static TYPE_ERROR: string = 'TypeError';
	static TOKEN_ERROR: string = 'TokenError';
	static PARSER_ERROR: string = 'ParserError';
	static RUNTIME_ERROR: string = 'RuntimeError';
	static INTERNAL_ERROR: string = 'InternalError';
	static NATIVE_ERROR: string = 'NativeError';
	static DEPENDENCY_ERROR: string = 'DependencyError';
}

export class LyraError extends Error {
	kind: string;
	span: SourceSpan | null = null;
	override cause: string | null = null;

	constructor(
		kind: string,
		message: string,
		span: SourceSpan | null = null,
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
	constructor(message: string, span: SourceSpan | null = null, cause: string | null = null) {
		super(
			ErrorTypes.TOKEN_ERROR,
			message,
			span,
			cause
		);
	}
}

export class LyraTypeError extends LyraError {
	constructor(message: string, span: SourceSpan | null = null, cause: string | null = null) {
		super(
			ErrorTypes.TYPE_ERROR,
			message,
			span,
			cause
		);
	}
}

export class LyraParserError extends LyraError {
	constructor(message: string, span: SourceSpan | null = null, cause: string | null = null) {
		super(
			ErrorTypes.PARSER_ERROR,
			message,
			span,
			cause
		);
	}
}

export class LyraRuntimeError extends LyraError {
	constructor(message: string, span: SourceSpan | null = null, cause: string | null = null) {
		super(
			ErrorTypes.RUNTIME_ERROR,
			message,
			span,
			cause
		);
	}
}

export class LyraNativeError extends LyraError {
	constructor(message: string, span: SourceSpan | null = null, cause: string | null = null) {
		super(
			ErrorTypes.NATIVE_ERROR,
			message,
			span,
			cause
		);
	}
}

export class LyraDependencyError extends LyraError {
	constructor(message: string, span: SourceSpan | null = null, cause: string | null = null) {
		super(
			ErrorTypes.DEPENDENCY_ERROR,
			message,
			span,
			cause
		);
	}
}

export function throwTokenError(message: string, span: SourceSpan | null = null, cause: string | null = null): never {
	throw new LyraTokenError(message, span, cause);
}

export function throwTypeError(message: string, span: SourceSpan | null = null, cause: string | null = null): never {
	throw new LyraTypeError(message, span, cause);
}

export function throwParserError(message: string, span: SourceSpan | null = null, cause: string | null = null): never {
	throw new LyraParserError(message, span, cause);
}

export function throwRuntimeError(message: string, span: SourceSpan | null = null, cause: string | null = null): never {
	throw new LyraRuntimeError(message, span, cause);
}

export function throwNativeError(message: string, span: SourceSpan | null = null, cause: string | null = null): never {
	throw new LyraNativeError(message, span, cause);
}

export function throwDependencyError(message: string, span: SourceSpan | null = null, cause: string | null = null): never {
	throw new LyraDependencyError(message, span, cause);
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
		new SourceSpan(source, 0, source.length)
	);
}
