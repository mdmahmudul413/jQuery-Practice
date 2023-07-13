$(document).ready(function() {
    
    $(".moon").click(function() {
        $(".lorem").slideDown(2000);
    });

    $("button").click(function() {
        $(".lorem").stop();
    });


});