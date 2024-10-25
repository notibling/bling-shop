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

  // Alternar visibilidad de LightBar
  const toggleLightBar = useCallback(() => {
    setShowLightBar(prev => !prev);
  }, []);

  // Cambiar la posición de la LightBar
  const setPosition = useCallback((position: 'top' | 'bottom' | 'horizontal') => {
    setLightBarPosition(position);
  }, []);

  // Cambiar el nivel de luz (con validación entre 0 y 1)
  const changeLightLevel = useCallback((level: number) => {
    const validatedLevel = Math.min(Math.max(level, 0), 1); // Validación entre 0 y 1
    setLightLevel(validatedLevel);
  }, []);

  return {
    showLightBar,
    lightBarPosition,
    lightLevel,
    toggleLightBar,
    setPosition,
    changeLightLevel
  };
};

export { useLightBar };