import { MenuModalHandler } from './MenuModalHandler.js';
import { stopPageScroll } from '../../../app/scripts/utils.js';

export class MobileMenuModal extends MenuModalHandler {
  constructor(options) {
    super(options);

    this.$headerMobile = this.$modal.querySelector('.headerMobile');
    this.active = false;

    this.toggleModal = this.toggleModal.bind(this);
    this.modalListener = this.modalListener.bind(this);
    this.menuListener = this.menuListener.bind(this);
  }

  init() {
    this.initMobileListeners();
    this.active = true;
  }

  toggleModal({ isOpen = true, $element = null } = {}) {
    this.isOpen = isOpen;

    const onClose = () => {
      this.$modal.style.display = 'none';
      this.moveChildren();
      this.$modal.removeEventListener('transitionend', onClose);
    };

    stopPageScroll(this.isOpen);

    if (this.isOpen && $element) {
      this.$modal.style.display = 'block';
      requestAnimationFrame(() => {
        this.$modal.classList.add('opened');
        this.moveChildren($element);
      });
    } else {
      this.$modal.classList.remove('opened');
      this.$modal.addEventListener('transitionend', onClose);
    }
  }

  initMobileListeners() {
    this.$modal.addEventListener('click', this.modalListener);
    this.$menu.addEventListener('click', this.menuListener);
  }

  destroyMobileListeners() {
    this.$modal.removeEventListener('click', this.modalListener);
    this.$menu.removeEventListener('click', this.menuListener);
  }

  destroy() {
    this.destroyMobileListeners();
    this.active = false;
  }
}
