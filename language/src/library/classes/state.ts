import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/interpreter/interpreter_conversion.ts";
import {Source} from "../../core/parser/parser_source.ts";
import {State} from "../../core/event/state.ts";

const CLASS_NAME = 'State';

export class LyraState extends LyraNativeObject {
	private state: State;

	constructor(initial: any) {
		super(CLASS_NAME);
		this.state = new State(initial);
	}

	get(): any {
		return this.state.get();
	}

	set(value: any): void {
		this.state.set(value);
	}

	subscribe(callback: (value: any) => {}): () => boolean {
		return this.state.subscribe(callback);
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
	public constructor(initial);

	public get(): T;
	
	public set(value: T): void;
	
	public subscribe(callback: (T) -> void): () -> boolean;
}`
			));

		this.isAutoloadAble = true;
	}
}
