let index=1;

const moveTo = e => {
    showSlide(index = e)
}
const changeSlide = e => {
    showSlide(index += e)
}

const showSlide = e => {
    const images = document.querySelectorAll('.slider-item');
    const indicators = document.querySelectorAll('.slider-indicators');

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
     indicators[index - 1].style.background = 'rgba(0,0,0,0)';
}

showSlide()