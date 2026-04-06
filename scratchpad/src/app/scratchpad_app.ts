import Lyra, {WebApplicationRuntime} from "../../../dist/language.js";
import {EditorHighlighter} from "../editor/editor_highlighter.ts";
import {EditorLineNumbers} from "../editor/editor_line_numbers.ts";
import {
	DEFAULT_SCRATCHPAD_EXAMPLE_ID,
	SCRATCHPAD_EXAMPLES,
	type ScratchpadExample
} from "../examples/scratchpad_examples.ts";
import {ScratchpadFileAccess} from "../fs/scratchpad_file_access.ts";
import {ScratchpadOutput, wrapConsole} from "../output/scratchpad_output.ts";
import {AstTreeBuilder} from "../tree/ast_tree_builder.ts";

interface ScratchpadElements {
	editor: HTMLTextAreaElement;
	editorPane: HTMLElement;
	exampleTabs: HTMLElement;
	runModeToggle: HTMLElement;
	outputPane: HTMLElement;
	editorLineNumbers: HTMLElement;
	editorHighlight: HTMLElement;
	preview: HTMLElement;
	previewResizeHandle: HTMLElement;
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
	private static readonly MIN_PREVIEW_HEIGHT = 140;
	private static readonly MIN_EDITOR_HEIGHT = 180;
	private static readonly MIN_OUTPUT_PANEL_HEIGHT = 120;
	private readonly output: ScratchpadOutput = new ScratchpadOutput();
	private readonly treeBuilder: AstTreeBuilder = new AstTreeBuilder();
	private readonly editorHighlighter: EditorHighlighter;
	private readonly editorLineNumbers: EditorLineNumbers;
	private readonly fileAccess: ScratchpadFileAccess = new ScratchpadFileAccess();
	private activeExampleId: string | null = null;
	private currentSourceUrl: string = "<inline>";
	private currentRunMode: "program" | "tests" = "program";

