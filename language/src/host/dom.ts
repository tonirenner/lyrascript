/// <reference lib="dom" />

import type {VNode} from "../core/vdom/vdom";
import {LambdaFunctionCall} from "../core/interpreter/interpreter_runtime";
import {type EventPipeline} from "../core/event/pipeline";
import Events from "./event.ts";
import Event from "./event.ts";

export interface ElementCreator {
	createElement(vNode: VNode): any;
}

export class HTMLElementCreator implements ElementCreator {
	constructor(private readonly evenPipeline: EventPipeline) {
	}

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

		for (const [property, fn] of Object.entries(vNode.props)) {
			if (!property.startsWith('on')) {
				continue;
			}

			if (!(fn instanceof LambdaFunctionCall)) {
				continue;
			}

			this.attachEventListener(element, property, fn);
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

	private attachEventListener(element: HTMLElement, property: string, fn: LambdaFunctionCall): void {
		const event: string = property.slice(2)
		                              .toLowerCase();

		element.addEventListener(event, this.wrapCallback(fn));
	}

	private wrapCallback(fn: LambdaFunctionCall) {
		return (event: Event): void => {
			this.evenPipeline.emit(Events.DOM_EVENT, {fn, event});
		};
	}
}
