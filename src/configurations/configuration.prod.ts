import { initConfiguration } from './configuration.base';

export const configuration = initConfiguration({
  production: true,
  language: {
    available: ['ru, en'],
    default: 'ru'
  },
  recaptcha: {
    siteKey: '6LctkcUeAAAAALXThc3ZZwDp658jrUsNQog_ASSM'
  }
});
