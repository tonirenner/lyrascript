import {describe, expect, it} from "bun:test";
import {Interpreter} from "../../src/core/interpreter.ts";
import {Parser} from "../../src/core/parser.ts";
import {EventPipeline} from "../../src/core/infrastructure/event_pipeline.ts";
import {LyraError} from "../../src/core/infrastructure/errors.ts";
import {ObjectRegistry} from "../../src/core/infrastructure/runtime_registry.ts";
import {TYPE_ENUM} from "../../src/core/syntax/ast_grammar.ts";
import {RuntimeScope} from "../../src/core/shared/ast_objects.ts";
import {Source} from "../../src/core/syntax/source.ts";
import {LyraScriptProgram} from "../../src/core/program.ts";

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

		if (url === "https://lyra.test/success") {
			return new Response("hello from net", {status: 200});
		}

		if (url === "https://lyra.test/not-found") {
			return new Response("missing", {status: 404});
		}

		if (url === "https://lyra.test/network-error") {
			throw new TypeError("Failed to fetch");
		}

		return await originalFetch(input);
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

		expect(scope.get("result").value)
			.toBe(7);
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

		expect(scope.get("result").value)
			.toBe(2);
	});

	it("evaluates comparison and logical expressions", () => {
		const scope = executeSource(`
let less = 5 < 10;
let equal = 5 == 5;
let logical = true && !false;
`);

		expect(scope.get("less").value)
			.toBe(true);
		expect(scope.get("equal").value)
			.toBe(true);
		expect(scope.get("logical").value)
			.toBe(true);
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

		expect(scope.get("result")
		            .toNativeRuntimeValue(TYPE_ENUM.NUMBER).value)
			.toBe(2);
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

		expect(scope.get("result").value)
			.toBe(2);
	});

	it("captures nested method frames on runtime errors", () => {
		let thrown: unknown;

		try {
			executeSource(`
class Failer {
	public first(): number {
		return this.second();
	}

	public second(): number {
		return missingValue;
	}
}

let failer = new Failer();
failer.first();
`);
		} catch (error) {
			thrown = error;
		}

		expect(thrown)
			.toBeInstanceOf(LyraError);

		const lyraError = thrown as LyraError;

		expect(lyraError.stackFrames.map(frame => `${frame.className}.${frame.name}`))
			.toEqual(["Failer.second", "Failer.first"]);
		expect(lyraError.format())
			.toContain("Stacktrace:");
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

		expect(scope.get("result").value)
			.toBe(5);
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

		expect(scope.get("result").value)
			.toBe(5);
	});

	it("supports native string method chaining", async () => {
		const scope = await executeProgramSource(`
let result = "HeLLo".toUpperCase().toLowerCase().toString();
`);

		expect(scope.get("result").value)
			.toBe("hello");
	});

	it("supports native number and boolean string conversion", async () => {
		const scope = await executeProgramSource(`
let numberText = (42).toString();
let booleanText = true.toString();
`);

		expect(scope.get("numberText").value)
			.toBe("42");
		expect(scope.get("booleanText").value)
			.toBe("true");
	});

	it("supports arrays, index access and mutation", async () => {
		const scope = await executeProgramSource(`
let items: Array<number> = [1, 2, 3];
items.push(4);
items.removeAt(1);
let length = items.length();
let indexed = items[1];
`);

		expect(scope.get("length").value)
			.toBe(3);
		expect(scope.get("indexed").value)
			.toBe(3);
	});

	it("supports foreach loops over arrays", async () => {
		const scope = await executeProgramSource(`
let items: Array<number> = [1, 2, 3, 4];
let sum: number = 0;

foreach (item in items) {
	sum = sum + item;
}
`);

		expect(scope.get("sum").value)
			.toBe(10);
	});

	it("supports while loops with break and continue", async () => {
		const scope = await executeProgramSource(`
let count: number = 0;
let sum: number = 0;

while (count < 6) {
	count = count + 1;

	if (count == 2) {
		continue;
	}

	sum = sum + count;

	if (count == 4) {
		break;
	}
}
`);

		expect(scope.get("count").value)
			.toBe(4);
		expect(scope.get("sum").value)
			.toBe(8);
	});

	it("supports break and continue inside foreach loops", async () => {
		const scope = await executeProgramSource(`
let items: Array<number> = [1, 2, 3, 4, 5];
let sum: number = 0;

foreach (item in items) {
	if (item == 2) {
		continue;
	}

	if (item == 5) {
		break;
	}

	sum = sum + item;
}
`);

		expect(scope.get("sum").value)
			.toBe(8);
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

		expect(scope.get("label").value)
			.toBe("two");
	});

	it("supports nullable assignments", async () => {
		const scope = await executeProgramSource(`
let current: number? = null;
current = 5;
let result = current;
`);

		expect(scope.get("result")
		            .toNativeRuntimeValue(TYPE_ENUM.NUMBER).value)
			.toBe(5);
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

		expect(scope.get("result").value)
			.toBe("Toni");
	});

	it("treats suspended native calls as synchronous for chained instance calls", async () => {
		const scope = await executeProgramSource(`
import Net;

let result = Net.get("data:text/plain,hello from net").toUpperCase().toString();
`);

		expect(scope.get("result").value)
			.toBe("HELLO FROM NET");
	});

	it("supports Net.get for text responses", async () => {
		const scope = await executeProgramSource(`
import Net;

let result = Net.get("data:text/plain,lyra").toUpperCase().toString();
`);

		expect(scope.get("result").value)
			.toBe("LYRA");
	});

	it("models successful host IO through Net.tryGet", async () => {
		const scope = await executeProgramSource(`
import Net;

let response = Net.tryGet("https://lyra.test/success");
let ok = response.isOk();
let status = response.getStatus();
let text = response.getText();
`);

		expect(scope.get("ok").value)
			.toBe(true);
		expect(scope.get("status").value)
			.toBe(200);
		expect(scope.get("text").value)
			.toBe("hello from net");
	});

	it("models failed host IO through Net.tryGet without throwing", async () => {
		const scope = await executeProgramSource(`
import Net;

let response = Net.tryGet("https://lyra.test/network-error");
let ok = response.isOk();
let hasError = response.hasError();
let error = response.getError();
`);

		expect(scope.get("ok").value)
			.toBe(false);
		expect(scope.get("hasError").value)
			.toBe(true);
		expect(scope.get("error").value)
			.toBe("Failed to fetch");
	});

	it("supports explicit native dependency imports without relying on autoload order", async () => {
		const scope = await executeProgramSource(`
import Net;
import NetResponse;

let response: NetResponse = Net.tryGet("https://lyra.test/success");
let text = response.getText();
`);

		expect(scope.get("text").value)
			.toBe("hello from net");
	});
});
