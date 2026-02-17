import {Token, TokenType} from "./grammar";
import {TokenStream} from "./tokenizer";
import {parseProgram} from "./parser_statments";
import {throwParserError} from "./errors";
import {Source} from "./parser_source";


export class Parser {
	source: Source;
	tokenStream: TokenStream | null = null;

	constructor(source: Source) {
		this.source = source;
	}

	parse() {
		this.tokenStream = this.source
		                       .getTokenizer()
		                       .getTokenStream()

		return parseProgram(this);
	}

	stream(): TokenStream {
		if (!this.tokenStream) {
			throwParserError('Parser has not been parsed yet.');
		}

		return this.tokenStream;
	}

	expect(tokenType: string, keyword: string | null = null): Token {
		const token = this
			.stream()
			.next();

		if (!token) {
			throwParserError(`Unexpected end of file. Expected ${tokenType}${keyword ? ' ' + keyword : ''}`);
		}

		if (token.type !== tokenType || (keyword && token.value !== keyword)) {
			throwParserError(`Expected ${tokenType}${keyword ? ' ' + keyword : ''}, got ${token.type} ${token.value}`);
		}

		return token;
	}

	expectOperator(keyword: string | null = null): Token {
		return this.expect(TokenType.OPERATOR, keyword);
	}

	expectAnnotation(): Token {
		return this.expect(TokenType.ANNOTATION);
	}

	expectIdentifier(keyword: string | null = null): Token {
		return this.expect(TokenType.IDENTIFIER, keyword);
	}

	expectKeyword(keyword: string | null = null): Token {
		return this.expect(TokenType.KEYWORD, keyword);
	}

	expectString(): Token {
		return this.expect(TokenType.STRING);
	}

	expectPunctuation(keyword: string | null = null): Token {
		return this.expect(TokenType.PUNCTUATION, keyword);
	}

	expectOneOf(tokenTypes: string[], keywords: string | null = null): Token {
		const token = this
			.stream()
			.next();

		if (!token) {
			throwParserError(`Unexpected end of file. Expected one of types ${tokenTypes}, got null.`);
		}

		if (!tokenTypes.includes(token.type)) {
			throwParserError(`Expected one of types ${tokenTypes}, got ${token.type}`);
		}

		if (keywords && !keywords.includes(token.value)) {
			throwParserError(`Expected one of values ${keywords}, got ${token.value}`);
		}

		return token;
	}

	consumeIf(tokenType: string, keyword: string | null = null): boolean {
		const token = this.peek();

		if (token.type === tokenType && (keyword && token.value === keyword)) {
			this.next();
			return true;
		}

		return false;
	}

	consumeIfPunctuation(value: string): boolean {
		return this.consumeIf(TokenType.PUNCTUATION, value);
	}

	consumeIfOperator(value: string): boolean {
		return this.consumeIf(TokenType.OPERATOR, value);
	}

	consumeIfComment(): boolean {
		return this.consumeIf(TokenType.COMMENT);
	}

	consumeIfKeyword(keyword: string): boolean {
		return this.consumeIf(TokenType.KEYWORD, keyword);
	}

	peek(): Token {
		const token = this
			.stream()
			.peek();

		if (token === null) {
			throwParserError('Unexpected end of file. Expected token, got null.');
		}

		return token;
	}

	peekIs(keyword: string): boolean {
		return this.peek().value === keyword;
	}

	next(): Token {
		const token = this
			.stream()
			.next();

		if (token === null) {
			throwParserError('Unexpected end of file. Expected token, got null.');
		}

		return token;
	}

	rewind(): void {
		this.stream()
		    .rewind();
	}

	position(): number {
		return this.stream().index;
	}

	seekAt(position: number): void {
		this.stream().index = position;
	}
}
