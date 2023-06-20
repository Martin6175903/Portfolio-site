const href = window.location.href.split('/');

if (href[href.length - 1] === 'index.html' || href[href.length - 1] === 'about.html') {
    if (window.innerWidth <= 992 && window.innerWidth > 768) {
        let brandImages = document.querySelector('.brands__images');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        div1.classList.add('brands__items');
        div2.classList.add('brands__items');

        let lenBrandsImages = brandImages.children.length;

        for (let i = 0; i < lenBrandsImages; i++) {
            if (i < 4) {
                div1.append(brandImages.children[i - i]);
            } else {
                div2.append(brandImages.children[i - i]);
            }
        }
        brandImages.append(div1, div2);
    }

    if (window.innerWidth <= 768 && window.innerWidth > 480) {
        let brandImages = document.querySelector('.brands__images');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        div1.classList.add('brands__items');
        div2.classList.add('brands__items');
        div3.classList.add('brands__items');

        let lenBrandsImages = brandImages.children.length;

        for (let i = 0; i < lenBrandsImages; i++) {
            if (i < 3) {
                div1.append(brandImages.children[i - i]);
            } else if (i < 5){
                div2.append(brandImages.children[i - i]);
            } else {
                div3.append(brandImages.children[i - i]);
            }
        }
        brandImages.append(div1, div2, div3);
    }

    if (window.innerWidth <= 480) {
        let brandImages = document.querySelector('.brands__images');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        div1.classList.add('brands__items');
        div2.classList.add('brands__items');
        div3.classList.add('brands__items');
        div4.classList.add('brands__items');

        let lenBrandsImages = brandImages.children.length;

        for (let i = 0; i < lenBrandsImages; i++) {
            if (i < 2) {
                div1.append(brandImages.children[i - i]);
            } else if (i < 4){
                div2.append(brandImages.children[i - i]);
            } else if (i < 6) {
                div3.append(brandImages.children[i - i]);
            } else {
                div4.append(brandImages.children[i - i]);
            }
        }
        brandImages.append(div1, div2, div3, div4);
    }
}

