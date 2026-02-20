import {ASTArrayNode, ASTNode, ASTNodeType, ASTReturnNode} from "../ast";
import {GRAMMAR, TYPE_ENUM} from "../grammar";
import {ClassDefinition, Instance} from "./interpreter_objects";
import {ObjectRegistry} from "./interpreter_registry";
import {throwNativeError} from "../errors";

interface SerializationObject {
	[index: string]: any;
}

export class LyraNativeObject {
	className: string;

	constructor(className: string) {
		this.className = className;
	}

	public serialize(): SerializationObject {
		const object: SerializationObject = {};

		object[this.className] = Object
			.keys(this)
			.filter(key => key !== 'className')
			.reduce((object: SerializationObject, key: string): SerializationObject => {
				const copy: SerializationObject = Object.assign({}, this);
				object[key] = copy[key];
				return object;
			}, {});

		return object;
	}

	public toString(): string {
		return JSON.stringify({className: this.className}, null, 2);
	}
}

export class LyraObjectView extends LyraNativeObject {
	private __instance: Instance;

	constructor(instance: Instance) {
		super(instance.__classDef.name);

		this.__instance = instance;

		return new Proxy(this, {
			get: (_: any, name: string): any => {
				if (name in this.__instance.__instanceFields) {
					return this.__instance.__instanceFields[name];
				}

				if (name in this.__instance.__staticFields) {
					return this.__instance.__staticFields[name];
				}

				if (name in this) {
					const self: { [index: string]: any } = this;
					return self[name];
				}
			},

			set: (_: any, name: string, value: any): any => {
				if (name in this.__instance.__instanceFields) {
					this.__instance.__instanceFields[name] = value;
				}

				if (name in this.__instance.__staticFields) {
					this.__instance.__staticFields[name] = value;
				}
			},
		})
	}

	public override serialize(): SerializationObject {
		const object: SerializationObject = {};

		object[this.className] = {...this.__instance?.__instanceFields};

		return object;
	}

	public override toString(): string {
		return JSON.stringify(this.serialize(), null, 2);
	}
}

export function castValue(value: any, expected: any = null): any {
	const typeOf = typeof value;

	if (expected === null) {
		if (value === GRAMMAR.NULL) {
			return null;
		}
		if (value === GRAMMAR.TRUE) {
			return true;
		}
		if (value === GRAMMAR.FALSE) {
			return false;
		}
		if (typeOf === 'string' && value.trim() !== '' && !isNaN(value)) {
			return Number(value);
		}
		return value;
	}

	switch (expected) {
		case TYPE_ENUM.STRING:
			return typeOf === 'string' ? value : String(value);

		case TYPE_ENUM.NUMBER:
			return typeOf === 'number' ? value : Number(value);

		case TYPE_ENUM.BOOLEAN:
			return typeOf === 'boolean' ? value : value === 'true';

		case TYPE_ENUM.NULL:
			return null;
	}

	return value;
}

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
		return castValue(value.value);
	}

	if (value instanceof Instance) {
		if (value.__nativeInstance) {
			return value.__nativeInstance;
		}

		return new LyraObjectView(value);
	}

	if (Array.isArray(value)) {
		return value.map(fromLyraValue);
	}

	return castValue(value);
}

export function returnValue(value: any): ASTReturnNode {
	const node = new ASTReturnNode();
	node.argument = toLyraValue(value);
	return node;
}

export function wrapNativeInstance(lyraNativeObject: LyraNativeObject, objectRegistry: ObjectRegistry): Instance {
	if (!objectRegistry.classes.has(lyraNativeObject.className)) {
		throwNativeError(`Class ${lyraNativeObject.className} not found.`);
	}

	const classDef: ClassDefinition = objectRegistry.classes.get(lyraNativeObject.className);
	const instance: Instance = classDef.constructEmptyInstance(objectRegistry);

	instance.__nativeInstance = lyraNativeObject;

	return instance;
}

