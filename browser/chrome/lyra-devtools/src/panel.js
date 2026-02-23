console.log('lyra devtools panel loaded');

const MessageTypes = {
	LYRA_CHECK: 'LYRA_CHECK',
	PING: 'PING',
	PONG: 'PONG',
	GET_REGISTRY: 'GET_REGISTRY',
	REGISTRY_DATA: 'REGISTRY_DATA'
};

const port = chrome.runtime.connect({name: 'lyra-devtools'});

port.postMessage({
	                 type: MessageTypes.GET_REGISTRY,
	                 tabId: chrome.devtools.inspectedWindow.tabId
                 });

port.onMessage.addListener((msg) => {
	switch (msg.type) {
		case MessageTypes.REGISTRY_DATA: {
			document.getElementById('output').textContent =
				JSON.stringify(msg.version.instances, null, 2);
			break;
		}
	}
});
