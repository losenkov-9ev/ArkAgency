import { TopParallax } from '../../widgets/Top/index.js';
import { Reviews } from '../../widgets/Reviews/index.js';
import { Quiz } from '../../widgets/Quiz/index.js';

export class Rates {
  constructor() {
    this.init();
  }

  init() {
    const topParallaxInstance = new TopParallax(document.querySelector('.top--rates'));
    const reviewsInstance = new Reviews({ sliderSelector: '.reviews__box' });
    const quizInstance = new Quiz({
      wrapperSelector: '.quiz__box',
      itemSelector: '.quiz__item',
      buttonSelector: '.quiz__item-button',
    });
  }
}
