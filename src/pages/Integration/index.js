import { About } from '../../widgets/About/index.js';
import { FAQ } from '../../widgets/FAQ/index.js';
import { TopParallax } from '../../widgets/Top/index.js';

import { FAQConfig } from '../../app/config/FAQconfig.js';
import { aboutCobfig } from '../../app/config/aboutConfig.js';

export class Integration {
  constructor() {
    this.init();
  }

  init() {
    const FAQInstance = new FAQ(FAQConfig);
    const topParallaxInstance = new TopParallax(document.querySelector('.top'));
    const aboutInstance = new About(aboutCobfig);
  }
}
