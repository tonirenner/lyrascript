export class EditorLineNumbers {
	private frameHandle: number | null = null;

	constructor(
		private readonly editor: HTMLTextAreaElement,
		private readonly gutter: HTMLElement
	) {
	}

	public render(sourceText: string): void {
		if (this.frameHandle !== null) {
			cancelAnimationFrame(this.frameHandle);
		}

		this.frameHandle = requestAnimationFrame(() => {
			this.frameHandle = null;
			this.renderNow(sourceText);
		});
	}

	public syncScroll(): void {
		this.gutter.scrollTop = this.editor.scrollTop;
	}

	private renderNow(sourceText: string): void {
		const lineCount = sourceText.split("\n").length;
		const lines = new Array<string>(lineCount);

		for (let index = 0; index < lineCount; index++) {
			lines[index] = `<span class="editor-line-number">${index + 1}</span>`;
		}

		this.gutter.innerHTML = lines.join("");
		this.syncScroll();
	}
}
