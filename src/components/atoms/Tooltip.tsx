'use client';
import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';

interface TooltipProps {
  children?: ReactNode;
  content?: ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  color?: string;
  className?: string | string[] | Record<string, any> | any;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'top', color = 'bling-light bling-light-text dark:bling-dark   dark:bling-dark-text', className }) => {
  const [visible, setVisible] = useState(false);

  const tooltipPosition = {
    left: 'right-full mr-2 top-1/2 transform -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 transform -translate-y-1/2',
    top: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 transform -translate-x-1/2',
    'bottom-left': 'top-full mt-2 left-0',
    'bottom-right': 'top-full mt-2 right-0',
    'top-left': 'bottom-full mb-2 left-0',
    'top-right': 'bottom-full mb-2 right-0',
    'left-top': 'right-full mr-2 top-0',
    'left-bottom': 'right-full mr-2 bottom-0',
    'right-top': 'left-full ml-2 top-0',
    'right-bottom': 'left-full ml-2 bottom-0',
  };

  return (
    <div className="relative inline-block w-auto">
      <div className="flex items-center justify-center w-auto h-auto p-0 m-0 cursor-pointer" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        {children}
      </div>
      {visible && (
        <div
          className={classNames('absolute text-clip p-2 border drop-shadow-md z-[999] dark:bling-dark-border bling-light-border rounded text-xs transition-opacity duration-300', color, tooltipPosition[position], className)}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export { Tooltip };
