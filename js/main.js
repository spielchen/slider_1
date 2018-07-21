/* Делаем собственный слайдер на jQuery */
$(function() {
	var SlideNow = 1;
	/*найти все дочерние элементы от слайдера*/
	var SlideCount = $('.sliderwprapper').children().length;

	/*для кнопок внизу навигации*/

	var navBtn = $('.slide-nav');
	navBtn.click(function() {
		navBtn = $(this).index();
		$('.active').removeClass('active');
		$(this).toggleClass('active');
		if (navBtn + 1 != SlideNow) {
			var translateWidth = -$('.viewport').width() * (navBtn);
			$('.sliderwprapper').css({
				'transform' : 'translate('+translateWidth+'px,0)',
				'-o-transform' : 'translate('+translateWidth+'px,0)',
				'-webkit-transform' : 'translate('+translateWidth+'px,0)'
			});
			SlideNow = navBtn +1;
		}
	});


	/*безконечный слайдер
	var SlideTime = 2000;
	setInterval(nextSlide, SlideTime);*/
	
	/*управление кнорками справо.влево*/
	$('.btn-next').click(nextSlide);
	$('.btn-prev').click(prevSlide);

function nextSlide() {
		if (SlideNow == SlideCount || SlideNow <=0 || SlideNow > SlideCount) {
			$('.sliderwprapper').css({
				'transform' : 'translate(0,0)',
				'-o-transform' : 'translate(0,0)',
				'-webkit-transform' : 'translate(0,0)'
			});
			SlideNow = 1;
		} else {
			var translateWidth = -$('.viewport').width() * (SlideNow);
			$('.sliderwprapper').css({
				'transform' : 'translate('+translateWidth+'px,0)',
				'-o-transform' : 'translate('+translateWidth+'px,0)',
				'-webkit-transform' : 'translate('+translateWidth+'px,0)'
			});
			SlideNow ++;
		}
	}

function prevSlide() {
		if (SlideNow == 1 || SlideNow <=0 || SlideNow > SlideCount) {
			var translateWidth = -$('.viewport').width() * (SlideCount -1);
			$('.sliderwprapper').css({
				'transform' : 'translate('+translateWidth+'px,0)',
				'-o-transform' : 'translate('+translateWidth+'px,0)',
				'-webkit-transform' : 'translate('+translateWidth+'px,0)'
			});
			SlideNow = SlideCount;
		} else {
			var translateWidth = -$('.viewport').width() * (SlideNow -2);
			$('.sliderwprapper').css({
				'transform' : 'translate('+translateWidth+'px,0)',
				'-o-transform' : 'translate('+translateWidth+'px,0)',
				'-webkit-transform' : 'translate('+translateWidth+'px,0)'
			});
			SlideNow --;
		}
	}
});