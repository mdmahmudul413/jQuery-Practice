$(document).ready(function() {
    // load(): to load files in the background
    $(".btn").click(function() {
        $(".moon").load("demo.html");
    });

});