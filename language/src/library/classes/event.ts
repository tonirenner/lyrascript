import {NativeClass} from "../native_class.js";
import {LyraNativeObject} from "../../core/shared/runtime_model.js";
import {Source} from "../../core/parser/source.js";

const CLASS_NAME = 'LyraEvents';

export class LyraEvent extends LyraNativeObject {
	constructor(private readonly event: Event) {
		super(CLASS_NAME);
	}

	getType(): string {
		return this.event.type;
	}

	preventDefault(): void {
		this.event.preventDefault();
	}
}

export class EventType extends NativeClass {
	static CLASS_NAME = CLASS_NAME;

	constructor() {
		super(
			CLASS_NAME,
			LyraEvent,
			new Source(
				`
class ${CLASS_NAME} {
	public constructor(event);

	public getType(): string;

	public preventDefault(): void;
}`));

		this.isAutoloadAble = true;
	}
}
