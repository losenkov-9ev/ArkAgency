import { About } from '../../widgets/About/index.js';
import { FAQ } from '../../widgets/FAQ/index.js';

import { FAQConfig } from '../../app/config/FAQconfig.js';
import { aboutCobfig } from '../../app/config/aboutConfig.js';

export class Single {
  constructor() {
    this.init();
  }

  init() {
    const FAQInstance = new FAQ(FAQConfig);
    const aboutInstance = new About(aboutCobfig);
  }
}
