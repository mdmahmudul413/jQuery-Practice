$(document).ready(function() {

    // siblings() : change all the siblings of h2
    $(".btn1").click(function() {

        $("h2").siblings().css({
            "color": "red",
            "border": "2px solid red",
            "background": "rgb(228, 228, 228)"
        });

    });

    // siblings("p") : change only the p siblings of h2
    $(".btn2").click(function() {

        $("h2").siblings("p").css({
            "color": "red",
            "border": "2px solid red",
            "background": "rgb(228, 228, 228)"
        });

    });

    // siblings("span") : change only the span siblings of h2
    $(".btn3").click(function() {

        $("h2").siblings("span").css({
            "color": "red",
            "border": "2px solid red",
            "background": "rgb(228, 228, 228)"
        });

    });


    // next() : change only the next siblings
    $(".btn4").click(function() {

        $("h2").next().css({
            "color": "red",
            "border": "2px solid red",
            "background": "rgb(228, 228, 228)"
        });

    });

    // nextAll() : change all the next siblings
    $(".btn5").click(function() {

        $("h2").nextAll().css({
            "color": "red",
            "border": "2px solid red",
            "background": "rgb(228, 228, 228)"
        });

    });
    // nextUntil() : change the next siblings untill specific sibling
    $(".btn6").click(function() {

        $("h2").nextUntil("a").css({
            "color": "red",
            "border": "2px solid red",
            "background": "rgb(228, 228, 228)"
        });

    });

    // prev() : change only the prev sibling
    $(".btn7").click(function() {

        $("h2").prev().css({
            "color": "red",
            "border": "2px solid red",
            "background": "rgb(228, 228, 228)"
        });

    });

    // prevAll() : change all the prev siblings
    $(".btn8").click(function() {

        $("h2").prevAll().css({
            "color": "red",
            "border": "2px solid red",
            "background": "rgb(228, 228, 228)"
        });

    });
    // prevUntil() : change the prev siblings untill specific sibling
    $(".btn9").click(function() {

        $("h2").prevUntil("a").css({
            "color": "red",
            "border": "2px solid red",
            "background": "rgb(228, 228, 228)"
        });

    });





});