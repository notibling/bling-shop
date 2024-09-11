class NumberUtils {
  static isNumber(param: any): param is number {
    return typeof param === 'number';
  }

  static random(max: number = 10000): number {
    return Number(`${Math.random() * max}`.replace('.', ''));
  }
}

export { NumberUtils }