import {OpCode} from "./opcode.ts";

export type BytecodeConstant = string | number | boolean | null;
export const BYTECODE_MODULE_MAGIC = "LYRAB1";

export interface Instruction {
	opcode: OpCode;
	operand?: number | string;
}

export interface BytecodeModule {
	version: number;
	constants: BytecodeConstant[];
	instructions: Instruction[];
}

export interface SerializedBytecodeModule {
	magic: string;
	version: number;
	constants: BytecodeConstant[];
	instructions: Instruction[];
}

export function serializeBytecodeModule(module: BytecodeModule): string {
	const payload: SerializedBytecodeModule = {
		magic: BYTECODE_MODULE_MAGIC,
		version: module.version,
		constants: module.constants,
		instructions: module.instructions
	};

	return JSON.stringify(payload, null, 2);
}

export function deserializeBytecodeModule(serialized: string): BytecodeModule {
	const payload: SerializedBytecodeModule = JSON.parse(serialized) as SerializedBytecodeModule;

	if (payload.magic !== BYTECODE_MODULE_MAGIC) {
		throw new Error(`Invalid Lyra bytecode module magic: ${String(payload.magic)}`);
	}

	return {
		version: payload.version,
		constants: payload.constants,
		instructions: payload.instructions
	};
}
