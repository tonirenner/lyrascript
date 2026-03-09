import type {RuntimeInstance} from "./runtime_model.ts";

export type VChild = VText | VElement | VComponent;
export type Props = Record<string, unknown>;

export interface VNode {
	type: 'component' | 'element' | 'text';
	dom?: Node;
}

export interface VElement extends VNode {
	type: 'element';
	tag: string;
	props?: Props;
	children: VChild[];
}

export interface VComponent extends VNode {
	type: 'component';
	className: string;
	instance?: RuntimeInstance;
	props?: Props & { children?: VChild[] };
	subTree?: VChild;
}

export interface VText extends VNode {
	type: 'text';
	value: string;
}

