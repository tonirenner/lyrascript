import {throwRuntimeError} from "../infrastructure/errors.ts";
import {
	ASTAssignmentNode,
	ASTBinaryNode,
	ASTExpressionNode,
	ASTIfNode,
	ASTNode,
	ASTNodeType,
	ASTReturnNode,
	ASTUnaryNode,
	ASTVariableNode
} from "../syntax/ast.ts";
import {GRAMMAR} from "../syntax/ast_grammar.ts";
import type {BytecodeConstant, BytecodeModule, Instruction} from "../bytecode/bytecode_module.ts";
import {OpCode} from "../bytecode/opcode.ts";

export class BytecodeCompiler {
	private readonly constants: BytecodeConstant[] = [];
	private readonly instructions: Instruction[] = [];

	public compile(node: ASTNode): BytecodeModule {
		this.constants.length = 0;
		this.instructions.length = 0;

		this.compileNode(node);
		this.emit(OpCode.LOAD_NULL);
		this.emit(OpCode.RETURN);

		return {
			version: 1,
			constants: [...this.constants],
			instructions: [...this.instructions]
		};
	}

	private compileNode(node: ASTNode): void {
		switch (node.type) {
			case ASTNodeType.PROGRAM:
				for (const child of node.children) {
					this.compileNode(child);
				}
				return;
			case ASTNodeType.IMPORT:
			case ASTNodeType.INTERFACE:
				return;
			case ASTNodeType.CLASS:
			case ASTNodeType.FOREACH:
			case ASTNodeType.MATCH:
			case ASTNodeType.VDOM:
				throwRuntimeError(`Unsupported bytecode compilation for node ${node.type}.`, node.span);
			case ASTNodeType.VARIABLE:
				this.compileVariable(node as ASTVariableNode);
				return;
			case ASTNodeType.EXPRESSION:
				this.compileExpression((node as ASTExpressionNode).expr);
				this.emit(OpCode.POP);
				return;
			case ASTNodeType.IF:
				this.compileIf(node as ASTIfNode);
				return;
			case ASTNodeType.RETURN:
				this.compileReturn(node as ASTReturnNode);
				return;
			default:
				throwRuntimeError(`Unhandled bytecode node ${node.type}.`, node.span);
		}
	}

	private compileVariable(node: ASTVariableNode): void {
		if (node.init) {
			this.compileExpression(node.init);
		} else {
			this.emit(OpCode.LOAD_NULL);
		}

		this.emit(OpCode.DEFINE_GLOBAL, node.name);
	}

	private compileIf(node: ASTIfNode): void {
		this.compileExpression(node.condition);

		const jumpToElse: number = this.emitJump(OpCode.JUMP_IF_FALSE);
		this.emit(OpCode.POP);

		for (const child of node.then.children) {
			this.compileNode(child);
		}

		if (!node.else) {
			this.patchJump(jumpToElse);
			this.emit(OpCode.POP);
			return;
		}

		const jumpToEnd: number = this.emitJump(OpCode.JUMP);
		this.patchJump(jumpToElse);
		this.emit(OpCode.POP);

		if (node.else.type === ASTNodeType.IF) {
			this.compileIf(node.else as ASTIfNode);
		} else {
			for (const child of node.else.children) {
				this.compileNode(child);
			}
		}

		this.patchJump(jumpToEnd);
	}

	private compileReturn(node: ASTReturnNode): void {
		if (node.argument) {
			this.compileExpression(node.argument);
		} else {
			this.emit(OpCode.LOAD_NULL);
		}

		this.emit(OpCode.RETURN);
	}

	private compileExpression(node: ASTNode): void {
		switch (node.type) {
			case ASTNodeType.NUMBER:
				this.emit(OpCode.LOAD_CONSTANT, this.addConstant(Number(node.value)));
				return;
			case ASTNodeType.STRING:
				this.emit(OpCode.LOAD_CONSTANT, this.addConstant(String(node.value)));
				return;
			case ASTNodeType.BOOLEAN:
				this.emit(OpCode.LOAD_CONSTANT, this.addConstant(node.value === GRAMMAR.TRUE));
				return;
			case ASTNodeType.NULL:
				this.emit(OpCode.LOAD_NULL);
				return;
			case ASTNodeType.IDENTIFIER:
				this.emit(OpCode.GET_GLOBAL, node.name);
				return;
			case ASTNodeType.BINARY:
				this.compileBinary(node as ASTBinaryNode);
				return;
			case ASTNodeType.UNARY:
				this.compileUnary(node as ASTUnaryNode);
				return;
			case ASTNodeType.ASSIGNMENT:
				this.compileAssignment(node as ASTAssignmentNode);
				return;
			default:
				throwRuntimeError(`Unsupported bytecode expression ${node.type}.`, node.span);
		}
	}

