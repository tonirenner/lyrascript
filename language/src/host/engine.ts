import {LyraScriptProgram} from "../core/program";
import {fetchSource} from "../core/parser_source";
import {Environment, Instance} from "../core/interpreter_objects";
import {ObjectRegistry} from "../core/interpreter_registry";
import {callInstanceMethod} from "../core/interpreter_runtime";

export interface Engine {
	load(url: string): Promise<void>;

	createInstance(className: string): Instance;

	callInstanceMethod(instance: Instance, methodName: string, args: Array<any>): any;
}

export class WebLyraScript implements Engine {
	private readonly program: LyraScriptProgram;
	private objectRegistry: ObjectRegistry = new ObjectRegistry();
	private environment: Environment = new Environment();

	constructor(isDebug: boolean = false) {
		this.program = new LyraScriptProgram(isDebug);
	}

	createInstance(className: string): Instance {
		return new Instance(this.objectRegistry.classes.get(className));
	}

	callInstanceMethod(instance: Instance, methodName: string, args: any[]): any {
		return callInstanceMethod(
			instance,
			instance.__classDef.findMethod(methodName),
			args,
			this.objectRegistry,
			this.environment
		);
	}

	async load(url: string): Promise<void> {
		return this.program.execute(await fetchSource(url))
		           .then(() => {
			           this.objectRegistry = this.program.getGlobalObjectRegistry();
			           this.environment = this.program.getGlobalEnvironment();
		           });
	}
}
