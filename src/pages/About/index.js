import { AboutPrinciples } from '../../widgets/AboutPage/Principles/index.js';
import { AboutCompetencies } from '../../widgets/AboutPage/Competencies/index.js';

export class AboutPage {
  constructor() {
    this.init();
  }

  init() {
    const aboutPrinciplesInstance = new AboutPrinciples();
    const aboutCompetenciesInstance = new AboutCompetencies();
  }
}
