import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/interpreter/interpreter_conversion";
import {Source} from "../../core/parser/parser_source";

const CLASS_NAME = 'String';

export class LyraString extends LyraNativeObject {
	value: string;

	constructor(value: string) {
		super(CLASS_NAME);
		this.value = value;
	}

	// noinspection JSUnusedGlobalSymbols
	toUpperCase(): LyraString {
		return new LyraString(this.value.toUpperCase());
	}

	// noinspection JSUnusedGlobalSymbols
	toLowerCase(): LyraString {
		return new LyraString(this.value.toLowerCase());
	}

	override toString(): string {
		return this.value;
	}
}

export class StringType extends NativeClass {
	static CLASS_NAME = CLASS_NAME;

	constructor() {
		super(
			CLASS_NAME,
			LyraString,
			new Source(
				`
class ${CLASS_NAME} {
	public constructor(value);
				
	public toUpperCase(): ${CLASS_NAME};
	
	public toLowerCase(): ${CLASS_NAME};

	public toString(): string;
}`
			));

		this.isAutoloadAble = true;
	}
}
