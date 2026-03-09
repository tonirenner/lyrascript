import {
	ASTAssignmentNode,
	ASTBinaryNode,
	ASTCallNode,
	ASTClassNode,
	ASTExpressionNode,
	ASTFieldNode,
	ASTMemberNode,
	ASTMethodNode,
	ASTNewNode,
	type ASTNode,
	ASTNodeType,
	ASTReturnNode,
	ASTUnaryNode,
	ASTVariableNode
} from "./shared/ast.ts";
import {BinaryOpcodeMap, Opcodes, UnaryOpcodeMap} from "./virtualmachine/opcodes.ts";
import {throwCompileError} from "./shared/errors.ts";
import {type ByteCode, ByteCodeInstructions} from "./virtualmachine/bytecode.ts";

export class Compiler {
	private readonly instructions: ByteCode[] = [];

	compile(node: ASTNode): ByteCodeInstructions {
		switch (node.type) {
			case ASTNodeType.PROGRAM:
				for (const child of node.children) {
					this.compile(child);
				}
				break;

			case ASTNodeType.IMPORT:
				break;

			case ASTNodeType.CLASS:
				this.compileClass(node as ASTClassNode);
				break;

			case ASTNodeType.FIELD:
				this.compileField(node as ASTFieldNode);
				break;

			case ASTNodeType.METHOD:
			case ASTNodeType.CONSTRUCTOR:
				this.compileMethod(node as ASTMethodNode);
				break;

			case ASTNodeType.THIS:
				this.emit(Opcodes.LOAD_THIS);
				break;

			case ASTNodeType.VARIABLE:
				this.compileVariable(node as ASTVariableNode);
				break;

			case ASTNodeType.EXPRESSION:
				this.compile((node as ASTExpressionNode).expr);
				break;

			case ASTNodeType.ASSIGNMENT:
				this.compileAssignment(node as ASTAssignmentNode);
				break;

			case ASTNodeType.BINARY:
				this.compileBinary(node as ASTBinaryNode);
				break;

			case ASTNodeType.UNARY:
				this.compileUnary(node as ASTUnaryNode);
				break;

			case ASTNodeType.CALL:
				this.compileCall(node as ASTCallNode);
				break;

			case ASTNodeType.MEMBER:
				this.compileMember(node as ASTMemberNode);
				break;

			case ASTNodeType.RETURN:
				this.compileReturn(node as ASTReturnNode);
				break;

			case ASTNodeType.NEW:
				this.compileNew(node as ASTNewNode);
				break;

			case ASTNodeType.NUMBER:
			case ASTNodeType.STRING:
			case ASTNodeType.BOOLEAN:
			case ASTNodeType.NULL:
				this.emit(Opcodes.LOAD_CONST, node.value);
				break;

			case ASTNodeType.IDENTIFIER:
				this.emit(Opcodes.LOAD_VAR, node.name);
				break;

			default:
				throwCompileError(`Unsupported node type ${node.type}.`);
		}

		return new ByteCodeInstructions(this.instructions);
	}

	private compileClass(node: ASTClassNode): void {
		this.emit(Opcodes.CLASS_DEF, node.name);

		for (const child of node.children) {
			this.compile(child);
		}

		this.emit(Opcodes.END_CLASS);
	}

	private compileMethod(node: ASTMethodNode): void {
		this.emit(Opcodes.METHOD_DEF, node.name);

		for (const stmt of node.children) {
			this.compile(stmt);
		}

		this.emit(Opcodes.END_METHOD);
	}

	private compileVariable(node: ASTVariableNode): void {
		if (node.init) this.compile(node.init);
		this.emit(Opcodes.STORE_VAR, node.name);
	}

	private compileAssignment(node: ASTAssignmentNode): void {
		this.compile(node.right);

		if (node.left.type === ASTNodeType.IDENTIFIER) {
			this.emit(Opcodes.STORE_VAR, node.left.name);
		}
	}

	private compileBinary(node: ASTBinaryNode): void {
		this.compile(node.left);
		this.compile(node.right);
		this.emit(BinaryOpcodeMap[node.operator] as number);
	}

	private compileUnary(node: ASTUnaryNode): void {
		this.compile(node.argument);
		this.emit(UnaryOpcodeMap[node.operator] as number);
	}

	private compileCall(node: ASTCallNode): void {
		this.compile(node.callee);

		for (const arg of node.arguments) {
			this.compile(arg);
		}

		this.emit(Opcodes.CALL_METHOD, node.arguments.length);
	}

	private compileMember(node: ASTMemberNode): void {
		this.compile(node.object);
		this.emit(Opcodes.GET_FIELD, node.property);
	}

	private compileReturn(node: ASTReturnNode): void {
		if (node.argument) this.compile(node.argument);
		this.emit(Opcodes.RETURN);
	}

	private compileNew(node: ASTNewNode): void {
		for (const arg of node.arguments) this.compile(arg);
		this.emit(Opcodes.NEW, node.name);
	}

	private compileField(node: ASTFieldNode): void {
		this.emit(Opcodes.FIELD_DEF, node.name);

		if (node.init) {
			this.compile(node.init);
		} else {
			this.emit(Opcodes.LOAD_CONST, null);
		}
	}

	private emit(op: number, operand?: any): void {
		this.instructions.push(op);
		if (operand !== undefined) this.instructions.push(operand);
	}
}
