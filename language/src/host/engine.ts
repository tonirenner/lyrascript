import {LyraScriptProgram} from "../core/program";
import {fetchSource} from "../core/parser/parser_source";
import {ClassDefinition, Environment, Instance} from "../core/interpreter/interpreter_objects";
import {ObjectRegistry} from "../core/interpreter/interpreter_registry";
import {callInstanceMethod, LambdaFunctionCall} from "../core/interpreter/interpreter_runtime";
import {EventType} from "../library/classes/event";
import {EventPipeline} from "../core/event/pipeline";
import {GRAMMAR} from "../core/grammar";

const lyraEventClassDef: ClassDefinition = new EventType().getClassDefinition();

export interface Engine {
	executeEntryFile(url: string, className: string): Promise<void>;

	createInstance(className: string): Instance;

	getRootInstance(): Instance;

	callRootInstanceMethod(methodName: string, args: any[]): any;

	callInstanceMethod(instance: Instance, methodName: string, args: Array<any>): any;

	createEvent(event: Event): Instance;

	createEventHandler(handler: LambdaFunctionCall, eventName: string): (event: Event) => void;
}

export class WebLyraScript implements Engine {
	private readonly program: LyraScriptProgram;
	private objectRegistry: ObjectRegistry = new ObjectRegistry();
	private environment: Environment = new Environment();
	private rootInstance: Instance | null = null;

	constructor(
		private readonly eventPipeline: EventPipeline = new EventPipeline(),
		isDebug: boolean = false
	) {
		this.program = new LyraScriptProgram(isDebug);
	}

	public getRootInstance(): Instance {
		if (this.rootInstance === null) {
			throw new Error('No root instance available.');
		}
		return this.rootInstance;
	}

	public createInstance(className: string): Instance {
		return this.getClassDefinition(className)
		           .constructNewInstanceWithoutArguments(this.objectRegistry, this.environment);
	}

	public callRootInstanceMethod(methodName: string, args: any[]): any {
		return this.callInstanceMethod(this.getRootInstance(), methodName, args);
	}

	public callInstanceMethod(instance: Instance, methodName: string, args: any[]): any {


		return callInstanceMethod(
			instance,
			instance.findeMethodNode(methodName),
			args,
			this.objectRegistry,
			this.environment
		);
	}

	public async executeEntryFile(url: string, className: string): Promise<void> {
		return this.program.execute(await fetchSource(url))
		           .then(() => {
			           this.objectRegistry = this.program.getGlobalObjectRegistry();
			           this.environment = this.program.getGlobalEnvironment();
			           this.rootInstance = this.createInstance(className);
		           });
	}

	public createEvent(event: Event): Instance {
		return lyraEventClassDef.constructNativeInstance(this.objectRegistry, [event]);
	}

	public createEventHandler(handler: LambdaFunctionCall, eventName: string): (event: Event) => void {
		return (event: Event): void => {
			this.eventPipeline.emit(
				eventName,
				{
					invoke: (): any => {
						handler.evalCall(
							handler.functionEnv.get(GRAMMAR.THIS) as Instance,
							this.createEvent(event)
						);
					},
					event
				}
			);
		};
	}


	private getClassDefinition(className: string): ClassDefinition {
		return this.objectRegistry.classes.get(className);
	}
}
