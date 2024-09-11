'use client'
import { useEffect, useRef } from "react";

function useEffectUpdate(callback: () => any, deps?: any[]) {
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else
      callback();
  }, [deps]);
}

export { useEffectUpdate }