// объявление переменных
const slides = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider-controls__dot");
var currentSlide = 0;

// логика для слайдера
function nextSlide() {
    goToSlide(currentSlide + 1);
    dotsClick(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slider__item';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__item slider__item--current';
}

// клик по точкам
function dotsClick(n) {
    slides[currentSlide].className = 'slider__item';
    currentSlide = (n+slides.length - 1)%slides.length;
    slides[currentSlide].className = 'slider__item slider__item--current';
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = "slider-controls__dot";
    }
    dots[currentSlide].className = "slider-controls__dot slider-controls__dot--current";
}