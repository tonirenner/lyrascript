/// <reference lib="dom" />

import type {VNode} from "../core/vdom/vdom";
import {LambdaFunctionCall} from "../core/interpreter/interpreter_runtime";
import {type EventPipeline} from "../core/event/pipeline";
import Events from "./event.ts";
import Event from "./event.ts";
import {GRAMMAR} from "../core/grammar.ts";
import {EventType} from "../library/classes/event.ts";
import {ClassDefinition, Instance} from "../core/interpreter/interpreter_objects.ts";

export interface ElementCreator {
	createElement(vNode: VNode): any;
}

export class HTMLElementCreator implements ElementCreator {
	private readonly lyraEventClassDef: ClassDefinition;

	constructor(private readonly evenPipeline: EventPipeline) {
		this.lyraEventClassDef = new EventType().getClassDefinition();
	}

	createElement(vNode: VNode): Node {
		const element: HTMLElement = document.createElement(vNode.tag) as HTMLElement;

		let textBuffer: string[] = [];

		function flushTextBuffer(): void {
			if (textBuffer.length > 0) {
				element.appendChild(document.createTextNode(textBuffer.join('')));
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

			flushTextBuffer();
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
			this.evenPipeline.emit(
				Events.DOM_EVENT,
				{
					invoke: (): any => {
						fn.evalCall(
							fn.functionEnv.get(GRAMMAR.THIS) as Instance,
							this.createLyraEventInstance(event)
						);
					},
					event
				}
			);
		};
	}

	private createLyraEventInstance(event: Event): Instance {
		const eventInstance = this.lyraEventClassDef.constructEmptyInstance();
		eventInstance.__nativeInstance = new this.lyraEventClassDef.nativeInstance(event);

		return eventInstance;
	}
}
