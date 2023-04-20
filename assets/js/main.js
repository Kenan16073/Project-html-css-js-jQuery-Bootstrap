'use strict'


$(function () {

    $('.cards').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    window.onload=function(){
        $('.slider').slick({
        autoplay:true,
        autoplaySpeed:1500,
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>',
        centerMode:true,
        slidesToShow:3,
        slidesToScroll:1
        });


        $('.slider2').slick({
            autoplay:true,
            autoplaySpeed:1500,
            arrows:true,
            prevArrow:'<button type="button" class="slick-prev"></button>',
            nextArrow:'<button type="button" class="slick-next"></button>',
            centerMode:true,
            slidesToShow:6,
            slidesToScroll:1
            });
      };
      
});

