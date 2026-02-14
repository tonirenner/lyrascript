import {ClassRefType, Type, Types} from "./type_objects.ts";
import {ObjectRegistry} from "./interpreter_registry.ts";

export class AutoboxedTypes {
	static NUMBER: string = 'Number';
	static STRING: string = 'String';
	static BOOLEAN: string = 'Boolean';

	static CLASSNAME_MAP: { [s: string]: string; } = {
		number: AutoboxedTypes.NUMBER,
		string: AutoboxedTypes.STRING,
		boolean: AutoboxedTypes.BOOLEAN
	};

	static getClassName(key: string): string {
		const className = AutoboxedTypes.CLASSNAME_MAP[key];
		if (!className) {
			throw new Error(`No class found for primitive type ${key}.`);
		}
		return className;
	}
}

export class Autoboxing {
	static CLASSNAME_MAP: Map<Type, string> = new Map(
		[
			[Types.NUMBER, AutoboxedTypes.NUMBER],
			[Types.STRING, AutoboxedTypes.STRING],
			[Types.BOOLEAN, AutoboxedTypes.BOOLEAN]
		]
	);

	static autoboxIfNeeded(objectType: Type, objectRegistry: ObjectRegistry): ClassRefType | Type {
		const className = Autoboxing.CLASSNAME_MAP.get(objectType);
		if (className) {
			return new ClassRefType(objectRegistry.types.getClassSymbol(className));
		}

		return objectType;
	}
}
