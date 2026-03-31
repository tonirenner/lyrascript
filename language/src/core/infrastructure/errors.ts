import {Source, SourceSpan} from "../syntax/source.ts";
import type {StackFrame} from "../model/runtime_model.ts";

class ErrorTypes {
	static TYPE_ERROR: string = 'TypeError';
	static TOKEN_ERROR: string = 'TokenError';
	static PARSER_ERROR: string = 'ParserError';
	static RUNTIME_ERROR: string = 'RuntimeError';
	static INTERNAL_ERROR: string = 'InternalError';
	static NATIVE_ERROR: string = 'NativeError';
	static DEPENDENCY_ERROR: string = 'DependencyError';
	static COMPILE_ERROR: string = 'CompileError';
	static VIRTUAL_MACHINE_ERROR: string = 'VirtualMachineError';
}

export class LyraError extends Error {
	kind: string;
	span: SourceSpan | null = null;
	override cause: string | null = null;
	stackFrames: StackFrame[] = [];

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
		const location: string = this.span
		                         ? `\n  at ${this.span.source.url}:${this.span.line}:${this.span.column}\n\n${this.formatSpanSnippet({
			                         lineText: this.span.lineText(),
			                         column: this.span.column,
			                         length: this.span.highlightLength()
		                         })}\n`
		                         : "";
		const stackTrace = this.formatStackTrace();

		return `[${this.kind}] ${this.message}${location}${stackTrace}`;
	}

	private formatStackTrace(): string {
		if (this.stackFrames.length === 0) {
			return "";
		}

		const lines = this.stackFrames.map((frame: StackFrame): string => {
			const qualifiedName = frame.className
				? `${frame.className}.${frame.name}`
				: frame.name;
			const location = frame.span
				? `${frame.span.source}:${frame.span.line}:${frame.span.column}`
				: "<native>";
			const snippet = frame.span
				? `\n\n${this.formatSpanSnippet(frame.span)}`
				: "";

			return `  at ${qualifiedName} (${location})${snippet}`;
		});

		return `\nStacktrace:\n${lines.join("\n")}`;
	}

	private formatSpanSnippet(span: {lineText: string; column: number; length: number}): string {
		return `${span.lineText}\n${" ".repeat(Math.max(0, span.column - 1))}${"^".repeat(Math.max(1, span.length))}`;
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

export class LyraCompileError extends LyraError {
	constructor(message: string, span: SourceSpan | null = null, cause: string | null = null) {
		super(
			ErrorTypes.COMPILE_ERROR,
			message,
			span,
			cause
		);
	}
}

export class VirtualMachineError extends LyraError {
	constructor(message: string, span: SourceSpan | null = null, cause: string | null = null) {
		super(
			ErrorTypes.VIRTUAL_MACHINE_ERROR,
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

export function throwDependencyError(
	message: string,
	span: SourceSpan | null = null,
	cause: string | null = null
): never {
	throw new LyraDependencyError(message, span, cause);
}

export function throwCompileError(message: string, span: SourceSpan | null = null, cause: string | null = null): never {
	throw new LyraCompileError(message, span, cause);
}

export function throwVirtualMachineError(
	message: string,
	span: SourceSpan | null = null,
	cause: string | null = null
): never {
	throw new VirtualMachineError(message, span, cause);
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




