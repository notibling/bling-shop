'use client'
import { useRef, useState } from "react";

export function useAnimation(durationMS: number = 300) {
  const [animating, setAnimating] = useState<boolean>(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const animate = () => {
    if (timer.current) clearTimeout(timer.current);
    setAnimating(true);

    const value = setTimeout(() => {
      setAnimating(false);
    }, durationMS);

    timer.current = value;
  }




  return { animating, animate }
}