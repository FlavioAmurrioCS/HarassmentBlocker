// This script will only run when it detects the website declare in the manifest

// This funcions send a message to be listened by a function
// In this case the event willbe detected by the eventPage.js
// The todo object is the request object
chrome.runtime.sendMessage({ todo: "showPageAction" });


// This creates a listener will detetect messages like the one above 
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "removeTweet") {
        // Get the value being passed witht the request
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
    
         //getAllTweets();
     //getUserName();
    
    /**
     * Returns a list/array of all of the tweet object in the current page
     */
    function getAllTweets() {
          var allTweets = $('[id^="stream-item-tweet-"]');
          //console.log("All tweets = " + allTweets.length) ;
    }
    
    /**
     * Returns a username of the current user that is logged in to Tweeter
     */
    function getUserName() {
          var username = $('.DashUserDropdown-userInfoLink.js-nav').attr("href");

          return username.substring(1, username.length);
    }  
});

// var r= $('<input type="button" value="new button"/>');

// $("li").append(r);

// var element = document.querySelector('li.js-stream-item stream-item stream-item');
// element.parentElement.removeChild(element);

$(function() {
    $('ol').on('contextmenu', 'li', function(e) { //Get li under ul and invoke on contextmenu
        e.preventDefault(); //Prevent defaults
        alert(this.id); //alert the id
    });
});
