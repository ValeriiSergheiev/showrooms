$(document).ready(function() {
	
	//Mob menu
	$('.mob-menu-btn').click(function(event) {
		event.preventDefault();
		$('.menu').slideToggle('fast');
	});

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.menu').show();
		} else {
			$('.menu').hide();
		}
	});

	//Slider
	$('.home-page-slider').slick({
		infinite: true,
		autoplay: false,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
	});

});