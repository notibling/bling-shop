import classNames from 'classnames';
import React from 'react';

interface LightBarProps {
  show?: boolean;
  position?: 'top' | 'bottom' | 'horizontal';
  lightLevel?: number; 
}

const LightBarPosition = {
  top: 'top-0 w-1/2 h-[3px]',
  bottom: 'bottom-0 w-1/2 h-[3px]',
  horizontalLeft: 'left-0 top-0 bottom-0 w-[3px] h-[50dvh]',
  horizontalRight: 'right-0 top-0 bottom-0 w-[3px] h-[50dvh]'
};

const LightBar: React.FC<LightBarProps> = ({ show = false, position = 'top', lightLevel = 1 }) => {
  if (!show) return null;

  // Ajusta la opacidad basada en el nivel de luz
  const opacity = Math.min(Math.max(lightLevel, 0), 1);

  // Define las clases base para el LightBar
  const lightBarClasses = classNames(
    'fixed z-[9999] bg-white rounded-full self-center lightbar',
    LightBarPosition[position],
    {
      'opacity-0': opacity === 0, 
      'opacity-100': opacity > 0
      // Opcionalmente puedes ajustar más clases según el estado del lightLevel
    }
  );

  if (position === 'horizontal') {
    return (
      <>
        <div className={classNames(lightBarClasses, LightBarPosition.horizontalLeft)} style={{ opacity }} />
        <div className={classNames(lightBarClasses, LightBarPosition.horizontalRight)} style={{ opacity }} />
      </>
    );
  }

  return (
    <div className={lightBarClasses} style={{ opacity }} />
  );
};

export { LightBar };
