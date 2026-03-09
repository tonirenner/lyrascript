import {throwVirtualMachineError} from "../shared/errors.ts";

type Operands = {
	a: any,
	b: any
}

export class Stack {
	private readonly stack: any[] = [];

	pop(): any {
		const bytecode: any = this.stack.pop();
		if (bytecode === undefined) {
			throwVirtualMachineError('Stack is empty');
		}
		return bytecode;
	}

	push(value?: any): void {
		if (value === undefined) {
			throwVirtualMachineError('Value is undefined');
		}

		this.stack.push(value);
	}

	operands(): Operands {
		return {
			a: this.pop(),
			b: this.pop()
		};
	}
}
