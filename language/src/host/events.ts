import type {EventPipeline} from "../core/event/pipeline";
import {LambdaFunctionCall} from "../core/interpreter/interpreter_runtime";
import {ClassDefinition, type Instance} from "../core/interpreter/interpreter_objects";
import {EventType} from "../library/classes/event";
import {GRAMMAR} from "../core/grammar";

const DOM_EVENT: string = 'dom:event';

export class EventHandlerStore {
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

const eventHandlerStore: EventHandlerStore = new EventHandlerStore();
const lyraEventClassDef: ClassDefinition = new EventType().getClassDefinition();

const wrapEvent: (event: Event) => Instance = (event: Event): Instance => {
	return lyraEventClassDef.constructNativeInstance([event]);
}

const wrapEventHandler: (eventPipeline: EventPipeline, handler: LambdaFunctionCall) => (event: Event) => void = (eventPipeline: EventPipeline, handler: LambdaFunctionCall): (event: Event) => void => {
	return (event: Event): void => {
		eventPipeline.emit(
			DOM_EVENT,
			{
				invoke: (): any => {
					handler.evalCall(
						handler.functionEnv.get(GRAMMAR.THIS) as Instance,
						wrapEvent(event)
					);
				},
				event
			}
		);
	};
}

const addEventHandler: (eventPipeline: EventPipeline, element: HTMLElement, propertyKey: string, handler: LambdaFunctionCall) => void = (eventPipeline: EventPipeline, element: HTMLElement, propertyKey: string, handler: LambdaFunctionCall): void => {
	const eventName: string = propertyKey.slice(2)
	                                     .toLowerCase();

	const eventHandler: (event: Event) => void = wrapEventHandler(eventPipeline, handler);

	eventHandlerStore.addEventHandler(element, propertyKey, eventHandler);

	element.addEventListener(eventName, eventHandler);
}

const removeEventHandler: (element: HTMLElement, propertyKey: string) => void = (element: HTMLElement, propertyKey: string): void => {
	const eventName: string = propertyKey.slice(2)
	                                     .toLowerCase();

	const eventHandler: Function | null = eventHandlerStore.removeEventHandler(element, propertyKey);
	if (eventHandler) {
		element.removeEventListener(eventName, eventHandler as EventListener);
	}
}

const isEventProperty: (propertyKey: string) => boolean = (propertyKey: string): boolean => {
	return propertyKey.toLowerCase()
	                  .startsWith('on');
}

export const Events = {
	DOM_EVENT,
	EventHandlerStore,
	addEventHandler,
	removeEventHandler,
	isEventProperty,
};

export default Events;
