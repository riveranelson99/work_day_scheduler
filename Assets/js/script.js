var $today = moment().format("dddd, MMMM Do");
$("#currentDay").text($today);

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

function $savePlan (event) {
    var $plan = $(event.target).siblings(".description").val();
    var $time = $(event.target).siblings(".description").attr("id");

    localStorage.setItem($time, $plan);
}

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

thisMoment();
storageCheck();
$(".saveBtn").on("click", $savePlan);