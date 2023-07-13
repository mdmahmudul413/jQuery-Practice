$(document).ready(function() {
    // set content
    // text()

        $("#btn1").click(function() {
            $("#lorem1").text("Hi");
        });

    // html()

        $("#btn2").click(function() {
            $("#lorem2").html("<h1>Assalamualaikum</h1>");
        });

    // val()

        $("#btn3").click(function() {
            $("#lorem3").val("Enter Your Name Please");
        });

    // set attribute
    // attr()

        $("#btn4").click(function() {
            $("#lorem4").attr("href", "http://www.youtube.com");
        });

});