import {NativeClass} from "../native_class.ts";
import {Source} from "../../core/syntax/source.ts";

const CLASS_NAME = "Net";

export class LyraNet {
	static fetch(): Promise<string> {
		return Promise.resolve("hello from net");
	}
}

export class NetType extends NativeClass {
	static CLASS_NAME = CLASS_NAME;

	constructor() {
		super(
			CLASS_NAME,
			LyraNet,
			new Source(
				`
class ${CLASS_NAME} {
	public static fetch(): string;
}`
			)
		);

		this.isAutoloadAble = false;
	}
}
