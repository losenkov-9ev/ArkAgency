import { modalInstance } from '../../app/app.js';

export class Quiz {
  constructor({ wrapperSelector, itemSelector, buttonSelector }) {
    this.$wrapper = document.querySelector(wrapperSelector);
    this.itemSelector = itemSelector;
    this.buttonSelector = buttonSelector;

    this.tabsCount = [...this.$wrapper.querySelectorAll(this.itemSelector)].length;

    this.init();
  }

  init() {
    this.initListeners();
  }

  initListeners() {
    this.$wrapper.addEventListener('click', this.buttonListener);
  }

  buttonListener = (e) => {
    const $target = e.target.closest(this.buttonSelector);
    if ($target) {
      const $item = e.target.closest(this.itemSelector);
      const itemPosition = Number($item.getAttribute('data-quiz-item'));

      this.changeTab(itemPosition, $item);
    }
  };

  changeTab = (itemPosition, $item) => {
    if (itemPosition !== this.tabsCount) {
      $item.classList.remove('active');
      setTimeout(() => {
        $item.style.display = 'none';

        const $nextItem = this.$wrapper.querySelector(`[data-quiz-item="${itemPosition + 1}"]`);

        $nextItem.style.display = 'block';
        $nextItem.classList.add('active');
      }, 400);
    } else {
      modalInstance.toggleModal('form-modal', true);
    }
  };
}
