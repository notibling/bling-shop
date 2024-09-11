'use client'
import { LocalStorage } from "@/common/LocalStorage";
import { FunctionUtils } from "@/utils/functions";
import { useEffect, useState } from "react";

type PersistedState<T> = { value?: T };
// type Cb = <T>(value: T) => Record<string, any> | string | number | undefined | null;
function usePersistState<T>(key?: `@${string}`, defaultValue?: T):
  [T | undefined, React.Dispatch<React.SetStateAction<T>>] {
  const [state, _setState] = useState<T>();

  const setState: React.Dispatch<React.SetStateAction<T>> = (param) => {
    return _setState((prev) => {
      if (FunctionUtils.isCallable(param)) {
        const result = param(prev as any);
        setStorage(result);
        return result;
      }

      setStorage(param);
      return param;
    });
  }

  const setStorage = (value?: T) => {
    if (!key) {
      console.log('PREVENT PERSIST STATE, UNDEFINED KEY');
      return;
    }
    console.log('SET', { [key]: value });
    LocalStorage.setItem(key, JSON.stringify({ value }));
  }
  useEffect(() => {
    const storedValue = LocalStorage.getJsonItem<PersistedState<T>>(key ?? '');
    console.log('READ', { [key ?? '']: storedValue })
    _setState(storedValue?.value ?? defaultValue);
  }, [])

  return [state as any, setState];
}

export { usePersistState, type PersistedState };