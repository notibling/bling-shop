import React from 'react';
import classNames from 'classnames';

interface StatDataNumberCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  value?: string;
  className?: string | string[];
}

const StatDataNumberCard: React.FC<StatDataNumberCardProps> = ({ title, icon, value, description, className }) => {
  return (
    <div className={classNames('gap-2 rounded-md border bling-light-border dark:bling-dark-border px-4 py-2 flex flex-row', className)}>
      <div className='w-1/2 aspect-square  bling-light-text dark:text-white text-center font-bold text-2xl flex items-center justify-center'>
        {value}
      </div>
      
      <div className='w-full flex flex-col justify-center px-2'>
        <span className='w-full bling-light-text dark:text-white font-bold text-xs'>{title}</span>
        <span className='w-full bling-light-text dark:text-gray-500 leading-3 text-[10px]'>{description}</span>
      </div>
      
      {icon && <div className='self-center'>{icon}</div>}
    </div>
  );
}

export { StatDataNumberCard };
