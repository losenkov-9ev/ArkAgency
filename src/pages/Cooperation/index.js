import { About } from '../../widgets/About/index.js';
import { TopParallax } from '../../widgets/Top/index.js';

export class Cooperation {
  constructor() {
    this.init();
  }

  init() {
    const topParallaxInstance = new TopParallax(document.querySelector('.top'));
    const aboutInstance = new About({ counterSelector: '.counter-item' });
  }
}
