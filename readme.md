## 01 Get Started

    1. show/hide html Elements

        $("h1").show();

        $("h1").hide();

## 02 jQuery Syntext

    $(document).ready(function() {

        // select by html tag 

            $("h1").hide();

        // select by class

            $(".me").hide();

        // select by id 

            $("#me").hide();
        
    });

## 03 jQuery Selectors

    $(document).ready(function() {

        // select button by id

            $('#btn').click(function() {
                $("h1").hide();
            });

        // select all tags from dom using *

            $('#btn').click(function() {
                $("*").hide();
            });


        // to hide item by itself

            $('#btn').click(function() {
                $("#btn").hide();
            });


        // to hide item by itself using "this"

            $('#btn').click(function() {
                $(this).hide();
            });

        // to hide item by itself using (:)

            $('#btn').click(function() {
                $(":button").hide();
            });


        // to hide h1 tag by itself using this

            $('.moon').click(function() {
                $(this).hide();
            });

        // to select a specific p tag from multiple p tags and hide it by button 

            $('#btn').click(function() {
                $("p.lorem").hide();
            });


        //select by pseudo selectors

            // first child 

                $('#btn').click(function() {
                    $("p:first").hide();
                });

            // last child

                $('#btn').click(function() {
                    $("p:last").hide();
                });


        // to hide the first child of list 1

            $('#btn').click(function() {
                $("li:first").hide();
            });

        // to hide the first child of list 1 and list 2 both

            $('#btn').click(function() {
                $("li:first-child").hide();
            });


        // to hide the last child of list 1 and list 2 both

            $('#btn').click(function() {
                $("li:last-child").hide();
            });

        // to hide the nth child of list 1 and list 2 both

            $('#btn').click(function() {
                $("li:nth-child(2)").hide();
            });


        // to hide a tags

            $('#btn').click(function() {
                $("a").hide();
            });

        // to hide 'a' tag another way 

            $('#btn').click(function() {
                $("[href]").hide();
            });

        // to hide a link using it's attribute  

            $('#btn').click(function() {
                $('[target="_blank"]').hide();
            });

        // another way using backticks

            $('#btn').click(function() {
                $(`[target="_blank"]`).hide();
            });

        // another way

            $('#btn').click(function() {
                $('a[target="_blank"]').hide();
            });


    });

## 04 jQuery Events

    $(document).ready(function() {

        // single click event 
            
            $("p").click(function() {
                $(this).hide();
            });


        // double click event 
            
            $("p").dblclick(function() {
                $(this).hide();
            });


        // mouse enter event 
            
            $("p").mouseenter(function() {
                $(this).hide();
            });


        //alert message in mouse enter event 
            
            $("p").mouseenter(function() {
                alert("Hi");
            });


        //alert message in mouse leave event 
            
            $("p").mouseleave(function() {
                alert("Hi");
            });


        //alert message in mouse hover event 

            $("p").hover(function() {
                alert("Hi");
            },
            function() {
                alert("Bye");
            });


        //focus event
            
            $("input").focus(function() {
                $("input").css("background", "#ccc");
            });


        //on event 
            
            $("p").on("click", function() {
                $("p").hide();
            });


        // multiple events can be done by a single on event

            $("p").on({
                mouseenter: function() {
                    $(this).css("background-color", "red");
                },
                mouseleave: function() {
                    $(this).css("background-color", "green");
                },
                click: function() {
                    $(this).css("background-color", "yellow");
                }
            });

    });

## 05 jQuery Hide-Show functions

    $(document).ready(function() {

        // hide action with click event
            
            $("#hide").click(function() {
                $("p").hide();
            });

        // show action with click event
            
            $("#show").click(function() {
                $("p").show();
            });


        // hide action with click event and slow parameter(speed parameter)
            
            $("#hide").click(function() {
                $("p").hide("slow");
            });

        // show action with click event and slow parameter(speed parameter)
            
            $("#show").click(function() {
                $("p").show("slow");
            });


        // hide action with click event and fast parameter(speed parameter)
            
            $("#hide").click(function() {
                $("p").hide("fast");
            });

        // show action with click event and fast parameter(speed parameter)
            
            $("#show").click(function() {
                $("p").show("fast");
            });

        // hide action with click event using miliseconds parameter
            
            $("#hide").click(function() {
                $("p").hide(1000);
            });

        // show action with click event using miliseconds parameter
            
            $("#show").click(function() {
                $("p").show(1000);
            });

        // toggle action with click event
            
            $("#toggle").click(function() {
                $("p").toggle();
            });

        // toggle action with click event and milisecond parameter
            
            $("#toggle").click(function() {
                $("p").toggle(1000);
            });

    });

