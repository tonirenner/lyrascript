import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/runtime/conversion";
import {Source} from "../../core/parser/source";

const ARRAY_CLASS_NAME = 'Array';
const ARRAY_ITERATOR_CLASS_NAME = 'ArrayIterator';

export class LyraArray extends LyraNativeObject {
	public values: any[];

	constructor(values: any[] = []) {
		super(ARRAY_CLASS_NAME);

		this.values = values;
	}

	public iterator(): LyraArrayIterator {
		return new LyraArrayIterator(this);
	}

	public length(): number {
		return this.values.length;
	}

	public push(value: any): void {
		this.values.push(value);
	}

	// noinspection JSUnusedGlobalSymbols
	public get(index: number): any {
		return this.values[index] ?? null;
	}

	// noinspection JSUnusedGlobalSymbols
	public removeAt(index: number): void {
		this.values = this.values.splice(index, 1);
	}

	override toString(): string {
		const values = this
			.values
			.map(value => {
				if (value instanceof LyraArray) {
					return value.toString();
				}
				return value;
			});

		return `[${values.join(', ')}]`;
	}
}

export class ArrayType extends NativeClass {
	static CLASS_NAME = ARRAY_CLASS_NAME;

	constructor() {
		super(
			ARRAY_CLASS_NAME,
			LyraArray,
			new Source(
				`
class ${ARRAY_CLASS_NAME}<T> implements Iterable<T> {
	public constructor(values: Array<T> = []);
	
	public iterator(): Iterator<T>;
	
	public length(): number;
	
	public push(value: T): void;
	
	public get(index: number): T?;
	
	public removeAt(index: number): void;
	
	public toString(): string;
}`
			));

		this.isAutoloadAble = true;
	}
}

export class LyraArrayIterator extends LyraNativeObject {
	values: any[];
	index: number = 0;

	constructor(array: LyraArray) {
		super(ARRAY_ITERATOR_CLASS_NAME);

		this.values = array.values;
	}

	public rewind() {
		this.index = 0;
	}

	public hasNext(): boolean {
		return this.index < this.values.length;
	}

	public next(): void {
		if (this.index + 1 > this.values.length) {
			return;
		}

		this.index++;
	}

	// noinspection JSUnusedGlobalSymbols
	public previous(): void {
		if (this.index + 1 < 0) {
			return;
		}

		this.index--;
	}

	// noinspection JSUnusedGlobalSymbols
	public key(): number {
		return this.index;
	}

	public current(): any {
		return this.values[this.index];
	}
}

export class ArrayIteratorType extends NativeClass {
	static CLASS_NAME = ARRAY_ITERATOR_CLASS_NAME;

	constructor() {
		super(
			ARRAY_ITERATOR_CLASS_NAME,
			LyraArray,
			new Source(
				`
class ${ARRAY_ITERATOR_CLASS_NAME}<T> implements Iterator<T> {
	public constructor(array: Array<T>);
	
	public hasNext(): boolean;
	
	public next(): void;
	
	public previous(): void;
	
	public key(): number;
	
	public current(): T;
	
	public rewind(): void;
}`
			));

		this.isAutoloadAble = true;
	}
}
