export class FAQ {
  constructor({ boxSelector, itemSelector, activeClass }) {
    this.$faq = document.querySelector(boxSelector);

    this.itemSelector = itemSelector;
    this.activeClass = activeClass;

    this.initListeners();
  }

  initListeners() {
    this.$faq.addEventListener('click', this.toggleItem.bind(this));
  }

  toggleItem(e) {
    const $target = e.target.closest(this.itemSelector);
    $target && $target.classList.toggle(this.activeClass);
  }
}
