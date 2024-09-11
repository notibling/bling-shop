// src/hooks/useLightBar.ts
'use client';
import { useState, useCallback } from 'react';

interface UseLightBarReturn {
  showLightBar: boolean;
  lightBarPosition: 'top' | 'bottom' | 'horizontal';
  lightLevel: number;
  toggleLightBar: () => void;
  setPosition: (position: 'top' | 'bottom' | 'horizontal') => void;
  changeLightLevel: (level: number) => void;
}

const useLightBar = (): UseLightBarReturn => {
  const [showLightBar, setShowLightBar] = useState(false);
  const [lightBarPosition, setLightBarPosition] = useState<'top' | 'bottom' | 'horizontal'>('top');
  const [lightLevel, setLightLevel] = useState(1);

  const toggleLightBar = useCallback(() => {
    setShowLightBar(prev => !prev);
  }, []);

  const setPosition = useCallback((position: 'top' | 'bottom' | 'horizontal') => {
    setLightBarPosition(position);
  }, []);

  const changeLightLevel = useCallback((level: number) => {
    setLightLevel(level);
  }, []);

  return {
    showLightBar,
    lightBarPosition,
    lightLevel,
    toggleLightBar,
    setPosition,
    changeLightLevel,
  };
};

export { useLightBar };
