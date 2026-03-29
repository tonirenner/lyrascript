import type {RuntimeValue, ValueScope} from "../model/runtime_model.ts";
import type {BytecodeModule} from "../bytecode/bytecode_module.ts";

export interface BytecodeCallFrame {
	module: BytecodeModule;
	ip: number;
}

export interface BytecodeVirtualMachineState {
	stack: RuntimeValue[];
	frames: BytecodeCallFrame[];
	globals: ValueScope;
}
