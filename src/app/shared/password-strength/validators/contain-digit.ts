export const containDigit = (value: string): { [x: string]: boolean } | null => (/\d/.test(value))
  ? null
  : { containDigit: true };