## 06 jQuery Fade functionality

    ================================
    ======== CSS for fadeIn ======== 
    ================================

        button {
            display: block;
            margin: auto;
            height: 100px;
            width: 100px;
        }

        ---------------
            fadeIn 
        ---------------

        .box1 {
            display: none;
            height: 100px;
            width: 100px;
            background: red;
            margin: 10px auto;
        }

        .box2 {
            display: none;
            height: 100px;
            width: 100px;
            background: green;
            margin: 10px auto;
        }

        .box3 {
            display: none;
            height: 100px;
            width: 100px;
            background: yellow;
            margin: 10px auto;
        }

        ------------------------------------
             fadeOut, fadeToggle, fadeTo
        ------------------------------------

        .box1 {
            height: 100px;
            width: 100px;
            background: red;
            margin: 10px auto;
        }

        .box2 {
            height: 100px;
            width: 100px;
            background: green;
            margin: 10px auto;
        }

        .box3 {
            height: 100px;
            width: 100px;
            background: yellow;
            margin: 10px auto;
        }


    ================================
                jQuery Codes
    ================================

    $(document).ready(function() {

        // display box1, box2 and box3 with fadeIn 
            
            $("button").click(function() {
                $(".box1").fadeIn();
                $(".box2").fadeIn();
                $(".box3").fadeIn();
            });

        // display box1, box2 and box3 with fadeIn and speed parameter
            
            $("button").click(function() {
                $(".box1").fadeIn();
                $(".box2").fadeIn("slow");
                $(".box3").fadeIn(2000);
            });

        // hide box1, box2 and box3 with fadeOut and speed parameter
            
            $("button").click(function() {
                $(".box1").fadeOut();
                $(".box2").fadeOut("slow");
                $(".box3").fadeOut(2000);
            });

        // hide box1, box2 and box3 with fadeOut and speed parameter
            
            $("button").click(function() {
                $(".box1").fadeToggle();
                $(".box2").fadeToggle("slow");
                $(".box3").fadeToggle(2000);
            });


        // fade the color of box1, box2 and box3 with fadeTo(speed parameter, opacity)
            
            $("button").click(function() {
                $(".box1").fadeTo('slow', 0.3);
                $(".box2").fadeTo('slow', 0.5);
                $(".box3").fadeTo('slow', 0.7);
            });

    });

## 07 jQuery Slide functionality

    ================================
    ======== CSS for fadeIn ======== 
    ================================

    .btn {
        width: 500px;
        height: 30px;
        background: #333;
        color: white;
        margin: auto;
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }


    /* for slideDown action */


    .lorem {
        display: none;
        width: 500px;
        background: #000;
        color: white;
        text-align: center;
        margin: auto;
        height: 100px;
    }


    /* for slideUp action and slideToggle action */

    .lorem {
        width: 500px;
        background: #000;
        color: white;
        text-align: center;
        margin: auto;
        height: 100px;
    }

    ================================
              jQuery Codes
    ================================

    $(document).ready(function() {

        // slideDown action with click event 
            
            $('.btn').click(function() {
                $('.lorem').slideDown();
            });


        // slideDown action with click event and speed parameter
            
            $('.btn').click(function() {
                $('.lorem').slideDown(2000);
            });


        // slideUp action with click event
            
            $('.btn').click(function() {
                $('.lorem').slideUp();
            });


        // slideUp action with click event and speed parameter
            
            $('.btn').click(function() {
                $('.lorem').slideUp(2000);
            });


        // slideToggle action with click event 
            
            $('.btn').click(function() {
                $('.lorem').slideToggle();
            });


        // slideToggle action with click event and speed parameter
            
            $('.btn').click(function() {
                $('.lorem').slideToggle('slow');
            });


    });

## 08 jQuery Animate() function

    $(document).ready(function() {

        // animation for moving box 200px

            $("button").click(function() {
                $("div").animate({
                    left: "200px",
                });
            });


        // multiple changing animation

            $("button").click(function() {
                $("div").animate({
                    left: "200px",
                    width: "200px",
                    height: "200px",
                    opacity: ".5"
                });
            });


        // we can use += or -= in the property value

            $("button").click(function() {
                $("div").animate({
                    left: "200px",
                    width: "+=150px",
                    height: "+=150px",
                    opacity: ".5"
                });
            });


            $("button").click(function() {
                $("div").animate({
                    left: "500px",
                    width: "-=15px",
                    height: "-=15px",
                    opacity: ".5"

                });
            });


        // animation with toggle value 

            $("button").click(function() {
                $("div").animate({
                    width: "toggle",
                });
            });

            $("button").click(function() {
                $("div").animate({
                    height: "toggle",

                });
            });


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

            $("button").click(function() {
                var moon = $("div");
                moon.animate({ left: "300px" }, "slow");
                moon.animate({ width: "300px" }, "slow");
                moon.animate({ fontSize: "50px" }, "slow");
            });

    });

