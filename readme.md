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

## 03 jQuery Selector

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

## 05 jQuery Hide-Show

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

## 06 jQuery Fade

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
