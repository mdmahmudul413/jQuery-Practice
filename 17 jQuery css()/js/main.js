$(document).ready(function() {
    // single CSS property
    // $("button").click(function() {
    //     $("p").css("background-color", "red");
    // });


    // multiple CSS property
    $("button").click(function() {
        $("p").css({
            "background-color": "red",
            "padding": "20px",
            "color": "white",
            "font-size": "30px"
        });
    });

});