import type {Source} from "./parser_source.ts";

export class GRAMMAR {
	static IMPORT: string = 'import';
	static FROM: string = 'from';
	static LET: string = 'let';
	static OPEN: string = 'open';
	static CLASS: string = 'class';
	static INTERFACE: string = 'interface';
	static EXTENDS: string = 'extends';
	static IMPLEMENTS: string = 'implements';
	static CONSTRUCTOR: string = 'constructor';
	static NEW: string = 'new';
	static THIS: string = 'this';
	static PUBLIC: string = 'public';
	static PRIVATE: string = 'private';
	static STATIC: string = 'static';
	static READONLY: string = 'readonly';
	static RETURN: string = 'return';
	static SUPER: string = 'super';
	static TRUE: string = 'true';
	static FALSE: string = 'false';
	static IF: string = 'if';
	static ELSE: string = 'else';
	static MATCH: string = 'match';
	static DEFAULT: string = 'default';
	static FOREACH: string = 'foreach';
	static IN: string = 'in';
	static NULL: string = 'null';
	static VDOM: string = 'vdom';

	static BRACKET_SQUARE_OPEN: string = '[';
	static BRACKET_SQUARE_CLOSE: string = ']';
	static BRACE_OPEN: string = '{';
	static BRACE_CLOSE: string = '}';
	static PARENTHESES_OPEN: string = '(';
	static PARENTHESES_CLOSE: string = ')';
	static SEMICOLON: string = ';';
	static COLON: string = ':';
	static COMMA: string = ',';

	static ARROW: string = '->';
	static DOT: string = '.';
	static ASSIGN: string = '=';
	static PLUS: string = '+';
	static MINUS: string = '-';
	static DIVIDE: string = '/';
	static MULTIPLY: string = '*';
	static MODULUS: string = '%';

	static EXCLAMATION_MARK: string = '!';
	static QUESTION_MARK: string = '?';
	static LESS_THAN: string = '<';
	static GREATER_THAN: string = '>';
	static LESS_EQUAL: string = '<=';
	static GREATER_EQUAL: string = '>=';
	static EQUAL: string = '==';
	static NOT_EQUAL: string = '!=';
	static AND: string = '&&';
	static OR: string = '||';

	static XML_CLOSE_TAG: string = '/>';
	static XML_OPEN_CLOSE_TAG: string = '</';

