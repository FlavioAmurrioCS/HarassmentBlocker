// This code adds context menu to the right click dialog
var contextMenuItem = {
    "id": "hackital",
    "title": "Add to Block List",
    "contexts": ["page"]
};
chrome.contextMenus.create(contextMenuItem);

// This is what happens when selecting text and clicking the dialog
// This declaration works for all of them and we differentialte based
// on the clickData.menuItemId
chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == "hackital") {

        var color = "dummy value";
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color });
        });

        // $(function() {
        // $('ol').on('click', 'li', function(e) { //Get li under ul and invoke on contextmenu
        //     e.preventDefault(); //Prevent defaults
        //     // alert(this.id); //alert the id

        //     // ("#" +this.id).css('display','none');
        //     $("#"+ this.id).hide();
        // });
        // });

    }
    // if (clickData.menuItemId == "hackital" && clickData.selectionText) {
    //     // Send text to server here
    // }
});

// This adds a listener whenever an item on the chrome storage changes
// changes is the object that holds the information(bundle)
chrome.storage.onChanged.addListener(function (changes, storageName) {

    // Thisk function gets the total fromt he changes bundle and gets the new value
    // The old values is stores in oldValue
    chrome.browserAction.setBadgeText({ 'text': changes.total.newValue.toString() });

});

// // This functions will gives us the list of tabs in an array "tabs"
// chrome.tabs.query({active:true, currentWindow: true}, function (tabs) {
//     // This function actives the extension
//     // Since there are not argument, this activates it for all websites
//     chrome.pageAction.show(tabs[0].id);    
// })


// This function adds an listner taht will detect any messages being send
// In this sceneri0, this scripts will listent to the content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "showPageAction") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
        });

    }
});

// $(".stream").click(function () {
//     $(this).hide();
//     // $(this).css('display', 'none');
//     // $(this).remove();
// });

// $(function () {
//     $('ol').on('contextmenu', 'li', function (e) { //Get li under ul and invoke on contextmenu
//         e.preventDefault(); //Prevent defaults
//         alert(this.id); //alert the id
//     });
// });
