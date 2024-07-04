import { SolutionTabs } from '../../widgets/SolutionTabs/index.js';

export class Solutions {
  constructor() {
    this.init();
  }

  init() {
    const tabsInstance = new SolutionTabs({
      tabsWrapper: document.querySelector('.solutionTabs__wrapper'),
    });
  }
}
