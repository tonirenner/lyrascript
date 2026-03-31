import {describe, expect, it} from "bun:test";
import {Parser} from "../../src/core/parser.ts";
import {TypeChecker} from "../../src/core/typechecker.ts";
import {ObjectRegistry} from "../../src/core/infrastructure/runtime_registry.ts";
import {Source} from "../../src/core/syntax/source.ts";
import {LyraTypeError} from "../../src/core/infrastructure/errors.ts";

function checkSource(code: string): void {
	const ast = new Parser(new Source(code)).parse();
	const objectRegistry = new ObjectRegistry();

	objectRegistry.collectAll(ast);

	new TypeChecker(objectRegistry).check(ast);
}

describe("TypeChecker", () => {
	it("accepts methods that return through all if branches", () => {
		expect(() => checkSource(`
class Example {
	public choose(flag: boolean): number {
		if (flag) {
			return 1;
		} else {
			return 2;
		}
	}
}
`)).not.toThrow();
	});

	it("rejects non-boolean if conditions", () => {
		expect(() => checkSource(`
if (1) {
	let value = 1;
}
`)).toThrow(LyraTypeError);
	});

	it("accepts methods that return through all match cases", () => {
		expect(() => checkSource(`
class Example {
	public label(value: number): string {
		match (value) {
			1: {
				return "one";
			}
			default: {
				return "other";
			}
		}
	}
}
`)).not.toThrow();
	});

	it("rejects classes missing methods inherited through interface extends", () => {
		expect(() => checkSource(`
interface BaseContract {
	public base(): number;
}

interface FullContract extends BaseContract {
	public extra(): number;
}

class Implementation implements FullContract {
	public extra(): number {
		return 1;
	}
}
`)).toThrow(LyraTypeError);
	});

	it("rejects incompatible field initializers", () => {
		expect(() => checkSource(`
class Example {
	public count: number = "wrong";
}
`)).toThrow(LyraTypeError);
	});

	it("accepts user-defined operator overloads", () => {
		expect(() => checkSource(`
class Box {
	public operator +(other: Box): Box {
		return this;
	}
}

let left = new Box();
let right = new Box();
let result: Box = left + right;
`)).not.toThrow();
	});

	it("validates block lambda return types", () => {
		expect(() => checkSource(`
let fn: (number) -> number = { value: number -> value };
`)).not.toThrow();

		expect(() => checkSource(`
let fn: (number) -> number = { value: number -> number: {
	return value;
} };
`)).not.toThrow();

		expect(() => checkSource(`
let fn: (number) -> number = { value: number -> number: {
	return "wrong";
} };
`)).toThrow(LyraTypeError);
	});

	it("checks expressions embedded in vdom trees", () => {
		expect(() => checkSource(`
class Component {
	public render(): mixed {
		let title = "hello";
		return vdom <div>{title}</div>;
	}
}
`)).not.toThrow();

		expect(() => checkSource(`
class Component {
	public render(): mixed {
		return vdom <div>{missing}</div>;
	}
}
`)).toThrow(LyraTypeError);
	});

	it("captures structured stack frames for type errors inside methods", () => {
		let thrown: unknown;

		try {
			checkSource(`
class Failer {
	public broken(): number {
		return missingValue;
	}
}
`);
		} catch (error) {
			thrown = error;
		}

		expect(thrown)
			.toBeInstanceOf(LyraTypeError);

		const typeError = thrown as LyraTypeError;

		expect(typeError.stackFrames.map(frame => frame.className ? `${frame.className}.${frame.name}` : frame.name))
			.toEqual(["Failer.broken", "Failer.Failer", "typecheck"]);
		expect(typeError.format())
			.toContain("Stacktrace:");
	});
});
