export class ScratchpadOutput {
	/** @type {string[]} */
	stdout: string[] = [];
	/** @type {string[]} */
	stderr: string[] = [];

	log(...args: any[]): void {
		this.stdout.push(args.map(String)
		                     .join(" "));
	}

	error(err: any): void {
		this.stderr.push(String(err));
	}

	clear(): void {
		this.stdout.length = 0;
		this.stderr.length = 0;
	}
}

export function wrapConsole(onLog: Function, onError: Function): () => void {
	const original = {
		log: console.log,
		error: console.error,
		warn: console.warn,
		info: console.info
	};

	console.log = (...args) => {
		onLog(args);
		original.log.apply(console, args);
	};

	console.error = (...args) => {
		onError(args);
		original.error.apply(console, args);
	};

	console.warn = (...args) => {
		onError(args);
		original.warn.apply(console, args);
	};

	console.info = (...args) => {
		onLog(args);
		original.info.apply(console, args);
	};

	return (): void => {
		console.log = original.log;
		console.error = original.error;
		console.warn = original.warn;
		console.info = original.info;
	};
}
