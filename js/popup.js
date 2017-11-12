// This function modifies the popup window when changin the input field
$(function () {
    $('#name').keyup(function () {
        $('#greet').text('Hello ' + $('#name').val());
        console.log("something");
    })
})

