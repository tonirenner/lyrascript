import {ASTNode} from './shared/ast.ts';
import {evalNode, registerNativeClasses, registerNativeFunctions} from "./interpreter/evaluation.ts";
import {ObjectRegistry} from "./shared/runtime_registry.ts";
import type {EventPipeline} from "./event/pipeline.ts";
import type {Environment} from "./shared/runtime_model.ts";

export class Interpreter {
	environment: Environment;
	objectRegistry: ObjectRegistry;
	eventPipeline: EventPipeline;

	constructor(
		environment: Environment,
		objectRegistry: ObjectRegistry,
		eventPipeline: EventPipeline
	) {
		this.environment = environment;
		this.objectRegistry = objectRegistry;
		this.eventPipeline = eventPipeline;

		registerNativeClasses(objectRegistry, environment);
		registerNativeFunctions(environment);
	}

	run(ast: ASTNode) {
		evalNode(ast, this.objectRegistry, this.environment, this.eventPipeline);
	}
}
