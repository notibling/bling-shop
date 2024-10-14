class MemoryCache { 
  table: Record<string, any> = {};
  constructor() { 

  }

  set(key: string, value: any) { 
    this.table[key] = value;
  }

  get(key: string) { 
    return this.table[key];
  }

  delete(key: string): boolean {
    if (key in this.table) {
      delete this.table[key];
      return true;
    }
    return false;
  }
}

export { MemoryCache };