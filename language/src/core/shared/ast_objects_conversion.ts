import {ASTArrayNode, ASTNode, ASTNodeType, ASTReturnNode} from "./ast.ts";
import {GRAMMAR, TYPE_ENUM} from "./ast_grammar.ts";
import {ObjectRegistry} from "./runtime_registry.ts";
import {throwNativeError} from "./errors.ts";
import {LyraNativeObject, LyraObjectView, type RuntimeValue, Value} from "../contracts/runtime_model.ts";
import {createRuntimeInstance} from "./ast_objects.ts";

export function toLyraString(value: string): ASTNode {
	const node = new ASTNode(ASTNodeType.STRING);
	node.value = value;
	return node;
}

export function toLyraNumber(value: number): ASTNode {
	const node = new ASTNode(ASTNodeType.NUMBER);
	node.value = value;
	return node;
}

export function toLyraBoolean(value: boolean): ASTNode {
	const node = new ASTNode(ASTNodeType.BOOLEAN);
	node.value = value;
	return node;
}

export function toLyraNull(): ASTNode {
	const node = new ASTNode(ASTNodeType.NULL);
	node.value = GRAMMAR.NULL;
	return node;
}

export function toLyraArray(values: any[]): ASTNode {
	const node = new ASTArrayNode();
	node.elements = values.map(value => toLyraValue(value));
	return node;
}

export function toLyraValue(value: any): ASTNode {
	if (value instanceof ASTNode) {
		return value;
	}

	if (typeof value === TYPE_ENUM.STRING) {
		return toLyraString(value);
	}

	if (typeof value === TYPE_ENUM.NUMBER) {
		return toLyraNumber(value);
	}

	if (typeof value === TYPE_ENUM.BOOLEAN) {
		return toLyraBoolean(value);
	}

	if (value === null || value === undefined) {
		return toLyraNull();
	}

	if (Array.isArray(value)) {
		return toLyraArray(value);
	}

	throwNativeError('Cannot convert native object to Lyra value');
}

export function fromLyraValue(value: RuntimeValue | ASTNode): RuntimeValue {
	if (value instanceof ASTNode) {
		return Value(value.value)
			.toNativeRuntimeValue();
	}

	if (!value.type.runtimeClass) {
		return value.toNativeRuntimeValue();
	}

	if (value.type.runtimeClass) {
		const instance = value.asRuntimeInstance();

		if (instance.nativeRuntimeObject) {
			return Value(instance.nativeRuntimeObject, instance.nativeRuntimeObject.className);
		}

		const objectView = new LyraObjectView(instance);

		return Value(objectView, objectView.className);
	}

	if (Array.isArray(value)) {
		return Value(value.map(fromLyraValue));
	}

	return Value(value)
		.toNativeRuntimeValue();
}

export function ReturnValue(value: any): ASTReturnNode {
	const node = new ASTReturnNode();
	node.argument = toLyraValue(value);
	return node;
}

export function wrapNativeInstance(lyraNativeObject: LyraNativeObject, objectRegistry: ObjectRegistry): RuntimeValue {
	if (!objectRegistry.classes.has(lyraNativeObject.className)) {
		throwNativeError(`Class ${lyraNativeObject.className} not found.`);
	}

	const runtimeClass = objectRegistry.classes.get(lyraNativeObject.className);
	const instance = createRuntimeInstance(runtimeClass);

	instance.nativeRuntimeObject = lyraNativeObject;

	return Value(instance, runtimeClass.className, runtimeClass);
}
