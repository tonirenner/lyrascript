import type {Instance} from "../interpreter/interpreter_objects";

export interface VNode {
	tag: string;
	isComponent: boolean;
	parent: VNode | null;
	component: Instance | null;
	props: Record<string, unknown>;
	children: Array<VNode | string>;
	dom: Node | null
}
