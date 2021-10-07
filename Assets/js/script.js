// Establish method here that loads current days date upon page load
// Date format should follow that of the example image provided
var $today = moment().format("dddd, MMMM Do");
$("#currentDay").text($today);

// Establish function that checks for current time (specifically in hours) and color codes each sections accordingly
function thisMoment() {
    var $currentMoment = moment().format("H");

    $(".description").each(function() {
        var $hour = parseInt($(this).attr("id"));
        if ($hour < $currentMoment){
            $(this).addClass("past");
        } else if ($hour == $currentMoment){
            $(this).addClass("present");
        } else if ($hour > $currentMoment){
            $(this).addClass("future");
        }
    })
}

// Establish function that allows user to save their marked down plan for whatever specific time slot
function $savePlan (event) {
    var $plan = $(event.target).siblings(".description").val();
    var $time = $(event.target).siblings(".description").attr("id");

    localStorage.setItem($time, $plan);
}

// Establish function that simply checks if there is any data in local storage and retrieves said data to display for the user
function storageCheck() {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
}

// Set the functions that check for current hour and local storage to launch on page load to ensure that the data is displayed correctly according to user desires
// Add event listener to save button that actually saves any markdowns made
thisMoment();
storageCheck();
$(".saveBtn").on("click", $savePlan);