export class EventStore {
	private eventHandlers: WeakMap<HTMLElement, Record<string, Function>> = new WeakMap<HTMLElement, Record<string, Function>>();

	public addEventHandler(element: HTMLElement, propertyKey: string, handler: Function): void {
		const eventHandlers: Record<string, Function> = this.eventHandlers.get(element) ?? {};

		eventHandlers[propertyKey] = handler;

		this.eventHandlers.set(element, eventHandlers);
	}

	public removeEventHandler(element: HTMLElement, propertyKey: string): Function | null {
		const eventHandlers: Record<string, Function> = this.eventHandlers.get(element) ?? {};

		const eventHandler: Function | undefined = eventHandlers[propertyKey];
		if (eventHandler) {
			delete eventHandlers[propertyKey];
			this.eventHandlers.set(element, eventHandlers);
			return eventHandler;
		}

		return null;
	}
}
