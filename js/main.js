$(document).ready(function(){

	$('#splash-name').delay(2000).fadeIn(500,"linear");
	$('#dot-1').delay(0).fadeIn(500,"linear");
	$('#dot-2').delay(1500).fadeIn(500,"linear");
	$('#dot-3').delay(500).fadeIn(500,"linear");
	$('#dot-4').delay(1000).fadeIn(500,"linear");
	$('#splash').delay(5000).fadeOut(500,"linear");

	$('.vegan-burger').on('click', function(){

		if ($('.vegan-burger').hasClass('closed')) {

		$('#menu').removeClass('menu-hide');
		$('.vegan-burger').removeClass('closed');

		} else {

			$('#menu').addClass('menu-hide');
			$('.vegan-burger').addClass('closed');

		}
	});

});