$(function() {

    $('#my-menu').mmenu({
        extensions:['widescreen','theme-black','effect-menu-slide','pagedim-black'],
        navbar:{
            title:'<img src ="img/logo-1.svg" alt="Салон краси Мітлер">'
        },
        offCanvas:{
            position: 'right'
        }
    });
    
    var api =$('#my-menu').data('mmenu');
    api.bind('opened',function(){
        $('.hamburger').addClass('is-active');
    }).bind('closed',function(){
        $('.hamburger').removeClass('is-active');
    });
    
    $('.carousel-services').owlCarousel({
        nav: true,
        smartSpeed:700,
        navText:['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0:{
                items:1
            },
            800: {
                items:2,
                slideBy: 2,
            },
            1100: {
                items:3,
                slideBy: 3,
            }
        }
    });
    
    $('.carousel-services-content').equalHeights();

    function carouselService(){
        $('.carousel-services-item').each(function(){
            var ths  = $(this),
                thsh = ths.find('.carousel-services-content').outerHeight();
                ths.find('.carousel-services-image').css('min-height',thsh);
        });
    }
    carouselService();
    
    $('.carousel-services-content .h3').each(function(){
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });
    
//     $('section .h2').each(function(){
//        var ths = $(this);
//        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
//    });
    
    //design select
   //$('select').selectize({});
    
    
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: false,
        dots: true,
        autoplay: true,
        //autoplayTimeout: 4000,
        autoHeight: true
    });
    
    
    $('.partners').owlCarousel({
        loop: true,
        items: 4,
        smartSpeed: 700,
        nav: true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        dots: false,
        responsiveClass:true,
        responsive: {
             0:{
                items:1
            },
            768: {
                items:2,
                slideBy: 2,
            },
            992: {
                items:3,
                slideBy: 3,
            },
            1200:{
                items: 4,
                slideBy: 4,
            }
            
        }
    });
    
    
    $(window).scroll(function(){
        if($(this).scrollTop() > $(this).height()){
            $('.top').addClass('active');
        }else{
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function(){
        $('html , body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });
    
    /*Preloader*/
    $(window).on('load', function (){
       $('.preloader').delay(1000).fadeOut('slow'); 
    });
    
    /*Modal window*/
    $('.popup-btn').on('click',function(){
        $('.header-popup').fadeIn('slow');
    });
    $('.header-popup-close').on('click', function(){
        $('.header-popup').fadeOut('slow');
    });
    //E-mail Ajax Send
	/*$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('.active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
                $(th).find('.success').removeClass('.active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});*/
    
});





















































