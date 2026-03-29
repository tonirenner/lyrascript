export class AstTreeBuilder {
	public render(node: any, container: HTMLElement): void {
		const wrapper = document.createElement("div");
		wrapper.className = "ast-node";

		const row = document.createElement("div");
		row.className = "ast-row";

		const children = document.createElement("div");
		children.className = "ast-children";

		const hasChildren = this.hasExpandableContent(node);
		const toggle = document.createElement("span");
		toggle.className = hasChildren ? "ast-toggle" : "ast-toggle is-leaf";
		toggle.textContent = hasChildren ? "▸" : "•";

		const label = document.createElement("span");
		label.className = "ast-label";
		label.textContent = node.type;

		const meta = document.createElement("span");
		meta.className = "ast-meta";
		meta.textContent = this.describeMeta(node);

		row.appendChild(toggle);
		row.appendChild(label);
		if (meta.textContent) {
			row.appendChild(meta);
		}

		if (hasChildren) {
			row.onclick = (): void => {
				const isOpen = children.classList.toggle("is-open");
				toggle.textContent = isOpen ? "▾" : "▸";
			};
		}

		wrapper.appendChild(row);
		this.renderKnownProperties(node, children);
		this.renderParameters(node, children);
		this.renderChildren(node, children);
		wrapper.appendChild(children);

		container.appendChild(wrapper);
	}

	private describeMeta(node: any): string {
		const details: string[] = [];

		if (node.name) {
			details.push(`name="${node.name}"`);
		}

		if (node.value !== undefined && node.value !== null) {
			details.push(`value="${node.value}"`);
		}

		if (node.operator) {
			details.push(`op="${node.operator}"`);
		}

		if (node.property) {
			details.push(`property="${node.property}"`);
		}

		if (node.tag) {
			details.push(`tag="${node.tag}"`);
		}

		if (node.isExpression) {
			details.push("expr");
		}

		if (node.returnType) {
			details.push(`return="${node.returnType.name ?? node.returnType}"`);
		}

		if (node.typeAnnotation) {
			details.push(`type="${node.typeAnnotation.name ?? node.typeAnnotation}"`);
		}

		if (node.fieldType) {
			details.push(`fieldType="${node.fieldType.name ?? node.fieldType}"`);
		}

		return details.length > 0 ? `( ${details.join(", ")} )` : "";
	}

	private renderKnownProperties(node: any, container: HTMLElement): void {
		this.renderProperty("callee", node.callee, container);
		this.renderProperty("object", node.object, container);
		this.renderProperty("index", node.index, container);
		this.renderProperty("left", node.left, container);
		this.renderProperty("right", node.right, container);
		this.renderProperty("test", node.test, container);
		this.renderProperty("expr", node.expr, container);
		this.renderProperty("argument", node.argument, container);
		this.renderProperty("condition", node.condition, container);
		this.renderProperty("then", node.then, container);
		this.renderProperty("else", node.else, container);
		this.renderProperty("iterable", node.iterable, container);
		this.renderProperty("init", node.init, container);
		this.renderProperty("defaultValue", node.defaultValue, container);
		this.renderProperty("typeAnnotation", node.typeAnnotation, container);
		this.renderProperty("fieldType", node.fieldType, container);
		this.renderProperty("returnType", node.returnType, container);

		this.renderNodeList("arguments", node.arguments, container);
		this.renderNodeList("elements", node.elements, container);
		this.renderNodeList("cases", node.cases, container);
		this.renderNodeList("body", node.body, container);
		this.renderNodeList("typeArguments", node.typeArguments, container);
		this.renderNodeList("parameterTypes", node.parameterTypes, container);

		if (node.props instanceof Map && node.props.size > 0) {
			const propsElement = document.createElement("div");
			propsElement.textContent = "props:";
			container.appendChild(propsElement);

			for (const [name, value] of node.props.entries()) {
				const label = document.createElement("div");
				label.textContent = `${name}:`;
				label.style.marginLeft = "12px";
				container.appendChild(label);

				this.render(value, container);
			}
		}
	}

	private renderParameters(node: any, container: HTMLElement): void {
		if (!Array.isArray(node.parameters) || node.parameters.length === 0) {
			return;
		}

		const parametersElement = document.createElement("div");
		parametersElement.textContent = "parameters:";
		container.appendChild(parametersElement);

		for (const parameter of node.parameters) {
			this.render(parameter, container);

			if (parameter.typeAnnotation || parameter.defaultValue) {
				const summary = document.createElement("div");
				summary.style.marginLeft = "24px";
				summary.textContent = [
					parameter.typeAnnotation ? `type=${parameter.typeAnnotation.name ?? parameter.typeAnnotation}` : null,
					parameter.defaultValue ? "defaultValue" : null
				].filter(Boolean).join(", ");

				if (summary.textContent) {
					container.appendChild(summary);
				}
			}
		}
	}

	private renderChildren(node: any, container: HTMLElement): void {
		if (!Array.isArray(node.children) || node.children.length === 0) {
			return;
		}

		const childrenElement = document.createElement("div");
		childrenElement.textContent = "children:";
		container.appendChild(childrenElement);

		for (const child of node.children) {
			this.render(child, container);
		}
	}

	private renderNodeList(label: string, values: any, container: HTMLElement): void {
		if (!Array.isArray(values) || values.length === 0) {
			return;
		}

		const listElement = document.createElement("div");
		listElement.textContent = `${label}:`;
		container.appendChild(listElement);

		for (const value of values) {
			this.render(value, container);
		}
	}

	private renderProperty(label: string, value: any, container: HTMLElement): void {
		if (value === undefined || value === null) {
			return;
		}

		const propertyElement = document.createElement("div");
		propertyElement.className = "ast-meta";
		propertyElement.textContent = `${label}:`;
		container.appendChild(propertyElement);

		this.render(value, container);
	}

	private hasExpandableContent(node: any): boolean {
		return [
			node.callee,
			node.object,
			node.index,
			node.left,
			node.right,
			node.test,
			node.expr,
			node.argument,
			node.condition,
			node.then,
			node.else,
			node.iterable,
			node.init,
			node.defaultValue,
			node.typeAnnotation,
			node.fieldType,
			node.returnType
		].some((value) => value !== undefined && value !== null)
			|| (Array.isArray(node.arguments) && node.arguments.length > 0)
			|| (Array.isArray(node.elements) && node.elements.length > 0)
			|| (Array.isArray(node.cases) && node.cases.length > 0)
			|| (Array.isArray(node.body) && node.body.length > 0)
			|| (Array.isArray(node.typeArguments) && node.typeArguments.length > 0)
			|| (Array.isArray(node.parameterTypes) && node.parameterTypes.length > 0)
			|| (Array.isArray(node.parameters) && node.parameters.length > 0)
			|| (Array.isArray(node.children) && node.children.length > 0)
			|| (node.props instanceof Map && node.props.size > 0);
	}
}
