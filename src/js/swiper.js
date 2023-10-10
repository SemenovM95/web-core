import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const spacing = 16;

const swiperParams =  {
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: spacing,
    slidesOffsetBefore: spacing,
    slidesOffsetAfter: spacing,
    centeredSlides: true,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    grabCursor: true,
}
const swiper = new Swiper ('.swiper', swiperParams);