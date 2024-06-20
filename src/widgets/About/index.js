import { CountUp } from 'countup.js';

export class About {
  constructor({ counterSelector }) {
    this.$coutnerItems = document.querySelectorAll(counterSelector);
    this.init();
  }

  init() {
    const createOptions = ($el, index) => ({
      $el,
      count: Number($el.getAttribute('data-counter-value')),
      properties: {
        enableScrollSpy: true,
        duration: index + 1,
      },
    });

    this.counter([...this.$coutnerItems].map(createOptions));
  }

  counter(arrayOfProperties) {
    window.addEventListener('load', () => {
      arrayOfProperties.forEach((obj) => {
        new CountUp(obj.$el, obj.count, obj.properties);
      });
    });
  }
}
