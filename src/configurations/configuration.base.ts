import {merge} from 'lodash';

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
  }
}, configuration);
