import type {VNode} from "../core/vdom/vdom";
import type {Instance} from "../core/interpreter/interpreter_objects";

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

export class VDOM {
	private instanceMap: Map<string, VNode> = new Map<string, VNode>();

	public register(instance: Instance, node: VNode): void {
		this.instanceMap.set(instance.id, node);
	}

	public getNodeByInstance(instance: Instance): VNode {
		const vNode: VNode | undefined = this.instanceMap.get(instance.id);
		if (!vNode) {
			throw new Error(`Instance with id ${instance.id} not found.`);
		}
		return vNode;
	}
}
