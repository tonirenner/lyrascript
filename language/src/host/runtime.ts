import {type Engine, WebLyraScript} from "./engine";
import {type ElementPatcher, HTMLElementPatcher} from "./dom";
import type {VNode} from "../core/vdom/vdom";
import {EventPipeline} from "../core/event/pipeline";
import Events from "./events.ts";

export abstract class AbstractApplicationRuntime {
	protected constructor(
		protected readonly engine: Engine
	) {

	}

	protected callMethod(methodName: string, args: any[] = []): any {
		return this.engine.callInstanceMethod(methodName, args);
	}
}

export class WebApplicationRuntime extends AbstractApplicationRuntime {
	private currentVNode: VNode | null = null;
	private isRendering: boolean = false;
	private renderFunction: (() => VNode) | null = null;

	constructor(
		mountPoint: HTMLElement,
		isDebug: boolean = false,
		private readonly eventPipeline: EventPipeline = new EventPipeline(),
		private readonly patcher: ElementPatcher = new HTMLElementPatcher(mountPoint, eventPipeline)
	) {
		super(new WebLyraScript(isDebug));
	}

	async start(url: string, className = 'App'): Promise<void> {
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
		this.eventPipeline.on(Events.DOM_EVENT, ({invoke}: any): void => {
			invoke();
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
		return this.callMethod('render') as VNode;
	}
}
