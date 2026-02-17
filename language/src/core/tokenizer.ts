import {GRAMMAR, Rules, Token, TokenType} from "./grammar";
import {throwTokenError} from "./errors";
import type {Source} from "./parser_source";

export class Tokenizer {
	private readonly rules = new Rules();
	private readonly source: Source;
	private tokenizingVDom: boolean = false;

	constructor(source: Source) {
		this.source = source;
	}

	getTokenStream(): TokenStream {
		return new TokenStream(this.tokenize());
	}

	tokenize(): Token[] {
		const tokens: Token[] = [];

		let i: number = 0;
		let line: number = 1;
		let column: number = 0;

		const ifIsConsumingLineComment = (): boolean => {
			const lineComment: Token | null = this.matchLineCommentAt(i);
			if (lineComment) {
				tokens.push(lineComment.withLineAndColumn(line, column));
				i = lineComment.end + 1;

				line++;
				column = 0;
				return true;
			}
			return false;
		}

		const ifIsConsumingString = (): boolean => {
			const string: Token | null = this.matchStringAt(i);
			if (string) {
				tokens.push(string.withLineAndColumn(line, column));
				i = string.end + 1;

				column += this.columOffset(string);
				return true;
			}
			return false;
		}

		const ifIsConsumingIdentifier = (): boolean => {
			const identifier: Token | null = this.matchIdentifierAt(i);
			if (identifier) {
				tokens.push(identifier.withLineAndColumn(line, column));
				i = identifier.end;

				column += this.columOffset(identifier);

				this.switchToVDomTokenizationIfNeeded(identifier);
				return true;
			}
			return false;
		}

		const ifIsConsumingNumber = (): boolean => {
			const number: Token | null = this.matchNumberAt(i);
			if (number) {
				tokens.push(number.withLineAndColumn(line, column));
				i = number.end;

				column += this.columOffset(number);
				return true;
			}
			return false;
		}

		const ifIsConsumingOperator = (operators: Set<string>): boolean => {
			const operator: Token | null = this.matchOperatorAt(i, operators);
			if (operator) {
				tokens.push(operator.withLineAndColumn(line, column));
				i = operator.end + 1;

				column += this.columOffset(operator);
				return true;
			}
			return false;
		}

		const ifIsConsumingAnnotation = (): boolean => {
			const annotation: Token | null = this.matchAnnotationAt(i);
			if (annotation) {
				tokens.push(annotation.withLineAndColumn(line, column));
				i = annotation.end + 1;

				column += this.columOffset(annotation);
				return true;
			}

			return false;
		}

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

			if (ifIsConsumingLineComment()) {
				continue;
			}

			const punctuation: Token | null = this.matchPunctuationAt(i);
			this.switchToVNormalTokenizationIfNeeded(punctuation);

			if (this.tokenizingVDom) {
				if (ifIsConsumingIdentifier()
					|| ifIsConsumingOperator(Rules.DOM_OPERATORS)) {
					continue;
				}

				const token: Token | undefined = tokens[tokens.length - 1];
				if (token) {
					token.value += this.source.charAt(i);

					i++;
					column++;
					continue;
				}
			} else {
				if (punctuation) {
					tokens.push(punctuation.withLineAndColumn(line, column));
					i = punctuation.end + 1;

					column += this.columOffset(punctuation);
					continue;
				}

				if (ifIsConsumingString()
					|| ifIsConsumingNumber()
					|| ifIsConsumingIdentifier()
					|| ifIsConsumingOperator(Rules.OPERATORS)
					|| ifIsConsumingAnnotation()) {
					continue;
				}
			}

			throwTokenError('Unexpected character: ' + this.source.charAt(i));
		}

		tokens.push(
			this.eof(i)
			    .withLineAndColumn(line, column)
		);

		return tokens;
	}

	switchToVDomTokenizationIfNeeded(token: Token | null): void {
		if (!token) {
			return;
		}
		if (token.value === GRAMMAR.VDOM) {
			this.tokenizingVDom = true;
		}
	}

	switchToVNormalTokenizationIfNeeded(token: Token | null): void {
		if (!token) {
			return;
		}
		if (this.tokenizingVDom && token.value === GRAMMAR.SEMICOLON) {
			this.tokenizingVDom = false;
		}
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
		let j = i;
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

	matchOperatorAt(i: number, operators: Set<string>): Token | null {
		const chars = this.source.charAt(i) + this.source.charAt(i + 1);
		if (operators.has(chars)) {
			return new Token(TokenType.OPERATOR, chars, i, i + 1, this.source);
		}

		if (operators.has(this.source.charAt(i))) {
			return new Token(TokenType.OPERATOR, this.source.charAt(i), i, i, this.source);
		}

		return null;
	}

	matchPunctuationAt(i: number): Token | null {
		const chars = this.source.charAt(i) + this.source.charAt(i + 1);
		if (Rules.PUNCTUATIONS.has(chars)) {
			return new Token(TokenType.PUNCTUATION, chars, i, i + 1, this.source);
		}

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
		let j = i + 1;
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
