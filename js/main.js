$(document).ready(function() {

	  // nav links smoothscroll
	  $(".nav-link").click(function(e) {
	  e.preventDefault();
	  var target = $(this).attr("href");
	  $('html, body').animate({
	  scrollTop: $(""+target).offset().top
	  }, 2000);
	})

	// first video overlay paly
	$("#green-play").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<script src="https://fast.wistia.com/embed/medias/28jaglq0tq.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_28jaglq0tq videoFoam=true" style="height:100%;position:relative;width:100%">&nbsp;</div></div></div>')
	});

	// close overlay
	$("#close-overlay").click(function(){
		$("#overlay").fadeOut();
	})


	  //  new year
	  now = new Date;
	  theYear=now.getYear();
	  if (theYear < 1900)
	  theYear=theYear+1900
	  $("#date").html(theYear);

}); // end of document function


var nav 	 = document.querySelector('header');
var Win      = window;
var topDiv 	 = document.querySelector('#first-section');
var topOfNav = topDiv.offsetTop;
    
function fixNav() {

	if(window.scrollY >= topOfNav) {
		nav.classList.add('fixed-nav');
		} else if (window.scrollY <= topOfNav) {
		nav.classList.remove('fixed-nav');
		}
	}

	if ( $(window).width() > 769) {
		window.addEventListener('scroll', fixNav);
	};