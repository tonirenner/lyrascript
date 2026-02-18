/// <reference lib="dom" />

import type {VNode} from "../core/vdom/vdom";
import {LambdaFunctionCall} from "../core/interpreter/interpreter_runtime";

export interface ElementCreator {
	createElement(vNode: VNode): any;
}

export class HTMLElementCreator implements ElementCreator {
	createElement(vNode: VNode): Node {
		const element: HTMLElement = document.createElement(vNode.tag) as HTMLElement;

		let textBuffer: string[] = [];

		function flushTextBuffer(): void {
			if (textBuffer.length > 0) {
				const textNode: Text = document.createTextNode('');
				textNode.textContent = textBuffer.join('');
				element.appendChild(textNode);
				textBuffer = [];
			}
		}

		for (const [key, fn] of Object.entries(vNode.props)) {
			if (key.startsWith('on') && fn instanceof LambdaFunctionCall) {
				const event: string = key.slice(2)
				                         .toLowerCase();

				element.addEventListener(event, this.wrapCallback(fn) as EventListener);
			}
		}

		for (const child of vNode.children) {
			if (typeof child === 'string') {
				textBuffer.push(child);
			} else {
				element.appendChild(this.createElement(child) as HTMLElement);
			}
		}

		flushTextBuffer();

		return element;
	}

	private wrapCallback(fn: LambdaFunctionCall) {
		return (): void => {
			fn.evalCall(null);
		}
	}
}
