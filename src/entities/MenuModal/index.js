import { stopPageScroll } from '../../app/scripts/utils.js';

export class MenuModal {
  constructor({ modalSelector, menuSelector, closeModalSelector, openModalSelector }) {
    this.$modal = document.querySelector(modalSelector);
    this.$menu = document.querySelector(menuSelector);

    this.closeModalSelector = closeModalSelector;
    this.openModalSelector = openModalSelector;

    this.$modalChildrenItems = [
      ...this.$modal.querySelectorAll('.menuModalChildren'),
      this.$modal.querySelector('.headerMoblie'),
    ];

    this.initListeners();

    this.isModalOpen = false;
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

  isModalElement = (target) => {
    const clickObject = {
      $target: null,
      modalOpenElement: false,
    };

    switch (true) {
      case target.classList.contains(this.openModalSelector):
        clickObject.$target = target;
        clickObject.modalOpenElement = true;
        break;
      case target.parentNode.classList.contains(this.openModalSelector):
        clickObject.$target = target.parentNode;
        clickObject.modalOpenElement = true;
        break;

      default:
        break;
    }

    return clickObject;
  };

  menuListener = (event) => {
    event.preventDefault();
    const { $target, modalOpenElement } = this.isModalElement(event.target);

    modalOpenElement &&
      this.toggleModal({
        isOpen: !this.isModalOpen,
        $element: $target,
      });
  };

  toggleModal = ({ isOpen = true, $element = '' }) => {
    this.isModalOpen = isOpen;

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
    const childrenID = $element?.getAttribute('href');

    childrenID !== '#modal-headerMenu'
      ? this.menuBehavior($element, childrenID, isOpen)
      : this.headerBehavior(childrenID, isOpen);
  };

  menuBehavior = ($element, childrenID, isOpen) => {
    if (isOpen) {
      const $children = this.$modal.querySelector(childrenID);

      const linkPositionX = $element.getBoundingClientRect().top;
      const linkPositionY = $element.getBoundingClientRect().left;

      const modalGap = +$children.getAttribute('data-modal-gap') || 0;

      $children.style.left = `${linkPositionY - 16 - modalGap}px`;
      $children.style.top = `${linkPositionX - 10}px`;

      $children.style.opacity = 1;
    } else {
      this.$modalChildrenItems.forEach(($item) => {
        if ($item) {
          $item.style.top = '-1000px';
          $item.style.opacity = 0;
        }
      });
    }
  };

  headerBehavior = (id, isOpen) => {
    const $children = this.$modal.querySelector(id);

    if (isOpen) {
      $children.style.opacity = 1;
      $children.style.right = 0;
    } else {
      $children.style.opacity = 0;
      $children.style.right = '-1000px';
    }
  };
}
