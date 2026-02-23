const Sources = {
	LYRA_EXTENSION: 'LYRA_EXTENSION',
	LYRA_PAGE: 'LYRA_PAGE'
};

document.body.style.border = "5px solid red";

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
		if (event.source !== window) {
			return;
		}

		if (event.data?.source !== Sources.LYRA_PAGE) {
			return;
		}

		chrome.runtime.sendMessage({
			                           type: event.data.type,
			                           version: event.data.payload
		                           });
	});
}

function dispatchMessageFromExtension() {
	chrome.runtime.onMessage.addListener((msg) => {
		const message = {
			source: Sources.LYRA_EXTENSION,
			type: msg.type,
			payload: msg.payload
		};
		window.postMessage(message, '*');
	});
}
