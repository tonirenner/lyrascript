import {LyraScriptProgram} from "../core/program.ts";
import {fetchSource} from "../core/parser/source.ts";
import {EventType} from "../library/classes/event.ts";
import {EventPipeline} from "../core/shared/event_pipeline.ts";
import type {ObjectRegistry} from "../core/shared/runtime_registry.ts";
import type {RuntimeClassType, RuntimeInstanceType, RuntimeLambda, ValueScope} from "../core/contracts/runtime_model.ts";
import {Value} from "../core/contracts/runtime_model.ts";
import {ReflectionClass} from "../core/reflection.ts";

const lyraEventClassDef: RuntimeClassType = new EventType().getRuntimeClass();

export interface Engine {
	executeEntryFile(url: string, className: string): Promise<void>;

	createInstance(className: string): RuntimeInstanceType;

	getObjectRegistry(): ObjectRegistry;

	getEnvironment(): ValueScope;

	getRootInstance(): RuntimeInstanceType;

	callRootInstanceMethod(methodName: string, args: any[]): any;

	callInstanceMethod(instance: RuntimeInstanceType, methodName: string, args: Array<any>): any;

	createEvent(event: Event): RuntimeInstanceType;

	createEventHandler(handler: RuntimeLambda, eventName: string): (event: Event) => void;
}

export class WebLyraScript implements Engine {
	private readonly program: LyraScriptProgram;
	private readonly _globalObjectRegistry: ObjectRegistry;
	private readonly _globalEnvironment: ValueScope;
	private readonly reflection: ReflectionClass;
	private rootInstance: RuntimeInstanceType | null = null;


	constructor(private globalEventPipeline: EventPipeline = new EventPipeline(), isDebug: boolean = false) {
		this.program = new LyraScriptProgram(isDebug, this.globalEventPipeline);
		this.reflection = this.program.getReflection();
		this._globalObjectRegistry = this.program.getGlobalObjectRegistry();
		this._globalEnvironment = this.program.getGlobalEnvironment();
	}

	getObjectRegistry(): ObjectRegistry {
		return this._globalObjectRegistry;
	}

	getEnvironment(): ValueScope {
		return this._globalEnvironment;
	}

	public getRootInstance(): RuntimeInstanceType {
		if (this.rootInstance === null) {
			throw new Error('No root instance available.');
		}
		return this.rootInstance;
	}

	public createInstance(className: string): RuntimeInstanceType {
		return this.reflection.createInstance(className);
	}

	public callRootInstanceMethod(methodName: string, args: any[]): any {
		return this.callInstanceMethod(this.getRootInstance(), methodName, args);
	}

	public callInstanceMethod(instance: RuntimeInstanceType, methodName: string, args: any[]): any {
		return this.reflection.callInstanceMethod(instance, methodName, args);
	}

	public async executeEntryFile(url: string, className: string): Promise<void> {
		await this.program.executeSource(await fetchSource(url));
		this.rootInstance = this.createInstance(className);
	}

	public createEvent(event: Event): RuntimeInstanceType {
		return this.reflection.createNativeInstance(lyraEventClassDef.className, [Value(event)]);
	}

	public createEventHandler(handler: RuntimeLambda, eventName: string): (event: Event) => void {
		return (event: Event): void => {
			this.globalEventPipeline.emit(
				eventName,
				{
					invoke: (): any => {
						handler.call([Value(this.createEvent(event), lyraEventClassDef.className, lyraEventClassDef)]);
					},
					event
				}
			);
		};
	}
}
