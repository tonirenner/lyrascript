import {ASTArrayNode, ASTNode, ASTNodeType, ASTReturnNode} from "./ast.ts";
import {GRAMMAR, TYPE_ENUM} from "./grammar.ts";
import {ObjectRegistry} from "./runtime_registry.ts";
import {throwNativeError} from "./errors.ts";
import {ClassDefinition, LyraNativeObject, LyraObjectView, RuntimeInstance} from "./runtime_model.ts";
import {ASTRuntimeInstanceFactory} from "./ast_instance_factory.ts";
import {toNativeValue} from "./conversion.ts";

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

export function fromLyraValue(value: any): any {
	if (value instanceof ASTNode) {
		return toNativeValue(value.value);
	}

	if (value instanceof RuntimeInstance) {
		if (value.__nativeInstance) {
			return value.__nativeInstance;
		}

		return new LyraObjectView(value);
	}

	if (Array.isArray(value)) {
		return value.map(fromLyraValue);
	}

	return toNativeValue(value);
}

export function returnValue(value: any): ASTReturnNode {
	const node = new ASTReturnNode();
	node.argument = toLyraValue(value);
	return node;
}

export function wrapNativeInstance(lyraNativeObject: LyraNativeObject, objectRegistry: ObjectRegistry): RuntimeInstance {
	if (!objectRegistry.classes.has(lyraNativeObject.className)) {
		throwNativeError(`Class ${lyraNativeObject.className} not found.`);
	}

	const classDef: ClassDefinition = objectRegistry.classes.get(lyraNativeObject.className);
	const instance: RuntimeInstance = ASTRuntimeInstanceFactory.createRuntimeInstance(classDef);

	instance.__nativeInstance = lyraNativeObject;

	return instance;
}

