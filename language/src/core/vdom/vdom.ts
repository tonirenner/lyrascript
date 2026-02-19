export interface VNode {
	tag: string;
	props: Record<string, unknown>;
	children: Array<VNode | string>;
	dom: Node | null
}
