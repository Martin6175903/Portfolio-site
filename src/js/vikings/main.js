$(function() {

    $('.menu__btn').on('click',function() {
        $('.menu__list').toggleClass('menu__list--active')
    });


    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="../../img/vikings/arrow-left.png" alt="Slider-arrow"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="../../img/vikings/arrow-right.png" alt="Slider-arrow"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        focusOnSelect: true,
        arrows: false
    });


});