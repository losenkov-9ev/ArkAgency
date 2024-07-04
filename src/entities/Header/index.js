export class Header {
  constructor() {
    this.$menu = document.querySelector('.headerMobile__menu');
    this.initListeners();
  }

  initListeners() {
    this.$menu.addEventListener('click', this.menuListener);
  }

  menuListener = (e) => {
    const $target = e.target.closest('.headerMobile__item');

    if ($target) {
      const $menu = $target.querySelector('.headerMobile__item-menu');
      $menu && this.toggleMenu($target, $menu);
    }
  };

  getElementHeight(element) {
    const originalStyle = element.style.cssText;
    element.style.height = 'auto';

    const height = element.offsetHeight;
    element.style.cssText = originalStyle;

    return height;
  }

  expandMenu($menu) {
    $menu.style.height = 'auto';
    const height = this.getElementHeight($menu);
    $menu.style.height = '0px';

    setTimeout(() => {
      $menu.style.height = height + 'px';
    }, 10);
  }

  collapseMenu($menu) {
    $menu.style.height = '0px';
  }

  toggleMenu($item, $menu) {
    $item.classList.contains('active') ? this.collapseMenu($menu) : this.expandMenu($menu);
    $item.classList.toggle('active');
  }
}
