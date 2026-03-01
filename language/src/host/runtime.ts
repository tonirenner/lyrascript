import {type Engine, WebLyraScript} from "./engine";
import {type ElementPatcher, HTMLElementPatcher} from "./dom";
import type {VChild} from "../core/vdom/vdom";
import {EventPipeline} from "../core/event/pipeline";
import Events from "./events";
import {type Instance} from "../core/interpreter/interpreter_objects";
import {LambdaFunctionCall} from "../core/interpreter/interpreter_runtime";
import {EventHandlerRegistry, VDOM} from "./registry";
import LyraEvents from "../core/event/events";

export interface ApplicationRuntime {
	get engine(): Engine;

	get eventPipeline(): EventPipeline;

	start(url: string, className: string): Promise<void>;

	createInstance(className: string): Instance;

	callRootInstanceMethod(methodName: string, args: any[]): any;

	callMethod(instance: Instance, methodName: string, args: any[]): any;

	renderComponent(instance: Instance): VChild;

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

	public renderComponent(instance: Instance): VChild {
		return this.callMethod(instance, 'render', []) as VChild
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


	public requestComponentRender(instance: Instance, oldChild?: VChild): void {
		if (this.isRendering) {
			return;
		}

		queueMicrotask((): void => this.performComponentRender(instance, oldChild));
	}

	private performComponentRender(instance: Instance, oldChild: VChild | null = null): void {
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
