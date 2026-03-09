import {GRAMMAR, TYPE_ENUM} from "./ast_grammar.ts";

export function toNativeValue(value: any, expected: any = null): any {
	const typeOf = typeof value;

	if (expected === null) {
		if (value === GRAMMAR.NULL) {
			return null;
		}
		if (value === GRAMMAR.TRUE) {
			return true;
		}
		if (value === GRAMMAR.FALSE) {
			return false;
		}
		if (typeOf === 'string' && value.trim() !== '' && !isNaN(value)) {
			return Number(value);
		}
		return value;
	}

	switch (expected) {
		case TYPE_ENUM.STRING:
			return typeOf === 'string' ? value : String(value);

		case TYPE_ENUM.NUMBER:
			return typeOf === 'number' ? value : Number(value);

		case TYPE_ENUM.BOOLEAN:
			return typeOf === 'boolean' ? value : value === 'true';

		case TYPE_ENUM.NULL:
			return null;
	}

	return value;
}

