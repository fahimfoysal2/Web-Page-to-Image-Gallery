chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

chrome.action.onClicked.addListener(async (tab) => {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
   
    // Toggle the badge text
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });

    // Inject the content script
    await chrome

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["kormi.js"],
    });
});

