import type {EventHandler} from "../shared/event_pipeline.ts";

export const LYRA_EVENTS = {
	INSTANCE_DIRTY_STATE: 'lyra:instance_dirty_state',
	INSTANCE_CLEAN_STATE: 'lyra:instance_clean_state'
};


export interface EventDispatch {
	on<T = any>(event: string, handler: EventHandler<T>): void;

	off<T = any>(event: string, handler: EventHandler<T>): void;

	emit<T = any>(event: string, payload: T): void;
}
