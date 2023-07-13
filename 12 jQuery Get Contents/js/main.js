$(document).ready(function() {

    // get contents 
    // text()
        
        $("#btn1").click(function() {
            alert("Text: " + $("#lorem").text());
        });

    // html()
        
        $("#btn2").click(function() {
            alert("HTML: " + $("#lorem").html());
        });

    // val()
        
        $("#btn3").click(function() {
            alert($("#moon").val());
        });

    // get attribute
    // attr(): to see attribute
        
        $("#btn4").click(function() {
            alert($("#link").attr("href"));
        });

});