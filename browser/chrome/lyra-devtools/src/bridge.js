const MessageTypes = {
	LYRA_CHECK: 'LYRA_CHECK',
	PING: 'PING',
	PONG: 'PONG',
	GET_REGISTRY: 'GET_REGISTRY',
	REGISTRY_DATA: 'REGISTRY_DATA'
};

const Sources = {
	LYRA_EXTENSION: 'LYRA_EXTENSION',
	LYRA_PAGE: 'LYRA_PAGE'
};

const lyra = window['__LYRA__'] || null;

(function () {
	sendMessageToExtension(MessageTypes.LYRA_CHECK, {
		type: MessageTypes.LYRA_CHECK,
		foundRuntime: !!lyra,
		version: lyra?.version
	});
	onMessageFromExtension(payload => {
		const {type} = payload;
		switch (type) {
			case MessageTypes.PING: {
				sendMessageToExtension(MessageTypes.PONG, {ok: true});
				break;
			}
			case MessageTypes.GET_REGISTRY: {
				sendMessageToExtension(
					MessageTypes.REGISTRY_DATA,
					{instances: listInstances(lyra?.runtime.engine)}
				);
				break;
			}
		}
	});
})();


/**
 * @param {Engine} engine
 * @return {{id:string, name:string, isDirty:boolean}}
 */
function listInstances(engine) {
	const instances = [];
	engine.getObjectRegistry()
	      .instances
	      .allInstances()
	      .forEach(instance => {
		      instances.push({
			                     id: instance.id,
			                     name: instance.__classDef.name,
			                     isDirty: instance.__isDirty
		                     });
	      });

	return instances;
}

/**
 * @param {string} type
 * @param {any} payload
 * @return void
 */
function sendMessageToExtension(type, payload) {
	const message = {source: Sources.LYRA_PAGE, type: type, payload: payload};

	window.postMessage(message, '*');
}

/**
 * @param {Function} callback
 * @return void
 */
function onMessageFromExtension(callback) {
	window.addEventListener('message', (event) => {
		if (event.source !== window) {
			return;
		}
		if (event.data?.source !== Sources.LYRA_EXTENSION) {
			return;
		}
		callback(event.data);
	})
}
