import { stopPageScroll } from '../../static/js/utils.js';

export class Search {
  constructor(options) {
    const { searchSelector, searchClearSelector, dropdownSelector } = options;

    this.$searchWrapper = document.querySelector(searchSelector);
    this.$bg = document.querySelector('.search-bg');
    this.$search = this.$searchWrapper?.querySelector('input');
    this.$dropdown = this.$searchWrapper?.querySelector(dropdownSelector);
    this.$clear = this.$searchWrapper?.querySelector(searchClearSelector);

    if (!this.$searchWrapper || !this.$search || !this.$dropdown || !this.$clear || !this.$bg) {
      throw new Error('One or more required elements are missing in the DOM');
    }

    this.selectors = options;

    this.initListeners();
  }

  initListeners() {
    this.$search.addEventListener('input', (e) => this.handleInput(e));
    this.$search.addEventListener('focusin', () => this.toggleDropdown(true));
    this.$search.addEventListener('focusout', () => this.toggleDropdown(false));
    this.$searchWrapper.addEventListener('click', (e) => this.handleClick(e));
  }

  handleInput() {
    this.toggleClearButton(Boolean(this.$search.value));
  }

  handleClick(event) {
    const { searchClearSelector, searchButtonSelector } = this.selectors;

    if (event.target.closest(searchClearSelector)) {
      this.clearSearch();
    } else if (event.target.closest(searchButtonSelector)) {
      this.performSearch();
    }
  }

  toggleClearButton(isActive) {
    this.$clear.classList.toggle('active', isActive);
  }

  toggleDropdown(isOpen) {
    this.$searchWrapper.classList.toggle('dropdown-opened', isOpen);
    isOpen ? this.showBackground() : this.hideBackground();
  }

  showBackground() {
    this.$bg.style.display = 'block';
    stopPageScroll(true);

    setTimeout(() => this.$bg.classList.add('opened'), 0);
  }

  hideBackground() {
    this.$bg.classList.remove('opened');
    this.$bg.addEventListener('transitionend', this.onBackgroundTransitionEnd());
  }

  onBackgroundTransitionEnd() {
    this.$bg.style.display = 'none';
    stopPageScroll(false);

    this.$bg.removeEventListener('transitionend', this.onBackgroundTransitionEnd);
  }

  clearSearch() {
    this.$search.value = '';
    this.toggleClearButton(false);
    this.closeDropdown();
  }

  performSearch() {
    // Логика выполнения поиска
    this.closeDropdown();
  }
}
