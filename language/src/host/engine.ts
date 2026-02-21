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
	private readonly globalObjectRegistry: ObjectRegistry;
	private readonly globalEnvironment: Environment;
	private rootInstance: Instance | null = null;


	constructor(private globalEventPipeline: EventPipeline = new EventPipeline(), isDebug: boolean = false) {
		this.program = new LyraScriptProgram(isDebug, this.globalEventPipeline);
		this.globalObjectRegistry = this.program.getGlobalObjectRegistry();
		this.globalEnvironment = this.program.getGlobalEnvironment();
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
			           this.globalObjectRegistry,
			           this.globalEnvironment,
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
			this.globalObjectRegistry,
			this.globalEnvironment,
			this.globalEventPipeline
		);
	}

	public async executeEntryFile(url: string, className: string): Promise<void> {
		return this.program.execute(await fetchSource(url))
		           .then(() => {
			           this.rootInstance = this.createInstance(className);
		           });
	}

	public createEvent(event: Event): Instance {
		return lyraEventClassDef.constructNativeInstance(this.globalObjectRegistry, [event]);
	}

	public createEventHandler(handler: LambdaFunctionCall, eventName: string): (event: Event) => void {
		return (event: Event): void => {
			this.globalEventPipeline.emit(
				eventName,
				{
					invoke: (): any => {
						const instance: Instance = handler.functionEnv.get(GRAMMAR.THIS);

						handler.evalCall(instance, this.createEvent(event));

						instance.markDirty(this.globalEventPipeline);
					},
					event
				}
			);
		};
	}


	private getClassDefinition(className: string): ClassDefinition {
		return this.globalObjectRegistry.classes.get(className);
	}
}
