import { merge } from 'lodash';

const dateTimeInputFormat = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hourCycle: 'h12',
  hour: '2-digit',
  minute: '2-digit'
};

export const initConfiguration = (configuration: any): any => merge({
  production: true,
  language: {
    available: ['ru, en'],
    default: 'ru'
  },
  recaptcha: {
    siteKey: '6LctkcUeAAAAALXThc3ZZwDp658jrUsNQog_ASSM'
  },
  tooltips: {
    contentAttribute: 'data-tippy-content',
    actionsButtonDropdown: {
      placement: 'bottom'
    }
  },
  datepicker: {
    dateFormats: {
      display: {
        dateInput: 'MMM d, yyyy',
        monthYearLabel: 'MMMM, yyyy'
      }
    },
    dateTimeFormats: {
      parse: {
        dateInput: dateTimeInputFormat
      },
      display: {
        dateInput: dateTimeInputFormat,
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' }
      }
    },
    dateOffsets: {
      default: 7
    }
  },
}, configuration);
