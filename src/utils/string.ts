class StringUtils {
  static normalize(text: string) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  static lower(text?: string) {
    return (text ?? '').toLowerCase();
  }

  static upper(text?: string) {
    return (text ?? '').toUpperCase();
  }
}

export { StringUtils }