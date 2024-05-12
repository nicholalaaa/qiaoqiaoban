let index=1;

const moveTo4 = e => {
    showSlide4(index = e)
}
const changeSlide4 = e => {
    showSlide4(index += e)
}

const showSlide4 = e => {
    const images = document.querySelectorAll('.slider-item4');
    const indicators = document.querySelectorAll('.slider-indicators4');

    (e > images.length) ? (index = 1) : null;
    (e < 1) ? (index = images.length) : null;

    for (let image of images) {
        image.style.opacity= '0';
    }
     for (let indicator of indicators) {
        indicator.style.width = '8px';
        indicator.style.background = 'rgba(0,0,0,0)';
     }

     images[index - 1].style.opacity = '1';
     indicators[index - 1].style.width = '26px';
     indicator[index - 1].style.background = 'rgba(0,0,0,0)';
}

showSlide4()