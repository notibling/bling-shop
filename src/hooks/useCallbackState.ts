'use client'
import { FunctionUtils } from "@/utils/functions";
import { useState } from "react";

export function useCallbackState<T>(initialState: T, callback: (value: T) => void): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, _setValue] = useState<T>(initialState);


  const setValue: React.Dispatch<React.SetStateAction<T>> = (param) => {
    return _setValue((prev) => {
      if (FunctionUtils.isCallable(param)) {
        const result = param(prev as any);
        callback(result);
        return result;
      }

      callback(param);
      return param;
    });
  }


  return [value, setValue];
}
