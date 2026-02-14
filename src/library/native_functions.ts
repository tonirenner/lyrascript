import {ASTParameterNode, ASTTypeNode} from "../core/ast";
import {TYPE_ENUM} from "../language/grammar";

export class NativeFunction {
	name: string;
	parameterNodes: ASTParameterNode[] = [];
	returnType: ASTTypeNode;

	constructor(name: string, parameters: ASTParameterNode[], returnType: ASTTypeNode) {
		this.name = name;
		this.parameterNodes = parameters;
		this.returnType = returnType;
	}
}

export class NativeFunctionTypeRegistry {
	functions: Map<string, NativeFunction> = new Map();

	has(name: string): boolean {
		return this.functions.has(name);
	}

	get(name: string): NativeFunction {
		const nativeFunction: NativeFunction | undefined = this.functions.get(name);
		if (!nativeFunction) {
			throw new Error(`Function ${name} not found.`);
		}
		return nativeFunction;
	}

	set(name: string, parameters: ASTParameterNode[], returnType: ASTTypeNode): NativeFunctionTypeRegistry {
		this.functions.set(name, new NativeFunction(name, parameters, returnType));
		return this;
	}
}

export class NativeFunctions {
	static PRINT = 'print';

	/**
	 * @return {Object.<string, function>}
	 */
	getGlobalFunctions(): { [key: string]: (...args: any[]) => any } {
		return {
			[NativeFunctions.PRINT]: (...args) => {
				console.log(...args);
			}
		};
	}

	getGlobalFunctionTypeRegistry(): NativeFunctionTypeRegistry {
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
