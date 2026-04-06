import {ObjectRegistry} from "./infrastructure/runtime_registry.ts";
import {type EventPipeline} from "./infrastructure/event_pipeline.ts";
import {LyraError, LyraNativeError, throwRuntimeError} from "./infrastructure/errors.ts";
import {NativeClasses} from "../library/native_classes.ts";
import {NativeFunctions} from "../library/native_functions.ts";
import {
	buildRuntimeClass,
	createRuntimeInstance,
	RuntimeLambdaFunction,
	RuntimeNativeFunction,
	RuntimeScope
} from "./shared/ast_objects.ts";
import type {EventDispatch} from "./model/runtime_events.ts";
import type {VChild} from "./model/runtime_model.ts";
import {
	Break,
	Continue,
	type ExecutionContext,
	LyraNativeObject,
	Return,
	type RuntimeClassType,
	type RuntimeInstance,
	type RuntimeInstanceType,
	type RuntimeMethodType,
	type RuntimeValue,
	type StackFrame,
	Value,
	type ValueScope
} from "./model/runtime_model.ts";
import type {ASTInterpreter} from "./interfaces/ast_interpreter.ts";
import {
	chainExecutionResult,
	CompletedExecution,
	type ExecutionResult,
	type ExecutionSuspension,
	isExecutionSuspended,
	SuspendedExecution
} from "./model/execution_model.ts";
import {
	ASTAnnotationNode,
	ASTArrayNode,
	ASTAssignmentNode,
	type ASTBinaryNode,
	ASTBreakNode,
	type ASTCallNode,
	type ASTClassNode,
	ASTContinueNode,
	ASTExpressionNode,
	type ASTForeachNode,
	type ASTIfNode,
	type ASTIndexNode,
	ASTLambdaNode,
	ASTMatchCaseNode,
	type ASTMatchNode,
	ASTMemberNode,
	type ASTNewNode,
	type ASTNode,
	ASTNodeType,
	ASTOperatorNode,
	ASTParameterNode,
	ASTReturnNode,
	ASTUnaryNode,
	ASTVariableNode,
	type ASTWhileNode,
	ASTVDomExpressionNode,
	ASTVDomNode,
	ASTVDomTextNode
} from "./syntax/ast.ts";
import {GRAMMAR, TYPE_ENUM} from "./syntax/ast_grammar.ts";
import {LyraArray} from "../library/classes/array.ts";
import {fromLyraValue, ReturnValue, wrapNativeInstance} from "./shared/ast_objects_conversion.ts";
import {AutoboxedTypes} from "./shared/type_autoboxing.ts";


export class Interpreter implements ASTInterpreter {
	public readonly runtimeScope: RuntimeScope;
	public readonly objectRegistry: ObjectRegistry;
	public readonly eventDispatcher: EventDispatch;
	public readonly contextStack: ExecutionContext[] = [];
	public readonly nativeClasses: NativeClasses = new NativeClasses();
	public readonly nativeFunctions: NativeFunctions = new NativeFunctions();

	constructor(runtimeScope: RuntimeScope, objectRegistry: ObjectRegistry, eventPipeline: EventPipeline) {
		this.runtimeScope = runtimeScope;
		this.objectRegistry = objectRegistry;
		this.eventDispatcher = eventPipeline;

		this.pushContext({scope: this.runtimeScope});
	}

	// context

	public get currentContext(): ExecutionContext {
		return this.contextStack[this.contextStack.length - 1] as ExecutionContext;
	}

	public get currentScope(): ValueScope {
		return this.currentContext.scope;
	}

	public pushContext(context: ExecutionContext): void {
		this.contextStack.push(context);
	}

	public popContext(): ExecutionContext {
		return this.contextStack.pop() as ExecutionContext;
	}

	public captureStackFrames(): StackFrame[] {
		return this.contextStack
			.map((context: ExecutionContext): StackFrame | null => context.frame ?? null)
			.filter((frame: StackFrame | null): frame is StackFrame => frame !== null)
			.reverse();
	}

	public enrichError(error: unknown, frames: StackFrame[] = this.captureStackFrames()): never {
		if (error instanceof InterpreterSuspensionSignal || error instanceof Return) {
			throw error;
		}

		if (error instanceof Break) {
			throwRuntimeError('break used outside of loop.');
		}

		if (error instanceof Continue) {
			throwRuntimeError('continue used outside of loop.');
		}

		if (error instanceof LyraError) {
			if (error.stackFrames.length === 0) {
				error.stackFrames = frames;
			}

			throw error;
		}

		if (error instanceof Error) {
			const nativeError = new LyraNativeError(error.message || String(error));
			nativeError.stackFrames = frames;
			throw nativeError;
		}

		const nativeError = new LyraNativeError(String(error));
		nativeError.stackFrames = frames;
		throw nativeError;
	}

	private createStackFrame(
		kind: StackFrame["kind"],
		name: string,
		span = null as ASTNode["span"],
		className?: string
	): StackFrame {
		return {
			kind,
			name,
			className,
			span: span
				? {
					source: span.source.url,
					line: span.line,
					column: span.column,
					text: span.text(),
					lineText: span.lineText(),
					length: span.end - span.start
				}
				: null
		};
	}

	// statements

	public run(node: ASTNode): RuntimeValue {
		try {
			return this.evalNode(node);
		} catch (error) {
			return this.enrichError(error);
		}
	}

	public async runAsync(node: ASTNode): Promise<RuntimeValue> {
		try {
			if (node.type === ASTNodeType.PROGRAM) {
				for (const child of node.children) {
					await this.resolveExecution(() => this.evalNode(child));
				}

				return Value(null);
			}

			return await this.resolveExecution(() => this.evalNode(node));
		} catch (error) {
			return this.enrichError(error);
		}
	}

