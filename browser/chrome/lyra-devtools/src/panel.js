chrome.tabs.sendMessage(chrome.devtools.inspectedWindow.tabId, {
	type: 'GET_REGISTRY'
});

chrome.runtime.onMessage.addListener((msg) => {
	if (msg.type === 'REGISTRY_DATA') {
		document.getElementById("output").textContent =
			JSON.stringify(msg.payload, null, 2);
	}
});