## 09 jQuery stop() function

    $(document).ready(function() {
    
        $(".moon").click(function() {
            $(".lorem").slideDown(2000);
        });

        $("button").click(function() {
            $(".lorem").stop();
        });


    });


## 10 jQuery Callback

    $(document).ready(function() {

        // callback function as a parameter

            $("button").click(function() {
                $("p").hide("slow", function() {
                    alert("Hi");
                });
            });


        // callback function is not a parameter

            $("button").click(function() {
                $("p").hide("slow");
                alert("Hi");

            });

        // There is a huge diference between use callback function as a parameter and without using callback function as a parameter

    });

## 11 jQuery Chaining(Multiple action in a event)

    $(document).ready(function() {

        $('button').click(function() {
            $("p").css("background", "green")
                .slideUp(1000)
                .slideDown(1000)
                .hide(1000);
        });

    });

## 12 jQuery Get Contents

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
    
## 13 jQuery Set Contents

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
## 14 jQuery Add contents(append, prepend, before, after)

    $(document).ready(function() {
        // append(): add text after finishing

            $("button").click(function() {
                $("p").append("<b> Mahmudul</b>");
            });


        // prepend(): add text at starting

            $("button").click(function() {
                $("p").prepend("<b> Mahmudul</b>");
            });

        // before(): add text at starting

            $("button").click(function() {
                $("img").before("<b> Mahmudul</b>");
            });

        // after(): add text after finishing

            $("button").click(function() {
                $("img").after("<b> Mahmudul</b>");
            });
    });

## 15 jQuery Remove contents(remove, empty)

    $(document).ready(function() {
        // remove() action: to remove a section/div

            $("button").click(function() {
                $("#moon").remove();
            });

        // empty() action: to remove all the contents inside a section/div

            $("button").click(function() {
                $("#moon").empty();
            });

    });

## 16 jQuery CSS Classes(add, remove, toggle)

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

## 17 jQuery css() function

    $(document).ready(function() {
        // single CSS property
            
            $("button").click(function() {
                $("p").css("background-color", "red");
            });


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

## 18 jQuery Dimensions(height(), width())

    $(document).ready(function() {

        $("button").click(function() {
            $("div").height(500).width(500);
        });

    });

## 19 jQuery Traversing(Theory)

    jQuery Traversing

        1. Ancestor:Parent, Grand Parent, Great Grand Parent

        2. Descendent:Child, Grand Child, Great Grand Child

        3. Siblings: Brothers & Sisters

## 20 jQuery Ancestors(parent(), parents(), parentsUntil())

    $(document).ready(function() {
    // parent(): to make change to the emmediate parent
        
        $(".btn1").click(function() {
            $("span").parent().css({
                "color": "red",
                "border": "2px solid red"
            });
        });

    // parents(): to make change to all the parents
        
        $(".btn2").click(function() {
            $("span").parents().css({
                "color": "red",
                "border": "2px solid red"
            });
        });

    // parents("ul"): to select a specific  parent
        
        $(".btn3").click(function() {
            $("span").parents("ul").css({
                "color": "red",
                "border": "2px solid red"
            });
        });

    // parents("div"): to select a specific parent
        
        $(".btn4").click(function() {
            $("span").parents("div").css({
                "color": "red",
                "border": "2px solid red"
            });
        });

    // parentsUntil("div"): selecting parents untill a specific parent
        
        $(".btn5").click(function() {
            $("span").parentsUntil("div").css({
                "color": "red",
                "border": "2px solid red"
            });
        });

});
## 21 jQuery Descendants(children())

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

## 22 jQuery Siblings

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

## 23 jQuery Filtering

    $(document).ready(function() {

        // first( ):to select the first item
            
            $("div").first().css("background", "yellow");


        // last( ): to select the last item
            
            $("div").last().css("background", "yellow");


        // eq( ) is used to change property using index number
            
            $(".hi p").eq(2).css("background", "yellow");


        // filter( ) is used to change property through filtering class
            
            $("p").filter(".intro").css("background", "yellow");

        // not( ) is used to change property through filtering the specific class. alternative to filter()
            
            $(".hi p").not(".intro").css("background", "yellow");


    });

## 24 jQuery AJAX(load())

    $(document).ready(function() {
        // load(): to load files in the background

            $(".btn").click(function() {
                $(".moon").load("demo.html");
            });

    });