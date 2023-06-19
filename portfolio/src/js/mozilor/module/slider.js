import $ from 'jquery';
import 'slick-carousel';

$('.innovation__items').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="slick-prev"><img src="../../img/MainPage/innovation/arrow-left-disabled.png" alt="Disabled Arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../../img/MainPage/innovation/arrow-right.png" alt="Arrow"></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


document.querySelector('.innovation__items').addEventListener('click', function (event) {
    let target = event.target.closest('button');
    if (target === null || target.tagName !== 'BUTTON') return;

    let slickPrev = document.querySelector('.slick-prev');
    let slickNext = document.querySelector('.slick-next');

    if (target.classList.contains('slick-disabled') && target.classList.contains('slick-next')) {
        target.firstElementChild.src = '../../img/MainPage/innovation/arrow-right-disabled.png';
        slickPrev.firstElementChild.src = '../../img/MainPage/innovation/arrow-left.png';
    }

    if (target.classList.contains('slick-disabled') && target.classList.contains('slick-prev')) {
        target.firstElementChild.src = '../../img/MainPage/innovation/arrow-left-disabled.png';
        slickNext.firstElementChild.src = '../../img/MainPage/innovation/arrow-right.png';
    }
})