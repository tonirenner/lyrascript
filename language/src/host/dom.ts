/// <reference lib="dom" />

import type {Props, VChild, VText} from "../core/shared/runtime_vdom.ts";
import {LambdaFunctionCall} from "../core/interpreter/evaluation.ts";
import Events from "./events.ts";
import type {ApplicationRuntime} from "./runtime.ts";
import {VDOM} from "./registry.ts";

export interface ElementCreator {
	create(vNode: VChild): Node;
}

export interface ElementPatcher {
	patch(oldVNode: VChild | null, newNode: VChild): void
}

export class HTMLElementCreator implements ElementCreator {
	private textBuffer: VText[] = [];

	constructor(
		private readonly applicationRuntime: ApplicationRuntime,
		private readonly vdom: VDOM
	) {
	}

	public create(vNode: VChild): Node {
		if (vNode.type === 'text') {
			const textNode: Text = document.createTextNode(vNode.value);
			vNode.dom = textNode;
			return textNode;
		}

		if (vNode.type === 'component') {
			vNode.instance = this.applicationRuntime.createInstance(vNode.className);

			for (const [key, value] of Object.entries(vNode.props ?? {})) {
				if (key === 'children') {
					continue;
				}
				if (vNode.instance?.hasProperty(key)) {
					vNode.instance.setProperty(key, value);
				}
			}

			if (!vNode.subTree) {
				vNode.subTree = this.applicationRuntime.renderComponent(vNode.instance) as VChild;
			}

			this.vdom.register(vNode.instance, vNode.subTree);

			const element: HTMLElement = this.create(vNode.subTree) as HTMLElement;
			vNode.dom = element;
			return element;
		}

		const element: HTMLElement = document.createElement(vNode.tag) as HTMLElement;
		vNode.dom = element;

		for (const [key, value] of Object.entries(vNode.props ?? {})) {
			if (Events.isEvent(key)) {
				this.applicationRuntime.addEventHandler(element, key, value as LambdaFunctionCall);
			} else {
				element.setAttribute(key, String(value));
			}
		}

		for (const child of vNode.children) {
			element.appendChild(this.create(child) as HTMLElement);
		}

		return element;
	}
}

export class HTMLElementPatcher implements ElementPatcher {
	constructor(private readonly mountPoint: HTMLElement,
	            private readonly applicationRuntime: ApplicationRuntime,
	            vdom: VDOM,
	            private readonly elementCreator: ElementCreator = new HTMLElementCreator(applicationRuntime, vdom)) {
	}

	public patch(oldNode: VChild | null, newNode: VChild): void {
		if (!oldNode) {
			const element: Node = this.elementCreator.create(newNode);
			this.mountPoint.appendChild(element);
			newNode.dom = element;
			return;
		}

		this.patchNode(this.mountPoint, oldNode, newNode);
	}

	private patchNode(parent: Node, oldNode: VChild, newNode: VChild): void {
		if (oldNode.type === 'text' && newNode.type === 'text') {
			const textNode: Node = oldNode.dom!;
			if (textNode.textContent !== newNode.value) {
				textNode.textContent = newNode.value;
			}
			newNode.dom = textNode;
			return;
		}

		if (oldNode.type !== newNode.type) {
			const newElement: Node = this.elementCreator.create(newNode);
			parent.replaceChild(newElement, oldNode.dom!);
			newNode.dom = newElement;
			return;
		}

		if (newNode.type === 'component') {
			const newElement: Node = this.elementCreator.create(newNode);
			if (!oldNode.dom) {
				parent.appendChild(newElement);
			} else if (oldNode.dom !== newElement) {
				parent.replaceChild(newElement, oldNode.dom!);
			}
			newNode.dom = newElement;
			return;
		}

		const dom: HTMLElement = oldNode.dom as HTMLElement;
		newNode.dom = dom;

		if (oldNode.type !== 'text' && newNode.type !== 'text') {
			this.updateProperties(dom, oldNode.props ?? {}, newNode.props ?? {});

			if (oldNode.type === 'element' && newNode.type === 'element') {
				this.patchChildren(dom, oldNode.children, newNode.children);
			}
		}
	}

	private updateProperties(element: HTMLElement, oldProperties: Props, newProperties: Props): void {
		for (const key in oldProperties) {
			if (!(key in newProperties)) {
				if (Events.isEvent(key)) {
					this.applicationRuntime.removeEventHandler(element, key);
				} else {
					element.removeAttribute(key);
				}
			}
		}

		for (const propertyKey in newProperties) {
			const oldValue: any = oldProperties[propertyKey];
			const newValue: any = newProperties[propertyKey];

			if (oldValue === newValue) {
				continue;
			}

			if (Events.isEvent(propertyKey)) {
				if (oldValue) {
					this.applicationRuntime.removeEventHandler(element, propertyKey);
				}
				this.applicationRuntime.addEventHandler(element, propertyKey, newValue as LambdaFunctionCall);
			} else {
				element.setAttribute(propertyKey, newValue as string);
			}
		}
	}

	private patchChildren(parent: Node, oldChildren: VChild[], newChildren: VChild[]): void {
		const oldLength: number = oldChildren.length;
		const newLength: number = newChildren.length;
		const commonLength: number = Math.min(oldLength, newLength);

		for (let i: number = 0; i < commonLength; i++) {
			this.patchNode(parent, oldChildren[i] as VChild, newChildren[i] as VChild);
		}

		for (let i: number = commonLength; i < newLength; i++) {
			const newChild: VChild = newChildren[i] as VChild;
			const newElement: HTMLMapElement = this.elementCreator.create(newChild) as HTMLMapElement;
			parent.appendChild(newElement);

			newChild.dom = newElement;
		}

		for (let i: number = oldLength - 1; i >= newLength; i--) {
			const oldChild: VChild = oldChildren[i] as VChild;
			const dom: Node | undefined = oldChild.dom;
			if (dom) {
				parent.removeChild(dom);
			}
		}
	}
}
