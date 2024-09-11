import classNames from 'classnames';
import React from 'react';

interface ChipProps {
  className?: string | string[] | Record<string, any> | any;
  text?: string;
  textClassName?: string | string[] | Record<string, any> | any;
  number?: number;
  status?: 'success' | 'inactive' | 'attention' | 'disabled' | 'warning' | 'info' | 'neutral' | 'error' | 'inherit' | undefined;
  color?: 'yellow' | 'red' | 'blue' | 'green' | 'emerald' | 'teal' | 'cyan' | 'light-blue' | 'indigo' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'gray' | 'cool-gray' | 'true-gray' | 'warm-gray' | 'amber' | 'orange' | 'saffron' | 'warm-amber' | 'lime' | 'light-lime' | 'blue-gray' | 'violet' | 'light-violet' | 'light-red' | 'dark-red' | undefined;
  
}

const Chip: React.FC<ChipProps> = ({ text, number, status, color, className,textClassName }) => {
  const getStatusColorClass = (status: ChipProps['status']): string | undefined => {
    switch (status) {
      case 'success':
        return 'bling-status bling-status-success dark:bling-status-success-dark';
      case 'inactive':
        return 'bling-status bling-status-inactive dark:bling-status-inactive-dark';
      case 'disabled':
        return 'bling-status bling-status-disabled dark:bling-status-disabled-dark';
      case 'warning':
        return 'bling-status bling-status-warning dark:bling-status-warning-dark';
      case 'error':
        return 'bling-status bling-status-error dark:bling-status-error-dark';
        case 'attention':
          return 'bling-status bling-status-attention dark:bling-status-attention-dark';
      case 'info':
        return 'bling-status bling-status-info dark:bling-status-info-dark';
            case 'neutral':
        return 'bg-bling-light dark:bg-bling-dark';
      case 'inherit':
        return 'bg-inherit text-inherit';
      default:
        return undefined;
    }
  };

  const getColorClass = (color: ChipProps['color']): string | undefined => {
    if (color) {
      return `!bg-bling-${color}`;
    }
    return undefined;
  };

  const chipColorClass = classNames(
    'w-fit h-fit px-2 rounded-md flex flex-row gap-1 text-[10px] flex-nowrap transition-colors duration-300',
    '', // Clases por defecto
    getStatusColorClass(status), // Aplicar estado si está definido
    getColorClass(color), // Aplicar color si está definido
    className
  );

  return (
    <div className={chipColorClass}>
      {text && <span className={textClassName}>{text}</span>}
      {number && <span>{number}</span>}
    </div>
  );
};

export { Chip };
