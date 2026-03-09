import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/runtime/runtime_conversion";
import {Source} from "../../core/parser/source";

const CLASS_NAME = 'Boolean';

export class LyraBoolean extends LyraNativeObject {
	value: boolean;

	constructor(value: boolean) {
		super(CLASS_NAME);
		this.value = value;
	}

	override toString(): string {
		return this.value.toString();
	}
}

export class BooleanType extends NativeClass {
	static CLASS_NAME = CLASS_NAME;

	constructor() {
		super(
			CLASS_NAME,
			LyraBoolean,
			new Source(
				`
class ${CLASS_NAME} {
	public constructor(value);

	public toString(): string;
}`
			));

		this.isAutoloadAble = true;
	}
}
