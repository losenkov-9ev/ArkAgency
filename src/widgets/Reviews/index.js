import Swiper from 'swiper';
import { reviewsSliderConfig } from '../../app/config/reviewsSliderConfig.js';

export class Reviews {
  constructor({ sliderSelector }) {
    this.sliderSelector = sliderSelector;

    this.init();
  }

  init() {
    const swiper = new Swiper(this.sliderSelector, reviewsSliderConfig);
  }
}
