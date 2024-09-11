class MemoryCache { 
    table: Record<string,any> = {} ;
    constructor() { 

    }

    set(key: string, value: any)  { 
        this.table[key] = value;
    }

    get(key: string) { 
        return this.table[key];
    }
}

export { MemoryCache }