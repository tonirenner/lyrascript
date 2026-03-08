export type Bytecode = number | string;
export const Opcodes = {
	LOAD_CONST: 0x01,
	LOAD_VAR: 0x02,
	STORE_VAR: 0x03,
	LOAD_THIS: 0x04,
	ADD: 0x10,
	SUB: 0x11,
	MUL: 0x12,
	DIV: 0x13,
	MOD: 0x14,
	EQ: 0x19,
	NE: 0x20,
	NOT: 0x21,
	LT: 0x22,
	LE: 0x23,
	GT: 0x24,
	GE: 0x25,
	AND: 0x30,
	OR: 0x31,
	NEG: 0x40,
	POS: 0x41,
	UNARY_NOT: 0x42,
	GET_FIELD: 0x50,
	SET_FIELD: 0x51,
	CALL: 0x60,
	CLASS_DEF: 0x70,
	FIELD_DEF: 0x71,
	END_CLASS: 0x72,
	METHOD_DEF: 0x73,
	END_METHOD: 0x74,
	NEW: 0x80,
	RETURN: 0x90
};

export const BinaryOpcodeMap: Record<string, Bytecode> = {
	'+': Opcodes.ADD,
	'-': Opcodes.SUB,
	'*': Opcodes.MUL,
	'/': Opcodes.DIV,
	'%': Opcodes.MOD,
	'==': Opcodes.EQ,
	'!=': Opcodes.NE,
	'<': Opcodes.LT,
	'<=': Opcodes.LE,
	'>': Opcodes.GT,
	'>=': Opcodes.GE,
	'&&': Opcodes.AND,
	'||': Opcodes.OR
};

export const UnaryOpcodeMap: Record<string, Bytecode> = {
	'+': Opcodes.POS,
	'-': Opcodes.NEG,
	'!': Opcodes.UNARY_NOT
};
