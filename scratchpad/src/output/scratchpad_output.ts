export class ScratchpadOutput {
	stdout: string[] = [];
	stderr: string[] = [];

	log(...args: any[]): void {
		this.stdout.push(args.map((arg: any): string => formatOutputValue(arg)).join(" "));
	}

	error(err: any): void {
		this.stderr.push(formatOutputValue(err));
	}

	clear(): void {
		this.stdout.length = 0;
		this.stderr.length = 0;
	}
}

function formatOutputValue(value: any): string {
	if (typeof value === "string") {
		return value;
	}

	if (value instanceof Error) {
		return value.stack || value.message;
	}

	if (value === null || value === undefined) {
		return String(value);
	}

	if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") {
		return String(value);
	}

	if (typeof value === "function") {
		return `[Function ${value.name || "anonymous"}]`;
	}

	if (typeof value === "object") {
		const serializer = (value as {serialize?: () => unknown}).serialize;
		if (typeof serializer === "function") {
			try {
				return JSON.stringify(serializer.call(value), null, 2);
			} catch {
			}
		}

		try {
			return JSON.stringify(
				value,
				createCircularReplacer(),
				2
			);
		} catch {
			return String(value);
		}
	}

	return String(value);
}

function createCircularReplacer(): (key: string, value: unknown) => unknown {
	const seen = new WeakSet<object>();

	return (_key: string, value: unknown): unknown => {
		if (value instanceof Map) {
			return Object.fromEntries(value.entries());
		}

		if (value instanceof Set) {
			return Array.from(value.values());
		}

		if (typeof value === "function") {
			return `[Function ${value.name || "anonymous"}]`;
		}

		if (typeof value === "object" && value !== null) {
			if (seen.has(value)) {
				return "[Circular]";
			}

			seen.add(value);
		}

		return value;
	};
}

export function wrapConsole(
	onLog: (...args: any[]) => void,
	onError: (...args: any[]) => void
): () => void {
	const original = {
		log: console.log,
		error: console.error,
		warn: console.warn,
		info: console.info
	};

	console.log = (...args): void => {
		onLog(...args);
		original.log.apply(console, args);
	};

	console.error = (...args): void => {
		onError(...args);
		original.error.apply(console, args);
	};

	console.warn = (...args): void => {
		onError(...args);
		original.warn.apply(console, args);
	};

	console.info = (...args): void => {
		onLog(...args);
		original.info.apply(console, args);
	};

	return (): void => {
		console.log = original.log;
		console.error = original.error;
		console.warn = original.warn;
		console.info = original.info;
	};
}
