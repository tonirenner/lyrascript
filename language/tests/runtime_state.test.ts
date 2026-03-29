import {describe, expect, it, mock} from "bun:test";
import {State} from "../src/core/infrastructure/runtime_state.ts";
import {Value} from "../src/core/model/runtime_model.ts";

describe("State", () => {
	it("returns the initial value", () => {
		const state = new State<number>(1);

		expect(state.get())
			.toBe(1);
	});

	it("notifies subscribers when the value changes", () => {
		const state = new State<number>(1);
		const callback = mock((args: ReturnType<typeof Value>[]) => args);
		const subscriber = {
			call(args: ReturnType<typeof Value>[]) {
				callback(args);
				return Value(null);
			}
		};

		state.subscribe(subscriber);
		state.set(2);

		expect(callback)
			.toHaveBeenCalledTimes(1);
		expect(callback.mock.calls[0]?.[0]?.[0]?.value)
			.toBe(2);
	});

	it("does not notify subscribers when the value stays the same", () => {
		const state = new State<number>(1);
		const callback = mock((args: ReturnType<typeof Value>[]) => args);
		const subscriber = {
			call(args: ReturnType<typeof Value>[]) {
				callback(args);
				return Value(null);
			}
		};

		state.subscribe(subscriber);
		state.set(1);

		expect(callback)
			.toHaveBeenCalledTimes(0);
	});

	it("supports unsubscribing subscribers", () => {
		const state = new State<number>(1);
		const callback = mock((args: ReturnType<typeof Value>[]) => args);
		const subscriber = {
			call(args: ReturnType<typeof Value>[]) {
				callback(args);
				return Value(null);
			}
		};

		const id = state.subscribe(subscriber);
		expect(state.unsubscribe(id))
			.toBe(true);

		state.set(2);

		expect(callback)
			.toHaveBeenCalledTimes(0);
	});
});
