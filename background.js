browser.browserAction.onClicked.addListener(async () => {
	try {
		const currentWindow = await browser.windows.getCurrent();
        await browser.windows.update(currentWindow.id, {state: "minimized"});
	} catch (err) { console.error(err) }
})
