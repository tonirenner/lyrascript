import {describe, expect, it} from "bun:test";
import {EventHandlerRegistry, VDOM} from "../../src/host/vdom/vdom_registry.ts";
import type {RuntimeInstanceType, VNode} from "../../src/core/model/runtime_model.ts";

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

describe("Host VDOM registry", () => {
	it("registers and unregisters dom event handlers per element", () => {
		const registry = new EventHandlerRegistry();
		const element = {} as HTMLElement;
		const handler = () => null;

		registry.register(element, "onClick", handler);

		expect(registry.unregister(element, "onClick"))
			.toBe(handler);
		expect(registry.unregister(element, "onClick"))
			.toBeNull();
	});

	it("tracks component roots by instance", () => {
		const registry = new VDOM();
		const instance = createInstance("component-1");
		const node = {type: "element", tag: "div", children: []} as unknown as VNode;

		registry.register(instance, node);

		expect(registry.findNodeByComponent(instance))
			.toBe(node);

		registry.unregister(instance);

		expect(() => registry.findNodeByComponent(instance))
			.toThrow();
	});
});
