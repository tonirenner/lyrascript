import {ASTParameterNode, ASTTypeNode} from "../core/shared/ast.ts";
import {TYPE_ENUM} from "../core/shared/ast_grammar.ts";
import {throwNativeError} from "../core/shared/errors.ts";

export class NativeFunction {
	readonly name: string;
	readonly parameterNodes: ASTParameterNode[] = [];
	readonly returnType: ASTTypeNode;

	constructor(name: string, parameters: ASTParameterNode[], returnType: ASTTypeNode) {
		this.name = name;
		this.parameterNodes = parameters;
		this.returnType = returnType;
	}
}

export class NativeFunctionTypeRegistry {
	readonly functions: Map<string, NativeFunction> = new Map();

	public has(name: string): boolean {
		return this.functions.has(name);
	}

	public get(name: string): NativeFunction {
		const nativeFunction: NativeFunction | undefined = this.functions.get(name);
		if (!nativeFunction) {
			throwNativeError(`Function ${name} not found.`);
		}
		return nativeFunction;
	}

	public set(name: string, parameters: ASTParameterNode[], returnType: ASTTypeNode): NativeFunctionTypeRegistry {
		this.functions.set(name, new NativeFunction(name, parameters, returnType));
		return this;
	}
}

export class NativeFunctions {
	static PRINT = 'print';

	/**
	 * @return {Object.<string, function>}
	 */
	public getGlobalFunctions(): { [key: string]: (...args: any[]) => any } {
		return {
			[NativeFunctions.PRINT]: (...args) => {
				console.log(...args);
			}
		};
	}

	public getGlobalFunctionTypeRegistry(): NativeFunctionTypeRegistry {
		const functions = new NativeFunctionTypeRegistry();
		functions.set(
			NativeFunctions.PRINT,
			[parameter(type(TYPE_ENUM.STRING), 'message')],
			type(TYPE_ENUM.VOID)
		)

		return functions;
	}
}

function type(name: string, nullable = false): ASTTypeNode {
	return new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, name, nullable);
}

function parameter(typeAnnotation: ASTTypeNode, name: string, defaultValue: any = null): ASTParameterNode {
	return new ASTParameterNode(name, typeAnnotation, defaultValue);
}
