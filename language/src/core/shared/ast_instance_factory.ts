import {
	type ClassDefinition,
	ClassMethodDefinition,
	Environment,
	LyraNativeObject,
	RuntimeInstance
} from "./runtime_model.ts";
import type {ObjectRegistry} from "./runtime_registry.ts";
import type {EventPipeline} from "./event_pipeline.ts";
import {ASTNewNode, type ASTNode, ASTParameterNode, ASTTypeNode} from "./ast.ts";
import {evalMethodArguments, evalNode} from "../interpreter/evaluation.ts";
import {GRAMMAR} from "./ast_grammar.ts";
import {throwRuntimeError} from "./errors.ts";
import {fromLyraValue} from "./ast_type_conversion.ts";

export class ASTRuntimeInstanceFactory {

	static createRuntimeInstance(classDefinition: ClassDefinition): RuntimeInstance {

		return new RuntimeInstance(classDefinition);
	}

	static createNativeRuntimeInstance(classDefinition: ClassDefinition, args: any[] = []): RuntimeInstance {

		const instance: RuntimeInstance = ASTRuntimeInstanceFactory.createRuntimeInstance(classDefinition);

		instance.__nativeInstance = new classDefinition.nativeInstance(...args);

		return instance;
	}

	static newRuntimeInstanceWithoutArguments(classDefinition: ClassDefinition, objectRegistry: ObjectRegistry, environment: Environment, eventPipeline: EventPipeline): RuntimeInstance {

		return ASTRuntimeInstanceFactory.newRuntimeInstanceWithArguments(
			classDefinition,
			[],
			objectRegistry,
			environment,
			eventPipeline
		);
	}

	static newRuntimeInstanceWithArguments(classDefinition: ClassDefinition, args: ASTNode[], objectRegistry: ObjectRegistry, environment: Environment, eventPipeline: EventPipeline): RuntimeInstance {

		return ASTRuntimeInstanceFactory.newRuntimeInstanceByNewNode(
			classDefinition,
			new ASTNewNode(args, new ASTTypeNode(ASTTypeNode.KIND_SIMPLE, this.name)),
			objectRegistry,
			environment,
			eventPipeline
		);
	}

	static newRuntimeInstanceByNewNode(classDefinition: ClassDefinition, expr: ASTNewNode, objectRegistry: ObjectRegistry, environment: Environment, eventPipeline: EventPipeline): RuntimeInstance {

		const instance: RuntimeInstance = ASTRuntimeInstanceFactory.createRuntimeInstance(classDefinition);

		objectRegistry.instances.register(instance);

		instance.initializeFields(environment);

		if (!classDefinition.constructorMethod) {
			return instance;
		}

		const constructor: ClassMethodDefinition = classDefinition.constructorMethod;
		const constructorEnv = new Environment(environment);

		const constructorArgs: any = evalMethodArguments(
			expr,
			constructor.parameters,
			objectRegistry,
			environment,
			eventPipeline,
			instance
		);

		constructorEnv.define(GRAMMAR.THIS, instance);

		for (let i = 0; i < constructorArgs.length; i++) {
			const parameter: ASTParameterNode | undefined = constructor.parameters[i];
			if (parameter) {
				constructorEnv.define(parameter.name, constructorArgs[i]);
			}
		}

		for (const child of constructor.body()) {
			evalNode(child, objectRegistry, constructorEnv, eventPipeline, instance);
		}

		return instance;
	}

	static createNativeByNewNode(classDefinition: ClassDefinition, expr: ASTNewNode, objectRegistry: ObjectRegistry, environment: Environment, eventPipeline: EventPipeline): RuntimeInstance {
		const instance: RuntimeInstance = ASTRuntimeInstanceFactory.createRuntimeInstance(classDefinition);

		objectRegistry.instances.register(instance);

		const constructor: ClassMethodDefinition | null = classDefinition.constructorMethod;
		const constructorEnv: Environment = new Environment(environment);

		const constructorArgs: any[] = evalMethodArguments(
			expr,
			constructor
				? constructor.parameters
				: [],
			objectRegistry,
			environment,
			eventPipeline,
			instance
		);

		constructorEnv.define(GRAMMAR.THIS, instance);

		if (classDefinition.nativeInstance === null) {
			throwRuntimeError('Class has no native instance');
		}

		const nativeInstance = new classDefinition.nativeInstance(...constructorArgs.map(fromLyraValue));
		if (nativeInstance instanceof LyraNativeObject) {
			instance.__nativeInstance = nativeInstance;
		}

		return instance;
	}

}
