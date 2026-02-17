import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/interpreter_conversion";
import {Source} from "../../core/parser_source";

const ARRAY_CLASS_NAME = 'Array';
const ARRAY_ITERATOR_CLASS_NAME = 'ArrayIterator';

export class LyraArray extends LyraNativeObject {
	values: any[];

	constructor(values: any[] = []) {
		super(ARRAY_CLASS_NAME);

		this.values = values;
	}

	iterator(): LyraArrayIterator {
		return new LyraArrayIterator(this);
	}

	length(): number {
		return this.values.length;
	}

	push(value: any): void {
		this.values.push(value);
	}

	// noinspection JSUnusedGlobalSymbols
	get(index: number): any {
		return this.values[index] ?? null;
	}

	// noinspection JSUnusedGlobalSymbols
	removeAt(index: number): void {
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
	public constructor(values = []);
	
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

	rewind() {
		this.index = 0;
	}

	hasNext(): boolean {
		return this.index < this.values.length;
	}

	next(): void {
		if (this.index + 1 > this.values.length) {
			return;
		}

		this.index++;
	}

	// noinspection JSUnusedGlobalSymbols
	previous(): void {
		if (this.index + 1 < 0) {
			return;
		}

		this.index--;
	}

	// noinspection JSUnusedGlobalSymbols
	key(): number {
		return this.index;
	}

	current(): any {
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
