import {NativeClass} from "../native_class.ts";
import {throwNativeError} from "../../core/infrastructure/errors.ts";
import {LyraNativeObject} from "../../core/model/runtime_model.ts";
import {Source} from "../../core/syntax/source.ts";

const CLASS_NAME = "Net";
const RESPONSE_CLASS_NAME = "NetResponse";

export class LyraNetResponse extends LyraNativeObject {
	constructor(
		private readonly ok: boolean,
		private readonly status: number,
		private readonly text: string,
		private readonly error: string | null = null
	) {
		super(RESPONSE_CLASS_NAME);
	}

	public isOk(): boolean {
		return this.ok;
	}

	public getStatus(): number {
		return this.status;
	}

	public getText(): string {
		return this.text;
	}

	public hasError(): boolean {
		return this.error !== null;
	}

	public getError(): string | null {
		return this.error;
	}
}

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

	static tryGet(url: string): Promise<LyraNetResponse> {
		return LyraNet.requestResponse(url, "GET");
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

	private static async requestResponse(url: string, method: string, body?: string): Promise<LyraNetResponse> {
		try {
			const response: Response = await fetch(url, {
				method,
				body
			});
			const text: string = method === "HEAD"
			                     ? ""
			                     : await response.text();

			return new LyraNetResponse(response.ok, response.status, text);
		} catch (error) {
			const message: string = error instanceof Error
			                        ? error.message
			                        : String(error);

			return new LyraNetResponse(false, 0, "", message);
		}
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
import NetResponse;

class ${CLASS_NAME} {
	public static get(url: string): string;

	public static post(url: string, body: string): string;

	public static put(url: string, body: string): string;

	public static patch(url: string, body: string): string;

	public static delete(url: string): string;

	public static head(url: string): string;

	public static tryGet(url: string): ${RESPONSE_CLASS_NAME};
}`
			)
		);

		this.isAutoloadAble = false;
	}
}

export class NetResponseType extends NativeClass {
	static CLASS_NAME = RESPONSE_CLASS_NAME;

	constructor() {
		super(
			RESPONSE_CLASS_NAME,
			LyraNetResponse,
			new Source(
				`
class ${RESPONSE_CLASS_NAME} {
	public isOk(): boolean;

	public getStatus(): number;

	public getText(): string;

	public hasError(): boolean;

	public getError(): string?;
}`
			)
		);

		this.isAutoloadAble = false;
	}
}
