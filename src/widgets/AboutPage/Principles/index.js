import { About } from '../../About/index.js';

export class AboutPrinciples {
  constructor() {
    this.init();
  }

  init() {
    const aboutInstance = new About({ counterSelector: '.counter-item' });
  }
}
