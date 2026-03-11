import {ObjectRegistry} from "../shared/runtime_registry.ts";
import type {ExecutionContext, RuntimeValue, ValueScope} from "./runtime_model.ts";
import type {EventDispatch} from "./runtime_events.ts";
import {
	ASTArrayNode,
	ASTBinaryNode,
	ASTCallNode,
	ASTClassNode,
	ASTForeachNode,
	ASTIfNode,
	ASTIndexNode,
	ASTLambdaNode,
	ASTMatchNode,
	ASTMemberNode,
	ASTNewNode,
	ASTNode,
	ASTUnaryNode
} from "../shared/ast.ts";

export interface Interpreter {
	readonly environment: ValueScope;
	readonly objectRegistry: ObjectRegistry;
	readonly eventDispatcher: EventDispatch;

	readonly contextStack: ExecutionContext[];


	evalProgram(node: ASTNode): RuntimeValue

	evalNode(node: ASTNode): RuntimeValue

	// expressions

	evalExpression(node: ASTNode): RuntimeValue

	evalBinary(node: ASTBinaryNode): RuntimeValue

	evalUnary(node: ASTUnaryNode): RuntimeValue

	evalArray(node: ASTArrayNode): RuntimeValue

	evalIndex(node: ASTIndexNode): RuntimeValue

	evalLambda(node: ASTLambdaNode): RuntimeValue

	// control flow

	evalIf(node: ASTIfNode): RuntimeValue

	evalMatch(node: ASTMatchNode): RuntimeValue

	evalForeach(node: ASTForeachNode): RuntimeValue

	// objects

	evalClass(node: ASTClassNode): void

	evalNew(node: ASTNewNode): RuntimeValue

	evalMember(node: ASTMemberNode): RuntimeValue

	// calls

	evalCall(node: ASTCallNode): RuntimeValue
}
