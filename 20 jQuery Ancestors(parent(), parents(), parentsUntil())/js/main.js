$(document).ready(function() {
    // parent(): to make change to the emmediate parent
        
        $(".btn1").click(function() {
            $("span").parent().css({
                "color": "red",
                "border": "2px solid red"
            });
        });

    // parents(): to make change to all the parents
        
        // $(".btn2").click(function() {
        //     $("span").parents().css({
        //         "color": "red",
        //         "border": "2px solid red"
        //     });
        // });

    // parents("ul"): to select a specific  parent
        
        // $(".btn3").click(function() {
        //     $("span").parents("ul").css({
        //         "color": "red",
        //         "border": "2px solid red"
        //     });
        // });

    // parents("div"): to select a specific parent
        
        // $(".btn4").click(function() {
        //     $("span").parents("div").css({
        //         "color": "red",
        //         "border": "2px solid red"
        //     });
        // });

    // parentsUntil("div"): selecting parents untill a specific parent
        
        // $(".btn5").click(function() {
        //     $("span").parentsUntil("div").css({
        //         "color": "red",
        //         "border": "2px solid red"
        //     });
        // });

});