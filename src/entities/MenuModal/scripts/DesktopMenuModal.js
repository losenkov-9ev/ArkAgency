import { MenuModalHandler } from './MenuModalHandler.js';
import { stopPageScroll } from '../../../app/scripts/utils.js';

export class DesktopMenuModal extends MenuModalHandler {
  constructor(options) {
    super(options);
    this.active = false;

    this.toggleModal = this.toggleModal.bind(this);
    this.modalLeaveListener = this.modalLeaveListener.bind(this);
    this.menuListener = this.menuListener.bind(this);
  }

  init() {
    this.initDesktopListeners();
    this.active = true;
  }

  initDesktopListeners() {
    this.enableHoverListeners();
    this.$menu.addEventListener('mouseover', this.menuListener);
  }

  enableHoverListeners() {
    this.$modal.addEventListener('mouseleave', this.modalLeaveListener);
    this.$modalChildrenItems.forEach((item) => {
      if (item) {
        item.addEventListener('mouseenter', this.clearCloseTimeout);
        item.addEventListener('mouseleave', this.modalLeaveListener);
      }
    });
  }

  disableHoverListeners() {
    this.$modal.removeEventListener('mouseleave', this.modalLeaveListener);
    this.$modalChildrenItems.forEach((item) => {
      if (item) {
        item.removeEventListener('mouseenter', this.clearCloseTimeout);
        item.removeEventListener('mouseleave', this.modalLeaveListener);
      }
    });
  }

  destroyDesktopListeners() {
    this.disableHoverListeners();
    this.$menu.removeEventListener('mouseover', this.menuListener);
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
        this.enableHoverListeners(); // Ensure listeners are re-initialized on open
      });
    } else {
      this.$modal.classList.remove('opened');
      this.$modal.addEventListener('transitionend', onClose);
      this.disableHoverListeners(); // Remove listeners only for modal-specific elements
    }
  }

  modalLeaveListener() {
    this.closeTimeout = setTimeout(() => {
      this.toggleModal({
        isOpen: false,
      });
    }, 200);
  }

  destroy() {
    this.destroyDesktopListeners();
    this.active = false;
  }
}
