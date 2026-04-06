import {describe, expect, it} from "bun:test";
import {BytecodeCompiler} from "../../src/core/compiler/bytecode_compiler.ts";
import {Parser} from "../../src/core/parser.ts";
import {RuntimeScope} from "../../src/core/shared/ast_objects.ts";
import {Source} from "../../src/core/syntax/source.ts";
import {VirtualMachine} from "../../src/core/vm/virtual_machine.ts";
import {TYPE_ENUM} from "../../src/core/syntax/ast_grammar.ts";

function executeBytecode(code: string): RuntimeScope {
	const ast = new Parser(new Source(code)).parse();
	const module = new BytecodeCompiler().compile(ast);
	const globals = new RuntimeScope();

	new VirtualMachine(globals).execute(module);

	return globals;
}

describe("Bytecode", () => {
	it("executes arithmetic and variable declarations", () => {
		const scope = executeBytecode(`
let result: number = 1 + 2 * 3;
`);

		expect(scope.get("result").value)
			.toBe(7);
	});

	it("executes assignments and unary expressions", () => {
		const scope = executeBytecode(`
let result: number = 1;
result = -(result + 4);
`);

		expect(scope.get("result")
		            .toNativeRuntimeValue(TYPE_ENUM.NUMBER).value)
			.toBe(-5);
	});

	it("executes prefix and postfix increments for globals", () => {
		const scope = executeBytecode(`
let value: number = 1;
let prefix = ++value;
let postfix = value++;
`);

		expect(scope.get("value")
		            .toNativeRuntimeValue(TYPE_ENUM.NUMBER).value)
			.toBe(3);
		expect(scope.get("prefix")
		            .toNativeRuntimeValue(TYPE_ENUM.NUMBER).value)
			.toBe(2);
		expect(scope.get("postfix")
		            .toNativeRuntimeValue(TYPE_ENUM.NUMBER).value)
			.toBe(2);
	});

	it("executes if / else branches", () => {
		const scope = executeBytecode(`
let result: number = 0;

if (false) {
	result = 1;
} else {
	result = 2;
}
`);

		expect(scope.get("result")
		            .toNativeRuntimeValue(TYPE_ENUM.NUMBER).value)
			.toBe(2);
	});
});
