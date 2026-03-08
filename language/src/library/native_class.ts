import {ASTClassNode, ASTNodeType} from "../core/ast";
import {ClassDefinition} from "../core/runtime/objects";
import {Parser} from "../core/parser/parser";
import {throwRuntimeError} from "../core/errors";
import type {Source} from "../core/parser/parser_source";

export class NativeClass {
	readonly name: string;
	readonly nativeInstance: any;
	readonly nativeClassSource: Source;
	isAutoloadAble: boolean = false;

	constructor(name: string, nativeInstance: any, source: Source) {
		this.name = name;
		this.nativeInstance = nativeInstance;
		this.nativeClassSource = source;
	}

	getClassDefinition(): ClassDefinition {
		const ast = new Parser(this.nativeClassSource).parse();

		for (const node of ast.children) {
			if (node.type === ASTNodeType.CLASS) {
				if (node instanceof ASTClassNode && node.name === this.name) {
					const classDef = ClassDefinition.fromAST(node);

					classDef.nativeInstance = this.nativeInstance;

					return classDef;
				}
			}
		}

		throwRuntimeError(`Class ${this.name} not found.`, ast.span);
	}
}
