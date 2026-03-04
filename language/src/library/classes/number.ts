import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/interpreter/interpreter_conversion";
import {Source} from "../../core/parser/parser_source";

const CLASS_NAME = 'Number';

export class LyraNumber extends LyraNativeObject {
	private readonly value: number;

	constructor(value: number) {
		super(CLASS_NAME);
		this.value = value;
	}

	public __add(other: LyraNumber): LyraNumber {
		return new LyraNumber(this.value + other.value);
	}

	public __subtract(other: LyraNumber): LyraNumber {
		return new LyraNumber(this.value - other.value);
	}

	public __multiply(other: LyraNumber): LyraNumber {
		return new LyraNumber(this.value * other.value);
	}

	public __divide(other: LyraNumber): LyraNumber {
		return new LyraNumber(this.value / other.value);
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
	public constructor(value: number);
	
	public operator +(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __add(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator -(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __subtract(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator *(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __multiply(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator /(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __divide(other: ${CLASS_NAME}): ${CLASS_NAME};

	public toString(): string;
}`
			));

		this.isAutoloadAble = true;
	}
}
