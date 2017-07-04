$(document).ready(function(){

	$('#splash-name').delay(100).fadeIn(50,"linear");
	$('#dot-1').delay(1000).fadeIn(250,"linear");
	$('#dot-2').delay(1250).fadeIn(250,"linear");
	$('#dot-3').delay(1750).fadeIn(250,"linear");
	$('#dot-4').delay(2250).fadeIn(250,"linear");
	$('#splash').delay(2700).fadeOut(300,"linear");

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