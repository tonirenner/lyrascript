import {type Engine, WebLyraScript} from "./engine.ts";
import {type ElementPatcher, HTMLElementPatcher} from "./dom.ts";
import type {VChild} from "../core/shared/runtime_vdom.ts";
import {EventPipeline} from "../core/shared/event_pipeline.ts";
import Events from "./events";
import {EventHandlerRegistry, VDOM} from "./registry.ts";
import LyraEvents from "../core/shared/event.ts";
import type {LambdaFunctionCall} from "../core/interpreter/evaluation.ts";
import type {RuntimeInstance} from "../core/shared/runtime_model.ts";

export interface ApplicationRuntime {
	get engine(): Engine;

	get eventPipeline(): EventPipeline;

	start(url: string, className: string): Promise<void>;

	createInstance(className: string): RuntimeInstance;

	callRootInstanceMethod(methodName: string, args: any[]): any;

	callMethod(instance: RuntimeInstance, methodName: string, args: any[]): any;

	renderComponent(instance: RuntimeInstance): VChild;

	addEventHandler(element: HTMLElement, propertyKey: string, handler: LambdaFunctionCall): void;

	removeEventHandler(element: HTMLElement, propertyKey: string): void;
}

export abstract class AbstractApplicationRuntime implements ApplicationRuntime {
	protected constructor(
		private readonly _engine: Engine,
		private readonly _eventPipeline: EventPipeline = new EventPipeline(),
		private readonly eventHandlerRegistry: EventHandlerRegistry = new EventHandlerRegistry()
	) {
	}

	get engine(): Engine {
		return this._engine;
	}

	get eventPipeline(): EventPipeline {
		return this._eventPipeline;
	}

	public renderComponent(instance: RuntimeInstance): VChild {
		return this.callMethod(instance, 'render', []) as VChild
	}

	public start(url: string, className: string): Promise<void> {
		throw new Error("Method not implemented.");
	}

	public createInstance(className: string): RuntimeInstance {
		return this._engine.createInstance(className);
	}

	public callRootInstanceMethod(methodName: string, args: any[] = []): any {
		return this._engine.callRootInstanceMethod(methodName, args);
	}

	public callMethod(instance: RuntimeInstance, methodName: string, args: any[] = []): any {
		return this._engine.callInstanceMethod(instance, methodName, args);
	}

	public addEventHandler(element: HTMLElement, propertyKey: string, handler: LambdaFunctionCall): void {
		const eventName: string = propertyKey.slice(2)
		                                     .toLowerCase();

		const eventHandler: (event: Event) => void = this.engine.createEventHandler(handler, Events.DOM_EVENT);

		this.eventHandlerRegistry.register(element, propertyKey, eventHandler);

		element.addEventListener(eventName, eventHandler);
	}

	public removeEventHandler(element: HTMLElement, propertyKey: string): void {
		const eventName: string = propertyKey.slice(2)
		                                     .toLowerCase();

		const eventHandler: Function | null = this.eventHandlerRegistry.unregister(element, propertyKey);

		if (eventHandler) {
			element.removeEventListener(eventName, eventHandler as EventListener);
		}
	}
}

export class WebApplicationRuntime extends AbstractApplicationRuntime {
	private readonly vdom: VDOM = new VDOM();
	private readonly patcher: ElementPatcher;

	private isRendering: boolean = false;

	constructor(
		mountPoint: HTMLElement,
		isDebug: boolean = false,
		eventPipeline: EventPipeline = new EventPipeline(),
		eventHandlerRegistry: EventHandlerRegistry = new EventHandlerRegistry()
	) {
		super(new WebLyraScript(eventPipeline, isDebug), eventPipeline, eventHandlerRegistry);

		this.patcher = new HTMLElementPatcher(mountPoint, this, this.vdom);

		this.exposeRuntime();
	}

	public override async start(url: string, className: string = 'Program'): Promise<void> {
		await this.engine.executeEntryFile(url, className);

		this.registerEventListeners();

		this.requestComponentRender(this.engine.getRootInstance());
	}


	public requestComponentRender(instance: RuntimeInstance, oldChild?: VChild): void {
		if (this.isRendering) {
			return;
		}

		queueMicrotask((): void => this.performComponentRender(instance, oldChild));
	}

	private performComponentRender(instance: RuntimeInstance, oldChild: VChild | null = null): void {
		this.isRendering = true;

		const nextChild: VChild = this.renderComponent(instance);

		this.patcher.patch(oldChild, nextChild);

		this.vdom.register(instance, nextChild);

		instance.markClean(this.eventPipeline);

		this.isRendering = false;
	}

	private registerEventListeners(): void {
		this.eventPipeline
		    .on(Events.DOM_EVENT, ({invoke}: any): void => {
			    invoke();
		    });

		this.eventPipeline
		    .on(LyraEvents.LYRA_INSTANCE_DIRTY_STATE, ({instance}: any): void => {
			    this.requestComponentRender(instance, this.vdom.findNodeByComponent(instance) as VChild);
		    });
	}

	private exposeRuntime(): void {
		const global: any = window as Window;

		global.__LYRA__ = global.__LYRA__ || {
			version: '0.0.1',
			runtime: this,
		};
	}
}
