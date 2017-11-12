// This script will only run when it detects the website declare in the manifest

// This funcions send a message to be listened by a function
// In this case the event willbe detected by the eventPage.js
// The todo object is the request object


chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "changeColor") {
        var addColor = '#' + request.clickedColor;
        console.log(addColor);

        var selected;

        $('li').click(function () {
            // alert(this.id);
            $("#" + this.id).hide();
            selected = $("#" + this.id).prev();
            $('li').unbind("mouseover");
            $(selected).hide();
        });

        

        // $('ol').on('click', 'li', function(e) { //Get li under ul and invoke on contextmenu
        //             e.preventDefault(); //Prevent defaults
        //             // alert(this.id); //alert the id

        //             // ("#" +this.id).css('display','none');
        //             $("#"+ this.id).hide();
        //         });
        return;
    }
    return;
});


// This creates a listener will detetect messages like the one above 
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.todo == "removeTweet") {

//         console.log("Finally Here");
//     }
// });


// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.todo == "removeTweet") {
//         // Get the value being passed witht the request
//         var itemId = "#" + request.offensiveId;
//         $(itemId).css('display', 'none');



//         $(function() {
//                 $('ol').on('click', 'li', function(e) { //Get li under ul and invoke on contextmenu
//                     e.preventDefault(); //Prevent defaults
//                     // alert(this.id); //alert the id

//                     // ("#" +this.id).css('display','none');
//                     $("#"+ this.id).hide();
//                 });
//             });
//     }
// });

// $("document").ready(function () {
//     $(".stream").click(function () {
//         $(this).hide();
//         // $(this).css('display', 'none');
//         // $(this).remove();
//     });
// });

// var r= $('<input type="button" value="new button"/>');

// $("li").append(r);

// var element = document.querySelector('li.js-stream-item stream-item stream-item');
// element.parentElement.removeChild(element);

// contextmenu
// $(function() {
//     $('ol').on('contextmenu', 'li', function(e) { //Get li under ul and invoke on contextmenu
//         e.preventDefault(); //Prevent defaults
//         // alert(this.id); //alert the id

//         // ("#" +this.id).css('display','none');
//         $("#"+ this.id).hide();
//     });
// });
