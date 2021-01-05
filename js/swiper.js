const myImageSlider = new Swiper('.image-slider', {
	pagination: {
		el: '.image-slider__pagination',
		clickable: true,
		dynamicBullets: false,
	},


	simulateTouch: true,

	touchRatio: 1,

	touchAngle: 45,

	grabCursor: false,

	slideToClickedSlide: false,

	hashNavigation: false,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown:true,
	},

	autoHeight: false,
	
	slidesPerView: 1,

	watchOverflow: false,

	slidesPerGroup: 1,

	slidesPerColumn: 1,

	loop: true,

	freemode: false,

	autoplay: {
		delay: 7000,

		stopOnLastSlide: false,

		disableOnInteraction: false,
	},

	speed: 2000,

	effect: 'fade',

	breakpoints: {
		320: {},
		567: {}
	}
});

const myReviewsSlider = new Swiper('.reviews-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	spaceBetween: 10,
	simulateTouch: true,

	touchRatio: 1,

	touchAngle: 45,

	grabCursor: false,

	slideToClickedSlide: false,

	hashNavigation: false,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown:true,
	},

	autoHeight: false,
	
	slidesPerView: 2,

	watchOverflow: false,

	slidesPerGroup: 1,

	slidesPerColumn: 1,

	loop: false,

	freemode: false,

	autoplay: false,

	speed: 2000,

	effect: 'slide',

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		
		992: {
			slidesPerView: 2,
		}
	}
});



//При наведении мыши остановится
let sliderBlock = document.querySelector('.image-slider');
sliderBlock.addEventListener("mouseleave", function () {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 3000;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener('mouseenter', function () {
	myImageSlider.autoplay.stop();
});