	public evalNode(node: ASTNode)
		: RuntimeValue {

		if (node.isExpression) {
			return this.evalExpression(node);
		}

		switch (node.type) {
			case ASTNodeType.PROGRAM: {
				for (const child of node.children) {
					this.evalNode(child);
				}
				return Value(null);
			}
			case ASTNodeType.IMPORT:
			case ASTNodeType.INTERFACE: {
				return Value(null);
			}
			case ASTNodeType.CLASS: {
				this.evalClass(node as ASTClassNode);
				return Value(null);
			}
			case ASTNodeType.VARIABLE: {
				const variableNode: ASTVariableNode = node as ASTVariableNode;
				let value: RuntimeValue;

				try {
					value = variableNode.init
					        ? this.evalExpression(variableNode.init)
					        : Value(null);
				} catch (signal) {
					if (signal instanceof InterpreterSuspensionSignal) {
						throw new InterpreterSuspensionSignal(
							this.chainSuspension(signal.suspension, (resolvedValue: RuntimeValue): ExecutionResult => {
								this.currentScope.define(node.name, resolvedValue);
								return CompletedExecution(resolvedValue);
							})
						);
					}

					throw signal;
				}

				this.currentScope.define(node.name, value);

				return value;
			}
			case ASTNodeType.IF: {
				return this.evalIf(node as ASTIfNode);
			}
			case ASTNodeType.MATCH: {
				return this.evalMatch(node as ASTMatchNode);
			}
			case ASTNodeType.WHILE: {
				return this.evalWhile(node as ASTWhileNode);
			}
			case ASTNodeType.FOREACH: {
				return this.evalForeach(node as ASTForeachNode);
			}
			case ASTNodeType.VDOM: {
				return this.evalVDomNode(node as ASTVDomNode);
			}
			case ASTNodeType.EXPRESSION: {
				return this.evalExpression((node as ASTExpressionNode).expr);
			}
			case ASTNodeType.RETURN: {
				const returnNode: ASTReturnNode = node as ASTReturnNode;
				const value: RuntimeValue = returnNode.argument
				                            ? this.evalExpression(returnNode.argument)
				                            : Value(null);

				throw new Return(value);
			}
			case ASTNodeType.BREAK: {
				return this.evalBreak(node as ASTBreakNode);
			}
			case ASTNodeType.CONTINUE: {
				return this.evalContinue(node as ASTContinueNode);
			}
			default: {
				throwRuntimeError(`Unhandled node ${node.type}.`, node.span);
			}
		}
	}

	public evalBlock(node: ASTNode[])
		: RuntimeValue {

		for (const child of node) {
			this.evalNode(child);
		}
		return Value(null);
	}

	public evalReturn(
		blockNodes: ASTNode[],
		methodEnv: ValueScope,
		returnType?: string,
		thisValue?: RuntimeInstanceType,
		frame?: StackFrame
	): RuntimeValue {
		this.pushContext({scope: methodEnv, instance: thisValue, frame});

		try {
			this.evalBlock(blockNodes);
			return Value(null);
		} catch (signal) {
			if (signal instanceof Return) {
				return returnType
				       ? signal.value.toNativeRuntimeValue(returnType)
				       : signal.value;
			}
			return this.enrichError(signal);
		} finally {
			this.popContext();
		}
	}

	// expressions

	public evalExpression(node: ASTNode)
		: RuntimeValue {

		switch (node.type) {
			case ASTNodeType.STRING:
			case ASTNodeType.NUMBER:
			case ASTNodeType.BOOLEAN:
				return Value(node.value, node.type);
			case ASTNodeType.NULL:
				return Value(null);

			case ASTNodeType.IDENTIFIER:
				return this.currentScope.get(node.name);

			case ASTNodeType.THIS:
				return this.evalThis(node);

			case ASTNodeType.BINARY:
				return this.evalBinary(node as ASTBinaryNode);

			case ASTNodeType.UNARY:
				return this.evalUnary(node as ASTUnaryNode);

			case ASTNodeType.ASSIGNMENT:
				return this.evalAssign(node as ASTAssignmentNode);

			case ASTNodeType.MEMBER:
				return this.evalMember(node as ASTMemberNode);

			case ASTNodeType.CALL:
				return this.evalCall(node as ASTCallNode);

			case ASTNodeType.NEW:
				return this.evalNew(node as ASTNewNode);

			case ASTNodeType.VDOM:
				return this.evalVDomNode(node as ASTVDomNode);

			case ASTNodeType.ARRAY:
				return this.evalArray(node as ASTArrayNode);

			case ASTNodeType.INDEX:
				return this.evalIndex(node as ASTIndexNode);

			case ASTNodeType.LAMBDA:
				return this.evalLambda(node as ASTLambdaNode);

			default:
				throwRuntimeError(`Unhandled expression ${node.type}.`, node.span);

		}
	}

	public evalBinary(expr: ASTBinaryNode): RuntimeValue {

		const left: RuntimeValue = this.evalExpression(expr.left)
		                               .toNativeRuntimeValue();

		const right: RuntimeValue = this.evalExpression(expr.right)
		                                .toNativeRuntimeValue();

		if (left.type.runtimeClass) {

			let operatorMethodName: string = expr.operator;

			if ((left.type.runtimeClass && left.type.runtimeClass.nativeRuntimeConstructor)) {
				const overloadableOperator: string | undefined = ASTOperatorNode.OVERLOADABLE_OPERATOR_METHOD_MAP
				                                                                .get(expr.operator);
				if (overloadableOperator) {
					operatorMethodName = overloadableOperator;
				}
			}

			const method = this.resolveMethodInHierarchy(left.type.runtimeClass, operatorMethodName);

			if (!method) {
				throwRuntimeError(`Binary operator ${expr.operator} not implemented `, expr.span);
			}

			return this.callInstanceMethod(left.asRuntimeInstance(), method, [right]);
		}

		const leftValue: any = left.value;
		const rightValue: any = right.value;

		switch (expr.operator) {

			case GRAMMAR.PLUS:
				return Value(leftValue + rightValue);

			case GRAMMAR.MINUS:
				return Value(leftValue - rightValue);

			case GRAMMAR.MULTIPLY:
				return Value(leftValue * rightValue);

			case GRAMMAR.DIVIDE:
				return Value(leftValue / rightValue);

			case GRAMMAR.MODULUS:
				return Value(leftValue % rightValue);

			case GRAMMAR.LESS_THAN:
				return Value(leftValue < rightValue);

			case GRAMMAR.GREATER_THAN:
				return Value(leftValue > rightValue);

			case GRAMMAR.LESS_EQUAL:
				return Value(leftValue <= rightValue);

			case GRAMMAR.GREATER_EQUAL:
				return Value(leftValue >= rightValue);

			case GRAMMAR.EQUAL:
				return Value(leftValue === rightValue);

			case GRAMMAR.NOT_EQUAL:
				return Value(leftValue !== rightValue);

			case GRAMMAR.AND:
				if (!leftValue) {
					return Value(false);
				}
				return Value(leftValue && rightValue);

			case GRAMMAR.OR:
				if (leftValue) {
					return Value(true);
				}
				return Value(leftValue || rightValue);

			default:
				throwRuntimeError(`Unknown operator ${expr.operator}`, expr.span);
		}
	}

