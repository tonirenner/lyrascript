import {type Engine, WebLyraScript} from "./engine";
import {HTMLElementCreator, type VNode} from "./dom";

export interface ExecutionContext {
	runtime: AbstractApplicationRuntime;
	phase?: 'render' | 'event';
}

export abstract class AbstractApplicationRuntime {
	protected constructor(
		protected readonly engine: Engine
	) {

	}

	protected callInstanceMethod(className: string, methodName: string, args: any[] = []): any {
		return this.engine.callInstanceMethod(
			this.engine.createInstance(className),
			methodName,
			args
		);
	}
}

export class WebApplicationRuntime extends AbstractApplicationRuntime {

	private currentVNode: VNode | null = null;
	private isRendering = false;
	private renderFunction: (() => VNode) | null = null;

	constructor(private readonly mountPoint: HTMLElement,
	            private readonly elementCreator: HTMLElementCreator = new HTMLElementCreator()) {
		super(new WebLyraScript());
	}

	private render(className: string): any {
		return this.callInstanceMethod(className, 'render', []) as any;
	}

	async start(url: string, className = 'App'): Promise<void> {
		await this.engine.load(url);

		this.renderFunction = () => this.render(className);

		this.performRender();
	}

	// Wird vom Store aufgerufen
	requestRender(): void {
		if (this.isRendering) return;

		queueMicrotask(() => {
			this.performRender();
		});
	}

	private performRender(): void {
		if (!this.renderFunction) return;

		this.isRendering = true;

		const nextVNode = this.renderFunction();
		console.log(nextVNode);
		return;

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
