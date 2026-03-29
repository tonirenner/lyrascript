import {ASTClassNode, ASTNode, ASTNodeType} from "../core/syntax/ast.ts";
import {Parser} from "../core/parser.ts";
import {throwRuntimeError} from "../core/infrastructure/errors.ts";
import type {Source} from "../core/syntax/source.ts";
import type {RuntimeClass} from "../core/model/runtime_model.ts";
import {buildRuntimeClass} from "../core/shared/ast_objects.ts";

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

	getAst(): ASTNode {
		return new Parser(this.nativeClassSource).parse();
	}

	getRuntimeClass(): RuntimeClass<any, any, any, any, any, any> {
		const ast: ASTNode = this.getAst();

		for (const node of ast.children) {
			if (node.type === ASTNodeType.CLASS) {
				if (node instanceof ASTClassNode && node.name === this.name) {

					const runtimeClass = buildRuntimeClass(node);

					runtimeClass.nativeRuntimeConstructor = this.nativeInstance;

					return runtimeClass;
				}
			}
		}

		throwRuntimeError(`Class ${this.name} not found.`, ast.span);
	}
}




