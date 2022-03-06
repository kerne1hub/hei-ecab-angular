export const containUppercase = (value: string): { [x: string]: boolean } | null => (/[A-Z]/.test(value))
  ? null
  : { containUppercase: true };
