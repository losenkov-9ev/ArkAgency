import { Navigation, Pagination } from 'swiper/modules';

export const reviewsSliderConfig = {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.reviews__controls-pagination',
  },
  navigation: {
    nextEl: '.reviews__controls-arrow--next',
    prevEl: '.reviews__controls-arrow--prev',
  },
  slidesPerView: 3,
  spaceBetween: 20,
};
