// This file interacts with the popup.html

// This function modifies the popup window when changin the input field
// #name is the input field
// #greet is the text field
// # indicates id
// $ indicates that you are using the jQuery library(it is shorthand for it)
// $('#name') -> document.getElementbyId()
// keyup is when user inputs something
// .text() sets the text for the element
// .val() return the value store within tthe element
$(function () {
    $('#name').keyup(function () {
        $('#greet').text('Hello ' + $('#name').val());
    });
});

// .click(function(){ foo(); }) this adds on click functions to the button
// chrome.storage.sync.get('total', function(args) { }) this function retrieves content values
$(function () {

    // Prepopulate the total field every time the popup is opened
    chrome.storage.sync.get('total', function (budger) {
        $("#total").text(budget.total);        
    })


    $('#btn').click(function () {
        chrome.storage.sync.get('total', function (budget) {
            var newTotal = 0;
            // if budget.total exist
            if (budget.total) {
                newTotal += parseInt(budget.total)
            }

            // Thie retrieves the value from the amount obj
            var amount = $("#amount").val();
            if (amount) { // If not null
                newTotal += parseInt(amount);
            }

            // store information back to chrome storage
            chrome.storage.sync.set({ 'total': newTotal });
            $("#total").text(newTotal);
            $("#amount").val(' ');
        });
    });
});