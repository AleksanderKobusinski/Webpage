$(document).ready(function()
{
  var once = 0;
  var width = $("#iMac").width();
  var height = $("#iMac").height();
  $("#iMacBox").css('height', height);
  $("#iMac").css('left', "-="+width/2);
  $("#iMacJS").css('left', "-="+width/2);
  $("#iMacCSS").css('left', "-="+width/2);
  $("#iMacHTML").css('left', "-="+width/2);
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.menu').toggleClass('menu-open');
	});
  $(window).resize(function ()
  {
    once = 0;
    width = $("#iMac").width();
    height = $("#iMac").height();
    $("#iMacBox").css('height', height);
    $("#iMac").css('left', "50%");
    $("#iMacJS").css('left', "50%");
    $("#iMacCSS").css('left', "50%");
    $("#iMacHTML").css('left', "50%");
    $("#iMac").css('left', "-="+width/2);
    $("#iMacJS").css('left', "-="+width/2);
    $("#iMacCSS").css('left', "-="+width/2);
    $("#iMacHTML").css('left', "-="+width/2);
  });

    $("#men1").hover(function()
    {
      if (once == 0) {
        $("#iMacHTML").animate({left: "+="+width/4}, 400)
        $("#iMacJS").animate({left: "+="+width/4}, 400)
        $("#iMacCSS").animate({left: "+="+width/4}, 400)
        $("#iMac").animate({left: "+="+width/4}, 400, function(){
          $("#iMacCSS").animate({left: "-="+width/6}, 400)
          $("#iMacJS").animate({left: "-="+width*2/6}, 400)
          $("#iMacHTML").animate({left: "-="+width/2}, 400)
        })
        once = 1;
      }
    },function()
    {
      // $("#iMac").stop(false, true)
      // $("#iMacCSS").stop(false, true)
      // $("#iMacJS").stop(false, true)
      // $("#iMacHTML").stop(false, true)
      // $("#iMacHTML").animate({left: "+="+width/4}, 400)
      // $("#iMacJS").animate({left: "+="+width*1/12}, 400)
      // $("#iMacCSS").animate({left: "-="+width*1/12}, 400)
      // $("#iMac").animate({left: "-="+width/4}, 400)
    });
});
