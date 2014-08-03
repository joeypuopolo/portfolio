$(document).ready(function(){
  var divsize = $(".main-title").css("width").replace("px", "");
  var contains_dots = false;

  function adjust_fontsize() {
    //check how many letters in the word
    //
    if($(".main-title").css("width").replace("px", "") < 1100) {
      // only runs when the screen is less than 1100px
      var n = 6;
      

      var maintitle = Math.floor(divsize/n) + "px";
      var dottitle = Math.floor(divsize/16) + "px"
      var scripttitle = Math.floor(divsize/14) + "px";
      var bodytitle = Math.floor(divsize/26) + "px";
      var h2title = Math.floor(divsize/19) +"px";

      $(".main-title").css("font-size", maintitle);
      // $(".script-title").css("font-size", scripttitle);
      console.log(Math.floor(divsize/100));

      if(divsize < 335) {
        $(".dots").html("");
        contains_dots = false;
      } else {
        insert_dots();
      }
      
      $(".jumbotron h2").css("font-size", h2title);

      if(scripttitle.replace("px", "")>26) {
        $(".script-title").css("font-size", scripttitle); 
        $(".dots").css("font-size", scripttitle);
      }

      if(bodytitle.replace("px", "")>14) {
        $(".body-title").css("font-size", bodytitle); 
      } 
      
    }
    

  }


  // Functions to run on load
  adjust_fontsize();
  insert_dots();

  // Functions to run on event
  $(window).resize(function(){
    divsize = $(".main-title").css("width").replace("px", "");
    adjust_fontsize();
    

  });

  function insert_dots() {
    if(contains_dots == false) {
      var dots = "&middot";
      // for (i=0; i < 15; i++) {
      //   dots = dots + "&middot";
      // }
      // $("span.left").html("<strong>" + dots + "</strong>");
      // $("span.right").html("<strong>" + dots + "</strong>");

      dots = "&middot";
      for (i=0; i < 45; i++) {
        dots = dots + "&middot";
      }
      $("span.lower").append("<strong>"+dots+"</strong>");

      contains_dots = true;
    }
  }

  
});

// with "my passion" set in Ubuntu font, 
// the divsize/6 equals the fontsize
// 
// 


