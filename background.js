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

    if (nextState === "ON") {
        // Insert the CSS file when the user turns the extension on
        await chrome.scripting.insertCSS({
            files: ["assets/gallery/lightgallery-bundle.min.css", "assets/style/wptig.css"],
            target: { tabId: tab.id },
        });

        // load content script
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["assets/gallery/lightgallery.min.js", "assets/gallery/lg-zoom.min.js", "assets/gallery/lg-thumbnail.min.js", "kormi.js"],
        });
    } else if (nextState === "OFF") {
        // Remove the CSS file when the user turns the extension off
        await chrome.scripting.removeCSS({
            files: ["assets/gallery/lightgallery-bundle.min.css", "assets/style/wptig.css"],
            target: { tabId: tab.id },
        });

        // remove div with id lightgallery and lg-container-1
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
                const entry = document.querySelector('#lightgallery');
                entry.remove();

                const entry2 = document.querySelector('#lg-container-1');
                entry2.remove();
            }
        });
    }
});

