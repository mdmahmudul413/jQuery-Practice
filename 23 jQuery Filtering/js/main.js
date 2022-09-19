$(document).ready(function() {

    // first( ):to select the first item
    // $("div").first().css("background", "yellow");


    // last( ): to select the last item
    // $("div").last().css("background", "yellow");


    // eq( ) is used to change property using index number
    // $(".hi p").eq(2).css("background", "yellow");


    // filter( ) is used to change property through filtering class
    // $("p").filter(".intro").css("background", "yellow");

    // not( ) is used to change property through filtering the specific class. alternative to filter()
    $(".hi p").not(".intro").css("background", "yellow");


});