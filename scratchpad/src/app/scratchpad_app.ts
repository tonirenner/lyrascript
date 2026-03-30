import Lyra, {WebApplicationRuntime} from "../../../dist/language.js";
import {EditorHighlighter} from "../editor/editor_highlighter.ts";
import {ScratchpadOutput, wrapConsole} from "../output/scratchpad_output.ts";
import {AstTreeBuilder} from "../tree/ast_tree_builder.ts";

interface ScratchpadElements {
	editor: HTMLTextAreaElement;
	editorHighlight: HTMLElement;
	preview: HTMLElement;
	stdout: HTMLElement;
	stderr: HTMLElement;
	ast: HTMLElement;
	tokens: HTMLElement;
	runButton: HTMLButtonElement;
}

export class ScratchpadApp {
	private readonly output: ScratchpadOutput = new ScratchpadOutput();
	private readonly treeBuilder: AstTreeBuilder = new AstTreeBuilder();
	private readonly editorHighlighter: EditorHighlighter;

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

		document.addEventListener("keydown", (event: KeyboardEvent): void => {
			if (event.ctrlKey && event.key === "Enter") {
				void this.run();
			}
		});

		this.elements.editor.addEventListener("input", () => {
			this.editorHighlighter.render(this.elements.editor.value);
		});

		this.elements.editor.addEventListener("scroll", () => {
			this.editorHighlighter.syncScroll();
		});

		this.editorHighlighter.render(this.elements.editor.value);
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
	const stdout = document.getElementById("stdout");
	const stderr = document.getElementById("stderr");
	const ast = document.getElementById("ast");
	const tokens = document.getElementById("tokens");
	const runButton = document.getElementById("run-button");

	if (!(editor instanceof HTMLTextAreaElement)
		|| !(editorHighlight instanceof HTMLElement)
		|| !(preview instanceof HTMLElement)
		|| !(stdout instanceof HTMLElement)
		|| !(stderr instanceof HTMLElement)
		|| !(ast instanceof HTMLElement)
		|| !(tokens instanceof HTMLElement)
		|| !(runButton instanceof HTMLButtonElement)) {
		throw new Error("Scratchpad DOM is not initialized correctly.");
	}

	const app = new ScratchpadApp({
		editor,
		editorHighlight,
		preview,
		stdout,
		stderr,
		ast,
		tokens,
		runButton
	});

	app.start();

	return app;
}