	public evalUnary(node: ASTUnaryNode): RuntimeValue {
		if (node.operator === GRAMMAR.INCREMENT || node.operator === GRAMMAR.DECREMENT) {
			return this.evalIncrementOrDecrement(node);
		}

		const value: RuntimeValue = this.evalExpression(node.argument)
		                                .toNativeRuntimeValue();

		if (value.type.runtimeClass) {

			let operatorMethodName: string = node.operator;

			if (node.operator === GRAMMAR.PLUS) {
				operatorMethodName = GRAMMAR.UNARY_PLUS;
			} else if (node.operator === GRAMMAR.MINUS) {
				operatorMethodName = GRAMMAR.UNARY_MINUS;
			}

			const method = this.resolveMethodInHierarchy(value.type.runtimeClass, operatorMethodName);

			if (!method) {
				throwRuntimeError(`Unary operator ${node.operator} not implemented`, node.span);
			}

			return this.callInstanceMethod(
				value.asRuntimeInstance(),
				method,
				[]
			);
		}

		const nativeValue: any = value.value;

		switch (node.operator) {

			case GRAMMAR.EXCLAMATION_MARK:
				return Value(!nativeValue);

			case GRAMMAR.MINUS:
				return Value(-nativeValue);

			case GRAMMAR.PLUS:
				return Value(+nativeValue);

			default:
				throwRuntimeError(`Unsupported unary operator ${node.operator}`, node.span);
		}
	}

	public evalArray(expr: ASTArrayNode): RuntimeValue {

		const elements: RuntimeValue[] = [];

		for (const element of expr.elements) {
			elements.push(this.evalExpression(element));
		}

		const runtimeClass: RuntimeClassType = this.objectRegistry.classes.get('Array');

		if (!runtimeClass) {
			throwRuntimeError('Array class not found', expr.span);
		}

		const nativeElements: any[] = elements.map((element: RuntimeValue): any => fromLyraValue(element).value);
		const instance: RuntimeInstanceType = this.createNativeRuntimeInstance(runtimeClass, [Value(nativeElements)]);

		return Value(instance, 'Array', runtimeClass);
	}

	public evalIndex(expr: ASTIndexNode): RuntimeValue {

		if (!expr.object) {
			throwRuntimeError(`Index access on null.`, expr.span);
		}

		if (!expr.index) {
			throwRuntimeError(`Access with unspecified index.`, expr.span);
		}

		const objectValue: RuntimeValue = this.evalExpression(expr.object);
		const indexValue: RuntimeValue = this.evalExpression(expr.index)
		                                     .toNativeRuntimeValue();

		const instance: RuntimeInstanceType = objectValue.asRuntimeInstance();

		if (!instance.nativeRuntimeObject) {
			throwRuntimeError(`Index access on non-array`, expr.span);
		}

		const native = instance.nativeRuntimeObject as any;

		if (!(native instanceof LyraArray) || !Array.isArray(native.values)) {
			throwRuntimeError('Index access on non-array', expr.span);
		}

		const value: any = native.values[indexValue.value];

		if (value instanceof LyraNativeObject) {
			return wrapNativeInstance(value, this.objectRegistry);
		}

		if (value && typeof value === 'object' && value.className) {
			return Value(value, value.className);
		}

		return Value(value);
	}

	public evalLambda(node: ASTLambdaNode): RuntimeValue {
		return Value(new RuntimeLambdaFunction(this, node, this.currentScope, this.currentContext.instance), 'Lambda');
	}

	public evalAnnotation(node: ASTAnnotationNode): Record<string, any> {
		const properties: Record<string, any> = {};

		for (const [key, valueNode] of node.properties) {
			properties[key] = this.evalAnnotationValue(valueNode);
		}

		return properties;
	}

	public evalAssign(expr: ASTAssignmentNode): RuntimeValue {

		let value: RuntimeValue;

		try {
			value = this.evalExpression(expr.right);
		} catch (signal) {
			if (signal instanceof InterpreterSuspensionSignal) {
				throw new InterpreterSuspensionSignal(
					this.chainSuspension(signal.suspension, (resolvedValue: RuntimeValue): ExecutionResult => {
						if (expr.left.type === ASTNodeType.MEMBER) {
							const member = expr.left as ASTMemberNode;
							this.assignMember(member, resolvedValue);

							return CompletedExecution(resolvedValue);
						}

						if (expr.left.type === ASTNodeType.IDENTIFIER) {
							this.currentScope.assign(expr.left.name, resolvedValue);
							return CompletedExecution(resolvedValue);
						}

						throwRuntimeError(`Invalid assignment target`, expr.span);
					})
				);
			}

			throw signal;
		}

		if (expr.left.type === ASTNodeType.MEMBER) {
			this.assignMember(expr.left as ASTMemberNode, value);
			return value;
		}

		if (expr.left.type === ASTNodeType.IDENTIFIER) {

			this.currentScope.assign(expr.left.name, value);

			return value;
		}

		throwRuntimeError(`Invalid assignment target`, expr.span);
	}

	public evalIf(node: ASTIfNode): RuntimeValue {

		const condition = this.evalExpression(node.condition)
		                      .toNativeRuntimeValue(TYPE_ENUM.BOOLEAN).value;

		// THEN
		if (condition) {
			this.pushContext({scope: new RuntimeScope(this.currentScope), instance: this.currentContext.instance});

			try {
				return this.evalBlock(node.then.children);
			} finally {
				this.popContext();
			}
		}

		// ELSE
		if (node.else) {
			if (node.else.type === ASTNodeType.IF) {
				return this.evalIf(node.else as ASTIfNode);
			}

			this.pushContext({scope: new RuntimeScope(this.currentScope), instance: this.currentContext.instance});

			try {
				return this.evalBlock(node.else.children);
			} finally {
				this.popContext();
			}
		}

		return Value(null);
	}

	// control flow

