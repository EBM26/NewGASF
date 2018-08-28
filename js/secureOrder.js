$(document).ready(function() {

	// Adding the class of Active
	$('.check-div').click(function() {
		if(!$(this).hasClass("active")) {
			$(".check-div").removeClass("active");
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

	})


	  //  new year
	  now = new Date;
	  theYear=now.getYear();
	  if (theYear < 1900)
	  theYear=theYear+1900
	  $("#date").html(theYear);


}); // end of document function

