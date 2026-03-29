import {resolve} from "node:path";

export abstract class AbstractFileLoader {
	abstract load(url: string): Promise<string>;
}

export class FetchFileLoader extends AbstractFileLoader {
	override load(url: string): Promise<string> {
		return fetch(url)
			.then(response => response.text())
	}
}

export class FileSystemLoader extends AbstractFileLoader {
	override async load(url: string): Promise<string> {
		const file = url.startsWith("file://")
		             ? Bun.file(new URL(url))
		             : url.startsWith("/library/")
		               ? Bun.file(resolve(process.cwd(), "." + url))
		               : Bun.file(url);

		return await file.text();
	}
}