	public evalMatch(node: ASTMatchNode): RuntimeValue {

		const matchValue: RuntimeValue = this.evalExpression(node.expression);

		for (const caseNode of node.cases) {
			if (!caseNode.test) {
				continue;
			}

			const testValue: RuntimeValue = this.evalExpression(caseNode.test);

			if (testValue.value === matchValue.value) {
				this.pushContext({
					                 scope: new RuntimeScope(this.currentScope),
					                 instance: this.currentContext.instance
				                 });
				try {
					return this.evalMatchCase(caseNode);
				} finally {
					this.popContext();
				}
			}
		}

		if (node.defaultCase) {
			this.pushContext({
				                 scope: new RuntimeScope(this.currentScope),
				                 instance: this.currentContext.instance
			                 });
			try {
				return this.evalMatchCase(node.defaultCase);
			} finally {
				this.popContext();
			}
		}

		return Value(null);
	}

	public evalMatchCase(node: ASTMatchCaseNode): RuntimeValue {

		this.pushContext({
			                 scope: new RuntimeScope(this.currentScope),
			                 instance: this.currentContext.instance
		                 });

		try {
			return this.evalBlock(node.children);
		} finally {
			this.popContext();
		}
	}

	public evalForeach(node: ASTForeachNode): RuntimeValue {
		const iterable: RuntimeValue = this.evalExpression(node.iterable);

		if (!iterable.type.runtimeClass) {
			throwRuntimeError(`foreach expects an object implementing Iterable`, node.iterable.span);
		}

		const iteratorMethod = this.resolveMethodInHierarchy(iterable.type.runtimeClass, 'iterator');
		if (!iteratorMethod) {
			throwRuntimeError(`Object does not implement Iterable (missing iterator())`, node.iterable.span);
		}

		const iterator: RuntimeValue = this.callInstanceMethod(iterable.asRuntimeInstance(), iteratorMethod, []);

		this.callIteratorMethod(iterator.asRuntimeInstance(), 'rewind');

		while (this.callIteratorMethod(iterator.asRuntimeInstance(), 'hasNext')
		           .toNativeRuntimeValue(TYPE_ENUM.BOOLEAN)
			.value) {
			const value: RuntimeValue = this.callIteratorMethod(iterator.asRuntimeInstance(), 'current');

			this.pushContext({
				                 scope: new RuntimeScope(this.currentScope),
				                 instance: this.currentContext.instance
			                 });
			try {
				this.currentScope.define(node.iterator, value);

				this.evalBlock(node.body);
			} catch (signal) {
				if (signal instanceof Return) {
					return signal.value;
				}

				if (signal instanceof Break) {
					break;
				}

				if (signal instanceof Continue) {
					this.callIteratorMethod(iterator.asRuntimeInstance(), 'next');
					continue;
				}

				throw signal;
			} finally {
				this.popContext();
			}

			this.callIteratorMethod(iterator.asRuntimeInstance(), 'next');
		}

		return Value(null);
	}

	public evalWhile(node: ASTWhileNode): RuntimeValue {
		while (this.evalExpression(node.condition)
		           .toNativeRuntimeValue(TYPE_ENUM.BOOLEAN).value) {
			this.pushContext({
				                 scope: new RuntimeScope(this.currentScope),
				                 instance: this.currentContext.instance
			                 });

			try {
				this.evalBlock(node.body);
			} catch (signal) {
				if (signal instanceof Return) {
					return signal.value;
				}

				if (signal instanceof Break) {
					break;
				}

				if (signal instanceof Continue) {
					continue;
				}

				throw signal;
			} finally {
				this.popContext();
			}
		}

		return Value(null);
	}

	public evalBreak(_node: ASTBreakNode): RuntimeValue {
		throw new Break();
	}

	public evalContinue(_node: ASTContinueNode): RuntimeValue {
		throw new Continue();
	}

	public evalClass(node: ASTClassNode): RuntimeValue {
		const runtimeInstance: RuntimeInstanceType = this.createRuntimeInstanceFromClassNode(node);

		this.pushContext(
			{
				scope: this.currentScope,
				instance: runtimeInstance,
				method: undefined
			} as ExecutionContext
		);

		try {
			this.initializeInstanceFields(runtimeInstance);
		} finally {
			this.popContext();
		}

		const value: RuntimeValue = Value(runtimeInstance, node.name, runtimeInstance.runtimeClass);

		this.currentScope.define(node.name, value);

		return value;
	}

	// objects

	public evalNew(expr: ASTNewNode): RuntimeValue {

		if (!this.objectRegistry.classes.has(expr.name)) {
			throwRuntimeError(`Unknown class ${expr.name}.`, expr.span);
		}

		const runtimeClass: RuntimeClassType = this.objectRegistry.classes.get(expr.name)!;

		let instance: RuntimeInstanceType;

		if (runtimeClass.nativeRuntimeConstructor) {
			instance = this.createNativeRuntimeInstanceFromNewNode(expr, runtimeClass);
		} else {
			instance = this.createRuntimeInstanceFromNewNode(expr, runtimeClass);
		}

		const value: RuntimeValue = Value(instance, expr.name, runtimeClass);

		return value;
	}

	public evalMember(expr: ASTMemberNode): RuntimeValue {
		let value: RuntimeValue;

		try {
			value = this.evalExpression(expr.object);
		} catch (signal) {
			if (signal instanceof InterpreterSuspensionSignal) {
				throw new InterpreterSuspensionSignal(
					this.chainSuspension(signal.suspension, (resolvedValue: RuntimeValue): ExecutionResult => {
						return CompletedExecution(this.resolveMemberValue(expr, resolvedValue));
					})
				);
			}

			throw signal;
		}

		return this.resolveMemberValue(expr, value);
	}

