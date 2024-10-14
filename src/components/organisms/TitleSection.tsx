import React from 'react';
import { Icon, Title } from '../atoms';
import classNames from 'classnames';

interface TitleSectionProps {
    pattern?: string | string[];
    className?: string | string[];
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    icon?: React.ReactNode | string | any;
    description?: boolean | string | React.ReactNode;
    iconSize?: number;
    title?: React.ReactNode; 
    children?: React.ReactNode; 
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  description,
  icon,
  iconSize,
  pattern,
  level,
  children,
  className
}) => {
  return (
    <div className={classNames('w-full h-auto  rounded-md relative  flex justify-start items-center p-2  bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border ', className)}>
      {pattern && (
        <div className={classNames('absolute w-[300px] h-full rounded-r-md right-0 top-0 bottom-0 flex items-center justify-center', pattern)}>
          {/* Aquí podrías agregar algún contenido visual relacionado con el patrón */}
        </div>
      )}
      <div className={classNames(children ? 'w-1/2' : 'w-full', 'h-auto flex items-start justify-center')}>
        <Title
          icon={icon && <Icon name={icon} size={iconSize} />}
          level={level}
          className='w-full flex flex-row'
          description={description}
          title={title}
        />  
      </div>
      {children && (
        <div className='w-1/2 h-auto flex items-end justify-center'>
          {children}
        </div>
      )}
    </div>
  );
};

export { TitleSection };
