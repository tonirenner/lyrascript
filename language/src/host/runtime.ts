import {type Engine, WebLyraScript} from "./engine";
import {HTMLElementCreator} from "./dom";
import type {VNode} from "../core/vdom";

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

	constructor(private readonly mountPoint: HTMLElement,
	            private readonly elementCreator: HTMLElementCreator = new HTMLElementCreator()) {
		super(new WebLyraScript());
	}

	async start(url: string, className = 'App'): Promise<void> {
		await this.engine.executeEntryFile(url, className);

		this.renderFunction = () => this.callRender();

		this.performRender();
	}

	// Wird vom Store aufgerufen
	requestRender(): void {
		if (this.isRendering) {
			return;
		}

		queueMicrotask(() => {
			this.performRender();
		});
	}

	private callRender(): VNode {
		return this.callMethod('render', []) as VNode;
	}

	private performRender(): void {
		if (!this.renderFunction) {
			return;
		}

		this.isRendering = true;

		const nextVNode: VNode = this.renderFunction();


		this.patch(this.currentVNode, nextVNode);

		this.currentVNode = nextVNode;

		this.isRendering = false;
	}

	private patch(oldVNode: VNode | null, newVNode: VNode): void {

		// Erstmal simpel: Full Replace
		// Später diff + patch

		this.mountPoint.innerHTML = '';
		const element: Node = this.elementCreator.createElement(newVNode);
		this.mountPoint.appendChild(element);
	}
}
