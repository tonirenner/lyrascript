import {NativeClass} from "../native_class";
import {Source} from "../../core/parser_source";

const CLASS_NAME = 'Assert';

const ifFailed = (message: string = '') => {
	throw new Error('[AssertionError] ' + (message || 'Assertion failed.'));
};

export class LyraAssert {
	static isTrue(condition: boolean, message: string = '') {
		if (!condition) {
			ifFailed(message);
		}
	}

	static isFalse(condition: boolean, message: string = '') {
		if (condition) {
			ifFailed(message);
		}
	}
}

export class Assert extends NativeClass {
	static CLASS_NAME = CLASS_NAME;

	constructor() {
		super(
			CLASS_NAME,
			LyraAssert,
			new Source(
				`
class ${CLASS_NAME} {
	public static isTrue(condition: boolean, message: string = ""): void;
	
	public static isFalse(condition: boolean, message: string = ""): void;
}`
			));

		this.isAutoloadAble = false;
	}
}
