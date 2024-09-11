'use client'
import { useGlobalState } from '@/contexts/GlobalState';

const useDarkMode = () => {
  const { theme } = useGlobalState();
  return theme;
};

export { useDarkMode };
