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
  horizontalRight: 'right-0 top-0 bottom-0 w-[3px] h-[50dvh]',
};

const LightBar: React.FC<LightBarProps> = ({ show = false, position = 'top', lightLevel = 1 }) => {
  if (!show) return null;

  // Verificamos que el valor esté entre 0 y 1 y calculamos la clase de opacidad
  const opacityClass = `opacity-${Math.round(lightLevel * 100)}`;

  const lightBarClasses = classNames(
    'fixed z-[9999] bg-white rounded-full self-center lightbar',
    LightBarPosition[position],
    opacityClass
  );

  // Renderiza las barras horizontales de manera más limpia
  if (position === 'horizontal') {
    return (
      <>
        <div className={classNames(lightBarClasses, LightBarPosition.horizontalLeft)} />
        <div className={classNames(lightBarClasses, LightBarPosition.horizontalRight)} />
      </>
    );
  }

  // Para las posiciones 'top' y 'bottom'
  return (
    <div className={lightBarClasses} />
  );
};

export { LightBar };