	public evalCall(expr: ASTCallNode): RuntimeValue {

		// super call inside constructor
		if (expr.callee.type === ASTNodeType.IDENTIFIER && expr.callee.name === GRAMMAR.SUPER) {

			const thisInstance = this.currentContext.instance;
			if (!thisInstance?.runtimeClass?.superClassName) {
				throwRuntimeError('super() used outside of subclass constructor');
			}

			const superClass: RuntimeClassType = this.objectRegistry.classes.get(thisInstance.runtimeClass.superClassName)!;
			const constructorMethod = superClass.constructorMethod;
			if (!constructorMethod) {
				return Value(null);
			}

			const constructorScope = new RuntimeScope(this.runtimeScope);

			constructorScope.define(
				GRAMMAR.THIS,
				Value(thisInstance, thisInstance.runtimeClass.className, thisInstance.runtimeClass)
			);

			this.bindMethodArguments(expr, constructorMethod.parameters, constructorScope);
			this.evalReturn(
				constructorMethod.body,
				constructorScope,
				constructorMethod.returnType?.name,
				thisInstance,
				this.createStackFrame("constructor", GRAMMAR.CONSTRUCTOR, constructorMethod.origin?.span, thisInstance.runtimeClass.className)
			);

			return Value(null);
		}

		if (expr.callee.type === ASTNodeType.MEMBER) {
			const memberNode = expr.callee as ASTMemberNode;

			if (memberNode.object.type === ASTNodeType.IDENTIFIER
			    && this.objectRegistry.classes.has(memberNode.object.name)) {
				return this.evalStaticCall(expr, memberNode.object.name);
			}

			return this.evalInstanceCall(expr);
		}

		return this.evalFunctionCall(expr);
	}

	// calls

	public callInstanceMethod(instance: RuntimeInstanceType, method: RuntimeMethodType, args: RuntimeValue[])
		: RuntimeValue {

		const methodScope = new RuntimeScope(this.runtimeScope);
		const frame = this.createStackFrame(
			"method",
			method.name,
			method.origin?.span,
			instance.runtimeClass.className
		);

		methodScope.define(
			GRAMMAR.THIS,
			Value(instance, instance.runtimeClass.className, instance.runtimeClass)
		);

		if (instance.nativeRuntimeObject && method.name in instance.nativeRuntimeObject) {
			const nativeArgs: any[] = args.map((arg: RuntimeValue): any => fromLyraValue(arg).value);
			let result: any;
			const frames = [...this.captureStackFrames(), frame];

			try {
				result = instance.nativeRuntimeObject[method.name](...nativeArgs);
			} catch (error) {
				return this.enrichError(error, frames);
			}

			if (result instanceof Promise) {
				throw new InterpreterSuspensionSignal(
					SuspendedExecution(
						result.then((resolved: any): RuntimeValue => {
							return this.toNativeCallResultValue(resolved, method.returnType?.name);
						}),
						{
							resume: (value: RuntimeValue): ExecutionResult => CompletedExecution(value)
						},
						frames
					)
				);
			}

			if (result instanceof LyraNativeObject) {
				return wrapNativeInstance(result, this.objectRegistry);
			}

			return this.evalReturn([ReturnValue(result)], methodScope, method.returnType?.name, instance, frame);
		}

		for (let i: number = 0; i < method.parameters.length; i++) {
			const parameter: any = method.parameters[i];
			const argument: RuntimeValue | undefined = args[i];

			if (!parameter) {
				throwRuntimeError('Method parameter is null.');
			}

			let value: RuntimeValue;

			if (!argument) {
				if (parameter.defaultValue) {
					value = this.evalExpression(parameter.defaultValue);
				} else {
					value = Value(null);
				}
			} else {
				value = argument;
			}

			const castedValue: RuntimeValue = parameter.typeAnnotation
			                                  ? value.toNativeRuntimeValue(parameter.typeAnnotation.name)
			                                  : value.toNativeRuntimeValue(TYPE_ENUM.MIXED);

			methodScope.define(parameter.name, castedValue);
		}

		return this.evalReturn(method.body, methodScope, method.returnType?.name, instance, frame);
	}

	private evalThis(node: ASTNode): RuntimeValue {
		const instance = this.currentContext.instance;

		if (!instance) {
			throwRuntimeError('this used outside of method.', node.span);
		}

		return Value(instance, instance.runtimeClass.className, instance.runtimeClass);
	}

	private evalStaticCall(callNode: ASTCallNode, className: string)
		: RuntimeValue {

		if (!(callNode.callee instanceof ASTMemberNode)) {
			throwRuntimeError(`Invalid member expression ${callNode.type}`, callNode.span);
		}

		const runtimeClass: RuntimeClassType = this.objectRegistry.classes.get(className);
		const method = runtimeClass.staticMethods.get(callNode.callee.property);
		const frame = this.createStackFrame("function", method?.name ?? callNode.callee.property, method?.origin?.span, className);

		if (!method) {
			throwRuntimeError(`Static method ${className}.${callNode.callee.property} not found`, callNode.callee.span);
		}

		if (runtimeClass.nativeRuntimeConstructor && runtimeClass.nativeRuntimeConstructor[method.name]) {
			const args: RuntimeValue[] = this.getMethodArguments(callNode, method.parameters);
			const rawArgs: any[] = args.map((arg: RuntimeValue): any => fromLyraValue(arg).value);
			let result: any;
			const frames = [...this.captureStackFrames(), frame];

			try {
				result = runtimeClass.nativeRuntimeConstructor[method.name](...rawArgs);
			} catch (error) {
				return this.enrichError(error, frames);
			}

			if (result instanceof Promise) {
				throw new InterpreterSuspensionSignal(
					SuspendedExecution(
						result.then((resolved: any): RuntimeValue => {
							return this.toNativeCallResultValue(resolved, method.returnType?.name);
						}),
						{
							resume: (value: RuntimeValue): ExecutionResult => CompletedExecution(value)
						},
						frames
					)
				);
			}

			if (result instanceof LyraNativeObject) {
				return wrapNativeInstance(result, this.objectRegistry);
			}

			return this.evalReturn([ReturnValue(result)], new RuntimeScope(this.runtimeScope), method.returnType?.name, undefined, frame);
		}

		const methodScope = new RuntimeScope(this.runtimeScope);
		this.bindMethodArguments(callNode, method.parameters, methodScope);

		return this.evalReturn(method.body, methodScope, method.returnType?.name, undefined, frame);
	}

	private evalInstanceCall(callNode: ASTCallNode)
		: RuntimeValue {

		if (!(callNode.callee instanceof ASTMemberNode)) {
			throwRuntimeError(`Invalid member expression ${callNode.type}`, callNode.span);
		}

		let targetValue: RuntimeValue;

		try {
			targetValue = this.evalExpression(callNode.callee.object);
		} catch (signal) {
			if (signal instanceof InterpreterSuspensionSignal) {
				throw new InterpreterSuspensionSignal(
					this.chainSuspension(signal.suspension, (resolvedValue: RuntimeValue): ExecutionResult => {
						return CompletedExecution(this.evalResolvedInstanceCall(callNode, resolvedValue));
					})
				);
			}

			throw signal;
		}

		return this.evalResolvedInstanceCall(callNode, targetValue);
	}

