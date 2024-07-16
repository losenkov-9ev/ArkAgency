export class MenuModalHandler {
  constructor({ modalSelector, menuSelector, closeModalSelector, openModalSelector }) {
    this.$modal = document.querySelector(modalSelector);
    this.$menu = document.querySelector(menuSelector);

    this.closeModalSelector = closeModalSelector;
    this.openModalSelector = openModalSelector;

    this.$modalChildrenItems = [...this.$modal.querySelectorAll('.menuModalChildren')];

    this.closeTimeout = null;
    this.isOpen = false;
  }

  modalListener = (event) => {
    event.preventDefault();
    const $target = event.target;

    if (
      $target.classList.contains(this.closeModalSelector) ||
      $target.closest(this.closeModalSelector)
    ) {
      this.toggleModal({
        isOpen: false,
      });
    }
  };

  isModalElement = (target) => {
    const hoverObject = {
      $target: null,
      modalOpenElement: false,
    };

    const element = [target, target.parentNode].find(
      (el) => el && el.classList.contains(this.openModalSelector),
    );

    if (element) {
      hoverObject.$target = element;
      hoverObject.modalOpenElement = true;
    }

    return hoverObject;
  };

  menuListener = (event) => {
    const { $target, modalOpenElement } = this.isModalElement(event.target);

    modalOpenElement &&
      this.toggleModal({
        isOpen: event instanceof PointerEvent ? !this.isOpen : true,
        $element: $target,
      });
  };

  clearCloseTimeout = () => {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  };

  moveChildren = ($element = null) => {
    const childrenID = $element?.getAttribute('href');

    childrenID !== '#modal-headerMenu'
      ? this.menuBehavior($element, childrenID)
      : this.headerBehavior(childrenID);
  };

  menuBehavior = ($element, childrenID) => {
    const $children = this.$modal.querySelector(childrenID);

    if (this.isOpen && $children) {
      const { top: linkPositionX, left: linkPositionY } = $element.getBoundingClientRect();
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

  headerBehavior = (id) => {
    const $children = this.$modal.querySelector(id);

    if ($children) {
      const { style } = $children;

      style.opacity = this.isOpen ? 1 : 0;
      style.right = this.isOpen ? 0 : '-1000px';
    }
  };

  isActive() {
    return this.active;
  }
}
