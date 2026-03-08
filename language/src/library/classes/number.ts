import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/runtime/conversion";
import {Source} from "../../core/parser/source";

const CLASS_NAME = 'Number';

export class LyraNumber extends LyraNativeObject {
	private readonly value: number;

	constructor(value: number) {
		super(CLASS_NAME);
		this.value = value;
	}

	public toNumber(): number {
		return this.value;
	}

	override toString(): string {
		return this.value.toString();
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

	private __not(): boolean {
		return !this.value;
	}

	public __unary_plus(): LyraNumber {
		return new LyraNumber(+this.value);
	}

	public __unary_minus(): LyraNumber {
		return new LyraNumber(-this.value);
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
	
	public toNumber(): number;
	
	public toString(): string;
	
	public operator +(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __add(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator -(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __subtract(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator *(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __multiply(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator /(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __divide(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator %(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __modulus(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator ==(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __equal(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator !=(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __not_equal(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator <(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __less_than(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator <=(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __less_equal(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator >(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __greater_than(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator >=(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	private __greater_equal(other: ${CLASS_NAME}): ${CLASS_NAME};
	
	public operator !(): boolean;
	
	private __not(): boolean;
	
	public operator u+(): ${CLASS_NAME};
	
	private __unary_plus(): ${CLASS_NAME};
	
	public operator u-(): ${CLASS_NAME};
	
	private __unary_minus(): ${CLASS_NAME};
}`
			));

		this.isAutoloadAble = true;
	}
}
