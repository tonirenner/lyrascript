import {LyraScriptProgram} from "../core/program";
import {fetchSource} from "../core/parser/parser_source";
import {ClassDefinition, Environment, Instance} from "../core/interpreter/interpreter_objects";
import {ObjectRegistry} from "../core/interpreter/interpreter_registry";
import {callInstanceMethod} from "../core/interpreter/interpreter_runtime";

export interface Engine {
	executeEntryFile(url: string, className: string): Promise<void>;

	createInstance(className: string): Instance;

	callInstanceMethod(methodName: string, args: Array<any>): any;
}

export class WebLyraScript implements Engine {
	private readonly program: LyraScriptProgram;
	private objectRegistry: ObjectRegistry = new ObjectRegistry();
	private environment: Environment = new Environment();
	private rootInstance: Instance | null = null;

	constructor(isDebug: boolean = false) {
		this.program = new LyraScriptProgram(isDebug);
	}

	createInstance(className: string): Instance {
		const classDef: ClassDefinition = this.objectRegistry.classes.get(className);
		return classDef.constructEmptyInstance();
	}

	callInstanceMethod(methodName: string, args: any[]): any {
		if (this.rootInstance === null) {
			throw new Error('No root instance available.');
		}

		return callInstanceMethod(
			this.rootInstance,
			this.rootInstance.__classDef.findMethod(methodName),
			args,
			this.objectRegistry,
			this.environment
		);
	}

	async executeEntryFile(url: string, className: string): Promise<void> {
		return this.program.execute(await fetchSource(url))
		           .then(() => {
			           this.objectRegistry = this.program.getGlobalObjectRegistry();
			           this.environment = this.program.getGlobalEnvironment();
			           this.rootInstance = this.createInstance(className);
		           });
	}
}
