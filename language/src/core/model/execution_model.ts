import type {RuntimeValue, StackFrame} from "./runtime_model.ts";

export interface ExecutionContinuation {
	resume(value: RuntimeValue): ExecutionResult;
}

export interface ExecutionValue {
	kind: "value";
	value: RuntimeValue;
}

export interface ExecutionSuspension {
	kind: "suspended";
	awaitable: Promise<RuntimeValue>;
	continuation: ExecutionContinuation;
	frames: StackFrame[];
}

export type ExecutionResult = ExecutionValue | ExecutionSuspension;

export function CompletedExecution(value: RuntimeValue): ExecutionValue {
	return {
		kind: "value",
		value
	};
}

export function SuspendedExecution(
	awaitable: Promise<RuntimeValue>,
	continuation: ExecutionContinuation,
	frames: StackFrame[] = []
): ExecutionSuspension {
	return {
		kind: "suspended",
		awaitable,
		continuation,
		frames
	};
}

export function isExecutionSuspended(result: ExecutionResult): result is ExecutionSuspension {
	return result.kind === "suspended";
}

export function isExecutionValue(result: ExecutionResult): result is ExecutionValue {
	return result.kind === "value";
}

export function chainExecutionResult(
	result: ExecutionResult,
	mapper: (value: RuntimeValue) => ExecutionResult
): ExecutionResult {
	if (isExecutionValue(result)) {
		return mapper(result.value);
	}

	return SuspendedExecution(
		result.awaitable,
		{
			resume: (value: RuntimeValue): ExecutionResult => {
				return chainExecutionResult(result.continuation.resume(value), mapper);
			}
		},
		result.frames
	);
}
