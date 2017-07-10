$(document).ready(function(){

	$('#splash-name').delay(2000).fadeIn(500,"linear");
	
	$('#dot-1').addClass("animated-dot");
	setTimeout(function(){
	
	$('#dot-2').addClass("animated-dot");
	}, 1200);

	setTimeout(function(){
	
	$('#dot-3').addClass("animated-dot");
	}, 500);

	setTimeout(function(){
	
	$('#dot-4').addClass("animated-dot");
	}, 1700);

	setTimeout(function(){
	
	$('#splash-name').addClass("animated-name");
	}, 2300);
	
	$('#splash').delay(5000).fadeOut(500,"linear");


	

	$('.vegan-burger').on('click', function(){

		if ($('.vegan-burger').hasClass('closed')) {

		$('#menu').fadeIn(500,"linear");
		$('.cw-name').fadeOut(500,"linear");
		$('.vegan-burger').removeClass('closed');

		} else {

			$('#menu').fadeOut(500,"linear");
			$('.cw-name').fadeIn(500,"linear");
			$('.vegan-burger').addClass('closed');

		}
	});

});