import {NativeClass} from "./native_class";
import {StringType} from "./classes/string";
import {System} from "./classes/system";
import {Assert} from "./classes/assert";
import {NumberType} from "./classes/number";
import {ArrayIteratorType, ArrayType} from "./classes/array";
import {StateType} from "./classes/state";
import {EventType} from "./classes/event";

export class NativeClasses {
	registry: Map<string, NativeClass> = new Map();

	constructor() {
		this.registry.set(Assert.CLASS_NAME, new Assert());
		this.registry.set(System.CLASS_NAME, new System());
		this.registry.set(StringType.CLASS_NAME, new StringType());
		this.registry.set(NumberType.CLASS_NAME, new NumberType());
		this.registry.set(ArrayType.CLASS_NAME, new ArrayType());
		this.registry.set(ArrayIteratorType.CLASS_NAME, new ArrayIteratorType())
		this.registry.set(StateType.CLASS_NAME, new StateType());
		this.registry.set(EventType.CLASS_NAME, new EventType())
	}
}
