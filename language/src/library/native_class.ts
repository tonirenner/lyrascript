import {ASTClassNode, ASTNodeType} from "../core/ast";
import {ClassDefinition} from "../core/interpreter_objects";
import {Parser} from "../core/parser";
import {throwRuntimeError} from "../core/errors";
import type {Source} from "../core/parser_source";

export class NativeClass {
	name: string;
	nativeInstance: any;
	nativeClassSource: Source;
	isAutoloadAble: boolean = false;

	constructor(name: string, nativeInstance: any, source: Source) {
		this.name = name;
		this.nativeInstance = nativeInstance;
		this.nativeClassSource = source;
	}

	getClassDefinition(): ClassDefinition | null {
		const ast = new Parser(this.nativeClassSource).parse();

		for (const node of ast.children) {
			if (node.type === ASTNodeType.CLASS) {
				if (node instanceof ASTClassNode && node.name === this.name) {
					const classDef = ClassDefinition.constructFromAST(node);

					classDef.nativeInstance = this.nativeInstance;

					return classDef;
				}
			}
		}

		throwRuntimeError(`Class ${this.name} not found.`, ast.span);

		return null; // never reached
	}
}
