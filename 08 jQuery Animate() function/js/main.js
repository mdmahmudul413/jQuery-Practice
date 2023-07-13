$(document).ready(function() {

    // animation for moving box 200px

        // $("button").click(function() {
        //     $("div").animate({
        //         left: "200px",
        //     });
        // });


    // multiple changing animation

        // $("button").click(function() {
        //     $("div").animate({
        //         left: "200px",
        //         width: "200px",
        //         height: "200px",
        //         opacity: ".5"
        //     });
        // });


    // we can use += or -= in the property value

        // $("button").click(function() {
        //     $("div").animate({
        //         left: "200px",
        //         width: "+=150px",
        //         height: "+=150px",
        //         opacity: ".5"
        //     });
        // });


        // $("button").click(function() {
        //     $("div").animate({
        //         left: "500px",
        //         width: "-=15px",
        //         height: "-=15px",
        //         opacity: ".5"

        //     });
        // });


    // animation with toggle value 

        // $("button").click(function() {
        //     $("div").animate({
        //         width: "toggle",
        //     });
        // });

        // $("button").click(function() {
        //     $("div").animate({
        //         height: "toggle",

        //     });
        // });


    // animation with variable, multiple css properties, and speed parameters etc 

        $("button").click(function() {
            var moon = $("div");
            moon.animate({
                height: "200px",
                opacity: ".5"
            }, "slow");
            moon.animate({
                width: "200px",
                opacity: ".7"
            }, "slow");
            moon.animate({
                left: "200px"
            }, "slow");

            moon.animate({
                height: "100px",
                opacity: ".5"
            }, "slow");
            moon.animate({
                width: "100px",
                opacity: ".5"
            }, "slow");
            moon.animate({
                left: "0px",
                opacity: "1"
            }, "slow");
        });


    // animation with variable, multiple css properties, and speed parameters etc 

        // $("button").click(function() {
        //     var moon = $("div");
        //     moon.animate({ left: "300px" }, "slow");
        //     moon.animate({ width: "300px" }, "slow");
        //     moon.animate({ fontSize: "50px" }, "slow");
        // });

});