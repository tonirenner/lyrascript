import {describe, expect, it} from "bun:test";
import {Interpreter} from "../src/core/interpreter.ts";
import {Parser} from "../src/core/parser.ts";
import {EventPipeline} from "../src/core/infrastructure/event_pipeline.ts";
import {ObjectRegistry} from "../src/core/infrastructure/runtime_registry.ts";
import {TYPE_ENUM} from "../src/core/syntax/ast_grammar.ts";
import {RuntimeScope} from "../src/core/shared/ast_objects.ts";
import {Source} from "../src/core/syntax/source.ts";
import {LyraScriptProgram} from "../src/core/program.ts";

function executeSource(code: string): RuntimeScope {
	const source = new Source(code);
	const ast = new Parser(source).parse();
	const runtimeScope = new RuntimeScope();
	const objectRegistry = new ObjectRegistry();

	objectRegistry.collectAll(ast);

	const interpreter = new Interpreter(runtimeScope, objectRegistry, new EventPipeline());
	interpreter.run(ast);

	return runtimeScope;
}

async function executeProgramSource(code: string): Promise<RuntimeScope> {
	const contractsSource = `
interface Iterator<T> {
	public hasNext(): boolean;

	public next(): void;

	public previous(): void;

	public key(): number;

	public current(): T;

	public rewind(): void;
}

interface Iterable<T> {
	public iterator(): Iterator<T>;
}
`;
	const originalFetch = globalThis.fetch;

	globalThis.fetch = (async (input: string | URL | Request) => {
		const url = typeof input === "string" ? input : input.toString();

		if (url === "/library/contracts.lyra") {
			return new Response(contractsSource, {status: 200});
		}

		throw new Error(`Unexpected test fetch: ${url}`);
	}) as typeof fetch;

	try {
		const program = new LyraScriptProgram();

		await program.executeSource(new Source(code));

		return program.getGlobalEnvironment() as RuntimeScope;
	} finally {
		globalThis.fetch = originalFetch;
	}
}

describe("Interpreter", () => {
	it("evaluates arithmetic expressions into the runtime scope", () => {
		const scope = executeSource("let result: number = 1 + 2 * 3;");

		expect(scope.get("result").value).toBe(7);
	});

	it("creates instances and executes instance methods", () => {
		const scope = executeSource(`
class Counter {
	private value: number = 1;

	public increment(): number {
		this.value = this.value + 1;
		return this.value;
	}
}

let counter = new Counter();
let result = counter.increment();
`);

		expect(scope.get("result").value).toBe(2);
	});

	it("evaluates comparison and logical expressions", () => {
		const scope = executeSource(`
let less = 5 < 10;
let equal = 5 == 5;
let logical = true && !false;
`);

		expect(scope.get("less").value).toBe(true);
		expect(scope.get("equal").value).toBe(true);
		expect(scope.get("logical").value).toBe(true);
	});

	it("updates control flow through if and else branches", () => {
		const scope = executeSource(`
let result: number = 0;

if (false) {
	result = 1;
} else {
	result = 2;
}
`);

		expect(scope.get("result").toNativeRuntimeValue(TYPE_ENUM.NUMBER).value).toBe(2);
	});

	it("supports field mutation on instance methods", () => {
		const scope = executeSource(`
class Counter {
	public value: number = 0;

	public bump(): void {
		this.value = this.value + 1;
	}
}

let counter = new Counter();
counter.bump();
counter.bump();
let result = counter.value;
`);

		expect(scope.get("result").value).toBe(2);
	});
});

describe("Language Runtime", () => {
	it("supports default parameters", async () => {
		const scope = await executeProgramSource(`
class Calculator {
	public add(a: number, b: number = 2): number {
		return a + b;
	}
}

let calculator = new Calculator();
let result = calculator.add(3);
`);

		expect(scope.get("result").value).toBe(5);
	});

	it("supports lambda expressions and lambda arguments", async () => {
		const scope = await executeProgramSource(`
class Calculator {
	public apply(a: number, b: number, fn: (number, number) -> number): number {
		return fn(a, b);
	}
}

let calculator = new Calculator();
let result = calculator.apply(2, 3, { a: number, b: number -> a + b });
`);

		expect(scope.get("result").value).toBe(5);
	});

	it("supports native string method chaining", async () => {
		const scope = await executeProgramSource(`
let result = "HeLLo".toUpperCase().toLowerCase().toString();
`);

		expect(scope.get("result").value).toBe("hello");
	});

	it("supports native number and boolean string conversion", async () => {
		const scope = await executeProgramSource(`
let numberText = (42).toString();
let booleanText = true.toString();
`);

		expect(scope.get("numberText").value).toBe("42");
		expect(scope.get("booleanText").value).toBe("true");
	});

	it("supports arrays, index access and mutation", async () => {
		const scope = await executeProgramSource(`
let items: Array<number> = [1, 2, 3];
items.push(4);
items.removeAt(1);
let length = items.length();
let indexed = items[1];
`);

		expect(scope.get("length").value).toBe(3);
		expect(scope.get("indexed").value).toBe(3);
	});

	it("supports foreach loops over arrays", async () => {
		const scope = await executeProgramSource(`
let items: Array<number> = [1, 2, 3, 4];
let sum: number = 0;

foreach (item in items) {
	sum = sum + item;
}
`);

		expect(scope.get("sum").value).toBe(10);
	});

	it("supports match statements with explicit and default cases", async () => {
		const scope = await executeProgramSource(`
let label: string = "";

match (2) {
	1: {
		label = "one";
	}
	2: {
		label = "two";
	}
	default: {
		label = "other";
	}
}
`);

		expect(scope.get("label").value).toBe("two");
	});

	it("supports nullable assignments", async () => {
		const scope = await executeProgramSource(`
let current: number? = null;
current = 5;
let result = current;
`);

		expect(scope.get("result").toNativeRuntimeValue(TYPE_ENUM.NUMBER).value).toBe(5);
	});

	it("supports inheritance and inherited methods", async () => {
		const scope = await executeProgramSource(`
open class Person {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}

class User extends Person {
	constructor(name: string) {
		super(name);
	}
}

let user = new User("Toni");
let result = user.getName();
`);

		expect(scope.get("result").value).toBe("Toni");
	});
});
