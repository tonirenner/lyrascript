import {describe, expect, it, mock} from "bun:test";
import {HTMLElementCreator, HTMLElementPatcher} from "../../src/host/dom/dom_patcher.ts";
import {VDOM} from "../../src/host/vdom/vdom_registry.ts";
import type {ApplicationRuntime} from "../../src/host/runtime/application_runtime.ts";
import type {RuntimeInstanceType, VChild} from "../../src/core/model/runtime_model.ts";

class FakeTextNode {
	parentNode: FakeElement | null = null;
	textContent: string;

	constructor(value: string) {
		this.textContent = value;
	}
}

class FakeElement {
	parentNode: FakeElement | null = null;
	children: Array<FakeElement | FakeTextNode> = [];
	attributes: Record<string, string> = {};
	listeners: Record<string, EventListener[]> = {};
	textContent = "";

	constructor(public readonly tagName: string) {
	}

	appendChild(child: FakeElement | FakeTextNode): FakeElement | FakeTextNode {
		child.parentNode = this;
		this.children.push(child);
		return child;
	}

	removeChild(child: FakeElement | FakeTextNode): void {
		this.children = this.children.filter(entry => entry !== child);
		child.parentNode = null;
	}

	replaceChild(newChild: FakeElement | FakeTextNode, oldChild: FakeElement | FakeTextNode): void {
		const index = this.children.indexOf(oldChild);
		this.children[index] = newChild;
		newChild.parentNode = this;
		oldChild.parentNode = null;
	}

	setAttribute(name: string, value: string): void {
		this.attributes[name] = value;
	}

	removeAttribute(name: string): void {
		delete this.attributes[name];
	}

	addEventListener(name: string, listener: EventListener): void {
		this.listeners[name] = this.listeners[name] ?? [];
		this.listeners[name]?.push(listener);
	}

	removeEventListener(name: string, listener: EventListener): void {
		this.listeners[name] = (this.listeners[name] ?? []).filter(entry => entry !== listener);
	}
}

function createInstance(id: string): RuntimeInstanceType {
	return {
		id,
		runtimeClass: {className: "Component"} as any,
		instanceFields: new Map(),
		staticFields: new Map(),
		isDirty: false,
		invalidate() {
		},
		clean() {
		}
	} as RuntimeInstanceType;
}

function withFakeDocument<T>(callback: () => T): T {
	const previousDocument = (globalThis as any).document;

	(globalThis as any).document = {
		createElement: (tag: string) => new FakeElement(tag),
		createTextNode: (value: string) => new FakeTextNode(value)
	};

	try {
		return callback();
	} finally {
		(globalThis as any).document = previousDocument;
	}
}

describe("Host DOM patcher", () => {
	it("creates plain elements with attributes, events and children", () => {
		withFakeDocument(() => {
			const runtime = {
				addEventHandler: mock(),
				removeEventHandler: mock(),
				createInstance: mock(),
				renderComponent: mock()
			} as unknown as ApplicationRuntime;
			const creator = new HTMLElementCreator(runtime, new VDOM());
			const node = {
				type: "element",
				tag: "button",
				props: {id: "save", onClick: {}},
				children: [{type: "text", value: "Save"}]
			} as unknown as VChild;

			const element = creator.create(node) as unknown as FakeElement;

			expect(element.tagName)
				.toBe("button");
			expect(element.attributes.id)
				.toBe("save");
			expect(runtime.addEventHandler)
				.toHaveBeenCalledTimes(1);
			expect((element.children[0] as FakeTextNode).textContent)
				.toBe("Save");
		});
	});

	it("creates component nodes through the application runtime and stores props on the instance", () => {
		withFakeDocument(() => {
			const instance = createInstance("component-1");
			instance.instanceFields.set("title", null as any);

			const runtime = {
				addEventHandler: mock(),
				removeEventHandler: mock(),
				createInstance: mock(() => instance),
				renderComponent: mock(() => ({type: "text", value: "Hello"}))
			} as unknown as ApplicationRuntime;
			const vdom = new VDOM();
			const creator = new HTMLElementCreator(runtime, vdom);
			const component = {
				type: "component",
				className: "Greeting",
				props: {title: "World", children: []}
			} as unknown as VChild;

			const rendered = creator.create(component);

			expect(rendered)
				.toBe((component as any).dom);
			expect(runtime.createInstance)
				.toHaveBeenCalledWith("Greeting");
			expect(instance.instanceFields.get("title")?.value)
				.toBe("World");
			expect(vdom.findNodeByComponent(instance))
				.toBe((component as any).subTree);
		});
	});

	it("patches attributes and children in place for matching element nodes", () => {
		withFakeDocument(() => {
			const runtime = {
				addEventHandler: mock(),
				removeEventHandler: mock(),
				createInstance: mock(),
				renderComponent: mock()
			} as unknown as ApplicationRuntime;
			const mountPoint = new FakeElement("root");
			const patcher = new HTMLElementPatcher(mountPoint as unknown as HTMLElement, runtime, new VDOM());
			const oldNode = {
				type: "element",
				tag: "div",
				props: {id: "before"},
				children: [{type: "text", value: "before"}]
			} as unknown as VChild;
			const newNode = {
				type: "element",
				tag: "div",
				props: {title: "after"},
				children: [
					{type: "text", value: "after"},
					{type: "text", value: "!"}
				]
			} as unknown as VChild;

			patcher.patch(null, oldNode);
			patcher.patch(oldNode, newNode);

			const dom = mountPoint.children[0] as FakeElement;

			expect(dom.attributes.id)
				.toBeUndefined();
			expect(dom.attributes.title)
				.toBe("after");
			expect((dom.children[0] as FakeTextNode).textContent)
				.toBe("after");
			expect((dom.children[1] as FakeTextNode).textContent)
				.toBe("!");
		});
	});
});
