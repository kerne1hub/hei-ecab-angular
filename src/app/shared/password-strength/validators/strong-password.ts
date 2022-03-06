import { containDigit } from './contain-digit';
import { containLowercase } from './contain-lowercase';
import { containSymbol } from './contain-symbol';
import { containUppercase } from './contain-uppercase';
import { minLength } from './min-length';
import { isEmpty } from 'lodash';

export const strongPassword = (value: string): { [x: string]: boolean } | null => {
  const validators = [
    containDigit,
    containLowercase,
    containSymbol,
    containUppercase,
    minLength(8)
  ];
  let successCount = 0;
  let errors: { [x: string]: boolean } = {};

  for (const validator of validators) {
    if (isEmpty(validator(value))) {
      successCount++;
    } else {
      errors = { ...errors, ...validator(value) };
    }
  }

  return (successCount >= 2) ? null : errors;
};
