import type {EventPipeline} from "./pipeline";

export class State<T = any> {
	private value: T;
	private subscribers: Set<(value: T) => void> = new Set<(value: T) => void>();

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

	subscribe(fn: (value: T) => void): () => boolean {
		this.subscribers.add(fn);
		return (): boolean => this.subscribers.delete(fn);
	}

	private notify(): void {
		for (const fn of this.subscribers) {
			fn(this.value);
		}
	}
}

export function bindStateToEvent<T>(pipeline: EventPipeline, event: string, state: State<T>, map?: (payload: any) => T): void {
	pipeline.on(event, (payload): void => {
		const value: any = map ? map(payload) : payload;
		state.set(value);
	});
}
