
// let slideIndex = 1;

// showSlides(slideIndex);

// function plusSlides(n) {
// 	showSlides(slideIndex += n);
// }

// function showSlides(n) {
// 	let i;

// 	let slides = document.getElementsByClassName('corusel');

// 	if (n > slides.length) {
// 		slideIndex = 1;
// 	}

// 	if (n < 1) {
// 		slideIndex = slides.length;
// 	}

// 	for(i = 0; i < slides.length; i++) {
// 		slides[i].style.display = 'none';
// 	}

// 	slides[slideIndex-1].style.display = 'block';
// }

new WOW().init();

$(document).ready(function(){
	$('.slides').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		speed: 1000,
		dots: true,
		arrows: false,
		pauseOnFocus: true,
		pauseOnDotsHover: true
		// responsive: [
		// 	{
		// 		breakpoint: 500,
		// 		settings: "unslick"
		// 	}
		// ] 
	});



	$('a[href^="#"]').click(function() {
		let target = $(this).attr('href');
		if(target === '#services') {
			//scrollTop: $(target).offset().top-120
			$('html, body').animate({
				scrollTop: $(target).offset().top-230
			}, 1000);
		}
		else if(target === '#our-project') {
			$('html, body').animate({
				scrollTop: $(target).offset().top-150
			}, 1000);
		}

		else {
			$('html, body').animate({
				scrollTop: $(target).offset().top-90
			}, 1000);
		}

		
	});

	let menuPos,
		winPos;

		menuPos = $('.nav').offset().top;

		$(window).scroll(function() {
			winPos = $(window).scrollTop();

			if(winPos >= menuPos) {
				$('.nav').addClass('fixed');
			}
			else{
				$('.nav').removeClass('fixed');
			}
		});

	// добавление блока	

	// let openBox = $('.btn-project').click(function(box) {
	// 	let elem = $('#dis-none');
 //        console.log()

	// 	if(elem.css('display') === 'none') {
	// 		elem.css('display', 'block');
	// 	} else {
	// 		elem.css('display', 'none');
	// 	}
	// });


	let openBox = document.getElementById('btn-project');

	openBox.onclick = function (){
		console.log('ppd');
    	let className = disnone.className;
    	if( className.indexOf(' expanded') == -1 ){
      	 	className += ' expanded';
   		}
    	else {
        	className = className.replace(' expanded', '');
   	 	}
    	disnone.className = className;
    	return false;
	};

	// Бургер меню

	$('.burger').click(function() {
		console.log('privet');
		$('#mobile-menu').toggleClass('burger-active');
	});

	$(window).click(function() {
		if ($('#mobile-menu').css('right') === '0px') {
			$('#mobile-menu').removeClass('burger-active');
		}
	});


	// форма регистрации


	$('.feed-b').click(function() {
		let t = $(this), 
			name = t.parent().parent().find('input[name="name"]'), 
			surname = t.parent().parent().find('input[name="surname"]'),
			mail = t.parent().parent().find('input[name="e-mail"]'),
			errors = false;
		name.removeClass('error');
		if (name.val().length < 1) {
			name.addClass('error');
			errors = true;
		}
		if (surname.val().length < 1) {
			surname.addClass('error');
			errors = true;
		}
		if (mail.val().length < 1) {
			mail.addClass('error');
			errors = true;
		}
		// if (adults.val().length < 1) {
		// 	adults.addClass('error');
		// 	errors = true;
		// }

		// if (!errors) {
		// 	// $('.loading').show();
		// 	// $.post('/system/sendmail.html', {
		// 	// 	name: name.val(),
		// 	// 	surname: surname.val(),
		// 	// 	mail: mail.val(),
		// 	// }, 
		// 	function(result) {
		// 		console.log(result);
		// 		if (result == "ok") {
		// 			// $('.loading').hide();
		// 			$('.rahmet').show();
		// 			$('.boxshadow').show();
		// 			surname.val('');
		// 			name.val('');
		// 			mail.val('');
		// 		} else {
		// 			// $('.loading').hide();
		// 			// $('.popup').show();
		// 		}
		// 	}
		// }

		if(!errors) {
			$('.rahmet').show();
			$('.boxshadow').show();
			surname.val('');
		    name.val('');
			mail.val('');
			$('.text-are').val('');
		}
		return false;
	});
	$('.boxshadow').click(function() {
		$(this).hide();
		$('.rahmet').hide();
		$('.header-form').hide();
	});

	$('.closeR').click(function() {
		// $(this).hide();
		$('.rahmet').hide();
		$('.boxshadow').hide();
		$('.header-form').hide();
	})


});
