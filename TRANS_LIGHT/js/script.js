$(document).ready(function(){

	$('.main-slider').slick({
	//   setting-name: setting-value
	slidesToShow: 2,
	slidesToScroll: 1
	});

	// $('.slider-2').slick({
	
	// });

	$('.modal-open').on('click', function () {
		$('.modal').fadeIn();
	});
	
	$('.modal-close').on('click', function () {
		$('.modal').fadeOut();
	});

  });