	constructor(private readonly elements: ScratchpadElements) {
		this.editorHighlighter = new EditorHighlighter(elements.editor, elements.editorHighlight);
		this.editorLineNumbers = new EditorLineNumbers(elements.editor, elements.editorLineNumbers);

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
			this.editorLineNumbers.render(this.elements.editor.value);
		});

		this.elements.editor.addEventListener("scroll", () => {
			this.editorHighlighter.syncScroll();
			this.editorLineNumbers.syncScroll();
		});
		this.elements.editor.addEventListener("input", () => {
			this.syncExampleSelectionState();
		});
		this.installPreviewResizeHandle();
		this.installOutputResizeHandles();
		this.renderExampleTabs();
		this.installRunModeToggle();

		this.loadExample(DEFAULT_SCRATCHPAD_EXAMPLE_ID);
		this.renderFileStatus();
	}

	public async run(): Promise<void> {
		this.output.clear();
		this.render();
		this.output.log("> Running...\n");
		this.render();

		try {
			const source = new Lyra.Source(this.elements.editor.value, this.currentSourceUrl);

			this.renderTokens(Lyra.tokenize(source));
			this.elements.ast.innerHTML = "";
			this.treeBuilder.render(Lyra.parseTree(source), this.elements.ast);
			await this.renderPreview(source);

			if (this.currentRunMode === "tests") {
				await Lyra.executeTest(source);
			} else {
				await Lyra.execute(source);
			}
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

	private renderExampleTabs(): void {
		this.elements.exampleTabs.innerHTML = "";

		for (const example of SCRATCHPAD_EXAMPLES) {
			const button = document.createElement("button");
			button.className = "example-tab";
			button.textContent = example.label;
			button.type = "button";
			button.dataset.exampleId = example.id;
			button.onclick = (): void => {
				this.loadExample(example.id);
			};

			this.elements.exampleTabs.append(button);
		}

		this.syncExampleSelectionState();
	}

	private loadExample(exampleId: string): void {
		const example = SCRATCHPAD_EXAMPLES.find((entry: ScratchpadExample): boolean => entry.id === exampleId) ?? null;

		if (!example) {
			return;
		}

		this.activeExampleId = example.id;
		this.currentSourceUrl = example.sourceUrl;
		this.currentRunMode = example.runMode ?? "program";
		this.syncRunModeState();
		this.setEditorValue(example.code);
	}

	private setEditorValue(value: string): void {
		this.elements.editor.value = value.trim();
		this.editorHighlighter.render(this.elements.editor.value);
		this.editorLineNumbers.render(this.elements.editor.value);
		this.syncExampleSelectionState();
	}

	private syncExampleSelectionState(): void {
		const activeExample = SCRATCHPAD_EXAMPLES.find(
			(example: ScratchpadExample): boolean => example.code.trim() === this.elements.editor.value.trim()
		) ?? null;

		this.activeExampleId = activeExample?.id ?? this.activeExampleId;

		for (const child of Array.from(this.elements.exampleTabs.children)) {
			if (!(child instanceof HTMLButtonElement)) {
				continue;
			}

			child.classList.toggle("is-active", child.dataset.exampleId === activeExample?.id);
		}
	}

	private installRunModeToggle(): void {
		for (const child of Array.from(this.elements.runModeToggle.children)) {
			if (!(child instanceof HTMLButtonElement)) {
				continue;
			}

			child.onclick = (): void => {
				const nextMode = child.dataset.runMode;
				if (nextMode !== "program" && nextMode !== "tests") {
					return;
				}

				this.currentRunMode = nextMode;
				this.syncRunModeState();
			};
		}

		this.syncRunModeState();
	}

	private syncRunModeState(): void {
		for (const child of Array.from(this.elements.runModeToggle.children)) {
			if (!(child instanceof HTMLButtonElement)) {
				continue;
			}

			child.classList.toggle("is-active", child.dataset.runMode === this.currentRunMode);
		}
	}

	private async openFile(): Promise<void> {
		try {
			const result = await this.fileAccess.open();
			this.currentSourceUrl = "<inline>";
			this.currentRunMode = "program";
			this.syncRunModeState();
			this.setEditorValue(result.content);
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

	private installPreviewResizeHandle(): void {
		const handle = this.elements.previewResizeHandle;
		const editorPane = this.elements.editorPane;

		handle.addEventListener("pointerdown", (event: PointerEvent): void => {
			event.preventDefault();
			handle.setPointerCapture(event.pointerId);
			editorPane.classList.add("is-resizing");
			this.setPreviewHeightFromPointer(event.clientY);
		});

		handle.addEventListener("pointermove", (event: PointerEvent): void => {
			if (!handle.hasPointerCapture(event.pointerId)) {
				return;
			}

			this.setPreviewHeightFromPointer(event.clientY);
		});

		const stopResize = (event: PointerEvent): void => {
			if (handle.hasPointerCapture(event.pointerId)) {
				handle.releasePointerCapture(event.pointerId);
			}

			editorPane.classList.remove("is-resizing");
		};

		handle.addEventListener("pointerup", stopResize);
		handle.addEventListener("pointercancel", stopResize);
		handle.addEventListener("keydown", (event: KeyboardEvent): void => {
			const currentHeight = this.getPreviewHeight();

			if (event.key === "ArrowUp") {
				event.preventDefault();
				this.setPreviewHeight(currentHeight + 24);
			}

			if (event.key === "ArrowDown") {
				event.preventDefault();
				this.setPreviewHeight(currentHeight - 24);
			}
		});
	}

	private installOutputResizeHandles(): void {
		const outputPane = this.elements.outputPane;
		const handles = Array.from(outputPane.querySelectorAll(".panel-resize-handle"));

		for (const handle of handles) {
			if (!(handle instanceof HTMLElement)) {
				continue;
			}

			handle.addEventListener("pointerdown", (event: PointerEvent): void => {
				const upperPanel = handle.previousElementSibling;
				const lowerPanel = handle.nextElementSibling;

				if (!(upperPanel instanceof HTMLElement) || !(lowerPanel instanceof HTMLElement)) {
					return;
				}

				event.preventDefault();
				handle.setPointerCapture(event.pointerId);
				outputPane.classList.add("is-resizing");

				const upperRect = upperPanel.getBoundingClientRect();
				const lowerRect = lowerPanel.getBoundingClientRect();
				const dragState = {
					startY: event.clientY,
					upperStartHeight: upperRect.height,
					lowerStartHeight: lowerRect.height
				};

				const updatePanels = (clientY: number): void => {
					const delta = clientY - dragState.startY;
					const nextUpperHeight = dragState.upperStartHeight + delta;
					const nextLowerHeight = dragState.lowerStartHeight - delta;

					if (nextUpperHeight < ScratchpadApp.MIN_OUTPUT_PANEL_HEIGHT
					    || nextLowerHeight < ScratchpadApp.MIN_OUTPUT_PANEL_HEIGHT) {
						return;
					}

					upperPanel.style.flex = `0 0 ${nextUpperHeight}px`;
					lowerPanel.style.flex = `0 0 ${nextLowerHeight}px`;
				};

				const stopResize = (pointerEvent: PointerEvent): void => {
					if (handle.hasPointerCapture(pointerEvent.pointerId)) {
						handle.releasePointerCapture(pointerEvent.pointerId);
					}

					outputPane.classList.remove("is-resizing");
					handle.removeEventListener("pointermove", handlePointerMove);
					handle.removeEventListener("pointerup", stopResize);
					handle.removeEventListener("pointercancel", stopResize);
				};

				const handlePointerMove = (pointerEvent: PointerEvent): void => {
					if (!handle.hasPointerCapture(pointerEvent.pointerId)) {
						return;
					}

					updatePanels(pointerEvent.clientY);
				};

				handle.addEventListener("pointermove", handlePointerMove);
				handle.addEventListener("pointerup", stopResize);
				handle.addEventListener("pointercancel", stopResize);
			});

			handle.addEventListener("keydown", (event: KeyboardEvent): void => {
				const upperPanel = handle.previousElementSibling;
				const lowerPanel = handle.nextElementSibling;

				if (!(upperPanel instanceof HTMLElement) || !(lowerPanel instanceof HTMLElement)) {
					return;
				}

				const upperHeight = upperPanel.getBoundingClientRect().height;
				const lowerHeight = lowerPanel.getBoundingClientRect().height;
				const step = 24;

				if (event.key === "ArrowUp") {
					event.preventDefault();
					if (upperHeight - step < ScratchpadApp.MIN_OUTPUT_PANEL_HEIGHT
					    || lowerHeight + step < ScratchpadApp.MIN_OUTPUT_PANEL_HEIGHT) {
						return;
					}

					upperPanel.style.flex = `0 0 ${upperHeight - step}px`;
					lowerPanel.style.flex = `0 0 ${lowerHeight + step}px`;
				}

				if (event.key === "ArrowDown") {
					event.preventDefault();
					if (upperHeight + step < ScratchpadApp.MIN_OUTPUT_PANEL_HEIGHT
					    || lowerHeight - step < ScratchpadApp.MIN_OUTPUT_PANEL_HEIGHT) {
						return;
					}

					upperPanel.style.flex = `0 0 ${upperHeight + step}px`;
					lowerPanel.style.flex = `0 0 ${lowerHeight - step}px`;
				}
			});
		}
	}

	private setPreviewHeightFromPointer(clientY: number): void {
		const bounds = this.elements.editorPane.getBoundingClientRect();
		const nextHeight = bounds.bottom - clientY;

		this.setPreviewHeight(nextHeight);
	}

	private setPreviewHeight(nextHeight: number): void {
		const bounds = this.elements.editorPane.getBoundingClientRect();
		const maxHeight = Math.max(
			ScratchpadApp.MIN_PREVIEW_HEIGHT,
			bounds.height - ScratchpadApp.MIN_EDITOR_HEIGHT
		);
		const clampedHeight = Math.min(
			Math.max(nextHeight, ScratchpadApp.MIN_PREVIEW_HEIGHT),
			maxHeight
		);

		this.elements.editorPane.style.setProperty("--preview-height", `${clampedHeight}px`);
	}

	private getPreviewHeight(): number {
		const raw = getComputedStyle(this.elements.editorPane).getPropertyValue("--preview-height").trim();
		const parsed = Number.parseFloat(raw);

		return Number.isFinite(parsed) ? parsed : 280;
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
	const editorPane = document.querySelector(".editor");
	const exampleTabs = document.getElementById("example-tabs");
	const runModeToggle = document.getElementById("run-mode-toggle");
	const outputPane = document.querySelector(".output");
	const editorLineNumbers = document.getElementById("editor-line-numbers");
	const editorHighlight = document.getElementById("editor-highlight");
	const preview = document.getElementById("preview");
	const previewResizeHandle = document.getElementById("preview-resize-handle");
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
		|| !(editorPane instanceof HTMLElement)
		|| !(exampleTabs instanceof HTMLElement)
		|| !(runModeToggle instanceof HTMLElement)
		|| !(outputPane instanceof HTMLElement)
		|| !(editorLineNumbers instanceof HTMLElement)
		|| !(editorHighlight instanceof HTMLElement)
		|| !(preview instanceof HTMLElement)
		|| !(previewResizeHandle instanceof HTMLElement)
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
		editorPane,
		exampleTabs,
		runModeToggle,
		outputPane,
		editorLineNumbers,
		editorHighlight,
		preview,
		previewResizeHandle,
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