	private evalFunctionCall(callNode: ASTCallNode): RuntimeValue {
		const args: RuntimeValue[] = this.evalCallArguments(callNode);

		const functionInstance: any = this.evalExpression(callNode.callee).value;
		if (functionInstance instanceof RuntimeLambdaFunction) {
			return functionInstance.call(args);
		}

		return new RuntimeNativeFunction(this, callNode).call(args);
	}

	private evalResolvedInstanceCall(callNode: ASTCallNode, targetValue: RuntimeValue): RuntimeValue {
		if (!(callNode.callee instanceof ASTMemberNode)) {
			throwRuntimeError(`Invalid member expression ${callNode.type}`, callNode.span);
		}

		const targetInstance = this.autoboxRuntimeInstanceIfNeeded(targetValue);

		if (!targetInstance || !targetInstance.runtimeClass) {
			throwRuntimeError('Instance call on non-object', callNode.callee.span);
		}

		let runtimeClass = targetInstance.runtimeClass;

		// super.method()
		if (callNode.callee.object.type === ASTNodeType.IDENTIFIER &&
		    callNode.callee.object.name === GRAMMAR.SUPER) {

			if (!runtimeClass.superClassName) {
				throwRuntimeError('super used but no superclass', callNode.callee.span);
			}

			runtimeClass = this.objectRegistry.classes.get(runtimeClass.superClassName)!;
		}

		const method = this.resolveMethodInHierarchy(runtimeClass, callNode.callee.property);

		if (!method) {
			throwRuntimeError(
				`Method ${callNode.callee.property} not found on ${runtimeClass.className}`,
				callNode.callee.span
			);
		}

		const args = this.getMethodArguments(callNode, method.parameters);

		return this.callInstanceMethod(targetInstance, method, args);
	}

	private evalCallArguments(callNode: ASTCallNode): RuntimeValue[] {
		if (callNode.callee instanceof ASTLambdaNode) {
			return this.getMethodArguments(callNode, callNode.callee.parameters);
		}

		if (callNode.callee.type === ASTNodeType.IDENTIFIER) {
			return callNode.arguments.map((argument: ASTNode): RuntimeValue => this.evalExpression(argument));
		}

		if (callNode.callee instanceof ASTMemberNode) {
			throwRuntimeError(
				`Unknown function ${callNode.callee.object.name}.${callNode.callee.property}`,
				callNode.span
			);
		}

		throwRuntimeError(`Unsupported call expression`, callNode.span);
	}

	private getMethodArguments(expr: ASTCallNode | ASTNewNode, parameters: ASTParameterNode[])
		: RuntimeValue[] {

		const args: RuntimeValue[] = [];

		for (let i: number = 0; i < parameters.length; i++) {
			const parameter: ASTParameterNode | null = parameters[i] || null;
			const argument: ASTNode | null = expr.arguments[i] || null;

			let value: RuntimeValue;

			if (argument) {
				value = this.evalExpression(argument);
			} else if (parameter?.defaultValue) {
				value = this.evalExpression(parameter.defaultValue);
			} else {
				throwRuntimeError(`Missing argument '${parameter?.name}'`, expr.span);
			}

			args.push(value);
		}

		return args;
	}

	private bindMethodArguments(callNode: ASTCallNode, parameters: ASTParameterNode[], methodScope: ValueScope)
		: void {

		const args: ASTNode[] = callNode.arguments;

		for (let i: number = 0; i < parameters.length; i++) {

			const parameter: ASTParameterNode | undefined = parameters[i];
			const argument: ASTNode | undefined = args[i];

			if (!parameter) {
				throwRuntimeError('Missing parameter name in method call.');
			}

			let value: RuntimeValue;

			if (argument) {
				value = this.evalExpression(argument);
			} else if (parameter.defaultValue) {
				value = this.evalExpression(parameter.defaultValue);
			} else {
				throwRuntimeError(`Missing argument '${parameter.name}'`, callNode.span);
			}


			const castedValue: RuntimeValue = parameter.typeAnnotation
			                                  ? value.toNativeRuntimeValue(parameter.typeAnnotation.name)
			                                  : value.toNativeRuntimeValue(TYPE_ENUM.MIXED);

			methodScope.define(parameter.name, castedValue);
		}
	}

	private callIteratorMethod(iterator: RuntimeInstanceType, methodName: string, args: RuntimeValue[] = [])
		: RuntimeValue {

		const method = this.resolveMethodInHierarchy(iterator.runtimeClass, methodName);

		if (!method) {
			throwRuntimeError(`Iterator does not implement method ${methodName}`);
		}

		return this.callInstanceMethod(iterator, method, args);
	}

	private evalIncrementOrDecrement(node: ASTUnaryNode): RuntimeValue {
		const currentValue = this.readWritableTarget(node.argument)
		                         .toNativeRuntimeValue(TYPE_ENUM.NUMBER);
		const delta = node.operator === GRAMMAR.INCREMENT ? 1 : -1;
		const nextValue = Value(currentValue.value + delta, TYPE_ENUM.NUMBER);

		this.writeWritableTarget(node.argument, nextValue);

		return node.position === ASTUnaryNode.POSTFIX
		       ? currentValue
		       : nextValue;
	}

	private readWritableTarget(node: ASTNode): RuntimeValue {
		if (node.type === ASTNodeType.IDENTIFIER) {
			return this.currentScope.get(node.name);
		}

		if (node instanceof ASTMemberNode) {
			return this.evalMember(node);
		}

		throwRuntimeError(`Invalid assignment target`, node.span);
	}

	private writeWritableTarget(node: ASTNode, value: RuntimeValue): void {
		if (node.type === ASTNodeType.IDENTIFIER) {
			this.currentScope.assign(node.name, value);
			return;
		}

		if (node instanceof ASTMemberNode) {
			this.assignMember(node, value);
			return;
		}

		throwRuntimeError(`Invalid assignment target`, node.span);
	}

