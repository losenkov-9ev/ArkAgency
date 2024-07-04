import { checkPage } from '../app/scripts/utils.js';

export class Pages {
  constructor() {
    this.init();
  }

  init() {
    if (checkPage('home-page')) {
      (async function () {
        try {
          const _module = await import('./Home/index.js');
          new _module.Home();
        } catch (error) {
          console.error('Ошибка при загрузке модуля:', error);
        }
      })();
    } else if (checkPage('implementation-page')) {
      (async function () {
        try {
          const _module = await import('./Implementation/index.js');
          new _module.Implementation();
        } catch (error) {
          console.error('Ошибка при загрузке модуля:', error);
        }
      })();
    } else if (checkPage('integration-page')) {
      (async function () {
        try {
          const _module = await import('./Integration/index.js');
          new _module.Integration();
        } catch (error) {
          console.error('Ошибка при загрузке модуля:', error);
        }
      })();
    } else if (checkPage('solutions-page')) {
      (async function () {
        try {
          const _module = await import('./Solutions/index.js');
          new _module.Solutions();
        } catch (error) {
          console.error('Ошибка при загрузке модуля:', error);
        }
      })();
    } else if (checkPage('rates-page')) {
      (async function () {
        try {
          const _module = await import('./Rates/index.js');
          new _module.Rates();
        } catch (error) {
          console.error('Ошибка при загрузке модуля:', error);
        }
      })();
    } else if (checkPage('case-page')) {
      (async function () {
        try {
          const _module = await import('./Case/index.js');
          new _module.Case();
        } catch (error) {
          console.error('Ошибка при загрузке модуля:', error);
        }
      })();
    } else if (checkPage('content-page')) {
      (async function () {
        try {
          const _module = await import('./Content/index.js');
          new _module.Content();
        } catch (error) {
          console.error('Ошибка при загрузке модуля:', error);
        }
      })();
    } else if (checkPage('about-page')) {
      (async function () {
        try {
          const _module = await import('./About/index.js');
          new _module.AboutPage();
        } catch (error) {
          console.error('Ошибка при загрузке модуля:', error);
        }
      })();
    } else if (checkPage('statistics-page')) {
      (async function () {
        try {
          const _module = await import('./Statistics/index.js');
          new _module.Statistics();
        } catch (error) {
          console.error('Ошибка при загрузке модуля:', error);
        }
      })();
    }
  }
}

/* 
import { checkPage } from '../app/scripts/utils.js';

export class Pages {
  constructor() {
    this.init();
  }

  async loadModule(moduleName, modulePath) {
    try {
      const _module = await import(modulePath);
      if (_module && _module[moduleName]) {
        new _module[moduleName]();
      } else {
        throw new Error(`Модуль ${moduleName} не найден в ${modulePath}`);
      }
    } catch (error) {
      console.error('Ошибка при загрузке модуля:', error);
    }
  }

  init() {
    const pageModules = {
      'home-page': { name: 'Home', path: './Home/index.js' },
      'implementation-page': { name: 'Implementation', path: './Home/index.js' },
    };

    for (const [page, { name, path }] of Object.entries(pageModules)) {
      if (checkPage(page)) {
        this.loadModule(name, path);
        break; // прерываем цикл, так как страница найдена и модуль загружен
      }
    }
  }
}

*/
