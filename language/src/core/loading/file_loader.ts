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
		const workspaceRoot = resolve(process.cwd());
		const file = url.startsWith("file://")
		             ? Bun.file(new URL(url))
		             : url.startsWith("/lyrascript/")
		               ? Bun.file(resolve(workspaceRoot, "." + url.slice("/lyrascript".length)))
		               : url.startsWith("/library/")
		                 ? Bun.file(resolve(workspaceRoot, "." + url))
		                 : Bun.file(url);

		return await file.text();
	}
}