	private assignMember(member: ASTMemberNode, value: RuntimeValue): void {
		if (member.object.type === ASTNodeType.IDENTIFIER
		    && this.objectRegistry.classes.has(member.object.name)) {
			const runtimeClass = this.objectRegistry.classes.get(member.object.name);
			const classInstance = this.objectRegistry.instances
			                          .all()
			                          .find(instance => instance.runtimeClass.className === runtimeClass.className);

			if (!classInstance) {
				throwRuntimeError(`Static assignment target ${member.object.name} not found`, member.span);
			}

			classInstance.staticFields.set(member.property, value);
			classInstance.invalidate(this.eventDispatcher);
			return;
		}

		const objectValue: RuntimeValue = this.evalExpression(member.object);
		const instance = objectValue.asRuntimeInstance();

		if (!instance) {
			throwRuntimeError(`Assignment on non-instance`, member.span);
		}

		instance.instanceFields.set(member.property, value);
		instance.invalidate(this.eventDispatcher);
	}

	private resolveMemberValue(expr: ASTMemberNode, value: RuntimeValue): RuntimeValue {
		if (!value.type.runtimeClass) {
			throwRuntimeError(`Member access on null.`, expr.span);
		}

		const instance: RuntimeInstanceType = value.asRuntimeInstance();

		if (instance.instanceFields.has(expr.property)) {
			return instance.instanceFields.get(expr.property)!;
		}

		if (instance.staticFields.has(expr.property)) {
			return instance.staticFields.get(expr.property)!;
		}

		throwRuntimeError(`Property '${expr.property}' not found`, expr.span);
	}

	private evalAnnotationValue(node: ASTNode): any {
		switch (node.type) {
			case ASTNodeType.STRING:
			case ASTNodeType.NUMBER:
			case ASTNodeType.BOOLEAN:
			case ASTNodeType.IDENTIFIER:
				return node.value;

			case ASTNodeType.ARRAY:
				if (node instanceof ASTArrayNode) {
					return node.elements.map((child: ASTNode): any => this.evalAnnotationValue(child));
				}
				break;
		}

		throwRuntimeError(`Unsupported annotation expression: ${node.type}`, node.span);
	}

	// vdom

	private evalVDomNode(node: ASTVDomNode): RuntimeValue {
		const props: Record<string, any> = {};

		for (const [name, value] of node.props) {
			props[name] = this.evalExpression(value).value;
		}

		const isComponent: boolean = this.objectRegistry.classes.has(node.tag);
		const children: VChild[] = [];
		let textBuffer: string[] = [];

		const flushTextBuffer = (): void => {
			if (textBuffer.length === 0) {
				return;
			}

			children.push({
				              type: 'text',
				              value: textBuffer.join('')
			              });
			textBuffer = [];
		};

		for (const child of node.children) {
			if (child instanceof ASTVDomTextNode) {
				textBuffer.push(child.value);
				continue;
			}

			if (child instanceof ASTVDomExpressionNode) {
				textBuffer.push(String(this.evalExpression(child.expr).value));
				continue;
			}

			flushTextBuffer();

			if (child instanceof ASTVDomNode) {
				children.push(this.evalVDomNode(child).value as VChild);
			}
		}

		flushTextBuffer();

		if (isComponent) {
			return Value({
				             type: 'component',
				             className: node.tag,
				             props: {...props, children}
			             }, 'VNode');
		}

		return Value({
			             type: 'element',
			             tag: node.tag,
			             props,
			             children
		             }, 'VNode');
	}

	// instance creation

	private createRuntimeInstanceFromClassNode(node: ASTClassNode)
		: RuntimeInstanceType {

		let runtimeClass: RuntimeClassType;

		if (this.objectRegistry.classes.has(node.name)) {
			runtimeClass = this.objectRegistry.classes.get(node.name);
		} else {
			runtimeClass = buildRuntimeClass(node);

			this.objectRegistry.classes.set(node.name, runtimeClass);
		}

		return createRuntimeInstance(runtimeClass);
	}

	private createNativeRuntimeInstanceFromNewNode(expr: ASTNewNode, runtimeClass: RuntimeClassType)
		: RuntimeInstanceType {

		const instance: RuntimeInstanceType = createRuntimeInstance(runtimeClass);

		this.objectRegistry.instances.set(instance);

		const constructor: RuntimeMethodType | undefined = runtimeClass.constructorMethod;

		const constructorArgs: RuntimeValue[] = constructor
		                                        ? this.getMethodArguments(expr, constructor.parameters)
		                                        : [];

		if (!runtimeClass.nativeRuntimeConstructor) {
			throwRuntimeError('Class has no native constructor.');
		}

		this.pushContext(
			{
				scope: this.runtimeScope,
				instance: instance,
				method: constructor,
				frame: this.createStackFrame("constructor", GRAMMAR.CONSTRUCTOR, constructor?.origin?.span, runtimeClass.className)
			}
		);

		try {
			instance.nativeRuntimeObject = new runtimeClass.nativeRuntimeConstructor(
				...constructorArgs.map((arg: RuntimeValue): any => fromLyraValue(arg).value)
			);
		} catch (error) {
			return this.enrichError(error);
		} finally {
			this.popContext();
		}

		return instance;
	}

	private createNativeRuntimeInstance(runtimeClass: RuntimeClassType, args: RuntimeValue[] = [])
		: RuntimeInstanceType {

		const instance: RuntimeInstanceType = createRuntimeInstance(runtimeClass);

		if (!runtimeClass.nativeRuntimeConstructor) {
			throwRuntimeError('Class has no native constructor.');
		}

		instance.nativeRuntimeObject = new runtimeClass.nativeRuntimeConstructor(
			...args.map((arg: RuntimeValue): any => fromLyraValue(arg).value)
		);

		this.objectRegistry.instances.set(instance);

		return instance;
	}

