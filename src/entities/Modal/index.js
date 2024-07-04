import MicroModal from 'micromodal';
import { stopPageScroll } from '../../app/scripts/utils.js';

export class Modal {
  constructor() {
    this.initModal();
  }

  initModal() {
    try {
      MicroModal.init({
        awaitCloseAnimation: true,
        onShow: () => stopPageScroll(true),
        onClose: () => setTimeout(() => stopPageScroll(false), 200),
      });
    } catch (e) {
      console.log('micromodal error: ', e);
    }
  }

  toggleModal(id, isOpen) {
    isOpen ? MicroModal.show(id) : MicroModal.close(id);
  }
}
