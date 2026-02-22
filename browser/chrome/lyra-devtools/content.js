/// <reference lib="dom" />

document.body.style.border = "5px solid red";

const script = document.createElement('script');
script.src = chrome.runtime.getURL("page_bridge.js");
script.onload = () => script.remove();
document.documentElement.appendChild(script);

window.addEventListener('message', (event) => {

	if (event.source !== window) {
		return;
	}

	if (event.data?.type !== 'LYRA_CHECK') {
		return;
	}

	if (event.data.foundRuntime) {
		chrome.runtime.sendMessage({
			                           type: 'LYRA_DETECTED',
			                           version: event.data.version
		                           });
	}
});
