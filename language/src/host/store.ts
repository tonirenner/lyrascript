export class Store<T> {

	private state: T;
	private listeners: Set<() => void> = new Set();

	constructor(initial: T) {
		this.state = initial;
	}

	get(): T {
		return this.state;
	}

	set(next: T): void {
		this.state = next;
		this.notify();
	}

	update(fn: (prev: T) => T): void {
		this.state = fn(this.state);
		this.notify();
	}

	subscribe(listener: () => void): () => void {
		this.listeners.add(listener);
		return () => this.listeners.delete(listener);
	}

	private notify(): void {
		for (const listener of this.listeners) {
			listener();
		}
	}
}
