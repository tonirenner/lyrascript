import {LyraScriptProgram} from "../core/program.ts";
import {fetchSource} from "../core/parser/source.ts";
import {callInstanceMethod, LambdaFunctionCall} from "../core/interpreter/evaluation.ts";
import {EventType} from "../library/classes/event.ts";
import {EventPipeline} from "../core/event/pipeline.ts";
import {type ClassDefinition, Environment, RuntimeInstance} from "../core/runtime/runtime_model.ts";
import type {ObjectRegistry} from "../core/runtime/runtime_registry.ts";
import {ASTRuntimeInstanceFactory} from "../core/runtime/ast_instance_factory.ts";

const lyraEventClassDef: ClassDefinition = new EventType().getClassDefinition();

export interface Engine {
	executeEntryFile(url: string, className: string): Promise<void>;

	createInstance(className: string): RuntimeInstance;

	getObjectRegistry(): ObjectRegistry;

	getEnvironment(): Environment;

	getRootInstance(): RuntimeInstance;

	callRootInstanceMethod(methodName: string, args: any[]): any;

	callInstanceMethod(instance: RuntimeInstance, methodName: string, args: Array<any>): any;

	createEvent(event: Event): RuntimeInstance;

	createEventHandler(handler: LambdaFunctionCall, eventName: string): (event: Event) => void;
}

export class WebLyraScript implements Engine {
	private readonly program: LyraScriptProgram;
	private readonly _globalObjectRegistry: ObjectRegistry;
	private readonly _globalEnvironment: Environment;
	private rootInstance: RuntimeInstance | null = null;


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

	public getRootInstance(): RuntimeInstance {
		if (this.rootInstance === null) {
			throw new Error('No root instance available.');
		}
		return this.rootInstance;
	}

	public createInstance(className: string): RuntimeInstance {
		return ASTRuntimeInstanceFactory.newRuntimeInstanceWithoutArguments(
			this.getClassDefinition(className),
			this._globalObjectRegistry,
			this._globalEnvironment,
			this.globalEventPipeline
		)
	}

	public callRootInstanceMethod(methodName: string, args: any[]): any {
		return this.callInstanceMethod(this.getRootInstance(), methodName, args);
	}

	public callInstanceMethod(instance: RuntimeInstance, methodName: string, args: any[]): any {
		return callInstanceMethod(
			instance,
			instance.findMethod(methodName),
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

	public createEvent(event: Event): RuntimeInstance {
		return ASTRuntimeInstanceFactory.createNativeRuntimeInstance(lyraEventClassDef, [event]);
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
