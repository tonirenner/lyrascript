const Sources = {
	LYRA_EXTENSION: 'LYRA_EXTENSION',
	LYRA_PAGE: 'LYRA_PAGE'
};

const script = document.createElement('script');
script.src = chrome.runtime.getURL('bridge.js');
script.onload = () => script.remove();
document.documentElement.appendChild(script);

(function () {
	dispatchMessageFromBridge();
	dispatchMessageFromExtension();
})();


function dispatchMessageFromBridge() {
	window.addEventListener('message', (event) => {
		if (event.source !== window || event.data?.source !== Sources.LYRA_PAGE) {
			return;
		}

		chrome.runtime.sendMessage({type: event.data.type, payload: event.data.payload});
	});
}

function dispatchMessageFromExtension() {
	chrome.runtime.onMessage.addListener((message) => {
		window.postMessage(
			{
				source: Sources.LYRA_EXTENSION,
				type: message.type,
				payload: message.payload
			},
			'*'
		);
	});
}
