import React from 'react';
import classNames from 'classnames';
import { Icon, Tooltip } from '@/components/atoms';

interface TitleProps {
  iconColor?: string;
  titleClassName?: string | string[] | Record<string, any> | any;
  titleClassNameContainer?: string | string[] | Record<string, any> | any;
  descriptionClassName?: string | boolean | string[] | Record<string, any> | any;
  className?: string | string[];
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  icon?: React.ReactNode;
  description?: boolean | string | React.ReactNode;
  title?: React.ReactNode; // Cambiado de string a React.ReactNode
  tooltip?: boolean;
  tooltipContent?: string;
  iconName?: string;
  tooltipClassName?: string | string[] | Record<string, any>;
  iconSize?: number;
  iconClassName?: string;
  tooltipPosition?: 'left' | 'right' | 'top' | 'bottom' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
}

const Title: React.FC<TitleProps> = ({
  iconColor,
  iconName,
  iconSize,
  titleClassName,
  titleClassNameContainer,
  descriptionClassName,
  iconClassName,
  className = '',
  level = 'h3',
  icon,
  tooltip,
  tooltipContent,
  tooltipPosition,
  description,
  tooltipClassName,
  title
}) => {
  // Mapeo de tamaños de fuente para cada nivel
  const levelFontSizeMap = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-md',
    p: 'text-sm'
  };

  // Lógica para determinar el tamaño de fuente de la descripción basado en el nivel del título
  const descriptionFontSizeMap = {
    h1: 'text-2xl',
    h2: 'text-md',
    h3: 'text-sm',
    h4: 'text-xs',
    h5: 'text-xs',
    h6: 'text-[10px]',
    p: 'text-xs'
  };

  return (
    <div className={classNames('w-fit', 'flex', 'h-auto', 'rounded-md', 'dark:text-slate-400', 'text-slate-700', 'font-bold', 'items-center', 'flex-row', className)}>
      {icon && (
        <span
          className={classNames(
            levelFontSizeMap[level],
            'h-auto',
            'w-fit',
            'select-none',
            'p-3',
            'mr-2',
            'flex',
            'items-center',
            'justify-center',
            'box-border',
            'rounded-md',
            iconClassName
          )}
          style={{ color: iconColor }}
        >
          {icon}
          <Icon name={iconName} size={iconSize} color={iconColor} />
        </span>
      )}
      <div className={classNames('w-auto', 'flex', 'flex-col', 'h-auto', titleClassNameContainer)}>
        <div className={classNames('w-auto flex flex-row items-center   h-auto gap-1 ')}>
          {title && <span className={classNames(levelFontSizeMap[level], titleClassName, 'select-none')}>{title}</span>}
          {tooltip && (
            <Tooltip position={tooltipPosition} className={classNames(tooltipClassName)} content={tooltipContent}>
              <Icon name='InfoSquare' size={18} color='#64748b' />
            </Tooltip>
          )}
        </div>
        {description && <span className={classNames(descriptionFontSizeMap[level], descriptionClassName)}>{description}</span>}
      </div>
    </div>
  );
};

export { Title };
