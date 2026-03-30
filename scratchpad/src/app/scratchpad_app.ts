import Lyra, {WebApplicationRuntime} from "../../../dist/language.js";
import {EditorHighlighter} from "../editor/editor_highlighter.ts";
import {ScratchpadFileAccess} from "../fs/scratchpad_file_access.ts";
import {ScratchpadOutput, wrapConsole} from "../output/scratchpad_output.ts";
import {AstTreeBuilder} from "../tree/ast_tree_builder.ts";

interface ScratchpadElements {
	editor: HTMLTextAreaElement;
	editorHighlight: HTMLElement;
	preview: HTMLElement;
	fileStatus: HTMLElement;
	stdout: HTMLElement;
	stderr: HTMLElement;
	ast: HTMLElement;
	tokens: HTMLElement;
	openButton: HTMLButtonElement;
	saveButton: HTMLButtonElement;
	saveAsButton: HTMLButtonElement;
	runButton: HTMLButtonElement;
}

export class ScratchpadApp {
	private readonly output: ScratchpadOutput = new ScratchpadOutput();
	private readonly treeBuilder: AstTreeBuilder = new AstTreeBuilder();
	private readonly editorHighlighter: EditorHighlighter;
	private readonly fileAccess: ScratchpadFileAccess = new ScratchpadFileAccess();

	constructor(private readonly elements: ScratchpadElements) {
		this.editorHighlighter = new EditorHighlighter(elements.editor, elements.editorHighlight);

		wrapConsole(
			(...args: any[]): void => this.output.log(...args),
			(...args: any[]): void => this.output.error(args)
		);
	}

	public start(): void {
		window.addEventListener("error", (event: ErrorEvent): void => {
			this.output.error(event.error?.stack || event.message);
			this.render();
		});

		window.addEventListener("unhandledrejection", (event: PromiseRejectionEvent): void => {
			this.output.error(event.reason?.stack || event.reason);
			this.render();
		});

		this.elements.runButton.onclick = (): void => {
			void this.run();
		};
		this.elements.openButton.onclick = (): void => {
			void this.openFile();
		};
		this.elements.saveButton.onclick = (): void => {
			void this.saveFile();
		};
		this.elements.saveAsButton.onclick = (): void => {
			void this.saveFileAs();
		};

		document.addEventListener("keydown", (event: KeyboardEvent): void => {
			if (event.ctrlKey && event.key === "Enter") {
				void this.run();
			}

			if (event.ctrlKey && event.key.toLowerCase() === "s") {
				event.preventDefault();
				void this.saveFile();
			}

			if (event.ctrlKey && event.key.toLowerCase() === "o") {
				event.preventDefault();
				void this.openFile();
			}
		});

		this.elements.editor.addEventListener("input", () => {
			this.editorHighlighter.render(this.elements.editor.value);
		});

		this.elements.editor.addEventListener("scroll", () => {
			this.editorHighlighter.syncScroll();
		});

		this.editorHighlighter.render(this.elements.editor.value);
		this.renderFileStatus();
	}

	public async run(): Promise<void> {
		this.output.clear();
		this.render();
		this.output.log("> Running...\n");
		this.render();

		try {
			const source = new Lyra.Source(this.elements.editor.value);

			this.renderTokens(Lyra.tokenize(source));
			this.elements.ast.innerHTML = "";
			this.treeBuilder.render(Lyra.parseTree(source), this.elements.ast);
			await this.renderPreview(source);

			await Lyra.execute(source);
			this.output.log("\n> Done.");
		} catch (error) {
			if (error instanceof Error) {
				this.output.error(error.stack || error.message);
			} else {
				this.output.error(error);
			}
		} finally {
			this.render();
		}
	}

	private render(): void {
		this.elements.stdout.innerText = this.output.stdout.join("\n");
		this.elements.stderr.innerText = this.output.stderr.join("\n");
	}

	private renderTokens(tokens: Array<{type: string; value: unknown}>): void {
		this.elements.tokens.textContent = tokens
			.map((token) => `${token.type.padEnd(12)} ${JSON.stringify(token.value)}`)
			.join("\n");
	}

	private async openFile(): Promise<void> {
		try {
			const result = await this.fileAccess.open();
			this.elements.editor.value = result.content;
			this.editorHighlighter.render(result.content);
			this.renderFileStatus();
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				return;
			}

			this.output.error(error instanceof Error ? error.message : String(error));
			this.render();
		}
	}

	private async saveFile(): Promise<void> {
		try {
			await this.fileAccess.save(this.elements.editor.value);
			this.renderFileStatus("Saved.");
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				return;
			}

			this.output.error(error instanceof Error ? error.message : String(error));
			this.render();
		}
	}

	private async saveFileAs(): Promise<void> {
		try {
			await this.fileAccess.saveAs(this.elements.editor.value);
			this.renderFileStatus("Saved as.");
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				return;
			}

			this.output.error(error instanceof Error ? error.message : String(error));
			this.render();
		}
	}

	private renderFileStatus(prefix: string | null = null): void {
		const state = this.fileAccess.getState();
		const status = state.name ?? (this.fileAccess.isSupported() ? "Unsaved scratchpad" : "Unsaved scratchpad (download fallback)");

		this.elements.fileStatus.textContent = prefix
			? `${prefix} ${status}`
			: status;
	}

	private async renderPreview(source: unknown): Promise<void> {
		this.elements.preview.innerHTML = "";

		try {
			const runtime = new WebApplicationRuntime(this.elements.preview, false);
			await runtime.startSource(source as any, "Program");
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			this.elements.preview.innerHTML = `<div class="preview-empty">${message}</div>`;
		}
	}
}

export function bootstrapScratchpad(): ScratchpadApp {
	const editor = document.getElementById("editor");
	const editorHighlight = document.getElementById("editor-highlight");
	const preview = document.getElementById("preview");
	const fileStatus = document.getElementById("file-status");
	const stdout = document.getElementById("stdout");
	const stderr = document.getElementById("stderr");
	const ast = document.getElementById("ast");
	const tokens = document.getElementById("tokens");
	const openButton = document.getElementById("open-button");
	const saveButton = document.getElementById("save-button");
	const saveAsButton = document.getElementById("save-as-button");
	const runButton = document.getElementById("run-button");

	if (!(editor instanceof HTMLTextAreaElement)
		|| !(editorHighlight instanceof HTMLElement)
		|| !(preview instanceof HTMLElement)
		|| !(fileStatus instanceof HTMLElement)
		|| !(stdout instanceof HTMLElement)
		|| !(stderr instanceof HTMLElement)
		|| !(ast instanceof HTMLElement)
		|| !(tokens instanceof HTMLElement)
		|| !(openButton instanceof HTMLButtonElement)
		|| !(saveButton instanceof HTMLButtonElement)
		|| !(saveAsButton instanceof HTMLButtonElement)
		|| !(runButton instanceof HTMLButtonElement)) {
		throw new Error("Scratchpad DOM is not initialized correctly.");
	}

	const app = new ScratchpadApp({
		editor,
		editorHighlight,
		preview,
		fileStatus,
		stdout,
		stderr,
		ast,
		tokens,
		openButton,
		saveButton,
		saveAsButton,
		runButton
	});

	app.start();

	return app;
}
