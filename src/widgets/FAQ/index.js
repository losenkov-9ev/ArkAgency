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

    if ($target) {
      const $content = $target.querySelector('.faq__item-content');

      if ($target.classList.contains(this.activeClass)) {
        $content.style.opacity = 0;

        setTimeout(() => {
          $target.classList.remove(this.activeClass);
        }, 200);
      } else {
        $target.classList.add(this.activeClass);

        setTimeout(() => {
          $content.style.opacity = 1;
        }, 200);
      }
    }
  }
}
