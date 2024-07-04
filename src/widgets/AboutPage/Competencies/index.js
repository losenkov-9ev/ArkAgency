import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export class AboutCompetencies {
  constructor() {
    this.slider = null;
    this.$menu = document.querySelector('.aboutCompetencies__menu');

    this.init();
  }

  init() {
    this.slider = new Swiper('.aboutCompetencies__slider', {
      modules: [Navigation, Pagination],
      spaceBetween: 20,
      pagination: {
        el: '.aboutCompetencies__controls-pagination',
      },
      navigation: {
        nextEl: '.aboutCompetencies__controls-arrow--next',
        prevEl: '.aboutCompetencies__controls-arrow--prev',
      },
    });

    this.$menu.addEventListener('click', this.menuListener);
  }

  menuListener = (e) => {
    const $target = e.target.closest('.aboutCompetencies__menu-item:not(.active)');

    if ($target) {
      const $currentActive = this.$menu.querySelector('.aboutCompetencies__menu-item.active');
      $currentActive.classList.remove('active');

      $target.classList.add('active');
      this.changeSlide($target);
    }
  };

  changeSlide = ($el) => {
    const slideIndex = Number($el.getAttribute('data-slide')) - 1;
    this.slider.slideTo(slideIndex);
  };
}
