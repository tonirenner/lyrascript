import type {EventPipeline} from "./pipeline";
import {toLyraValue} from "../interpreter/interpreter_conversion";
import {LambdaFunctionCall} from "../interpreter/interpreter_runtime";


export class State<T = any> {
	private value: T;
	private subscribers: Map<number, (value: T) => void> = new Map<number, (value: T) => void>();
	private id: number = 0;

	constructor(initial: T) {
		this.value = initial;
	}

	get(): T {
		return this.value;
	}

	set(value: T): void {
		if (this.value === value) {
			return;
		}

		this.value = value;
		this.notify();
	}

	subscribe(fn: LambdaFunctionCall): number {
		const nextId: number = this.id++;
		this.subscribers.set(nextId, this.wrapCallback(fn));
		return nextId;
	}

	unsubscribe(id: number): boolean {
		return this.subscribers.delete(id);
	}

	private notify(): void {
		for (const fn of this.subscribers.values()) {
			fn(this.value);
		}
	}

	private wrapCallback(fn: LambdaFunctionCall) {
		return (value: T): void => {
			fn.evalCall(null, toLyraValue(value));
		}
	}
}

export function bindStateToEvent<T>(pipeline: EventPipeline, event: string, state: State<T>, map?: (payload: any) => T): void {
	pipeline.on(event, (payload): void => {
		const value: any = map ? map(payload) : payload;
		state.set(value);
	});
}
