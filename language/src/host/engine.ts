import {LyraScriptProgram} from "../core/program";
import {fetchSource} from "../core/parser/source";
import {ClassDefinition, Environment, Instance} from "../core/runtime/objects";
import {ObjectRegistry} from "../core/runtime/registry.ts";
import {callInstanceMethod, LambdaFunctionCall} from "../core/interpreter/evaluation";
import {EventType} from "../library/classes/event";
import {EventPipeline} from "../core/event/pipeline";

const lyraEventClassDef: ClassDefinition = new EventType().getClassDefinition();

export interface Engine {
	executeEntryFile(url: string, className: string): Promise<void>;

	createInstance(className: string): Instance;

	getObjectRegistry(): ObjectRegistry;

	getEnvironment(): Environment;

	getRootInstance(): Instance;

	callRootInstanceMethod(methodName: string, args: any[]): any;

	callInstanceMethod(instance: Instance, methodName: string, args: Array<any>): any;

	createEvent(event: Event): Instance;

	createEventHandler(handler: LambdaFunctionCall, eventName: string): (event: Event) => void;
}

export class WebLyraScript implements Engine {
	private readonly program: LyraScriptProgram;
	private readonly _globalObjectRegistry: ObjectRegistry;
	private readonly _globalEnvironment: Environment;
	private rootInstance: Instance | null = null;


	constructor(private globalEventPipeline: EventPipeline = new EventPipeline(), isDebug: boolean = false) {
		this.program = new LyraScriptProgram(isDebug, this.globalEventPipeline);
		this._globalObjectRegistry = this.program.getGlobalObjectRegistry();
		this._globalEnvironment = this.program.getGlobalEnvironment();
	}

	getObjectRegistry(): ObjectRegistry {
		return this._globalObjectRegistry;
	}

	getEnvironment(): Environment {
		return this._globalEnvironment;
	}

	public getRootInstance(): Instance {
		if (this.rootInstance === null) {
			throw new Error('No root instance available.');
		}
		return this.rootInstance;
	}

	public createInstance(className: string): Instance {
		return this.getClassDefinition(className)
		           .constructNewInstanceWithoutArguments(
			           this._globalObjectRegistry,
			           this._globalEnvironment,
			           this.globalEventPipeline
		           );
	}

	public callRootInstanceMethod(methodName: string, args: any[]): any {
		return this.callInstanceMethod(this.getRootInstance(), methodName, args);
	}

	public callInstanceMethod(instance: Instance, methodName: string, args: any[]): any {
		return callInstanceMethod(
			instance,
			instance.findeMethodNode(methodName),
			args,
			this._globalObjectRegistry,
			this._globalEnvironment,
			this.globalEventPipeline
		);
	}

	public async executeEntryFile(url: string, className: string): Promise<void> {
		return this.program.executeSource(await fetchSource(url))
		           .then(() => {
			           this.rootInstance = this.createInstance(className);
		           });
	}

	public createEvent(event: Event): Instance {
		return lyraEventClassDef.constructNativeInstance([event]);
	}

	public createEventHandler(handler: LambdaFunctionCall, eventName: string): (event: Event) => void {
		return (event: Event): void => {
			this.globalEventPipeline.emit(
				eventName,
				{
					invoke: (): any => {
						handler.evalCall(this.createEvent(event));
					},
					event
				}
			);
		};
	}


	private getClassDefinition(className: string): ClassDefinition {
		return this._globalObjectRegistry.classes.get(className);
	}
}
