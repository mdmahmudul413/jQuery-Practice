## 01 Show/Hide

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
