module.exports =  {
    burgerOpen: false,
    burger() {
        let burger = document.querySelector('.burger');
        let menu = document.querySelector('.menu');

        burger.onclick = function (event) {

            burger.classList.toggle('modal__menu');

            if (module.exports.burgerOpen) {
                menu.style.top = '-60%';
                module.exports.burgerOpen = false;
                document.body.style.overflow = 'visible';
            } else {
                menu.style.top = '50%';
                module.exports.burgerOpen = true;
                document.body.style.overflow = 'hidden';
            }
        }
    }
}


