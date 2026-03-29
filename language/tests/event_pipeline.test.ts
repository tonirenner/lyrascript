import {describe, expect, it, mock} from "bun:test";
import {EventPipeline} from "../src/core/infrastructure/event_pipeline.ts";

describe("EventPipeline", () => {
	it("delivers payloads to registered listeners", () => {
		const pipeline = new EventPipeline();
		const handler = mock((payload: { value: number }) => payload);

		pipeline.on("changed", handler);
		pipeline.emit("changed", {value: 3});

		expect(handler)
			.toHaveBeenCalledTimes(1);
		expect(handler)
			.toHaveBeenCalledWith({value: 3});
	});

	it("stops delivering payloads after unsubscribe", () => {
		const pipeline = new EventPipeline();
		const handler = mock(() => {
		});

		pipeline.on("changed", handler);
		pipeline.off("changed", handler);
		pipeline.emit("changed", 1);

		expect(handler)
			.toHaveBeenCalledTimes(0);
	});
});
