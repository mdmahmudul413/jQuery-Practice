$(document).ready(function() {

    // callback function as a parameter
    $("button").click(function() {
        $("p").hide("slow", function() {
            alert("Hi");
        });
    });


    // callback function is not a parameter
    // $("button").click(function() {
    //     $("p").hide("slow");
    //     alert("Hi");

    // });

    // There is a huge diference between use callback function as a parameter and without using callback function as a parameter

});