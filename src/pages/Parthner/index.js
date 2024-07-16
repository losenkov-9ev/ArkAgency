import Pikaday from 'pikaday';
import { FAQ } from '../../widgets/FAQ/index.js';
import { FAQConfig } from '../../app/config/FAQconfig.js';

export class Parthner {
  constructor() {
    this.init();
  }

  init() {
    const $calendarField = document.getElementById('calendar-field');
    const $calendarButton = document.getElementById('calendar-button');

    if (document.querySelector('.parthnerClients__faq')) {
      const FAQInstance = new FAQ({
        ...FAQConfig,
        boxSelector: '.parthnerClients__faq',
        itemSelector: '.parthnerClients__faq-item',
      });
    }

    if ($calendarField && $calendarButton) {
      const picker = new Pikaday({
        field: $calendarField,
        trigger: $calendarButton,
        onSelect: function () {
          const formattedDate = this.getMoment().format('DD.MM.YYYY');
          document.getElementById('calendar-field').value = formattedDate;
        },
      });
    }
  }
}
