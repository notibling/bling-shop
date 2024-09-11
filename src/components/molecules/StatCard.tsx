import React from 'react';
import classNames from 'classnames';

interface StatCardProps {
  title?: string;
  icon?: React.ReactNode;
  value?: string;
  percentageChange?: string;
  className?: string | string[];
}

const StatCard: React.FC<StatCardProps> = ({ title, icon, value, percentageChange, className }) => {
  return (
    <div className={classNames(' gap-2 rounded-md border bling-light-border dark:bling-dark-border p-4 flex flex-col', className)}>
      <div className='w-full flex flex-row items-center justify-between'>
        <span className='w-full bling-light-text dark:text-white h-auto font-bold  text-xs'>{title}</span>
        <div className='self-center'>{icon}</div>
      </div>
      <span className='w-full bling-light-text dark:text-white h-auto text-2xl font-bold'>{value}</span>
      <span className='w-full bling-light-text dark:text-gray-500 h-auto text-xs'>{percentageChange}</span>
    </div>
  );
}

export {StatCard};
