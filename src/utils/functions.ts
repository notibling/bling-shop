class FunctionUtils {
  // eslint-disable-next-line 
  static isCallable(param: any): param is (...args: any[]) => any {
    return typeof param === 'function';
  }
}


export { FunctionUtils };