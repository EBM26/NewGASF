$(document).ready(function() {

	  // nav links smoothscroll
	  $(".nav-link, .home-link").click(function(e) {
	  e.preventDefault();
	  var target = $(this).attr("href");
	  $('html, body').animate({
	  scrollTop: $(""+target).offset().top
	  }, 2000);
	})

	// main video overlay play
	$("#green-play, #mobile-green-play").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<script src="https://fast.wistia.com/embed/medias/28jaglq0tq.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_28jaglq0tq videoFoam=true" style="height:100%;position:relative;width:100%">&nbsp;</div></div></div>')
	});

	// nutrition facts overlay 
	$("#nutrition-facts").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<div class="center"><img src="images/nutrition-facts.jpg" alt="nutrition facts"></div>')
	});

	// taste test video overlay 
	$("#video-div").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<script src="https://fast.wistia.com/embed/medias/5uont5qshk.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_5uont5qshk videoFoam=true" style="height:100%;position:relative;width:100%">&nbsp;</div></div></div>')
	});

	// review 1 video overlay 
	$("#review1").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<script src="https://fast.wistia.com/embed/medias/q6wf9yjzp8.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_q6wf9yjzp8 videoFoam=true" style="height:100%;position:relative;width:100%">&nbsp;</div></div></div>')
	});

	// review 2 video overlay 
	$("#review2").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<script src="https://fast.wistia.com/embed/medias/6floxwzyhb.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.21% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_6floxwzyhb videoFoam=true" style="height:100%;position:relative;width:100%">&nbsp;</div></div></div>')
	});

	// review 3 video overlay 
	$("#review3").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<script src="https://fast.wistia.com/embed/medias/q6wf9yjzp8.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_q6wf9yjzp8 videoFoam=true" style="height:100%;position:relative;width:100%">&nbsp;</div></div></div>')
	});

	// close overlay
	$("#close-overlay").click(function(){
		$("#overlay").fadeOut();
	})

	$(".faq-div").click(function(){

		if(!$(this).hasClass("active")) {
			$(".faq-div").removeClass("active")
			$(".text-box").slideUp("slow");
			$(".arrow-icon").removeClass("transition");
			$(this).addClass("active");
			$(this).find(".text-box").slideDown("slow")
			$(this).find(".arrow-icon").addClass("transition");
			}

		    else if($(this).hasClass("active")) {
				$(this).removeClass("active")
				$(".text-box").slideUp("slow");
				$(".arrow-icon").removeClass("transition");
			  }

	}) // click function

	  //  new year
	  now = new Date;
	  theYear=now.getYear();
	  if (theYear < 1900)
	  theYear=theYear+1900
	  $("#date").html(theYear);

	  // SLIDER
var slider = function() {

	// Set time delay of slider
	var delay = 5000;

	// Set variables
	var numImages = $('.img').length;
	var previousImage = numImages;
	var currentImage = 1;
	var nextImage = 2;
	var previewHover = false;

	// Find width of container div
	var sliderWidth = $("#slider").width() + 2;


	// Create as many navigation dots as there are pictures
	for (var i = 1; i <= numImages; i++) {
		$('#dots').find('ul').append($('<li class="dot ' + i + '""></li>'));
	}

	// Set initial position of images
	var resetImages = function() {
		$('.img').css({"left": sliderWidth+"px"});
		$('.img').first().css({"left": "0px"});
		$('.1').addClass("active");
	};
	resetImages();

	// Slide to next image
	var slideNextImageLeft = function() {
		$('.image-' + nextImage).css({"left": sliderWidth+"px"});
		$('.image-' + currentImage).animate({left: sliderWidth * -1}, 1000);
		$('.image-' + nextImage).animate({left: "0px"}, 1000);
		currentImage = nextImage;
		increaseImages();
	};

	// Slide to the previous image
	var slidePreviousImageRight = function() {
		$('.image-' + previousImage).css({"left": (sliderWidth * -1)+"px"});
		$('.image-' + currentImage).animate({left: sliderWidth}, 1000);
		$('.image-' + previousImage).animate({left: "0px"}, 1000);
		currentImage = previousImage;
		increaseImages();
	};

	// Shift which images are next and previous
	var increaseImages = function() {
		if(currentImage === numImages) {
			nextImage = 1;
			previousImage = currentImage - 1;
		} else {
			nextImage = currentImage + 1;
			if(currentImage === 1) {
				previousImage = numImages;
			} else {
				previousImage = currentImage - 1;
			}
		}
		// Change dots status
		$('#dots').find('li').removeClass("active");
		$('#dots').find('.' + currentImage).addClass("active");
	};

	// Set initial slider interval
	// moveImages = setInterval(function() {
	// 	slideNextImageLeft();
	// }, delay);

	// When a navigation dot is clicked
	$('.dot').click(function() {
		buttonPressed = $('li').index(this) + 1;
		if(buttonPressed !== currentImage) {
			clearInterval(moveImages);
			moveImages = setInterval(function() {
				slidePreviousImageRight();
			}, delay);
			if(currentImage < buttonPressed) {
				nextImage = buttonPressed;
				slidePreviousImageRight();
			} else {
				previousImage = buttonPressed;
				lideNextImageLeft();
			}
		}
	});

};

	slider();

/// hamburger rotate code
	function MenuOpen() {	  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).addClass( "mobile-nav-button__line--1");
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).addClass( "mobile-nav-button__line--2");  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).addClass( "mobile-nav-button__line--3");
		$('.mobile-menu').slideDown(); 
		return false;
	}

	function MenuClose() {	  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).removeClass( "mobile-nav-button__line--1");
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).removeClass( "mobile-nav-button__line--2");  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).removeClass( "mobile-nav-button__line--3");
		$('.mobile-menu').slideUp();
		return false;
	}

	$('.mobile-nav-button').click(function() { 
		return (this.tog = !this.tog) ? MenuOpen() : MenuClose();
	});

}); // end of document function

// adding box shadow when navbar scrolls down
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