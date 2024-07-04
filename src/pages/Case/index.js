import { TopParallax } from '../../widgets/Top/index.js';

export class Case {
  constructor() {
    this.init();
  }

  init() {
    const topParallaxInstance = new TopParallax(document.querySelector('.top--case'));
  }
}
