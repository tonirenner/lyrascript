import {NativeClass} from "./native_class.ts";
import {StringType} from "./classes/string.ts";
import {System} from "./classes/system.ts";
import {Assert} from "./classes/assert.ts";
import {NumberType} from "./classes/number.ts";
import {ArrayIteratorType, ArrayType} from "./classes/array.ts";
import {StateType} from "./classes/state.ts";
import {EventType} from "./classes/event.ts";
import {BooleanType} from "./classes/boolean.ts";

export class NativeClasses {
	readonly registry: Map<string, NativeClass> = new Map();

	constructor() {
		this.registry.set(StringType.CLASS_NAME, new StringType());
		this.registry.set(NumberType.CLASS_NAME, new NumberType());
		this.registry.set(BooleanType.CLASS_NAME, new BooleanType());
		this.registry.set(ArrayType.CLASS_NAME, new ArrayType());
		this.registry.set(ArrayIteratorType.CLASS_NAME, new ArrayIteratorType())
		this.registry.set(System.CLASS_NAME, new System());
		this.registry.set(Assert.CLASS_NAME, new Assert());
		this.registry.set(StateType.CLASS_NAME, new StateType());
		this.registry.set(EventType.CLASS_NAME, new EventType())
	}
}
