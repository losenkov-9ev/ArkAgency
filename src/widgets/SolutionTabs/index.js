import mixitup from 'mixitup';

export class SolutionTabs {
  constructor({ tabsWrapper }) {
    this.tabsWrapper = tabsWrapper;
    this.init();
  }

  init() {
    const mixer = mixitup(this.tabsWrapper);
  }
}
