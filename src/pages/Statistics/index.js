import { TopParallax } from '../../widgets/Top/index.js';

export class Statistics {
  constructor() {
    this.init();
  }

  init() {
    const topParallaxInstance = new TopParallax(document.querySelector('.top'));
  }
}
