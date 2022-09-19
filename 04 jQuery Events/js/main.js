$(document).ready(function() {

    // single click event 
    // $("p").click(function() {
    //     $(this).hide();
    // });


    // double click event 
    // $("p").dblclick(function() {
    //     $(this).hide();
    // });


    // mouse enter event 
    // $("p").mouseenter(function() {
    //     $(this).hide();
    // });


    //alert message in mouse enter event 
    // $("p").mouseenter(function() {
    //     alert("Hi");
    // });


    //alert message in mouse leave event 
    // $("p").mouseleave(function() {
    //     alert("Hi");
    // });


    //alert message in mouse hover event 
    // $("p").hover(function() {
    //         alert("Hi");
    //     },
    //     function() {
    //         alert("Bye");
    //     });


    //focus event 
    // $("input").focus(function() {
    //     $("input").css("background", "#ccc");
    // });


    //on event 
    // $("p").on("click", function() {
    //     $("p").hide();
    // });


    // multiple events can be done by a single on event
    $("p").on({
        mouseenter: function() {
            $(this).css("background-color", "red");
        },
        mouseleave: function() {
            $(this).css("background-color", "green");
        },
        click: function() {
            $(this).css("background-color", "yellow");
        }
    });




});