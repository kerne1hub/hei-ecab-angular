export const minLength = (length: number): (value: string) => { [x: string]: boolean } | null =>
  (value) => (value && value.length >= length) ? null : { minLength: true };
