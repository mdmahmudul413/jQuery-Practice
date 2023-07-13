$(document).ready(function() {
    // children(): to make changes to a childrens

        $(".btn1").click(function() {
            $(".moon").children().css({
                "color": "red",
                "border": "2px solid red"
            });
        });

    // find(): to find childrens/grand childrens/great grand childrens

        $(".btn2").click(function() {
            $(".moon").find("span").css({
                "color": "red",
                "border": "2px solid red"
            });
        });
});