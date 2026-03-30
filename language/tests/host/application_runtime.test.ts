import {describe, expect, it, mock} from "bun:test";
import {AbstractApplicationRuntime} from "../../src/host/runtime/application_runtime.ts";
import type {Engine} from "../../src/host/engine/web_engine.ts";
import {Value} from "../../src/core/model/runtime_model.ts";

class FakeElement {
	listeners: Record<string, EventListener[]> = {};

	addEventListener(name: string, listener: EventListener): void {
		this.listeners[name] = this.listeners[name] ?? [];
		this.listeners[name]?.push(listener);
	}

	removeEventListener(name: string, listener: EventListener): void {
		this.listeners[name] = (this.listeners[name] ?? []).filter(entry => entry !== listener);
	}
}

class TestApplicationRuntime extends AbstractApplicationRuntime {
	constructor(engine: Engine) {
		super(engine);
	}
}

describe("Host application runtime", () => {
	it("normalizes dom event names and unregisters the same handler instance", () => {
		const wrappedHandler = mock(() => null);
		const engine = {
			createEventHandler: mock(() => wrappedHandler),
			callInstanceMethod: mock(() => ({type: "text", value: "ok"})),
			createInstance: mock(),
			callRootInstanceMethod: mock(),
			createEvent: mock(),
			executeEntryFile: mock(async () => undefined),
			executeEntrySource: mock(async () => undefined),
			getEnvironment: mock(),
			getObjectRegistry: mock(),
			getRootInstance: mock()
		} as unknown as Engine;
		const runtime = new TestApplicationRuntime(engine);
		const element = new FakeElement() as unknown as HTMLElement;
		const lambda = {call: mock(() => Value(null))} as any;

		runtime.addEventHandler(element, "onClick", lambda);

		expect(engine.createEventHandler)
			.toHaveBeenCalledTimes(1);
		expect(Object.keys((element as unknown as FakeElement).listeners))
			.toEqual(["click"]);

		runtime.removeEventHandler(element, "onClick");

		expect((element as unknown as FakeElement).listeners.click)
			.toEqual([]);
	});

	it("delegates component rendering through the engine", () => {
		const vnode = {type: "text", value: "rendered"} as const;
		const engine = {
			createEventHandler: mock(),
			callInstanceMethod: mock(() => vnode),
			createInstance: mock(),
			callRootInstanceMethod: mock(),
			createEvent: mock(),
			executeEntryFile: mock(async () => undefined),
			executeEntrySource: mock(async () => undefined),
			getEnvironment: mock(),
			getObjectRegistry: mock(),
			getRootInstance: mock()
		} as unknown as Engine;
		const runtime = new TestApplicationRuntime(engine);
		const instance = {id: "component"} as any;

		expect(runtime.renderComponent(instance))
			.toBe(vnode);
		expect(engine.callInstanceMethod)
			.toHaveBeenCalledWith(instance, "render", []);
	});
});
