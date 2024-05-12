let index7=1;

const moveTo7 = e => {
    showSlide7(index7 = e)
}
const changeSlide7 = e => {
    showSlide7(index7 += e)
}

const showSlide7 = e => {
    const images7 = document.querySelectorAll('.slider-item7');
    const indicators7 = document.querySelectorAll('.slider-indicators7');

    (e > images7.length) ? (index7 = 1) : null;
    (e < 1) ? (index7 = images7.length) : null;

    for (let image7 of images7) {
        image7.style.opacity= '0';
    }
     for (let indicator7 of indicators7) {
        indicator7.style.width = '8px';
        indicator7.style.background = 'rgba(0,0,0,0)';
     }

     images7[index7 - 1].style.opacity = '1';
     indicators7[index7 - 1].style.width = '26px';
     indicators7[index7 - 1].style.background = 'rgba(0,0,0,0)';
}

showSlide7()