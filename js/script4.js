let index4=1;

const moveTo4 = e => {
    showSlide4(index4 = e)
}
const changeSlide4 = e => {
    showSlide4(index4 += e)
}

const showSlide4 = e => {
    const images4 = document.querySelectorAll('.slider-item4');
    const indicators4 = document.querySelectorAll('.slider-indicators4');

    (e > images4.length) ? (index4 = 1) : null;
    (e < 1) ? (index4 = images4.length) : null;

    for (let image4 of images4) {
        image4.style.opacity= '0';
    }
     for (let indicator4 of indicators4) {
        indicator4.style.width = '8px';
        indicator4.style.background = 'rgba(0,0,0,0)';
     }

     images4[index4 - 1].style.opacity = '1';
     indicators4[index4 - 1].style.width = '26px';
     indicator4[index4 - 1].style.background = 'rgba(0,0,0,0)';
}

showSlide4()