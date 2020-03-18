console.log("Привет, Табы");
console.log("Привет, Модальное окно");
console.log("Привет, Header");



$(function() {
	$(".navigation__link").on("click", function(e) {

        e.preventDefault();

        var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$('.navigation__link').removeClass('active');
		$(this).toggleClass('active');
/* 
        $("html, body").animate({
            scrollTop: currentBlockOffset - 90
		}, 1000); */
		
		if(window.matchMedia('(max-width: 992px)').matches){
			$('.navigation__list').hide();
		}
		if(window.matchMedia('(max-width: 992px)').matches){
			$("html, body").animate({
				scrollTop: currentBlockOffset - 90
			}, 1000);
		}else{
			$("html, body").animate({
				scrollTop: currentBlockOffset
			}, 1000);
		}

    });
  });


$(function() {
  $('.hamburger__btn').click(function() {
    $('.navigation__list').slideToggle(500);
    $('.navigation__list').css('display', 'flex');
  });
});


/* Слайдер Work */

$(function() {	
	var slideNow = 1;
	var slideCount = $('.sliderwprapper').children().length;

	var slideTime = 5000;
	var navBtn = $('.mini-slide');

	navBtn.click(function () {
		navBtn = $(this).index();
		$('.active__slide').removeClass('active__slide');
		$(this).toggleClass('active__slide');
    if (navBtn + 1 != slideNow) {
			var translateWidth = -$('.viewport').width()	* (navBtn);	
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});

			slideNow = navBtn + 1;
    }
    
  });


	// setInterval(nextSlide, slideTime);

	$('.slider-arrow-next').click(nextSlide);
	$('.slider-arrow-prev').click(prevSlide);

	function nextSlide() {
		if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
			$('.sliderwprapper').css({
				'transform': 'translate(0,0)',
				'-o-transform': 'translate(0,0)',
				'-webkit-transform': 'translate(0,0)'
			});

			slideNow = 1;
		} else {
			var translateWidth = -$('.viewport').width()	* (slideNow);	
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			
			slideNow++;
		}
		$('.active__slide').removeClass('active__slide');
        $(".mini-slide").eq(slideNow-1).addClass("active__slide");
		
	}
	function prevSlide() {
		if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
			var translateWidth = -$('.viewport').width() * (slideCount - 1);
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNow = slideCount;
		} else {
			var translateWidth = -$('.viewport').width()	* (slideNow - 2);
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNow--;
		}

		$('.active__slide').removeClass('active__slide');
        $(".mini-slide").eq(slideNow-1).addClass("active__slide");
	}
});	

/* Слайдер Отзывы Центральный */

$(function() {	
	var slideNowTestimonials = 1;
	var slideCountTestimonials = $('.sliderwrapper__testimonials').children().length;

	var slideTime = 5000;

	$('.slider-testimonials-next').click(nextSlideTestimonials);
	$('.slider-testimonials-prev').click(prevSlideTestimonials);
	

	/* Отзывы Центральный */

	function nextSlideTestimonials() {
		if (slideNowTestimonials == slideCountTestimonials || slideNowTestimonials <=0 || slideNowTestimonials > slideCountTestimonials) {
			$('.sliderwrapper__testimonials').css({
				'transform': 'translate(0,0)',
				'-o-transform': 'translate(0,0)',
				'-webkit-transform': 'translate(0,0)'
			});

			slideNowTestimonials = 1;
		} else {
			var translateWidth = -$('.viewport__testimonials').width()	* (slideNowTestimonials);	
			$('.sliderwrapper__testimonials').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			
			slideNowTestimonials++;
		}
		
	}
	function prevSlideTestimonials() {
		if (slideNowTestimonials == 1 || slideNowTestimonials <=0 || slideNowTestimonials > slideCountTestimonials) {
			var translateWidth = -$('.viewport__testimonials').width() * (slideCountTestimonials - 1);
			$('.sliderwrapper__testimonials').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNowTestimonials = slideCountTestimonials;
		} else {
			var translateWidth = -$('.viewport__testimonials').width()	* (slideNowTestimonials - 2);
			$('.sliderwrapper__testimonials').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNowTestimonials--;
		}

	}
});	

/* Отзывы Левый */

$(function() {	
	var slideNowLeftTestimonials = 1;
	var slideCountLeftTestimonials = $('.sliderwrapper__left-testimonials').children().length;

	$('.slider-testimonials-next').click(nextSlideLeftTestimonials);
	$('.slider-testimonials-prev').click(prevSlideLeftTestimonials);


	function nextSlideLeftTestimonials() {
		if (slideNowLeftTestimonials == slideCountLeftTestimonials || slideNowLeftTestimonials <=0 || slideNowLeftTestimonials > slideCountLeftTestimonials) {
			$('.sliderwrapper__left-testimonials').css({
				'transform': 'translate(0,0)',
				'-o-transform': 'translate(0,0)',
				'-webkit-transform': 'translate(0,0)'
			});

			slideNowLeftTestimonials = 1;
		} else {
			var translateWidth = -$('.viewport__left-testimonials').width()	* (slideNowLeftTestimonials);	
			$('.sliderwrapper__left-testimonials').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			
			slideNowLeftTestimonials++;
		}
		
	}
	function prevSlideLeftTestimonials() {
		if (slideNowLeftTestimonials == 1 || slideNowLeftTestimonials <=0 || slideNowLeftTestimonials > slideCountLeftTestimonials) {
			var translateWidth = -$('.viewport__left-testimonials').width() * (slideCountLeftTestimonials - 1);
			$('.sliderwrapper__left-testimonials').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNowLeftTestimonials = slideCountLeftTestimonials;
		} else {
			var translateWidth = -$('.viewport__left-testimonials').width()	* (slideNowLeftTestimonials - 2);
			$('.sliderwrapper__left-testimonials').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNowLeftTestimonials--;
		}

	}
});	
	/* Отзывы Правый */

$(function() {	
	var slideNowRightTestimonials = 1;
	var slideCountRightTestimonials = $('.sliderwrapper__right-testimonials').children().length;

	$('.slider-testimonials-next').click(nextSlideRightTestimonials);
	$('.slider-testimonials-prev').click(prevSlideRightTestimonials);

	function nextSlideRightTestimonials() {
		if (slideNowRightTestimonials == slideCountRightTestimonials || slideNowRightTestimonials <=0 || slideNowRightTestimonials > slideCountRightTestimonials) {
			$('.sliderwrapper__right-testimonials').css({
				'transform': 'translate(0,0)',
				'-o-transform': 'translate(0,0)',
				'-webkit-transform': 'translate(0,0)'
			});

			slideNowRightTestimonials = 1;
		} else {
			var translateWidth = -$('.viewport__right-testimonials').width()	* (slideNowRightTestimonials);	
			$('.sliderwrapper__right-testimonials').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			
			slideNowRightTestimonials++;
		}
		
	}
	function prevSlideRightTestimonials() {
		if (slideNowRightTestimonials == 1 || slideNowRightTestimonials <=0 || slideNowRightTestimonials > slideCountRightTestimonials) {
			var translateWidth = -$('.viewport__right-testimonials').width() * (slideCountRightTestimonials - 1);
			$('.sliderwrapper__right-testimonials').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNowRightTestimonials = slideCountRightTestimonials;
		} else {
			var translateWidth = -$('.viewport__right-testimonials').width()	* (slideNowRightTestimonials - 2);
			$('.sliderwrapper__right-testimonials').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNowRightTestimonials--;
		}

	}
});


