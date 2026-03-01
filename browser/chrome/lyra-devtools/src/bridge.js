const MessageTypes = {
	CHECK_RUNTIME: 'CHECK_RUNTIME',
	GET_TREE: 'GET_TREE',
	TREE_DATA: 'TREE_DATA',
};

const Sources = {
	LYRA_EXTENSION: 'LYRA_EXTENSION',
	LYRA_PAGE: 'LYRA_PAGE'
};

const lyra = window['__LYRA__'] || null;

(function () {
	sendMessageToExtension(MessageTypes.CHECK_RUNTIME, {
		foundRuntime: !!lyra,
		version: lyra?.version
	});
	onMessageFromExtension(event => {
		switch (event.type) {
			case MessageTypes.GET_TREE: {
				sendMessageToExtension(MessageTypes.TREE_DATA, fetchTree(lyra?.runtime));
				break;
			}
		}
	});
})();

/**
 * @param {WebApplicationRuntime} runtime
 * @return {VNode}
 */
function fetchTree(runtime) {
	return mapVNode(runtime.getTree());
}

/**
 * @param {VNode|string|null} vNode
 * @return {any}
 */
function mapVNode(vNode) {
	console.log('mapVNode', vNode);
	if (!vNode) {
		return null;
	}

	if (typeof vNode === 'string') {
		return vNode;
	}

	const component = vNode.isComponent ? {
		id: vNode.component.id,
		name: vNode.component.__classDef.name,
		isDirty: vNode.component.__isDirty
	} : null;

	const children = [];

	vNode.children.forEach(child => {
		return children.push(mapVNode(child));
	});

	return {
		tag: vNode.tag,
		isComponent: vNode.isComponent,
		component: component,
		props: vNode.props,
		children: children,
	};
}

/**
 * @param {string} type
 * @param {any} payload
 * @return void
 */
function sendMessageToExtension(type, payload) {
	window.postMessage({source: Sources.LYRA_PAGE, type: type, payload: payload}, '*');
}

/**
 * @param {Function} callback
 * @return void
 */
function onMessageFromExtension(callback) {
	window.addEventListener('message', (event) => {
		if (event.source !== window || event.data?.source !== Sources.LYRA_EXTENSION) {
			return;
		}
		callback(event.data);
	})
}
