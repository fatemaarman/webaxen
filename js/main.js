(function($) {
	"use strict";

	// Preloader
	$(window).on('load', function() {
		$('.preloader-wrapper').fadeOut()
	});

	// For fixed Nav
    let header_area = $("#header-area");

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            header_area.removeClass('fix-nav');
        } else {
            header_area.addClass('fix-nav');
        }
    });

    // Responsive navigation
	$('.navigation').meanmenu({
		meanMenuContainer: '.responsive-nav',
		meanScreenWidth: "991"
	});
	
	// Magific popup
	$('.video-btn').magnificPopup({type: 'iframe'});

	// Counter up call
	$('.counter-title').counterUp({
		delay: 10,
		time: 1000
	});

    // Testimonial carousel active
	$(".testimonial-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		items: 1,
		autoplayHoverPause: true,
		touchDrag: true,
		pullDrag: true,
		rewind: true,
		dots: false,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
		mouseDrag: true,

	});

	// Year and month prcing subscription button
	let month = $('.month');
	let year = $('.year');
	let price_type = $('.single-price .price-type');

	year.on('click', function(e) {
		e.preventDefault();
		year.addClass('current').siblings().removeClass('current');
		$('.personal-year-price .price').text('$659');
		$('.developer-year-price .price').text('$1099');
		$('.business-year-price .price').text('$3299');
		price_type.text('yearly');
	});

	month.on('click', function(e) {
		e.preventDefault();
		month.addClass('current').siblings().removeClass('current');
		$('.personal-month-price .price').text('$69');
		$('.developer-month-price .price').text('$119');
		$('.business-month-price .price').text('$299');
		price_type.text('monthly');
	});

	// Testimonial carousel active
	$(".client-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		items: 6,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		rewind: true,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}

	});

	// ScrollUp
	$.scrollUp({
		scrollText: '<i class="ion-ios-arrow-thin-up"></i>',
	});

})(jQuery);		