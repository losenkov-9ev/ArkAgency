import IMask from 'imask';
import { Fancybox } from '@fancyapps/ui';

import { getScrollbarWidth, isWebp } from './scripts/utils.js';

import { Modal } from '../entities/Modal/index.js';
import { Search } from '../shared/Search/index.js';
import { MenuModal } from '../entities/MenuModal/index.js';

import { menuModalConfig } from './config/menuModalConfig.js';
import { searchConfig } from './config/searchConfig.js';
import { Pages } from '../pages/index.js';
import { Header } from '../entities/Header/index.js';

const DEFAULT_PHONE_SELECTOR = '.phone-input';

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

isWebp();
documentHeight();
getScrollbarWidth();

export const modalInstance = new Modal();

document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox]');

  const $phoneInputItems = document.querySelectorAll(DEFAULT_PHONE_SELECTOR);
  $phoneInputItems.forEach(($el) => {
    IMask($el, {
      mask: '+{7} (000) 000-00-00',
    });
  });

  const HeaderInstance = new Header();
  const MenuModalInstance = new MenuModal(menuModalConfig);
  const SearchInstance = new Search(searchConfig);

  const pagesInstance = new Pages();
});
