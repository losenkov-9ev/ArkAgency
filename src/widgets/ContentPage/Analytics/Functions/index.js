import mixitup from 'mixitup';

export class analyticsFunctions {
  constructor({ tabsSelector, startCategory }) {
    this.tabsSelector = tabsSelector;
    this.startCategory = startCategory;

    this.init();
  }

  init() {
    const mixer = mixitup(this.tabsSelector);
    mixer.filter(this.startCategory);
  }
}
