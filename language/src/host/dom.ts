/// <reference lib="dom" />

import type {VNode} from "../core/vdom/vdom";
import {LambdaFunctionCall} from "../core/interpreter/interpreter_runtime";
import Events from "./events";
import type {ApplicationRuntime} from "./runtime";

export interface ElementCreator {
	create(vNode: VNode | string): Node;
}

export interface ElementPatcher {
	patch(oldVNode: VNode | string | null, newVNode: VNode | string): void
}

export class HTMLElementCreator implements ElementCreator {
	private textBuffer: string[] = [];

	constructor(
		private readonly applicationRuntime: ApplicationRuntime
	) {
	}

	public create(vNode: VNode | string): Node {

		if (typeof vNode === "string") {
			return document.createTextNode(vNode);
		}

		if (vNode.isComponent && vNode.component === null) {
			vNode.component = this.applicationRuntime.createInstance(vNode.tag);

			vNode.dom = this.create(
				this.applicationRuntime.callMethod(vNode.component, 'render', []) as VNode
			);

			return vNode.dom;
		}

		const flushTextBuffer: () => void = (): void => {
			const text: Node | null = this.flushTextBuffer();
			if (text) {
				element.appendChild(text);
			}
		}

		const element: HTMLElement = document.createElement(vNode.tag) as HTMLElement;
		vNode.dom = element;

		for (const [propertyKey, value] of Object.entries(vNode.props)) {
			if (Events.isEvent(propertyKey)) {
				this.applicationRuntime.addEventHandler(element, propertyKey, value as LambdaFunctionCall);
			} else if (typeof value === 'string') {
				element.setAttribute(propertyKey, value as string);
			}
		}

		for (const child of vNode.children) {
			if (typeof child === 'string') {
				this.textBuffer.push(child);
			} else {
				element.appendChild(this.create(child) as HTMLElement);
			}

			flushTextBuffer();
		}

		flushTextBuffer();

		return element;
	}

	private flushTextBuffer(): Node | null {
		if (this.textBuffer.length === 0) {
			return null;
		}
		const element: Text = document.createTextNode(this.textBuffer.join(''));
		this.textBuffer = [];
		return element;
	}
}

export class HTMLElementPatcher implements ElementPatcher {
	constructor(private readonly mountPoint: HTMLElement,
	            private readonly applicationRuntime: ApplicationRuntime,
	            private readonly elementCreator: ElementCreator = new HTMLElementCreator(applicationRuntime)) {
	}

	public patch(oldVNode: VNode | string | null, newVNode: VNode | string): void {
		if (oldVNode) {
			this.patchNode(this.mountPoint, oldVNode, newVNode);
			return;
		}

		const element: Node = this.elementCreator.create(newVNode);

		this.mountPoint.appendChild(element);

		if (typeof newVNode !== 'string') {
			newVNode.dom = element;
		}
	}

	private patchNode(parent: Node, oldNode: VNode | string, newNode: VNode | string): void {

		if (typeof oldNode === 'string' && typeof newNode === 'string') {
			if (oldNode !== newNode) {
				const textNode: ChildNode | null = parent.firstChild;
				if (textNode) {
					textNode.textContent = newNode;
				}
			}
			return;
		}

		if (typeof oldNode === 'string' || typeof newNode === 'string') {
			const newElement: Node = this.elementCreator.create(newNode);
			parent.replaceChild(newElement, parent.firstChild!);
			if (typeof newNode !== 'string') {
				newNode.dom = newElement;
			}
			return;
		}

		if (oldNode.tag !== newNode.tag) {
			const newElement: Node = this.elementCreator.create(newNode);
			parent.replaceChild(newElement, oldNode.dom!);
			newNode.dom = newElement;
			return;
		}

		const dom: Node = oldNode.dom!;
		newNode.dom = dom;

		this.updateProperties(dom as HTMLElement, oldNode.props, newNode.props);
		this.patchChildren(dom, oldNode.children, newNode.children);
	}

	private updateProperties(element: HTMLElement, oldProperties: Record<string, any>, newProperties: Record<string, any>): void {
		for (const propertyKey in oldProperties) {
			if (!(propertyKey in newProperties)) {
				if (Events.isEvent(propertyKey)) {
					this.applicationRuntime.removeEventHandler(element, propertyKey);
				} else {
					element.removeAttribute(propertyKey);
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

	private patchChildren(parent: Node, oldChildren: (VNode | string)[], newChildren: (VNode | string)[]): void {
		const max: number = Math.max(oldChildren.length, newChildren.length);

		for (let i: number = 0; i < max; i++) {

			const oldChild: VNode | string | undefined = oldChildren[i];
			const newChild: VNode | string | undefined = newChildren[i];

			if (!oldChild && newChild) {
				parent.appendChild(this.elementCreator.create(newChild));
				continue;
			}

			const parentChildNode: ChildNode | undefined = parent.childNodes[i];
			if (parentChildNode) {
				if (oldChild && !newChild) {
					parent.removeChild(parentChildNode);
					continue;
				}

				if (newChild && oldChild) {
					this.patchNode(parentChildNode.parentNode!, oldChild, newChild);
				}
			}
		}
	}
}
