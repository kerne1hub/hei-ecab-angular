export const containLowercase = (value: string): { [x: string]: boolean } | null => (/[a-z]/.test(value))
  ? null
  : { containLowercase: true };
