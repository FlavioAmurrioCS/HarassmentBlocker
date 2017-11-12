chrome.runtime.sendMessage({ todo: "showPageAction" });



chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "removeItem") {
        var itemId = "#" + request.offensiveId;
        $(itemId).css('display', 'none');
    }
});

$("document").ready(function () {
    $(".stream").click(function () {
        $(this).hide();
        // $(this).css('display', 'none');
        // $(this).remove();
    });
});
var r= $('<input type="button" value="new button"/>');

$("li").append(r);

var element = document.querySelector('li.js-stream-item stream-item stream-item');
element.parentElement.removeChild(element);

$(function() {
    $('ol').on('contextmenu', 'li', function(e) { //Get li under ul and invoke on contextmenu
        e.preventDefault(); //Prevent defaults
        alert(this.id); //alert the id
    });
});
