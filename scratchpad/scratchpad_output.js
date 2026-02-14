export class ScratchpadOutput {
	/** @type {string[]} */
	stdout = [];
	/** @type {string[]} */
	stderr = [];

	/** @param {...any} args */
	log(...args) {
		this.stdout.push(args.map(String)
		                     .join(" "));
	}

	/** @param {any} err */
	error(err) {
		this.stderr.push(String(err));
	}

	clear() {
		this.stdout.length = 0;
		this.stderr.length = 0;
	}
}

/**
 * @param {Function} onLog
 * @param {Function} onError
 * @return {Function}
 */
export function wrapConsole(onLog, onError) {
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

	return () => {
		console.log   = original.log;
		console.error = original.error;
		console.warn  = original.warn;
		console.info  = original.info;
	};
}
