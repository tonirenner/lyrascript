import {NativeClass} from "../native_class.ts";
import {LyraNativeObject} from "../../core/shared/runtime_model.ts";
import {Source} from "../../core/parser/source.ts";
import {State} from "../../core/shared/runtime_state.ts";
import type {LambdaFunctionCall} from "../../core/interpreter/evaluation.ts";

const CLASS_NAME = 'State';

export class LyraState<T> extends LyraNativeObject {
	private state: State<T>;

	constructor(initial: T) {
		super(CLASS_NAME);
		this.state = new State<T>(initial);
	}

	get(): T {
		return this.state.get();
	}

	set(value: T): void {
		this.state.set(value);
	}

	subscribe(fn: LambdaFunctionCall): number {
		return this.state.subscribe(fn);
	}

	unsubscribe(id: number): boolean {
		return this.state.unsubscribe(id);
	}
}

export class StateType extends NativeClass {
	static CLASS_NAME = CLASS_NAME;

	constructor() {
		super(
			CLASS_NAME,
			LyraState,
			new Source(
				`
class ${CLASS_NAME}<T> {
	public constructor(initial: T);

	public get(): T;
	
	public set(value: T): void;
	
	public subscribe(fn: (T) -> mixed): number;
	
	public unsubscribe(id: number): boolean;
}`
			));

		this.isAutoloadAble = true;
	}
}
