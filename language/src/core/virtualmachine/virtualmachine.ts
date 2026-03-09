import {getOpcodeName, Opcodes} from "./opcodes";
import {ClassDefinition, Environment, Instance} from "../runtime/objects";
import {ObjectRegistry} from "../runtime/registry";
import {throwRuntimeError, throwVirtualMachineError} from "../errors";
import {Stack} from "./stack.ts";
import type {ByteCode, ByteCodeInstructions} from "./bytecode.ts";
import {GRAMMAR} from "../grammar.ts";
import type {ASTParameterNode} from "../ast.ts";


export class VirtualMachine {

	private readonly stack: Stack = new Stack();

	private currentThis: Instance | null = null;

	constructor(
		private readonly registry: ObjectRegistry,
		private readonly environment: Environment
	) {
	}

	execute(byteCodeInstructions: ByteCodeInstructions): any {

		while (byteCodeInstructions.hasNext()) {
			const op: ByteCode = byteCodeInstructions.next();

			switch (op) {

				// =============================
				// CLASS DEFINITIONS
				// =============================

				case Opcodes.CLASS_DEF: {
					const className = byteCodeInstructions.next() as string;

					if (!this.registry.classes.has(className)) {
						throwRuntimeError(`Class ${className} not found in registry.`);
					}

					const classDef: ClassDefinition = this.registry.classes.get(className);
					this.stack.push(classDef);
					break;
				}

				// =========================
				// CONSTANTS
				// =========================

				case Opcodes.LOAD_CONST:
					this.stack.push(byteCodeInstructions.next());
					break;

				// =========================
				// VARIABLES
				// =========================

				case Opcodes.LOAD_VAR: {
					const name = byteCodeInstructions.next() as string;
					this.stack.push(this.environment.get(name));
					break;
				}

				case Opcodes.STORE_VAR: {
					const name = byteCodeInstructions.next() as string;
					const value: ByteCode = this.stack.pop();

					if (this.environment.has(name)) {
						this.environment.set(name, value);
					} else {
						this.environment.define(name, value);
					}

					break;
				}

				// =========================
				// THIS
				// =========================

				case Opcodes.LOAD_THIS:
					this.stack.push(this.currentThis);
					break;

				// =========================
				// OBJECT CREATION
				// =========================

				case Opcodes.NEW: {
					const className = byteCodeInstructions.next() as string;

					const classDef: ClassDefinition = this.registry.classes.get(className);
					const instance: Instance = classDef.constructEmptyInstance();

					this.registry.instances.register(instance);

					this.stack.push(instance);
					break;
				}

				// =========================
				// FIELD ACCESS
				// =========================

				case Opcodes.GET_FIELD: {
					const fieldName = byteCodeInstructions.next() as string;
					const instance: any = this.stack.pop();

					if (!(instance instanceof Instance)) {
						throwRuntimeError("GET_FIELD on non-instance");
					}

					this.stack.push(instance.__instanceFields[fieldName]);
					break;
				}

				case Opcodes.SET_FIELD: {
					const fieldName = byteCodeInstructions.next() as string;

					const value: any = this.stack.pop();
					const instance: any = this.stack.pop();

					if (!(instance instanceof Instance)) {
						throwRuntimeError("SET_FIELD on non-instance");
					}

					instance.__instanceFields[fieldName] = value;
					this.stack.push(value);

					break;
				}

				// =============================
				// METHOD CALLS
				// =============================

				case Opcodes.CALL_METHOD: {

					const methodName = byteCodeInstructions.next() as string;
					const argCount = byteCodeInstructions.next() as number;

					const args: any[] = [];

					for (let i: number = 0; i < argCount; i++) {
						args.unshift(this.stack.pop());
					}

					const instance: Instance = this.stack.pop();

					const methodNode = instance.findeMethodNode(methodName);

					const methodEnv = new Environment(this.environment);

					methodEnv.define(GRAMMAR.THIS, instance);

					for (let i: number = 0; i < methodNode.parameters.length; i++) {

						const param: ASTParameterNode | undefined = methodNode.parameters[i];

						if (!param) {
							throwVirtualMachineError(`Parameter could not be found in method ${methodName} at index ${i}`)
						}

						methodEnv.define(param.name, args[i]);
					}

					const previousThis: Instance | null = this.currentThis;

					this.currentThis = instance;

					for (const child of methodNode.children) {
						// simple execution like interpreter
						// return handling via stack
					}

					this.currentThis = previousThis;

					break;
				}

				// =============================
				// STACK
				// =============================

				case Opcodes.POP:

					this.stack.pop();

					break;

				// =============================
				// CONTROL FLOW
				// =============================

				case Opcodes.JUMP: {

					const target = byteCodeInstructions.next() as number;

					byteCodeInstructions.seekAt(target);

					break;
				}

				case Opcodes.JUMP_IF_FALSE: {

					const target = byteCodeInstructions.next() as number;

					const condition: boolean = this.stack.pop();

					if (!condition) {
						byteCodeInstructions.seekAt(target);
					}

					break;
				}

				// =========================
				// ARITHMETIC
				// =========================

				case Opcodes.ADD: {
					const {a, b} = this.stack.operands();
					this.stack.push(a + b);
					break;
				}

				case Opcodes.SUB: {
					const {a, b} = this.stack.operands();
					this.stack.push(a - b);
					break;
				}

				case Opcodes.MUL: {
					const {a, b} = this.stack.operands();
					this.stack.push(a * b);
					break;
				}

				case Opcodes.DIV: {
					const {a, b} = this.stack.operands();
					this.stack.push(a / b);
					break;
				}

				case Opcodes.MOD: {
					const {a, b} = this.stack.operands();
					this.stack.push(a % b);
					break;
				}

				// =========================
				// COMPARISON
				// =========================

				case Opcodes.EQ: {
					const {a, b} = this.stack.operands();
					this.stack.push(a === b);
					break;
				}

				case Opcodes.NE: {
					const {a, b} = this.stack.operands();
					this.stack.push(a !== b);
					break;
				}

				case Opcodes.LT: {
					const {a, b} = this.stack.operands();
					this.stack.push(a < b);
					break;
				}

				case Opcodes.LE: {
					const {a, b} = this.stack.operands();
					this.stack.push(a <= b);
					break;
				}

				case Opcodes.GT: {
					const {a, b} = this.stack.operands();
					this.stack.push(a > b);
					break;
				}

				case Opcodes.GE: {
					const {a, b} = this.stack.operands();
					this.stack.push(a >= b);
					break;
				}

				// =========================
				// LOGIC
				// =========================

				case Opcodes.AND: {
					const {a, b} = this.stack.operands();
					this.stack.push(a && b);
					break;
				}

				case Opcodes.OR: {
					const {a, b} = this.stack.operands();
					this.stack.push(a || b);
					break;
				}

				case Opcodes.NEG:
					this.stack.push(-this.stack.pop());
					break;

				case Opcodes.POS:
					this.stack.push(+this.stack.pop());
					break;

				case Opcodes.UNARY_NOT:
					this.stack.push(!this.stack.pop());
					break;

				default:
					throwVirtualMachineError(`Unknown opcode ${getOpcodeName(op as number)} at ip ${byteCodeInstructions.index}`)
			}
		}

		return this.stack.pop();
	}
}
