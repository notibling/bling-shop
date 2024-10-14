'use client';
import { useEffect, useState } from 'react';

interface UsePromiseStateReturn<T> {
  loading: boolean;
  result?: T;
}

export function usePromiseState<T>(
  promise: () => Promise<T>,
  dependencies: Array<unknown> = []
): UsePromiseStateReturn<T> {
  const [result, setResult] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    promise()
      .then((data) => {
        if (isMounted) {
          setResult(data);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { result, loading };
}