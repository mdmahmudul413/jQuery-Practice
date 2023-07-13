$(document).ready(function() {
    // addClass() function
        
        $(".btn1").click(function() {
            $("p").addClass("lorem moon");
        });


    // removeClass() function 
        
        $(".btn2").click(function() {
            $("#div1").removeClass("hi");
        });

    // toggleClass() function 
        
        $(".btn3").click(function() {
            $("#div2").toggleClass("hi1");
        });

});