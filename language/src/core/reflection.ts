import {Interpreter} from "./interpreter.ts";
import {createRuntimeInstance} from "./shared/ast_objects.ts";
import {throwRuntimeError} from "./shared/errors.ts";
import {Value, type RuntimeClassType, type RuntimeInstanceType, type RuntimeMethodType, type RuntimeValue} from "./contracts/runtime_model.ts";
import type {ExecutionContext} from "./contracts/runtime_model.ts";
import {RuntimeScope} from "./shared/ast_objects.ts";
import {GRAMMAR} from "./shared/ast_grammar.ts";

export class ReflectionClass {
	constructor(private readonly interpreter: Interpreter) {
	}

	createInstance(className: string): RuntimeInstanceType {
		const runtimeClass: RuntimeClassType = this.interpreter.objectRegistry.classes.get(className);

		if (runtimeClass.nativeRuntimeConstructor) {
			return this.createNativeInstance(className);
		}

		const instance: RuntimeInstanceType = createRuntimeInstance(runtimeClass);
		this.interpreter.objectRegistry.instances.set(instance);

		this.initializeInstanceFields(instance);
		this.runConstructor(instance, runtimeClass, []);

		return instance;
	}

	createNativeInstance(className: string, args: RuntimeValue[] = []): RuntimeInstanceType {
		const runtimeClass: RuntimeClassType = this.interpreter.objectRegistry.classes.get(className);
		if (!runtimeClass.nativeRuntimeConstructor) {
			throwRuntimeError(`Class ${className} has no native constructor.`);
		}

		const instance: RuntimeInstanceType = createRuntimeInstance(runtimeClass);
		this.initializeInstanceFields(instance);
		instance.nativeRuntimeObject = runtimeClass.nativeRuntimeConstructor(...args.map((arg: RuntimeValue): any => arg.value));

		this.interpreter.objectRegistry.instances.set(instance);

		return instance;
	}

	callInstanceMethod(instance: RuntimeInstanceType, methodName: string, args: any[] = []): any {
		const method = instance.runtimeClass.findMethod(methodName);
		if (!method) {
			throwRuntimeError(`Method ${methodName} not found on ${instance.runtimeClass.className}.`);
		}

		return this.interpreter.callInstanceMethod(
			instance,
			method,
			args.map((argument: any): RuntimeValue => this.toRuntimeValue(argument))
		).value;
	}

	private toRuntimeValue(argument: any): RuntimeValue {
		if (argument && typeof argument === 'object' && 'runtimeClass' in argument) {
			const instance: RuntimeInstanceType = argument as RuntimeInstanceType;
			return Value(instance, instance.runtimeClass.className, instance.runtimeClass);
		}

		return Value(argument);
	}

	private initializeInstanceFields(instance: RuntimeInstanceType): void {
		this.interpreter.pushContext({
			scope: new RuntimeScope(this.interpreter.runtimeScope),
			instance,
			method: instance.runtimeClass.constructorMethod
		} as ExecutionContext);

		try {
			this.interpreter.currentScope.define(
				GRAMMAR.THIS,
				Value(instance, instance.runtimeClass.className, instance.runtimeClass)
			);

			for (const field of instance.runtimeClass.instanceFields.values()) {
				const value: RuntimeValue = field.initializer
					? this.interpreter.evalExpression(field.initializer).toNativeRuntimeValue(field.type)
					: Value(null);

				instance.instanceFields.set(field.name, value);
			}

			for (const field of instance.runtimeClass.staticFields.values()) {
				const value: RuntimeValue = field.initializer
					? this.interpreter.evalExpression(field.initializer).toNativeRuntimeValue(field.type)
					: Value(null);

				instance.staticFields.set(field.name, value);
			}
		} finally {
			this.interpreter.popContext();
		}
	}

	private runConstructor(instance: RuntimeInstanceType, runtimeClass: RuntimeClassType, args: RuntimeValue[]): void {
		const constructor: RuntimeMethodType | undefined = runtimeClass.constructorMethod;
		if (!constructor) {
			return;
		}

		this.interpreter.callInstanceMethod(instance, constructor, args);
	}
}
