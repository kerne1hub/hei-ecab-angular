export const containSymbol = (value: string): { [x: string]: boolean } | null => (/[\W_]/.test(value))
  ? null
  : { containSymbol: true };
