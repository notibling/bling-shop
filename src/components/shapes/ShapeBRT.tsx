import React from 'react';
import classNames from 'classnames';

interface ShapeBRTProps {
  className?: string;
  fillColor?: string; 
}

const ShapeBRT: React.FC<ShapeBRTProps> = ({ className, fillColor }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      data-name='Capa 2'
      viewBox='0 0 1366 142.53'
      className={classNames(className, {
        [`fill-${fillColor}`]: fillColor
      })}
    >
      <path
        d='M0 142.53h1366C930.49-47.51 435.51-47.51 0 142.53'
        data-name='Capa 1'
      ></path>
    </svg>
  );
};

export {ShapeBRT};
