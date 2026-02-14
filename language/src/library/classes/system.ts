import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/interpreter_conversion";
import {Source} from "../../core/parser_source";

const CLASS_NAME = 'System';

export class LyraSystem {
	static alert(message: string): void {
		alert(message);
	}

	static print(message: string): void {
		console.log(message);
	}

	static info(value: any): void {
		if (value instanceof LyraNativeObject) {
			console.info(value.serialize());
			return;
		}
		console.info(value);
	}

	static warning(value: any): void {
		if (value instanceof LyraNativeObject) {
			console.warn(value.serialize());
			return;
		}
		console.warn(value);
	}

	static error(value: any): void {
		if (value instanceof LyraNativeObject) {
			console.error(value.serialize());
			return;
		}
		console.error(value);
	}

	static log(value: any): void {
		if (value instanceof LyraNativeObject) {
			console.log(value.serialize());
			return;
		}
		console.log(value);
	}
}

export class System extends NativeClass {
	static CLASS_NAME = CLASS_NAME;

	constructor() {
		super(
			CLASS_NAME,
			LyraSystem,
			new Source(
				`
class ${CLASS_NAME} {
	public static alert(message: string): void;
	
	public static print(message: string): void;
	
	public static info(value: mixed): void;
	
	public static warning(value: mixed): void;
	
	public static error(value: mixed): void;
	
	public static log(value: mixed): void;
}`
			));

		this.isAutoloadAble = false;
	}
}
