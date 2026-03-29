export class ScratchpadOutput {
	stdout: string[] = [];
	stderr: string[] = [];

	log(...args: any[]): void {
		this.stdout.push(args.map(String).join(" "));
	}

	error(err: any): void {
		this.stderr.push(String(err));
	}

	clear(): void {
		this.stdout.length = 0;
		this.stderr.length = 0;
	}
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
