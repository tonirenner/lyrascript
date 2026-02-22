/// <reference lib="dom" />

chrome.runtime.onInstalled.addListener(() => {
	console.log('Extension installiert');
});


chrome.runtime.onMessage.addListener((msg, sender) => {
	if (msg.type === "LYRA_DETECTED") {
		console.log("Lyra läuft in Tab:", sender.tab.id);
	}
});
