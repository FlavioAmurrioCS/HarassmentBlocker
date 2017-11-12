// This file only works with the option.html
$(function () {
    // Add on click action to the save limit button
    $("#saveLimit").click(function () {
        // Retrieve  innformation from the #limit text field
        var limit = $('#limit').val();

        // If limit is not null
        if (limit) {
            // Store limit into chrome storage and call the function which closes the tab
            chrome.storage.sync.set({ 'limit': limit }, function () {
                close();
            });
        }
    });

    $("#resetTotal").click(function () {
        chrome.storage.sync.set({'total': 0}, function () {
            var notifOptions = {
                type: 'basic',
                iconUrl: 'icon48.png',
                title: "Action activated!(Total reseted)",
                message: "A condition has been met and thus we must display this message"
            };

            chrome.notications.create(notifOptions);
            
        })
    });
});