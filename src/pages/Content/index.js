import { TopParallax } from '../../widgets/Top/index.js';
import { Quiz } from '../../widgets/Quiz/index.js';
import { checkPage } from '../../app/scripts/utils.js';
import { Reviews } from '../../widgets/Reviews/index.js';
import { analyticsFunctions } from '../../widgets/ContentPage/Analytics/Functions/index.js';

export class Content {
  constructor() {
    this.init();
  }

  init() {
    const topParallaxInstance = new TopParallax(document.querySelector('.top'));
    const quizInstance = new Quiz({
      wrapperSelector: '.quiz__box',
      itemSelector: '.quiz__item',
      buttonSelector: '.quiz__item-button',
    });

    if (checkPage('content-stores-page')) {
      const reviewsInstance = new Reviews({ sliderSelector: '.reviews__box' });
    } else if (checkPage('analytics-page')) {
      const analyticsTabsInstance = new analyticsFunctions({
        tabsSelector: '.analyticsFunctions__box',
        startCategory: '.category-a',
      });
    }
  }
}
