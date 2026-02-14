import {ASTNode} from './ast';
import {Environment} from "./interpreter_objects";
import {evalNode, registerNativeClasses, registerNativeFunctions} from "./interpreter_runtime";
import {ObjectRegistry} from "./interpreter_registry";

export class Interpreter {
	environment: Environment;
	objectRegistry: ObjectRegistry;

	constructor(environment: Environment, objectRegistry: ObjectRegistry) {
		this.environment    = environment;
		this.objectRegistry = objectRegistry;

		registerNativeClasses(objectRegistry, environment);
		registerNativeFunctions(environment);
	}

	run(ast: ASTNode) {
		evalNode(ast, this.objectRegistry, this.environment);
	}
}
