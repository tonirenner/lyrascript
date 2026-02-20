import {type Engine, WebLyraScript} from "./engine";
import {type ElementPatcher, HTMLElementPatcher} from "./dom";
import type {VNode} from "../core/vdom/vdom";
import {EventPipeline} from "../core/event/pipeline";
import Events, {EventHandlerStore} from "./events.ts";
import {type Instance} from "../core/interpreter/interpreter_objects";
import {LambdaFunctionCall} from "../core/interpreter/interpreter_runtime.ts";

export interface ApplicationRuntime {
	get engine(): Engine;

	get eventPipeline(): EventPipeline;

	start(url: string, className: string): Promise<void>;

	createInstance(className: string): Instance;

	callRootInstanceMethod(methodName: string, args: any[]): any;

	callMethod(instance: Instance, methodName: string, args: any[]): any;

	addEventHandler(element: HTMLElement, propertyKey: string, handler: LambdaFunctionCall): void;

	removeEventHandler(element: HTMLElement, propertyKey: string): void;
}

export abstract class AbstractApplicationRuntime implements ApplicationRuntime {
	protected constructor(
		private readonly _engine: Engine,
		private readonly _eventPipeline: EventPipeline = new EventPipeline(),
		private readonly eventHandlerStore: EventHandlerStore = new EventHandlerStore()
	) {

	}

	get engine(): Engine {
		return this._engine;
	}

	get eventPipeline(): EventPipeline {
		return this._eventPipeline;
	}


	public start(url: string, className: string): Promise<void> {
		throw new Error("Method not implemented.");
	}

	public createInstance(className: string): Instance {
		return this._engine.createInstance(className);
	}

	public callRootInstanceMethod(methodName: string, args: any[] = []): any {
		return this._engine.callRootInstanceMethod(methodName, args);
	}

	public callMethod(instance: Instance, methodName: string, args: any[] = []): any {
		return this._engine.callInstanceMethod(instance, methodName, args);
	}

	public addEventHandler(element: HTMLElement, propertyKey: string, handler: LambdaFunctionCall): void {
		const eventName: string = propertyKey.slice(2)
		                                     .toLowerCase();

		const eventHandler: (event: Event) => void = this.engine.createEventHandler(handler, Events.DOM_EVENT);

		this.eventHandlerStore.addEventHandler(element, propertyKey, eventHandler);

		element.addEventListener(eventName, eventHandler);
	}

	public removeEventHandler(element: HTMLElement, propertyKey: string): void {
		const eventName: string = propertyKey.slice(2)
		                                     .toLowerCase();

		const eventHandler: Function | null = this.eventHandlerStore.removeEventHandler(element, propertyKey);

		if (eventHandler) {
			element.removeEventListener(eventName, eventHandler as EventListener);
		}
	}
}

export class WebApplicationRuntime extends AbstractApplicationRuntime {
	private readonly patcher: ElementPatcher;

	private currentVNode: VNode | null = null;
	private isRendering: boolean = false;
	private renderFunction: (() => VNode) | null = null;


	constructor(
		mountPoint: HTMLElement,
		isDebug: boolean = false,
		eventPipeline: EventPipeline = new EventPipeline(),
		eventHandlerStore: EventHandlerStore = new EventHandlerStore()
	) {
		super(new WebLyraScript(eventPipeline, isDebug), eventPipeline, eventHandlerStore);

		this.patcher = new HTMLElementPatcher(mountPoint, this)
	}

	public override async start(url: string, className: string = 'App'): Promise<void> {
		await this.engine.executeEntryFile(url, className);

		this.listenToDomEvents();

		this.renderFunction = (): VNode => this.render();

		this.performRender();
	}

	public requestRender(): void {
		if (this.isRendering) {
			return;
		}

		queueMicrotask((): void => {
			this.performRender();
		});
	}

	private listenToDomEvents(): void {
		this.eventPipeline
		    .on(Events.DOM_EVENT, ({invoke}: any): void => {
			    invoke();
			    this.performRender();
		    });
	}

	private performRender(): void {
		if (!this.renderFunction) {
			return;
		}

		this.isRendering = true;

		const nextVNode: VNode = this.renderFunction();

		this.patcher.patch(this.currentVNode, nextVNode);

		this.currentVNode = nextVNode;

		this.isRendering = false;
	}


	private render(): VNode {
		return this.callRootInstanceMethod('render') as VNode;
	}
}
