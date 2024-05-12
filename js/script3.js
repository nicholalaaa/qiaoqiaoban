let index3=1;

const moveTo3 = e => {
    showSlide3(index3 = e)
}
const changeSlide3 = e => {
    showSlide3(index3 += e)
}

const showSlide3 = e => {
    const images3 = document.querySelectorAll('.slider-item3');
    const indicators3 = document.querySelectorAll('.slider-indicators3');

    (e > images3.length) ? (index3 = 1) : null;
    (e < 1) ? (index3 = images3.length) : null;

    for (let image3 of images3) {
        image3.style.opacity= '0';
    }
     for (let indicator3 of indicators3) {
        indicator3.style.width = '8px';
        indicator3.style.background = 'rgba(0,0,0,0)';
     }

     images3[index3 - 1].style.opacity = '1';
     indicators3[index3 - 1].style.width = '26px';
     indicators3[index3 - 1].style.background = 'rgba(0,0,0,0)';
}

showSlide3()