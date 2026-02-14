import {GRAMMAR, Rules, Token, TokenType} from "./grammar.ts";
import {throwTokenError} from "./errors";
import type {Source} from "./parser_source.ts";

export class Tokenizer {
	rules = new Rules();

	source: Source;

	constructor(source: Source) {
		this.source = source;
	}

	getTokenStream(): TokenStream {
		return new TokenStream(this.tokenize());
	}

	tokenize(): Token[] {
		const tokens: Token[] = [];

		let i: number      = 0;
		let line: number   = 1;
		let column: number = 0;

		while (i < this.source.length) {
			if (this.source.charAt(i) === '\n') {
				line++;
				column = 0;
			} else {
				column++;
			}

			if (this.matchWhitespaceAt(i)) {
				i++;
				continue;
			}

			const lineComment = this.matchLineCommentAt(i);
			if (lineComment) {
				tokens.push(lineComment.withLineAndColumn(line, column));
				i = lineComment.end + 1;

				line++;
				column = 0;
				continue;
			}

			const string = this.matchStringAt(i);
			if (string) {
				tokens.push(string.withLineAndColumn(line, column));
				i = string.end + 1;

				column += this.columOffset(string);
				continue;
			}

			const number = this.matchNumberAt(i);
			if (number) {
				tokens.push(number.withLineAndColumn(line, column));
				i = number.end;

				column += this.columOffset(number);
				continue;
			}

			const identifier = this.matchIdentifierAt(i);
			if (identifier) {
				tokens.push(identifier.withLineAndColumn(line, column));
				i = identifier.end;

				column += this.columOffset(identifier);
				continue;
			}

			const operator = this.matchOperatorAt(i);
			if (operator) {
				tokens.push(operator.withLineAndColumn(line, column));
				i = operator.end + 1;

				column += this.columOffset(operator);
				continue;
			}

			const punctuation = this.matchPunctuationAt(i);
			if (punctuation) {
				tokens.push(punctuation.withLineAndColumn(line, column));
				i = punctuation.end + 1;

				column += this.columOffset(punctuation);
				continue;
			}

			const annotation = this.matchAnnotationAt(i);
			if (annotation) {
				tokens.push(annotation.withLineAndColumn(line, column));
				i = annotation.end + 1;

				column += this.columOffset(annotation);
				continue;
			}

			throwTokenError('Unexpected character: ' + this.source.charAt(i));
		}

		tokens.push(
			this.eof(i)
			    .withLineAndColumn(line, column)
		);

		return tokens;
	}

	eof(end: number): Token {
		return new Token(TokenType.EOF, '', end, end, this.source)
	}

	columOffset(token: Token): number {
		return token.value.length - 1;
	}

	matchWhitespaceAt(i: number): boolean {
		return this.rules.isWhitespace(this.source.charAt(i));
	}

	matchNumberAt(i: number): Token | null {
		if (!this.rules.isNumeric(this.source.charAt(i))) {
			return null
		}
		let start = i;
		while (this.rules.isNumeric(this.source.charAt(i))) i++;
		return new Token(TokenType.NUMBER, this.source.slice(start, i), start, i, this.source);
	}

	matchStringAt(i: number): Token | null {
		if (this.source.charAt(i) !== '"') {
			return null;
		}
		let start = ++i;
		while (this.source.charAt(i) !== '"') i++;
		return new Token(TokenType.STRING, this.source.slice(start, i), start, i, this.source);
	}

	matchIdentifierAt(i: number): Token | null {
		if (!this.rules.isAlpha(this.source.charAt(i))) {
			return null;
		}
		let start = i;
		let j     = i;
		while (this.rules.isAlphaNumeric(this.source.charAt(j))) j++;
		const value = this.source.slice(start, j);

		let type = TokenType.IDENTIFIER;
		if ([GRAMMAR.TRUE, GRAMMAR.FALSE].includes(value)) {
			type = TokenType.BOOLEAN;
		} else if (Rules.KEYWORDS.has(value)) {
			type = TokenType.KEYWORD;
		}

		return new Token(type, value, start, j, this.source);
	}

	matchOperatorAt(i: number): Token | null {
		const chars = this.source.charAt(i) + this.source.charAt(i + 1);
		if (Rules.OPERATORS.has(chars)) {
			return new Token(TokenType.OPERATOR, chars, i, i + 1, this.source);
		}

		if (Rules.OPERATORS.has(this.source.charAt(i))) {
			return new Token(TokenType.OPERATOR, this.source.charAt(i), i, i, this.source);
		}

		return null;

	}

	matchPunctuationAt(i: number): Token | null {
		if (!Rules.PUNCTUATIONS.has(this.source.charAt(i))) {
			return null;
		}
		return new Token(TokenType.PUNCTUATION, this.source.charAt(i), i, i, this.source);
	}

	matchLineCommentAt(i: number): Token | null {
		if (!this.source.startsWith(Rules.COMMENT_LINE, i)) {
			return null;
		}
		let j = i + Rules.COMMENT_LINE.length;
		while (j < this.source.length && this.source.charAt(j) !== '\n') j++;
		return new Token(TokenType.COMMENT, this.source.slice(i, j), i, j, this.source);
	}

	matchAnnotationAt(i: number): Token | null {
		if (this.source.charAt(i) !== '@') {
			return null;
		}

		let start = i + 1;
		let j     = i + 1;
		while (this.rules.isAlpha(this.source.charAt(j))) j++;
		const value = this.source.slice(start, j);

		return new Token(TokenType.ANNOTATION, value, start, j, this.source);
	}
}

export class TokenStream {
	tokens: Token[];
	index: number = 0;

	constructor(tokens: Token[]) {
		this.tokens = tokens;
	}

	rewind(): void {
		if (this.index > 0) {
			this.index--;
		}
	}

	peek(): Token | null {
		return this.tokens[this.index] || null;
	}

	next(): Token | null {
		return this.tokens[this.index++] || null;
	}

	hasNext(): boolean {
		return this.index < this.tokens.length;
	}
}
