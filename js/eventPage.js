// This code adds context menu to the right click dialog
var contextMenuItem = {
    "id": "hackital",
    "title": "Add to Block List",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

// This is what happens when selecting text and clicking the dialog
chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == "hackital" && clickData.selectionText) {
        // Send text to server here
    }
});

// Do not remember what this function does
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "showPageAction") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
        });

    }
});

$("document").ready(function () {
    $(".stream").click(function () {
        $(this).hide();
        // $(this).css('display', 'none');
        // $(this).remove();
    });
});