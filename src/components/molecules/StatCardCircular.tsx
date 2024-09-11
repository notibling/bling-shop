import React from 'react';
import classNames from 'classnames';
import { CircularChart, ISection } from './Charts';

interface StatCardCircularProps {
  title?: string | string[];
  description?: string | string[];
  chartTitle?: string | string[];
  chartDescription?: string | string[];
  icon?: React.ReactNode;
  percentageChange?: string;
  className?: string | string[];
  value?: number;
  maxValue?: number;
  size?: number;
  sections?: ISection[];
}

const StatCardCircular: React.FC<StatCardCircularProps> = ({
  title,
  description,
  chartTitle,
  chartDescription,
  icon,
  value,
  maxValue,
  size = 150,
  sections = [],
  className,
}) => {
  return (
    <div
      className={classNames(
        'gap-2 rounded-md border bling-light-border dark:bling-dark-border p-4 flex flex-col',
        className
      )}
    >
      <div className="w-full flex flex-row items-center justify-between">
        <div className="w-auto max-w-2/3 flex flex-col justify-center items-start">
          <span className="w-full bling-light-text dark:text-white h-auto font-bold text-xs">
            {title}
          </span>
          <span className="w-full bling-light-text dark:text-gray-500 h-auto text-[12px]">
            {description}
          </span>
        </div>
        <div className="self-center">{icon}</div>
      </div>
      <div className="w-full flex py-2 flex-row items-center justify-center">
        <CircularChart
          value={value || 0}
          maxValue={maxValue || 100}
          title={chartTitle}
          description={chartDescription}
          size={size}
          sections={sections}
        />
      </div>

      {/* Sección para mostrar los puntos de color, texto y porcentaje */}
      <div className="w-full flex flex-col items-start justify-start space-y-2">
  {sections.map((section, index) => {
    const percentage =
      maxValue && maxValue > 0
        ? ((section.value || 0) / maxValue) * 100
        : 0;

    return (
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
         <span className='text-nowrap'>
       {section.label}:</span></div> <div className='w-1/3 text-end'>{percentage.toFixed(2)}% </div>
  
      </div>
    );
  })}
</div>
    </div>
  );
};

export { StatCardCircular };

