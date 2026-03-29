import {NativeClass} from "../native_class.ts";
import {throwNativeError} from "../../core/infrastructure/errors.ts";
import {Source} from "../../core/syntax/source.ts";

const CLASS_NAME = "Net";

export class LyraNet {
	static get(url: string): Promise<string> {
		return LyraNet.request(url, "GET");
	}

	static post(url: string, body: string): Promise<string> {
		return LyraNet.request(url, "POST", body);
	}

	static put(url: string, body: string): Promise<string> {
		return LyraNet.request(url, "PUT", body);
	}

	static patch(url: string, body: string): Promise<string> {
		return LyraNet.request(url, "PATCH", body);
	}

	static delete(url: string): Promise<string> {
		return LyraNet.request(url, "DELETE");
	}

	static head(url: string): Promise<string> {
		return LyraNet.request(url, "HEAD");
	}

	private static async request(url: string, method: string, body?: string): Promise<string> {
		let response: Response;

		try {
			response = await fetch(url, {
				method,
				body
			});
		} catch (error) {
			const message: string = error instanceof Error
			                        ? error.message
			                        : String(error);

			throwNativeError(`Net request failed for ${method} ${url}: ${message}`);
		}

		if (!response.ok) {
			throwNativeError(`Net request failed with status ${response.status} for ${method} ${url}`);
		}

		return await response.text();
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
	public static get(url: string): string;

	public static post(url: string, body: string): string;

	public static put(url: string, body: string): string;

	public static patch(url: string, body: string): string;

	public static delete(url: string): string;

	public static head(url: string): string;
}`
			)
		);

		this.isAutoloadAble = false;
	}
}
