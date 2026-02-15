import {type Engine, WebLyraScript} from "./engine";
import {HTMLElementCreator, type VNode} from "./dom";

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

	private callRender(): any {
		return this.callMethod('render', []) as any;
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

	private performRender(): void {
		if (!this.renderFunction) {
			return;
		}

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
