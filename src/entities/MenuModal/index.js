import { stopPageScroll } from '../../static/js/utils.js';

export class MenuModal {
  constructor({ modalSelector, menuSelector, closeModalSelector, openModalSelector }) {
    this.$modal = document.querySelector(modalSelector);
    this.$menu = document.querySelector(menuSelector);

    this.closeModalSelector = closeModalSelector;
    this.openModalSelector = openModalSelector;

    this.$modalChildrenItems = this.$modal.querySelectorAll('.menuModalChildren');

    this.initListeners();
  }

  initListeners = () => {
    this.$modal.addEventListener('click', this.modalListener);
    this.$menu.addEventListener('click', this.menuListener);
  };
  // menuModalChildren
  modalListener = (event) => {
    event.preventDefault();

    const $target = event.target;
    $target.classList.contains(this.closeModalSelector) &&
      this.toggleModal({
        isOpen: false,
      });
  };

  menuListener = (event) => {
    event.preventDefault();
    const $target = event.target;

    if ($target.classList.contains(this.openModalSelector)) {
      this.toggleModal({
        isOpen: true,
        $element: $target,
      });
    }
  };

  toggleModal = ({ isOpen = true, $element = '' }) => {
    const onClose = () => {
      this.$modal.style.display = 'none';
      this.moveChildren();

      this.$modal.removeEventListener('transitionend', onClose);
    };

    stopPageScroll(isOpen);

    if (isOpen && $element) {
      this.$modal.style.display = 'block';

      setTimeout(() => {
        this.$modal.classList.add('opened');
        this.moveChildren(isOpen, $element);
      }, 0);
    } else {
      this.$modal.classList.remove('opened');
      this.$modal.addEventListener('transitionend', onClose);
    }
  };

  moveChildren = (isOpen = false, $element) => {
    if (isOpen) {
      const childrenID = $element.getAttribute('href');
      const $children = this.$modal.querySelector(childrenID);

      const linkPositionX = $element.getBoundingClientRect().top;
      const linkPositionY = $element.getBoundingClientRect().left;

      const modalGap = +$children.getAttribute('data-modal-gap') || 0;

      $children.style.opacity = 1;
      $children.style.left = `${linkPositionY - 16 - modalGap}px`;
      $children.style.top = `${linkPositionX - 10}px`;
    } else {
      this.$modalChildrenItems.forEach(($item) => {
        $item.style.top = '-1000px';
        $item.style.opacity = 0;
      });
    }
  };
}
