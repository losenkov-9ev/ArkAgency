import { FAQ } from '../../widgets/FAQ/index.js';
import { TopParallax } from '../../widgets/Top/index.js';

import { FAQConfig } from '../../app/config/FAQconfig.js';

export class Implementation {
  constructor() {
    this.init();
  }

  init() {
    const FAQInstance = new FAQ(FAQConfig);
    const topParallaxInstance = new TopParallax(document.querySelector('.top'));
  }
}
