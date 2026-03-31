import {describe, expect, it} from "bun:test";
import {LyraParserError} from "../../src/core/infrastructure/errors.ts";
import {Parser} from "../../src/core/parser.ts";
import {ASTBinaryNode, ASTClassNode, ASTNodeType, ASTVariableNode} from "../../src/core/syntax/ast.ts";
import {Source} from "../../src/core/syntax/source.ts";

describe("Parser", () => {
	it("parses variable declarations with type annotations", () => {
		const ast = new Parser(new Source("let value: number = 42;")).parse();
		const statement = ast.children[0];

		expect(statement)
			.toBeInstanceOf(ASTVariableNode);
		expect(statement?.type)
			.toBe(ASTNodeType.VARIABLE);
		expect((statement as ASTVariableNode).name)
			.toBe("value");
		expect((statement as ASTVariableNode).typeAnnotation?.name)
			.toBe("number");
		expect((statement as ASTVariableNode).init?.type)
			.toBe(ASTNodeType.NUMBER);
	});

	it("preserves arithmetic precedence in binary expressions", () => {
		const ast = new Parser(new Source("let value = 1 + 2 * 3;")).parse();
		const variableNode = ast.children[0] as ASTVariableNode;
		const expression = variableNode.init as ASTBinaryNode;

		expect(expression.operator)
			.toBe("+");
		expect(expression.right)
			.toBeInstanceOf(ASTBinaryNode);
		expect((expression.right as ASTBinaryNode).operator)
			.toBe("*");
	});

	it("parses class declarations with methods", () => {
		const source = new Source(`
class Example {
	public greet(): string {
		return "hello";
	}
}
`);
		const ast = new Parser(source).parse();
		const classNode = ast.children[0];

		expect(classNode)
			.toBeInstanceOf(ASTClassNode);
		expect((classNode as ASTClassNode).name)
			.toBe("Example");
		expect(classNode?.children.length)
			.toBe(1);
		expect(classNode?.children[0]?.type)
			.toBe(ASTNodeType.METHOD);
	});

	it("captures structured stack frames for parser errors", () => {
		let thrown: unknown;

		try {
			new Parser(new Source(`
class Broken {
	public test(): number {
		return 1 + ;
	}
}
`)).parse();
		} catch (error) {
			thrown = error;
		}

		expect(thrown)
			.toBeInstanceOf(LyraParserError);

		const parserError = thrown as LyraParserError;

		expect(parserError.stackFrames.map(frame => frame.name))
			.toContain("parseExpression");
		expect(parserError.stackFrames.map(frame => frame.name))
			.toContain("parseClassDeclaration");
		expect(parserError.format())
			.toContain("Stacktrace:");
	});
});
