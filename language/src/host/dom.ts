/// <reference lib="dom" />

export interface VNode {
	tag: string;
	props: Record<string, unknown>;
	children: Array<VNode | string>;
}

export interface ElementCreator {
	createElement(vNode: VNode): any;
}

export function createVNode(tag: string, props: Record<string, unknown>, ...children: Array<VNode | string>): VNode {
	return {tag, props, children};
}

export class HTMLElementCreator implements ElementCreator {
	createElement(vNode: VNode): Node {
		const element: HTMLElement = document.createElement(vNode.tag) as HTMLElement;

		for (const [key, value] of Object.entries(vNode.props)) {
			if (key.startsWith('on') && typeof value === 'function') {
				const event: string = key.slice(2)
				                         .toLowerCase();
				element.addEventListener(event, value as EventListener);
			}
		}

		for (const child of vNode.children) {
			if (typeof child === 'string') {
				element.appendChild(document.createTextNode(child));
			} else {
				element.appendChild(this.createElement(child) as HTMLElement);
			}
		}

		return element;
	}
}
