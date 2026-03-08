import {ASTNode} from '../ast.ts';
import {Environment} from "../runtime/objects.ts";
import {evalNode, registerNativeClasses, registerNativeFunctions} from "./interpreter_statements";
import {ObjectRegistry} from "../runtime/registry";
import type {EventPipeline} from "../event/pipeline";

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
