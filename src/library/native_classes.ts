import {NativeClass} from "./native_class";
import {StringType} from "./classes/string";
import {System} from "./classes/system";
import {Assert} from "./classes/assert";
import {NumberType} from "./classes/number";
import {ArrayIteratorType, ArrayType} from "./classes/array";

export class NativeClasses {
	classes: Map<string, NativeClass> = new Map();

	constructor() {
		this.classes.set(Assert.CLASS_NAME, new Assert());
		this.classes.set(System.CLASS_NAME, new System());
		this.classes.set(StringType.CLASS_NAME, new StringType());
		this.classes.set(NumberType.CLASS_NAME, new NumberType());
		this.classes.set(ArrayType.CLASS_NAME, new ArrayType());
		this.classes.set(ArrayIteratorType.CLASS_NAME, new ArrayIteratorType())
	}
}
