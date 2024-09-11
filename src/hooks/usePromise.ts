'use client'
import { useEffect, useState } from "react";


interface UsePromiseReturn<T> {
  loading: boolean;
  result?: T;
}

export function usePromiseState<T>(promise: () => Promise<T>, deps: any[] = []): UsePromiseReturn<T> {
  const [result, setResult] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    promise().then(_result => setResult(_result)).finally(() => setLoading(false));
  }, [...deps]);

  return { result, loading };
}
export function usePromise<T, P extends any[]>(
  promise: (...args: P) => Promise<T>
): UsePromiseReturn<T> & { perform: (...args: P) => Promise<T> } {
  const [result, setResult] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);

  const perform = (...args: P): Promise<T> => {
    return new Promise((_resolve, _reject) => {
      setLoading(true);
      promise(...args)
        .then((_result) => {
          setResult(_result)
          _resolve(_result as T);
        })
        .finally(() => {
          setLoading(false)
        });
    })
  };

  return { result, perform, loading };
}
