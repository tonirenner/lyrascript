import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/interpreter/interpreter_conversion";
import {Source} from "../../core/parser/parser_source";

const CLASS_NAME = 'Number';

export class LyraNumber extends LyraNativeObject {
	value: number;

	constructor(value: number) {
		super(CLASS_NAME);
		this.value = value;
	}

	override toString(): string {
		return this.value.toString();
	}
}

export class NumberType extends NativeClass {
	static CLASS_NAME = CLASS_NAME;

	constructor() {
		super(
			CLASS_NAME,
			LyraNumber,
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
