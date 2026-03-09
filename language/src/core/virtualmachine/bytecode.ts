import {throwVirtualMachineError} from "../shared/errors.ts";

export type ByteCode = number | string;

export class ByteCodeInstructions {
	private readonly instructions: ByteCode[];
	private _index: number = 0;

	constructor(instructions: ByteCode[]) {
		this.instructions = instructions;
	}

	get index(): number {
		return this._index;
	}

	reset(): void {
		this._index = 0;
	}

	seekAt(index: number): void {
		this._index = index;
	}

	next(): ByteCode {
		const bytecode: ByteCode | undefined = this.instructions[this._index++];
		if (!bytecode) {
			throwVirtualMachineError('No bytecode found.')
		}

		return bytecode;
	}

	hasNext(): boolean {
		return this._index < this.instructions.length;
	}
}
