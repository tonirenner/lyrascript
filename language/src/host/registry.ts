export class EventHandlerRegistry {
	private registry: WeakMap<HTMLElement, Record<string, Function>> = new WeakMap<HTMLElement, Record<string, Function>>();

	public register(element: HTMLElement, propertyKey: string, handler: Function): void {
		const eventHandlers: Record<string, Function> = this.registry.get(element) ?? {};

		eventHandlers[propertyKey] = handler;

		this.registry.set(element, eventHandlers);
	}

	public unregister(element: HTMLElement, propertyKey: string): Function | null {
		const eventHandlers: Record<string, Function> = this.registry.get(element) ?? {};

		const eventHandler: Function | undefined = eventHandlers[propertyKey];
		if (eventHandler) {
			delete eventHandlers[propertyKey];

			this.registry.set(element, eventHandlers);

			return eventHandler;
		}

		return null;
	}
}
