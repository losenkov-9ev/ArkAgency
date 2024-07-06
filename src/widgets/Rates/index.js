import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export class RatesSlider {
  constructor(options) {
    this.init();
  }

  init() {
    const slider = new Swiper('.rates__box.swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      modules: [Navigation, Pagination],

      pagination: {
        el: '.rates__controls-pagination',
      },
      navigation: {
        nextEl: '.rates__controls-arrow--next',
        prevEl: '.rates__controls-arrow--prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1366: {
          slidesPerView: 3,
        },
      },
    });
  }
}
