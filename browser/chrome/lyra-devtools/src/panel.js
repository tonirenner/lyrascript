console.info('lyra devtools panel loaded ...');

const MessageTypes = {
	CHECK_RUNTIME: 'CHECK_RUNTIME',
	GET_TREE: 'GET_TREE',
	TREE_DATA: 'TREE_DATA',
};

const port = chrome.runtime.connect({name: 'lyra-devtools'});

console.info('get tree');
port.postMessage({type: MessageTypes.GET_TREE, tabId: chrome.devtools.inspectedWindow.tabId});


port.onMessage.addListener(event => {
	console.log('event :: ', event);
	switch (event.type) {
		case MessageTypes.TREE_DATA: {
			console.log(event.payload);
			break;
		}
	}
});
