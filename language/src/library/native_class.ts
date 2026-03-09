import {ASTClassNode, ASTNode, ASTNodeType} from "../core/shared/ast.ts";
import {Parser} from "../core/parser.ts";
import {throwRuntimeError} from "../core/shared/errors.ts";
import type {Source} from "../core/parser/source.ts";
import type {ClassDefinition} from "../core/shared/runtime_model.ts";
import {ASTModelFactory} from "../core/shared/ast_model_factory.ts";

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

		const ast: ASTNode = new Parser(this.nativeClassSource).parse();

		for (const node of ast.children) {
			if (node.type === ASTNodeType.CLASS) {
				if (node instanceof ASTClassNode && node.name === this.name) {

					const classDef: ClassDefinition = ASTModelFactory.createClass(node);

					classDef.nativeInstance = this.nativeInstance;

					return classDef;
				}
			}
		}

		throwRuntimeError(`Class ${this.name} not found.`, ast.span);
	}
}
