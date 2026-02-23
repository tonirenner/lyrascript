const MessageTypes = {
	LYRA_CHECK: 'LYRA_CHECK',
	PING: 'PING',
	PONG: 'PONG',
	GET_REGISTRY: 'GET_REGISTRY',
	REGISTRY_DATA: 'REGISTRY_DATA'
};

const lyra = {
	tabId: null,
	version: null,
};

chrome.runtime.onInstalled.addListener(() => {
	console.log('Extension installiert');
});

chrome.runtime.onMessage.addListener((msg, sender) => {
	switch (msg.type) {
		case MessageTypes.LYRA_CHECK: {
			if (msg.version.foundRuntime) {
				lyra.tabId = sender.tab.id;
				lyra.version = msg.version.version;

				console.info('detect lyra runtime', lyra);
			} else {
				console.warn('lyra runtime could not be found');
			}

			console.info('request registry ...');
			chrome.tabs.sendMessage(
				sender.tab.id,
				{
					type: 'GET_REGISTRY'
				}
			);
			break;
		}
	}


});

chrome.runtime.onMessage.addListener((msg, sender) => {

	if (msg.type === MessageTypes.REGISTRY_DATA) {
		console.log(msg)
		console.log("Registry:", msg.version.instances);
	}

});
