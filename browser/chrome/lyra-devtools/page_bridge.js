window.postMessage(
	{
		type: 'LYRA_CHECK',
		foundRuntime: !!window.__LYRA__,
		version: window.__LYRA__?.version
	}
);
