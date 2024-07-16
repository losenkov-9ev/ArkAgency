import { DesktopMenuModal } from './scripts/DesktopMenuModal.js';
import { MobileMenuModal } from './scripts/MobileMenuModal.js';

export class MenuModal {
  constructor(options) {
    this.options = options;

    this.desktopViewInstance = new DesktopMenuModal(options);
    this.mobileViewInstance = new MobileMenuModal(options);

    this.initWindowWidthListener();
  }

  initWindowWidthListener() {
    const events = ['load', 'resize', 'orientationchange'];

    events.forEach((eventName) => {
      window.addEventListener(eventName, this.toggleModalView.bind(this));
    });
  }

  toggleModalView() {
    window.innerWidth > 1366 ? this.activateDesktopView() : this.activateMobileView();
  }

  activateDesktopView() {
    if (!this.desktopViewInstance.isActive()) {
      this.mobileViewInstance.destroy();
      this.desktopViewInstance.init();
    }
  }

  activateMobileView() {
    if (!this.mobileViewInstance.isActive()) {
      this.desktopViewInstance.destroy();
      this.mobileViewInstance.init();
    }
  }
}
