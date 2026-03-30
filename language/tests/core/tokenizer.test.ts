import {describe, expect, it} from "bun:test";
import {TokenType} from "../../src/core/syntax/ast_grammar.ts";
import {Source} from "../../src/core/syntax/source.ts";
import {Tokenizer} from "../../src/core/syntax/tokenizer.ts";

describe("Tokenizer", () => {
	it("tokenizes annotations, keywords and literals", () => {
		const source = new Source('@test(title = "demo") let value: number = 42;');
		const tokens = new Tokenizer(source).tokenize();

		expect(tokens.map(token => token.type))
			.toEqual([
				         TokenType.ANNOTATION,
				         TokenType.IDENTIFIER,
				         TokenType.OPERATOR,
				         TokenType.STRING,
				         TokenType.PUNCTUATION,
				         TokenType.KEYWORD,
				         TokenType.IDENTIFIER,
				         TokenType.PUNCTUATION,
				         TokenType.IDENTIFIER,
				         TokenType.OPERATOR,
				         TokenType.NUMBER,
				         TokenType.PUNCTUATION,
				         TokenType.EOF
			         ]);
	});

	it("classifies booleans as boolean tokens", () => {
		const source = new Source("true false;");
		const tokens = new Tokenizer(source).tokenize();

		expect(tokens[0]?.type)
			.toBe(TokenType.BOOLEAN);
		expect(tokens[0]?.value)
			.toBe("true");
		expect(tokens[1]?.type)
			.toBe(TokenType.BOOLEAN);
		expect(tokens[1]?.value)
			.toBe("false");
	});
});
