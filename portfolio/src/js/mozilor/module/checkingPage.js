module.exports = () => {
    let href = window.location.href;
    href = href.split('/');
    if (href[href.length - 1] === 'index.html') {
        const slider = require('./slider.js');
    }
}