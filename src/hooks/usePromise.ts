'use client';
import { useState } from 'react';

interface UsePromiseReturn<T> {
  loading: boolean;
  result?: T;
}

export function usePromise<T, P extends unknown[]>(
  promise: (...args: P) => Promise<T>
): UsePromiseReturn<T> & { perform: (...args: P) => Promise<T> } {
  const [result, setResult] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const perform = (...args: P): Promise<T> => {
    return new Promise((resolve) => {
      setLoading(true);
      promise(...args)
        .then((result) => {
          setResult(result);
          resolve(result);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  return { result, perform, loading };
}