	static KEYWORDS: string[] = [
		GRAMMAR.IMPORT,
		GRAMMAR.FROM,
		GRAMMAR.OPEN,
		GRAMMAR.CLASS,
		GRAMMAR.INTERFACE,
		GRAMMAR.EXTENDS,
		GRAMMAR.IMPLEMENTS,
		GRAMMAR.PUBLIC,
		GRAMMAR.PRIVATE,
		GRAMMAR.STATIC,
		GRAMMAR.READONLY,
		GRAMMAR.RETURN,
		GRAMMAR.LET,
		GRAMMAR.NEW,
		GRAMMAR.THIS,
		GRAMMAR.IF,
		GRAMMAR.ELSE,
		GRAMMAR.MATCH,
		GRAMMAR.DEFAULT,
		GRAMMAR.FOREACH,
		GRAMMAR.IN,
		GRAMMAR.NULL,
		GRAMMAR.VDOM,
	];
	static ARITHMETIC: string[] = [
		GRAMMAR.PLUS,
		GRAMMAR.MINUS,
		GRAMMAR.DIVIDE,
		GRAMMAR.MULTIPLY,
		GRAMMAR.MODULUS
	];
	static COMPARISON: string[] = [
		GRAMMAR.LESS_THAN,
		GRAMMAR.GREATER_THAN,
		GRAMMAR.LESS_EQUAL,
		GRAMMAR.GREATER_EQUAL
	];
	static EQUALITY: string[] = [
		GRAMMAR.EQUAL,
		GRAMMAR.NOT_EQUAL
	];
	static LOGICAL: string[] = [
		GRAMMAR.AND,
		GRAMMAR.OR
	];
	static OPERATORS: string[] = [
		GRAMMAR.EXCLAMATION_MARK,
		GRAMMAR.QUESTION_MARK,
		GRAMMAR.ARROW,
		GRAMMAR.DOT,
		GRAMMAR.ASSIGN,
		GRAMMAR.PLUS,
		GRAMMAR.MINUS,
		GRAMMAR.DIVIDE,
		GRAMMAR.MULTIPLY,
		GRAMMAR.MODULUS,
		GRAMMAR.LESS_THAN,
		GRAMMAR.GREATER_THAN,
		GRAMMAR.LESS_EQUAL,
		GRAMMAR.GREATER_EQUAL,
		GRAMMAR.EQUAL,
		GRAMMAR.NOT_EQUAL,
		GRAMMAR.AND,
		GRAMMAR.OR,
	];
	static MATH_OPERATORS: string[] = [
		GRAMMAR.PLUS,
		GRAMMAR.MINUS,
		GRAMMAR.DIVIDE,
		GRAMMAR.MULTIPLY,
		GRAMMAR.MODULUS
	];
	static LOGIC_OPERATORS: string[] = [
		GRAMMAR.LESS_THAN,
		GRAMMAR.GREATER_THAN,
		GRAMMAR.LESS_EQUAL,
		GRAMMAR.GREATER_EQUAL,
		GRAMMAR.EQUAL,
		GRAMMAR.NOT_EQUAL,
		GRAMMAR.AND,
		GRAMMAR.OR,
	];
	static PUNCTUATIONS: string[] = [
		GRAMMAR.BRACKET_SQUARE_OPEN,
		GRAMMAR.BRACKET_SQUARE_CLOSE,
		GRAMMAR.BRACE_OPEN,
		GRAMMAR.BRACE_CLOSE,
		GRAMMAR.PARENTHESES_OPEN,
		GRAMMAR.PARENTHESES_CLOSE,
		GRAMMAR.SEMICOLON,
		GRAMMAR.COLON,
		GRAMMAR.COMMA,
		GRAMMAR.XML_CLOSE_TAG,
		GRAMMAR.XML_OPEN_CLOSE_TAG
	]
}

export class TYPE_ENUM {
	static MIXED: string = 'mixed';
	static VOID: string = 'void';
	static NUMBER: string = 'number';
	static STRING: string = 'string';
	static BOOLEAN: string = 'boolean';
	static ARRAY: string = 'array';
	static NULL: string = 'null';
}

export class Rules {
	static KEYWORDS: Set<string> = new Set(GRAMMAR.KEYWORDS);
	static OPERATORS: Set<string> = new Set(GRAMMAR.OPERATORS);
	static PUNCTUATIONS: Set<string> = new Set(GRAMMAR.PUNCTUATIONS);
	static COMMENT_LINE: string = '//';

	isAlpha(char: string): boolean {
		return /[a-z_]/i.test(char);
	}

	isNumeric(char: string): boolean {
		return /[0-9]/.test(char);
	}

	isAlphaNumeric(char: string): boolean {
		return this.isAlpha(char) || this.isNumeric(char);
	}

	isWhitespace(char: string): boolean {
		return /\s/.test(char);
	}
}

export class TokenType {
	static COMMENT: string = 'comment';
	static ANNOTATION: string = 'annotation';
	static IDENTIFIER: string = 'identifier';
	static KEYWORD: string = 'keyword';
	static PUNCTUATION: string = 'punctuation';
	static NUMBER: string = 'number';
	static STRING: string = 'string';
	static BOOLEAN: string = 'boolean';
	static OPERATOR: string = 'operator';
	static EOF: string = 'eof';
}

export class Token {
	type: string;
	value: string;
	line: number = 1;
	column: number = 1;
	start: number;
	end: number;
	source: Source;

	constructor(type: string, value: string, start: number, end: number, source: Source) {
		this.type = type;
		this.value = value;
		this.start = start;
		this.end = end;
		this.source = source;
	}

	withLineAndColumn(line: number, column: number): Token {
		this.line = line;
		this.column = column;
		return this;
	}
}
