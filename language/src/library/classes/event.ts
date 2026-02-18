import {NativeClass} from "../native_class";
import {LyraNativeObject} from "../../core/interpreter/interpreter_conversion";
import {Source} from "../../core/parser/parser_source";

const CLASS_NAME = 'Event';

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
