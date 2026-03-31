import {ObjectRegistry} from "../infrastructure/runtime_registry.ts";
import type {ExecutionContext, RuntimeInstanceType, RuntimeValue, StackFrame, ValueScope} from "../model/runtime_model.ts";
import type {EventDispatch} from "../model/runtime_events.ts";
import {
	ASTAnnotationNode,
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
} from "../syntax/ast.ts";
import {NativeClasses} from "../../library/native_classes.ts";
import {NativeFunctions} from "../../library/native_functions.ts";

export interface ASTInterpreter {
	readonly runtimeScope: ValueScope;
	readonly objectRegistry: ObjectRegistry;
	readonly eventDispatcher: EventDispatch;
	readonly nativeClasses: NativeClasses;
	readonly nativeFunctions: NativeFunctions;

	readonly contextStack: ExecutionContext[];

	// context

	get currentContext(): ExecutionContext;

	get currentScope(): ValueScope;

	pushContext(context: ExecutionContext): void;

	popContext(): ExecutionContext;

	captureStackFrames(): StackFrame[];

	enrichError(error: unknown, frames?: StackFrame[]): never;

	// statements

	run(node: ASTNode): RuntimeValue;

	evalNode(node: ASTNode): RuntimeValue;

	evalBlock(node: ASTNode[]): RuntimeValue;

	// expressions

	evalExpression(node: ASTNode): RuntimeValue;

	evalBinary(node: ASTBinaryNode): RuntimeValue;

	evalUnary(node: ASTUnaryNode): RuntimeValue;

	evalArray(node: ASTArrayNode): RuntimeValue;

	evalIndex(node: ASTIndexNode): RuntimeValue;

	evalLambda(node: ASTLambdaNode): RuntimeValue;

	evalAnnotation(node: ASTAnnotationNode): Record<string, any>;

	// control flow

	evalIf(node: ASTIfNode): RuntimeValue;

	evalMatch(node: ASTMatchNode): RuntimeValue;

	evalForeach(node: ASTForeachNode): RuntimeValue;

	// objects

	evalClass(node: ASTClassNode): void

	evalNew(node: ASTNewNode): RuntimeValue;

	evalMember(node: ASTMemberNode): RuntimeValue;

	// calls

	evalCall(node: ASTCallNode): RuntimeValue;

	evalReturn(
		blockNodes: ASTNode[],
		methodEnv: ValueScope,
		returnType?: string,
		thisValue?: RuntimeInstanceType,
		frame?: StackFrame
	): RuntimeValue;
}




