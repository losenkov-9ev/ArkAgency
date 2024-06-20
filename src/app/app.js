import { MenuModal } from '../entities/MenuModal/index.js';
import { Modal } from '../entities/Modal/index.js';
import { Search } from '../shared/Search/index.js';
import { getScrollbarWidth, isWebp } from '../static/js/utils.js';
import { About } from '../widgets/About/index.js';
import { FAQ } from '../widgets/FAQ/index.js';
import { TopParallax } from '../widgets/Top/index.js';

import { FAQConfig } from './config/FAQconfig.js';
import { aboutCobfig } from './config/aboutConfig.js';
import { menuModalConfig } from './config/menuModalConfig.js';
import { searchConfig } from './config/searchConfig.js';

import { Fancybox } from '@fancyapps/ui';
import IMask from 'imask';

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

isWebp();
documentHeight();
getScrollbarWidth();

document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox]');
  const $phoneInputItems = document.querySelectorAll('.phone-input');
  $phoneInputItems.forEach(($el) => {
    IMask($el, {
      mask: '+{7} (000) 000-00-00',
    });
  });

  const MenuModalInstance = new MenuModal(menuModalConfig);
  const SearchInstance = new Search(searchConfig);
  const FAQInstance = new FAQ(FAQConfig);
  const topParallaxInstance = new TopParallax(document.querySelector('.top'));
  const aboutInstance = new About(aboutCobfig);
  const modalInstance = new Modal();
});
