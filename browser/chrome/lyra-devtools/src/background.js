const MessageTypes = {
	CHECK_RUNTIME: 'CHECK_RUNTIME',
	GET_TREE: 'GET_TREE',
	TREE_DATA: 'TREE_DATA',
};

const lyra = {
	tabId: null,
	version: null,
};

chrome.runtime.onInstalled.addListener(() => {
	console.info('Extension installed');
});

chrome.runtime.onMessage.addListener((event, sender) => {
	switch (event.type) {
		case MessageTypes.CHECK_RUNTIME: {
			if (event.payload.foundRuntime) {
				lyra.tabId = sender.tab.id;
				lyra.version = event.payload.version;

				console.info('detect lyra runtime', lyra);
			} else {
				console.warn('lyra runtime could not be found');
			}
			break;
		}
		case MessageTypes.GET_TREE: {
			chrome.tabs.sendMessage(event.tabId, {type: MessageTypes.GET_TREE})
			break;
		}
	}
});

chrome.runtime.onConnect.addListener(port => {
	if (port.name !== 'lyra-devtools') {
		return;
	}

	port.onMessage.addListener(event => {
		switch (event.type) {
			case MessageTypes.GET_TREE: {
				chrome.tabs.sendMessage(event.tabId, {type: MessageTypes.GET_TREE});
				break;
			}
		}
	});

	chrome.runtime.onMessage.addListener(event => port.postMessage(event));
});
