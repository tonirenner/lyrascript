export abstract class AbstractFileLoader {
	abstract load(url: string): Promise<string>;
}

export class FetchFileLoader extends AbstractFileLoader {
	override load(url: string): Promise<string> {
		return fetch(url)
			.then(response => response.text())
	}
}
