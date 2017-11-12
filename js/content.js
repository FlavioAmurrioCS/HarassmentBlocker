chrome.runtime.sendMessage({ todo: "showPageAction" });



chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "removeItem") {
        var itemId = "#" + request.offensiveId;
        $(".stream").css('display', 'none');
    }
})



