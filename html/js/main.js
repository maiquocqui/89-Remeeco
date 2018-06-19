'use strict';

$(document).ready(function () {

    // Murad Landing
    var datacountdown = $('#time-countdown').attr('data-countdown');
    $('#time-countdown').countdown(datacountdown, function (event) {
        $(this).html(event.strftime('<div class="number">%d<span>Ngày<span></div>:<div class="number">%H<span>Giờ<span></div>:<div class="number">%M<span>Phút<span></div>:<div class="number">%S<span>Giây<span></div>'));
    });

    // WOW JS INIT
    new WOW({
        offset: 0
    }).init();

    // SCROLL TO FIXED
    // $('header').scrollToFixed({
    //     zIndex: 1000,
    // });

    // HEADER SCRIPT
    if ($(window).width() < 1200) {
        $('.search').insertAfter('.menu-logo');
        $('.language').insertAfter('.menu');
    }
    // $(window).on('resize', function() {
    //     if ($(window).width() < 1200) {
    //         $('.search').insertAfter('.menu-logo');
    //     }
    // });
    // MENU
    $('.btn-showmenu').click(function () {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
        $('html').css('overflow', 'hidden');
    });
    $('.btn-closemenu').click(function () {
        $('.menu').removeClass('open');
        $('html').css('overflow', 'auto');
    });
    $('.overlay').click(function () {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        $('html').css('overflow', 'auto');
    });
    $('.btn-showsub').click(function () {
        $(this).siblings('.sub').slideToggle(300);
        $(this).siblings('.mega').slideToggle(300);
    });
    // END-MENU

    // DATE PICKER
    $('.datepicker').datepicker();

    // TOOLTIP INIT
    $('[data-toggle="tooltip"]').tooltip();

    // SCROLL FUNCTION
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $('.up').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    // JQUERY COUNTER
    $(".counter").countimator({
        duration: 1000
    });

    // BREADCRUMB PAGE NAME
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    // RESPONSIVE TAB INIT
    $('.responsive-tab').responsiveTabs({
        startCollapsed: 'accordion'
    });

    // SHOW HIDDEN CONTENT
    $('.btn-showdetail').click(function () {
        $(this).css('display', 'none');
        $('.product-content').addClass('open');
        $('.btn-hidedetail').css('display', 'block');
    });
    $('.btn-hidedetail').click(function () {
        $(this).css('display', 'none');
        $('.product-content').removeClass('open');
        $('.btn-showdetail').css('display', 'block');
    });

    // CAREER
    $('.btn-apply').click(function () {
        $('.apply-frm').slideToggle(300);
    });

    // CAREER
    $('.job .job-title').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.job-content').slideUp(500);
        } else {
            $('.job').removeClass('active');
            $('.job').find('.job-content').slideUp(500);
            $(this).parent().addClass('active');
            $(this).parent().find('.job-content').slideDown(500);
        }
    });

    // FAQ
    $('.faq .faq-title').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.faq-content').slideUp(300);
        } else {
            $('.faq').removeClass('active');
            $('.faq').find('.faq-content').slideUp(300);
            $(this).parent().addClass('active');
            $(this).parent().find('.faq-content').slideDown(300);
        }
    });

    // HOME BANNER
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        dots: false,
        fade: false,
        infinite: false
    });

    // PROJECT SLIDE
    $('.modal').on('shown.bs.modal', function (e) {
        $('.project-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.project-nav'
        });
        $('.project-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.project-slide',
            dots: false,
            arrows: true,
            centerMode: false,
            focusOnSelect: true
        });
        // $('.project-slide-wrap').delay(3000).fadeIn(300);
    });

    // PARTNER SLICK
    $('.partner-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: true,
        infinite: true
    });

    // INPUT NUMBER
    $('.btn-spin').click(function () {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);
    });

    // PARALLAX
    $('.parallax').parallax();
});
//# sourceMappingURL=main.js.map