	private createRuntimeInstance(runtimeClass: RuntimeClassType, args: RuntimeValue[] = [])
		: RuntimeInstanceType {

		const instance: RuntimeInstanceType = createRuntimeInstance(runtimeClass);

		this.objectRegistry.instances.set(instance);

		this.pushContext({
			                 scope: new RuntimeScope(this.runtimeScope),
			                 instance,
			                 method: runtimeClass.constructorMethod,
			                 frame: this.createStackFrame(
				                 "constructor",
				                 GRAMMAR.CONSTRUCTOR,
				                 runtimeClass.constructorMethod?.origin?.span,
				                 runtimeClass.className
			                 )
		                 } as ExecutionContext);

		try {
			this.initializeInstanceFields(instance);

			if (runtimeClass.constructorMethod) {
				const constructor: RuntimeMethodType = runtimeClass.constructorMethod;

				this.currentScope.define(GRAMMAR.THIS, Value(instance, runtimeClass.className, runtimeClass));

				for (let i: number = 0; i < constructor.parameters.length; i++) {
					const parameter: ASTParameterNode | undefined = constructor.parameters[i];
					const argument: RuntimeValue | undefined = args[i];

					if (!parameter) {
						continue;
					}

					let value: RuntimeValue;

					if (argument) {
						value = argument;
					} else if (parameter.defaultValue) {
						value = this.evalExpression(parameter.defaultValue);
					} else {
						value = Value(null);
					}

					const castedValue: RuntimeValue = parameter.typeAnnotation
					                                  ? value.toNativeRuntimeValue(parameter.typeAnnotation.name)
					                                  : value.toNativeRuntimeValue(TYPE_ENUM.MIXED);

					this.currentScope.define(parameter.name, castedValue);
				}

				this.evalBlock(constructor.body);
			}
		} catch (error) {
			return this.enrichError(error);
		} finally {
			this.popContext();
		}

		return instance;
	}

	private createRuntimeInstanceFromNewNode(expr: ASTNewNode, runtimeClass: RuntimeClassType)
		: RuntimeInstanceType {
		const args: RuntimeValue[] = runtimeClass.constructorMethod
		                             ? this.getMethodArguments(expr, runtimeClass.constructorMethod.parameters)
		                             : [];

		return this.createRuntimeInstance(runtimeClass, args);
	}

	private initializeInstanceFields(instance: RuntimeInstance<any, any, ASTNode, any, any, any>)
		: void {

		const runtimeClass = instance.runtimeClass;

		for (const field of runtimeClass.instanceFields.values()) {

			let value: RuntimeValue;

			if (field.initializer) {

				value =
					this.evalExpression(field.initializer)
					    .toNativeRuntimeValue(field.type);

			} else {

				value = Value(null);

			}

			instance.instanceFields.set(field.name, value);

		}

		for (const field of runtimeClass.staticFields.values()) {

			let value: RuntimeValue;

			if (field.initializer) {
				value = this.evalExpression(field.initializer)
				            .toNativeRuntimeValue(field.type);
			} else {
				value = Value(null);
			}

			instance.staticFields.set(field.name, value);
		}
	}

	// autoboxing

	private autoboxRuntimeInstanceIfNeeded(value: RuntimeValue)
		: RuntimeInstanceType {

		if (value.type.runtimeClass) {
			return value.asRuntimeInstance();
		}

		if (typeof value.value === TYPE_ENUM.NUMBER) {
			return this.createBoxedRuntimeInstance(AutoboxedTypes.getClassName(TYPE_ENUM.NUMBER), value);
		}

		if (typeof value.value === TYPE_ENUM.STRING) {
			return this.createBoxedRuntimeInstance(AutoboxedTypes.getClassName(TYPE_ENUM.STRING), value);
		}

		if (typeof value.value === TYPE_ENUM.BOOLEAN) {
			return this.createBoxedRuntimeInstance(AutoboxedTypes.getClassName(TYPE_ENUM.BOOLEAN), value);
		}

		return value.asRuntimeInstance();
	}

	private createBoxedRuntimeInstance(className: string, primitiveValue: RuntimeValue)
		: RuntimeInstanceType {

		const runtimeClass = this.objectRegistry.classes.get(className);

		return this.createNativeRuntimeInstance(runtimeClass, [fromLyraValue(primitiveValue)]);
	}

	private resolveMethodInHierarchy(
		runtimeClass: RuntimeClassType,
		methodName: string
	): RuntimeMethodType | undefined {
		let currentClass: RuntimeClassType | undefined = runtimeClass;

		while (currentClass) {
			const method: RuntimeMethodType | undefined = currentClass.findMethod(methodName);
			if (method) {
				return method;
			}

			if (!currentClass.superClassName) {
				return undefined;
			}

			currentClass = this.objectRegistry.classes.get(currentClass.superClassName);
		}

		return undefined;
	}

	private async resolveExecution(action: () => RuntimeValue): Promise<RuntimeValue> {
		try {
			return action();
		} catch (signal) {
			if (signal instanceof InterpreterSuspensionSignal) {
				return await this.resumeSuspension(signal.suspension);
			}

			return this.enrichError(signal);
		}
	}

	private async resumeSuspension(suspension: ExecutionSuspension): Promise<RuntimeValue> {
		let value: RuntimeValue;

		try {
			value = await suspension.awaitable;
		} catch (error) {
			return this.enrichError(error, suspension.frames);
		}

		let result: ExecutionResult;

		try {
			result = suspension.continuation.resume(value);
		} catch (error) {
			return this.enrichError(error, suspension.frames);
		}

		if (isExecutionSuspended(result)) {
			return await this.resumeSuspension(result);
		}

		return result.value;
	}

	private chainSuspension(
		suspension: ExecutionSuspension,
		mapper: (value: RuntimeValue) => ExecutionResult
	): ExecutionSuspension {
		const chainedResult = chainExecutionResult(suspension, mapper);
		if (isExecutionSuspended(chainedResult)) {
			return chainedResult;
		}

		return SuspendedExecution(
			Promise.resolve(chainedResult.value),
			{
				resume: (): ExecutionResult => chainedResult
			},
			suspension.frames
		);
	}

	private toNativeCallResultValue(result: any, expectedType?: string): RuntimeValue {
		if (result instanceof LyraNativeObject) {
			if (!this.objectRegistry.classes.has(result.className)) {
				const nativeClass = this.nativeClasses.registry.get(result.className);

				if (!nativeClass) {
					throwRuntimeError(`Native class ${result.className} not found.`);
				}

				this.objectRegistry.classes.set(result.className, nativeClass.getRuntimeClass());
			}

			return wrapNativeInstance(result, this.objectRegistry);
		}

		return expectedType
		       ? Value(result).toNativeRuntimeValue(expectedType)
		       : Value(result);
	}
}

class InterpreterSuspensionSignal extends Error {
	constructor(public readonly suspension: ExecutionSuspension) {
		super("InterpreterSuspension");
	}
}
