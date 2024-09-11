import React from 'react';
import classNames from 'classnames';

interface Section {
  label: string;
  color: string;
  percentage: number;
}

interface StatDataCardProps {
  title?: string;
  icon?: React.ReactNode;
  value?: string;
  percentageChange?: string;
  sections?: Section[];
  className?: string | string[];
}

const StatDataCard: React.FC<StatDataCardProps> = ({ title, icon, value, percentageChange, sections = [], className }) => {
  return (
    <div className={classNames('gap-2 rounded-md border bling-light-border dark:bling-dark-border p-4 flex flex-col', className)}>
      <div className='w-full flex flex-row items-center justify-between'>
        <span className='w-full bling-light-text dark:text-white font-bold text-xs'>{title}</span>
        <div className='self-center'>{icon}</div>
      </div>
      
      <div className="w-full flex flex-col gap-1">
        {sections.map((section, index) => (
          <div key={index} className="w-full flex flex-row items-center justify-between bling-light-text dark:text-white text-[12px]">
            <div className='w-2/3 flex flex-row items-center flex-nowrap'>
              <span
                style={{
                  backgroundColor: section.color,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: 8,
                }}
              ></span>
              <span className='text-nowrap'>{section.label}:</span>
            </div>
            <div className='w-1/3 text-end'>{section.percentage.toFixed(2)}%</div>
          </div>
        ))}
      </div>
      
      <span className='w-full bling-light-text dark:text-gray-500 text-xs'>{percentageChange}</span>
    </div>
  );
}

export { StatDataCard };
