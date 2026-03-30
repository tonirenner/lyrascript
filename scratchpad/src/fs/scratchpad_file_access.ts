export interface ScratchpadFileState {
	handle: FileSystemFileHandle | null;
	name: string | null;
}

interface ScratchpadFilePickerAcceptType {
	description?: string;
	accept: Record<string, string[]>;
}

interface ScratchpadOpenFilePickerOptions {
	multiple?: boolean;
	types?: ScratchpadFilePickerAcceptType[];
}

interface ScratchpadSaveFilePickerOptions {
	suggestedName?: string;
	types?: ScratchpadFilePickerAcceptType[];
}

export class ScratchpadFileAccess {
	private readonly fallbackInput: HTMLInputElement;
	private currentHandle: FileSystemFileHandle | null = null;

	constructor() {
		this.fallbackInput = document.createElement("input");
		this.fallbackInput.type = "file";
		this.fallbackInput.accept = ".lyra,text/plain";
		this.fallbackInput.style.display = "none";
		document.body.appendChild(this.fallbackInput);
	}

	public isSupported(): boolean {
		return typeof window.showOpenFilePicker === "function"
		       && typeof window.showSaveFilePicker === "function";
	}

	public getState(): ScratchpadFileState {
		return {
			handle: this.currentHandle,
			name: this.currentHandle?.name ?? null
		};
	}

	public async open(): Promise<{content: string; state: ScratchpadFileState}> {
		if (this.isSupported()) {
			const showOpenFilePicker = window.showOpenFilePicker;
			if (!showOpenFilePicker) {
				throw new Error("Open file picker is not available.");
			}

			const handles = await showOpenFilePicker({
				multiple: false,
				types: [this.filePickerType()]
			});
			const handle = handles[0] ?? null;
			if (handle === null) {
				throw new Error("No file selected.");
			}

			const file = await handle.getFile();
			this.currentHandle = handle;

			return {
				content: await file.text(),
				state: this.getState()
			};
		}

		const file = await this.openWithFallbackInput();
		this.currentHandle = null;

		return {
			content: await file.text(),
			state: {
				handle: null,
				name: file.name
			}
		};
	}

	public async save(content: string): Promise<ScratchpadFileState> {
		if (this.currentHandle && this.isSupported()) {
			await this.writeToHandle(this.currentHandle, content);
			return this.getState();
		}

		return await this.saveAs(content);
	}

	public async saveAs(content: string): Promise<ScratchpadFileState> {
		if (this.isSupported()) {
			const showSaveFilePicker = window.showSaveFilePicker;
			if (!showSaveFilePicker) {
				throw new Error("Save file picker is not available.");
			}

			const handle = await showSaveFilePicker({
				suggestedName: this.currentHandle?.name ?? "scratchpad.lyra",
				types: [this.filePickerType()]
			});

			await this.writeToHandle(handle, content);
			this.currentHandle = handle;

			return this.getState();
		}

		this.downloadFallback(content, this.currentHandle?.name ?? "scratchpad.lyra");
		this.currentHandle = null;

		return {
			handle: null,
			name: "scratchpad.lyra"
		};
	}

	private async writeToHandle(handle: FileSystemFileHandle, content: string): Promise<void> {
		const writable = await handle.createWritable();
		await writable.write(content);
		await writable.close();
	}

	private openWithFallbackInput(): Promise<File> {
		return new Promise((resolve, reject) => {
			this.fallbackInput.value = "";

			const onChange = (): void => {
				this.fallbackInput.removeEventListener("change", onChange);

				const file = this.fallbackInput.files?.[0] ?? null;
				if (file) {
					resolve(file);
					return;
				}

				reject(new Error("No file selected."));
			};

			this.fallbackInput.addEventListener("change", onChange, {once: true});
			this.fallbackInput.click();
		});
	}

	private downloadFallback(content: string, filename: string): void {
		const blob = new Blob([content], {type: "text/plain;charset=utf-8"});
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");

		link.href = url;
		link.download = filename;
		link.click();

		URL.revokeObjectURL(url);
	}

	private filePickerType(): ScratchpadFilePickerAcceptType {
		return {
			description: "Lyra files",
			accept: {
				"text/plain": [".lyra", ".txt"]
			}
		};
	}
}

declare global {
	interface Window {
		showOpenFilePicker?: (options?: ScratchpadOpenFilePickerOptions) => Promise<FileSystemFileHandle[]>;
		showSaveFilePicker?: (options?: ScratchpadSaveFilePickerOptions) => Promise<FileSystemFileHandle>;
	}
}
