module.exports = () => {
    let href = window.location.href;
    href = href.split('/');
    if (href[href.length - 1] === 'index.html') {
        const slider = require('./slider.js');
    }

    const navBar = document.querySelector('.menu');
    switch (href[href.length - 1]) {
        case 'products.html':
            navBar.children[1].firstElementChild.classList.add('menu__item--active');
            break;
        case 'about.html':
            navBar.children[2].firstElementChild.classList.add('menu__item--active');
            break;
        case 'contact.html':
            navBar.children[3].firstElementChild.classList.add('menu__item--active');
            break;
    }
}