import type {EventDispatch} from "../contracts/runtime_events.ts";

export type EventHandler<T = any> = (payload: T) => void;

export class EventPipeline implements EventDispatch {
	private listeners: Map<string, Set<EventHandler>> = new Map<string, Set<EventHandler>>();

	on<T = any>(event: string, handler: EventHandler<T>): void {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, new Set());
		}
		this.listeners.get(event)!.add(handler);
	}

	off<T = any>(event: string, handler: EventHandler<T>): void {
		this.listeners.get(event)
		    ?.delete(handler);
	}

	emit<T = any>(event: string, payload: T): void {
		this.listeners.get(event)
		    ?.forEach((handler: EventHandler): void => handler(payload));
	}
}
