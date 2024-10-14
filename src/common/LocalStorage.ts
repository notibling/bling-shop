class LocalStorage {
  static setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  static getItem(key: string): string | undefined {
    try {
      const value = localStorage.getItem(key) || undefined;
      return value;
    } catch (error) {
      console.log(error); return;
    }
  }
  static getJsonItem<T = {}>(key: string): T | undefined {
    try {
      const value = LocalStorage.getItem(key);
      return value ? JSON.parse(value) : undefined;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}

export { LocalStorage };