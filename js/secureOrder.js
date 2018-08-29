$(document).ready(function() {

	// Adding the class of Active
	$('.order-check').click(function() {
		if(!$(this).hasClass("active")) {
			$(".order-check").removeClass("active");
			$(".white-check").addClass("hide");
			$(this).addClass("active");
			$(this).find(".white-check").removeClass("hide");
			$('html, body').animate({
			     scrollTop: $("#billing-info").offset().top
			}, 1000);
		}
		if($("#try-package .check-div").hasClass("active")){
				$(".offer-text").slideUp()
				$("#try-offer").slideDown()
		}

		if($("#best-package .check-div").hasClass("active")){
				$(".offer-text").slideUp()
				$("#cont-offer").slideDown()

		}

		if($("#month-package .check-div").hasClass("active")){
				$(".offer-text").slideUp()
		}

	});

	// more info dropdown on mobile
	$(".open-info").click(function(){

		if(!$(this).hasClass("active-info")) {
			$(".open-info").removeClass("active-info")
			$(".showList").slideUp("slow");
			$(".arrow-icon").removeClass("transition");
			$(this).addClass("active-info");
			$(this).find(".showList").slideDown("slow")
			$(this).find(".arrow-icon").addClass("transition");
			}

		    else if($(this).hasClass("active-info")) {
				$(this).removeClass("active-info")
				$(".showList").slideUp("slow");
				$(".arrow-icon").removeClass("transition");
			  }

	}) // click function


	  //  new year
	  now = new Date;
	  theYear=now.getYear();
	  if (theYear < 1900)
	  theYear=theYear+1900
	  $("#date").html(theYear);


}); // end of document function

