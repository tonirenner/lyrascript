import {throwRuntimeError} from "../infrastructure/errors.ts";
import type {BytecodeModule, Instruction} from "../bytecode/bytecode_module.ts";
import {OpCode} from "../bytecode/opcode.ts";
import type {RuntimeValue, ValueScope} from "../model/runtime_model.ts";
import {Value} from "../model/runtime_model.ts";
import type {BytecodeCallFrame, BytecodeVirtualMachineState} from "./vm_model.ts";

export class VirtualMachine {
	private readonly state: BytecodeVirtualMachineState;

	constructor(globals: ValueScope) {
		this.state = {
			stack: [],
			frames: [],
			globals
		};
	}

	public execute(module: BytecodeModule): RuntimeValue {
		const frame: BytecodeCallFrame = {module, ip: 0};
		this.state.frames.push(frame);

		while (frame.ip < frame.module.instructions.length) {
			const instruction: Instruction = frame.module.instructions[frame.ip] as Instruction;
			frame.ip++;

			switch (instruction.opcode) {
				case OpCode.LOAD_CONSTANT:
					this.push(Value(frame.module.constants[instruction.operand as number]));
					break;
				case OpCode.LOAD_NULL:
					this.push(Value(null));
					break;
				case OpCode.GET_GLOBAL:
					this.push(this.state.globals.get(instruction.operand as string));
					break;
				case OpCode.DEFINE_GLOBAL: {
					const value = this.pop();
					this.state.globals.define(instruction.operand as string, value);
					break;
				}
				case OpCode.SET_GLOBAL: {
					const value = this.peek();
					this.state.globals.assign(instruction.operand as string, value);
					break;
				}
				case OpCode.POP:
					this.pop();
					break;
				case OpCode.ADD:
					this.binary((left, right) => left + right);
					break;
				case OpCode.SUBTRACT:
					this.binary((left, right) => left - right);
					break;
				case OpCode.MULTIPLY:
					this.binary((left, right) => left * right);
					break;
				case OpCode.DIVIDE:
					this.binary((left, right) => left / right);
					break;
				case OpCode.MODULUS:
					this.binary((left, right) => left % right);
					break;
				case OpCode.NEGATE: {
					const value = this.pop()
					                  .toNativeRuntimeValue();
					this.push(Value(-value.value));
					break;
				}
				case OpCode.NOT: {
					const value = this.pop()
					                  .toNativeRuntimeValue();
					this.push(Value(!value.value));
					break;
				}
				case OpCode.EQUAL:
					this.binary((left, right) => left === right);
					break;
				case OpCode.NOT_EQUAL:
					this.binary((left, right) => left !== right);
					break;
				case OpCode.LESS_THAN:
					this.binary((left, right) => left < right);
					break;
				case OpCode.LESS_EQUAL:
					this.binary((left, right) => left <= right);
					break;
				case OpCode.GREATER_THAN:
					this.binary((left, right) => left > right);
					break;
				case OpCode.GREATER_EQUAL:
					this.binary((left, right) => left >= right);
					break;
				case OpCode.JUMP:
					frame.ip = instruction.operand as number;
					break;
				case OpCode.JUMP_IF_FALSE: {
					const value = this.peek()
					                  .toNativeRuntimeValue();
					if (!value.value) {
						frame.ip = instruction.operand as number;
					}
					break;
				}
				case OpCode.RETURN:
					this.state.frames.pop();
					return this.pop();
				default:
					throwRuntimeError(`Unhandled bytecode instruction ${instruction.opcode}.`);
			}
		}

		this.state.frames.pop();

		return Value(null);
	}

	private binary(operation: (left: any, right: any) => any): void {
		const right = this.pop()
		                  .toNativeRuntimeValue();
		const left = this.pop()
		                 .toNativeRuntimeValue();

		this.push(Value(operation(left.value, right.value)));
	}

	private push(value: RuntimeValue): void {
		this.state.stack.push(value);
	}

	private pop(): RuntimeValue {
		const value = this.state.stack.pop();
		if (!value) {
			throwRuntimeError("Bytecode stack underflow.");
		}

		return value;
	}

	private peek(): RuntimeValue {
		const value = this.state.stack[this.state.stack.length - 1];
		if (!value) {
			throwRuntimeError("Bytecode stack is empty.");
		}

		return value;
	}
}
