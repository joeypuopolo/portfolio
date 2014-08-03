$(document).ready(function() {

    function adjust_fontsize() {
        // fontsize = Math.floor(divsize/12);
        $(".jumbotron").css("font-size", Math.floor(divsize / 12) + "px");
        // $(".tech-stuff").each(function() {
        //     var newfont_size = Math.floor($(this).css("width").replace("px", "") * 0.19);
        //     console.log(newfont_size);
        //     $(this).css("font-size", newfont_size);
        // });

        console.log(Math.floor(divsize / 40));
    }

    function float_bubbles() {
        // var bubbles = [];
        $(".tech-stuff").each(function() {
            var rand = Math.floor((Math.random() * 6000) + 1000);
            var width = $("#technical-stuff-holder").css("width").replace("px", "");
            var rand_position = Math.floor((Math.random() * width) + 0);
            var this_width = $(this).css("width").replace("px", "");

            if (rand_position < this_width) {
                // Makes sure the bubbles stay inside the div
                $(this).css("left", rand_position + this_width);
            } else if (rand_position > this_width) {
                $(this).css("left", rand_position - this_width);
            } else {
                $(this).css("left", rand_position);
            }

            console.log(rand);
            console.log(rand_position);

            $(this).animate({
                top: "0"
            }, rand);
        });
        // console.log(bubbles);

    }

    function snap_bubbles() {
        $(".tech-stuff").each(function() {
            var _top = $(this).data("top") + "px";
            var _left = $(this).data("left") + "px";
            $(this).animate({
                top: _top,
                left: _left
            }, 500);
        });
    }

    function jqFloat_bubbles() {
        $(".tech-stuff").each(function() {
            $(this).jqFloat({
                width: 100,
                height: 100,
                speed: 1000,
                minHeight: 300
            });
        });
    }
    // Functions to run on load

    var divsize = $(".jumbotron").css("width").replace("px", "");
    adjust_fontsize();
    float_bubbles();

    $(".tech-stuff").click(function() {
        snap_bubbles();
    });

    // jqFloat_bubbles();

    // Functions to run on event
    $(window).resize(function() {
        divsize = $(".main-title").css("width").replace("px", "");
        adjust_fontsize();
    });




});

// with "my passion" set in Ubuntu font, 
// the divsize/6 equals the fontsize
// 
//