	private compileAssignment(node: ASTAssignmentNode): void {
		if (node.left.type !== ASTNodeType.IDENTIFIER) {
			throwRuntimeError("Bytecode assignment currently supports only global identifiers.", node.span);
		}

		this.compileExpression(node.right);
		this.emit(OpCode.SET_GLOBAL, node.left.name);
	}

	private compileBinary(node: ASTBinaryNode): void {
		this.compileExpression(node.left);
		this.compileExpression(node.right);

		switch (node.operator) {
			case GRAMMAR.PLUS:
				this.emit(OpCode.ADD);
				return;
			case GRAMMAR.MINUS:
				this.emit(OpCode.SUBTRACT);
				return;
			case GRAMMAR.MULTIPLY:
				this.emit(OpCode.MULTIPLY);
				return;
			case GRAMMAR.DIVIDE:
				this.emit(OpCode.DIVIDE);
				return;
			case GRAMMAR.MODULUS:
				this.emit(OpCode.MODULUS);
				return;
			case GRAMMAR.EQUAL:
				this.emit(OpCode.EQUAL);
				return;
			case GRAMMAR.NOT_EQUAL:
				this.emit(OpCode.NOT_EQUAL);
				return;
			case GRAMMAR.LESS_THAN:
				this.emit(OpCode.LESS_THAN);
				return;
			case GRAMMAR.LESS_EQUAL:
				this.emit(OpCode.LESS_EQUAL);
				return;
			case GRAMMAR.GREATER_THAN:
				this.emit(OpCode.GREATER_THAN);
				return;
			case GRAMMAR.GREATER_EQUAL:
				this.emit(OpCode.GREATER_EQUAL);
				return;
			default:
				throwRuntimeError(`Unsupported bytecode operator ${node.operator}.`, node.span);
		}
	}

	private compileUnary(node: ASTUnaryNode): void {
		if (node.operator === GRAMMAR.INCREMENT || node.operator === GRAMMAR.DECREMENT) {
			this.compileIncrementOrDecrement(node);
			return;
		}

		this.compileExpression(node.argument);

		switch (node.operator) {
			case GRAMMAR.MINUS:
				this.emit(OpCode.NEGATE);
				return;
			case GRAMMAR.EXCLAMATION_MARK:
				this.emit(OpCode.NOT);
				return;
			case GRAMMAR.PLUS:
				return;
			default:
				throwRuntimeError(`Unsupported bytecode unary operator ${node.operator}.`, node.span);
		}
	}

	private compileIncrementOrDecrement(node: ASTUnaryNode): void {
		if (node.argument.type !== ASTNodeType.IDENTIFIER) {
			throwRuntimeError("Bytecode increment and decrement currently support only global identifiers.", node.span);
		}

		const variableName = node.argument.name;
		const delta = node.operator === GRAMMAR.INCREMENT ? 1 : -1;

		this.emit(OpCode.GET_GLOBAL, variableName);

		if (node.position === ASTUnaryNode.POSTFIX) {
			this.emit(OpCode.DUP);
		}

		this.emit(OpCode.LOAD_CONSTANT, this.addConstant(delta));
		this.emit(OpCode.ADD);
		this.emit(OpCode.SET_GLOBAL, variableName);

		if (node.position === ASTUnaryNode.POSTFIX) {
			this.emit(OpCode.POP);
		}
	}

	private addConstant(value: BytecodeConstant): number {
		this.constants.push(value);

		return this.constants.length - 1;
	}

	private emit(opcode: OpCode, operand?: number | string): number {
		this.instructions.push({opcode, operand});

		return this.instructions.length - 1;
	}

	private emitJump(opcode: OpCode): number {
		return this.emit(opcode, -1);
	}

	private patchJump(index: number): void {
		const instruction: Instruction | undefined = this.instructions[index];
		if (!instruction) {
			throw new Error(`Cannot patch jump at instruction index ${index}.`);
		}

		this.instructions[index] = {
			...instruction,
			operand: this.instructions.length
		};
	}
}
