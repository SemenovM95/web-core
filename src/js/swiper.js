import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

let width = window.innerWidth;
const spacing = 16;
const itemWidth = 240;
// При учете отступов, получается слишком маленький множитель на выходе
// судя по всему, он где-то внутри уже учитывает отступы
// такой вариант оказался самым стабильным при ресайзе, но все равно,
// при увеличении ширины вьюпорта отступы между слайдами уменьшаются
// т.е. где-то еще есть какой-то "коэффициент",
// который влияет на расчеты самого Swiper'а
const perView = () => width / itemWidth;

const swiperParams =  {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: perView(),
    spaceBetween: spacing,
    slidesOffsetBefore: spacing,
    slidesOffsetAfter: spacing + 8,
    centeredSlides: true,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    grabCursor: true,
}

const swiper = new Swiper ('.swiper', swiperParams);

window.onresize = () => {
   width = window.innerWidth;
   swiper.params.slidesPerView = perView();
}