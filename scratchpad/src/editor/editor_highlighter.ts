import Lyra from "../../../dist/language.js";

interface ScratchpadToken {
	type: string;
	value: unknown;
	start?: number;
	end?: number;
}

interface HighlightSegment {
	text: string;
	className: string | null;
}

interface VDomHighlightState {
	inVdom: boolean;
	inTag: boolean;
	expressionDepth: number;
}

export class EditorHighlighter {
	constructor(
		private readonly editor: HTMLTextAreaElement,
		private readonly highlightLayer: HTMLElement
	) {
	}

	public render(sourceText: string): void {
		try {
			const source = new Lyra.Source(sourceText);
			const tokens = Lyra.tokenize(source) as ScratchpadToken[];
			this.highlightLayer.innerHTML = this.renderSegments(sourceText, tokens);
		} catch {
			this.highlightLayer.innerHTML = this.escapeHtml(sourceText);
		}

		this.syncScroll();
	}

	public syncScroll(): void {
		this.highlightLayer.scrollTop = this.editor.scrollTop;
		this.highlightLayer.scrollLeft = this.editor.scrollLeft;
	}

	private renderSegments(sourceText: string, tokens: ScratchpadToken[]): string {
		const segments = this.buildSegments(sourceText, tokens);
		let html = segments.map(segment => {
			const content = this.escapeHtml(segment.text);
			if (segment.className === null) {
				return content;
			}

			return `<span class="${segment.className}">${content}</span>`;
		}).join("");

		if (sourceText.endsWith("\n")) {
			html += "\n";
		}

		return html;
	}

	private buildSegments(sourceText: string, tokens: ScratchpadToken[]): HighlightSegment[] {
		const segments: HighlightSegment[] = [];
		const state: VDomHighlightState = {
			inVdom: false,
			inTag: false,
			expressionDepth: 0
		};
		let cursor = 0;

		for (let index = 0; index < tokens.length; index++) {
			const token = tokens[index];
			if (!token || token.type === "eof") {
				continue;
			}

			const bounds = this.resolveTokenBounds(token);
			if (bounds === null) {
				continue;
			}

			const [tokenStart, tokenEnd] = bounds;
			if (tokenStart > cursor) {
				segments.push({
					text: sourceText.slice(cursor, tokenStart),
					className: null
				});
			}

			const nextToken = tokens[index + 1] || null;
			segments.push({
				text: sourceText.slice(tokenStart, tokenEnd),
				className: this.classifyToken(token, nextToken, state)
			});

			cursor = tokenEnd;
			this.advanceState(token, state);
		}

		if (cursor < sourceText.length) {
			segments.push({
				text: sourceText.slice(cursor),
				className: null
			});
		}

		return segments;
	}

	private resolveTokenBounds(token: ScratchpadToken): [number, number] | null {
		if (typeof token.start !== "number" || typeof token.end !== "number") {
			return null;
		}

		switch (token.type) {
			case "string":
				return [Math.max(0, token.start - 1), token.end + 1];
			case "annotation":
				return [Math.max(0, token.start - 1), token.end];
			case "operator":
			case "punctuation":
				return [token.start, token.end + 1];
			default:
				return [token.start, token.end];
		}
	}

	private classifyToken(
		token: ScratchpadToken,
		nextToken: ScratchpadToken | null,
		state: VDomHighlightState
	): string {
		if (state.inVdom && state.expressionDepth === 0) {
			const vdomClass = this.classifyVdomToken(token, nextToken, state);
			if (vdomClass !== null) {
				return vdomClass;
			}
		}

		switch (token.type) {
			case "comment":
				return "token-comment";
			case "annotation":
				return "token-annotation";
			case "keyword":
				return "token-keyword";
			case "string":
				return "token-string";
			case "number":
				return "token-number";
			case "boolean":
				return "token-boolean";
			case "operator":
				return "token-operator";
			case "identifier":
				return this.isTypeLikeIdentifier(token.value)
					? "token-type"
					: "token-identifier";
			case "text":
				return "token-vdom-text";
			default:
				return "token-punctuation";
		}
	}

	private classifyVdomToken(
		token: ScratchpadToken,
		nextToken: ScratchpadToken | null,
		state: VDomHighlightState
	): string | null {
		if (token.type === "keyword" && token.value === "vdom") {
			return "token-keyword";
		}

		if (token.type === "operator" && this.isVdomDelimiter(token.value)) {
			return "token-vdom-delimiter";
		}

		if (token.type === "text") {
			return "token-vdom-text";
		}

		if (token.type === "identifier") {
			if (this.isTagNameToken(token, nextToken, state)) {
				return "token-vdom-tag";
			}

			if (state.inTag && nextToken?.value === "=") {
				return "token-vdom-attr";
			}
		}

		return null;
	}

	private isTagNameToken(
		token: ScratchpadToken,
		nextToken: ScratchpadToken | null,
		state: VDomHighlightState
	): boolean {
		if (token.type !== "identifier" || !state.inTag) {
			return false;
		}

		return nextToken?.value !== "=";
	}

	private advanceState(token: ScratchpadToken, state: VDomHighlightState): void {
		if (token.type === "keyword" && token.value === "vdom") {
			state.inVdom = true;
			return;
		}

		if (!state.inVdom) {
			return;
		}

		if (token.value === ";") {
			state.inVdom = false;
			state.inTag = false;
			state.expressionDepth = 0;
			return;
		}

		if (token.value === "{") {
			state.expressionDepth += 1;
			return;
		}

		if (token.value === "}") {
			state.expressionDepth = Math.max(0, state.expressionDepth - 1);
			return;
		}

		if (state.expressionDepth > 0) {
			return;
		}

		if (token.value === "<" || token.value === "</") {
			state.inTag = true;
			return;
		}

		if (token.value === ">" || token.value === "/>") {
			state.inTag = false;
		}
	}

	private isVdomDelimiter(value: unknown): boolean {
		return typeof value === "string" && ["<", "</", ">", "/>"].includes(value);
	}

	private isTypeLikeIdentifier(value: unknown): boolean {
		if (typeof value !== "string") {
			return false;
		}

		return /^[A-Z]/.test(value) || ["number", "string", "boolean", "void", "mixed", "null"].includes(value);
	}

	private escapeHtml(value: string): string {
		return value
			.replaceAll("&", "&amp;")
			.replaceAll("<", "&lt;")
			.replaceAll(">", "&gt;");
	}
}
