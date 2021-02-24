/**
 * check if mobile
 * @returns {Boolean}
 */

$( function(){

	$('.owl-carousel-4').owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		slideSpeed: 100000,
		autoplay:true,
		autoplayTimeout: 20000,
		navText: ["",""],
		dots: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			750:{
				items:1,
			},
			751:{
				items:4,
			}
		}
	});

	jQuery(function (){
		jQuery(window).scroll(function (){
			if (jQuery(this).scrollTop() > 350) {
				$("#descricao ").addClass("active");
			};
		});
	});
	jQuery(function (){
		jQuery(window).scroll(function (){
			if (jQuery(this).scrollTop() > 1150) {
				$("#palestrantes .palest-mobal ").addClass("active");
			};
		});
	});
	jQuery(function (){
		jQuery(window).scroll(function (){
			if (jQuery(this).scrollTop() > 2150) {
				$("#programacao").addClass("active");
			};
		});
	});


	var $doc = $('html, body');
	$('a.scroll-form').click(function() {
	    $doc.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top -200
	    }, 1000);
	    return false;
	});

	var $doc = $('html, body');
	$('a.sroll-menu').click(function() {
		$doc.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top -150
		}, 1000);
		return false;
	});

	jQuery(function () {
		  jQuery(window).scroll(function () {
		    if (jQuery(this).scrollTop() > 1) {
		     $("header").addClass("fixed");
		    } else {
		     $("header").removeClass("fixed");
		    }
		  });
		});

	jQuery(function () {
		  jQuery(window).scroll(function () {
		    if (jQuery(this).scrollTop() > 250) {
		     $(".whats-button").addClass("fixed");
		    } else {
		     $(".whats-button").removeClass("fixed");
		    }
		  });
		});

	jQuery(function () {
		  jQuery(window).scroll(function () {
		    if (jQuery(this).scrollTop() > 3000) {
		    	 $(".whats-button").removeClass("fixed");
		    }
		  });
		});



	// abre - MODAL PORTFOLIO
	$('#palestrantes .palestrantes .item').bind('click', function(){

		var dataImage = $(this).attr("data-image");
		var dataName = $(this).attr("data-name");
		var dataInfo = $(this).attr("data-info");
		var dataText = $(this).attr("data-text");
		var dataFace = $(this).attr("data-face");
		var dataInsta = $(this).attr("data-insta");
		var dataLinkedin = $(this).attr("data-linkedin");

		$.ajax({
			url: '/modal.html',
			success: function (row){
				$('#modal-load').html( row )
				$(".name").append(dataName);
				$(".description").append(dataInfo);
				$(".text-modal").append(dataText);
				$('.image').attr('src', dataImage);
				$('.face').attr('href', dataFace);
				$('.insta').attr('href', dataInsta);
				$('.linkedin').attr('href', dataLinkedin);

				$('body').addClass('no-scroll');
				$('#modal-palestrante').addClass('animated fadeIn').show(0);
				setTimeout(function(){
					$('#modal-palestrante .content-modal').addClass('animated slideInUp').show(0);
				}, 200);

			}
		})

	});

	// fecha - MODAL PORTFOLIO
	$(document).on('click', '#modal-palestrante #close',  function(){
		$('#modal-palestrante .content-modal').removeClass('slideInUp').addClass('slideOutDown');
		setTimeout(function(){
			$('#modal-palestrante .content-modal').hide(0).removeClass('animated slideOutDown');
			$('#modal-palestrante').removeClass('fadeIn').addClass('fadeOut');
			setTimeout(function(){
				$('#modal-palestrante').hide(0).removeClass('animated fadeOut');
				$('body').removeClass('no-scroll');
			}, 200);
		}, 200);
	});

});

$(document).on('click','.button-menu', function() {
	$(this).next('.uls').toggleClass('active');
	$(this).toggleClass('active');
});