import MicroModal from 'micromodal';
import { stopPageScroll } from '../../static/js/utils.js';

export class Modal {
  constructor() {
    this.initModal();
  }

  initModal() {
    try {
      MicroModal.init({
        awaitCloseAnimation: true,
        onShow: () => stopPageScroll(true),
        onClose: () => stopPageScroll(false),
      });
    } catch (e) {
      console.log('micromodal error: ', e);
    }
  }
}
