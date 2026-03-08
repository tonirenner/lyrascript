import {type Bytecode, Opcodes} from "./opcodes";

type ClassDef = {
	name: string;
	fields: string[];
	methods: Record<string, Function>;
};

export class VirtualMachine {
	private stack: any[] = [];
	private globals: Record<string, any> = {};
	private classes: Record<string, ClassDef> = {};
	private bytecode: (number | string)[] = [];
	private ip: number = 0;
	private currentThis: any = null;

	execute(bytecode: Bytecode[]): any {
		this.bytecode = bytecode;
		this.ip = 0;

		while (this.ip < this.bytecode.length) {
			const op = this.bytecode[this.ip++];

			switch (op) {
				case Opcodes.LOAD_CONST:
					this.stack.push(this.bytecode[this.ip++]);
					break;

				case Opcodes.LOAD_VAR: {
					const name = this.bytecode[this.ip++] as string;
					this.stack.push(this.globals[name]);
					break;
				}

				case Opcodes.STORE_VAR: {
					const name = this.bytecode[this.ip++] as string;
					this.globals[name] = this.stack.pop();
					break;
				}

				case Opcodes.LOAD_THIS:
					this.stack.push(this.currentThis);
					break;

				case Opcodes.ADD: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a + b);
					break;
				}

				case Opcodes.SUB: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a - b);
					break;
				}

				case Opcodes.MUL: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a * b);
					break;
				}

				case Opcodes.DIV: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a / b);
					break;
				}

				case Opcodes.MOD: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a % b);
					break;
				}

				case Opcodes.EQ: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a === b);
					break;
				}

				case Opcodes.NE: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a !== b);
					break;
				}

				case Opcodes.LT: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a < b);
					break;
				}

				case Opcodes.LE: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a <= b);
					break;
				}

				case Opcodes.GT: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a > b);
					break;
				}

				case Opcodes.GE: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a >= b);
					break;
				}

				case Opcodes.AND: {
					const b = this.stack.pop();
					const a = this.stack.pop();
					this.stack.push(a && b);
					break;
				}

				case Opcodes.OR: {
					const b = this.stack.pop();
					const a = this.stack.pop();
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

				case Opcodes.GET_FIELD: {
					const field = this.bytecode[this.ip++] as string;
					const obj = this.stack.pop();
					if (!obj) throw new Error("GET_FIELD on null");
					this.stack.push(obj[field]);
					break;
				}

				case Opcodes.SET_FIELD: {
					const field = this.bytecode[this.ip++] as string;
					const value = this.stack.pop();
					const obj = this.stack.pop();
					if (!obj) throw new Error("SET_FIELD on null");
					obj[field] = value;
					this.stack.push(value);
					break;
				}

				case Opcodes.NEW: {
					const className = this.bytecode[this.ip++] as string;
					const classDef = this.classes[className];
					if (!classDef) throw new Error("Unknown class " + className);

					const obj: any = {};
					for (const field of classDef.fields) obj[field] = null;
					for (const method in classDef.methods) {
						if (classDef.methods[method]) {
							obj[method] = classDef.methods[method].bind(obj);
						}
					}
					this.stack.push(obj);
					break;
				}

				case Opcodes.CLASS_DEF: {
					const name = this.bytecode[this.ip++] as string;
					const classDef: ClassDef = {name, fields: [], methods: {}};
					this.classes[name] = classDef;

					while (true) {
						const inner = this.bytecode[this.ip++];
						if (inner === Opcodes.END_CLASS) break;

						if (inner === Opcodes.FIELD_DEF) {
							const fieldName = this.bytecode[this.ip++] as string;
							classDef.fields.push(fieldName);
						}

						if (inner === Opcodes.METHOD_DEF) {
							const methodName = this.bytecode[this.ip++] as string;

							// temporäre Platzhalterfunktion
							const fn = (...args: any[]) => console.log("Method call not implemented:", methodName);
							classDef.methods[methodName] = fn;

							while (this.bytecode[this.ip++] !== Opcodes.END_METHOD) {
							}
						}
					}
					break;
				}

				case Opcodes.CALL: {
					const argCount = this.bytecode[this.ip++] as number;
					const args = [];
					for (let i = 0; i < argCount; i++) args.unshift(this.stack.pop());
					const fn = this.stack.pop();
					if (typeof fn !== "function") throw new Error("CALL target not function");
					this.stack.push(fn(...args));
					break;
				}

				case Opcodes.RETURN:
					return this.stack.pop();

				default:
					throw new Error("Unknown opcode " + op);
			}
		}

		return null;
	}
}
