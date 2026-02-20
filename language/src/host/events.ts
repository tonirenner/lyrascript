const DOM_EVENT: string = 'dom:event';

const isEvent: (propertyKey: string) => boolean = (propertyKey: string): boolean => {
	return propertyKey.toLowerCase()
	                  .startsWith('on');
}

export const Events = {
	DOM_EVENT,
	isEvent,
};

export default Events;
