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

      
        return;
    }
    return;
});


$("document").ready(function () {
    $(".stream").click(function () {
        $(this).hide();
        // $(this).css('display', 'none');
        // $(this).remove();
    });
    
         getAllTweets();
     //getUserName();
    
    /**
     * Returns a list/array of all of the tweet object in the current page
     */
    function getAllTweets() {
          var allTweets = $('[id^="stream-item-tweet-"]');
          var TweetsIDs = [];
          for(var el of allTweets){
            var ids = el.id.replace(/.*-/g,"")
            TweetsIDs.push(ids);
            // console.log(el.innerText);
          }
    }
    
    /**
     * Returns a username of the current user that is logged in to Tweeter
     */
    function getUserName() {
          var username = $('.DashUserDropdown-userInfoLink.js-nav').attr("href");

          return username.substring(1, username.length);
    }  
});

