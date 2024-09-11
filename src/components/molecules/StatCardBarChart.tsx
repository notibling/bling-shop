import React from 'react';
import classNames from 'classnames';
import { ChartData, ChartOptions } from 'chart.js';
import  { BarChart } from '@/components/molecules/Charts';
interface StatCardBarChartProps {
  title?: string;
  description?: string | string[];
  icon?: React.ReactNode;
  data?: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
  className?: string | string[];
}

const StatCardBarChart: React.FC<StatCardBarChartProps> = ({ title, icon, data, options,description, className  }) => {
  return (
    <div className={classNames('gap-2 rounded-md border bling-light-border dark:bling-dark-border p-4 flex flex-col', className)}>
      <div className='w-full flex flex-row items-center justify-between'>
        <span className='w-full bling-light-text dark:text-white h-auto font-bold text-xs'>{title}</span>
        <span className='w-full bling-light-text dark:text-gray-500  h-auto  text-[12px]'>{description}</span>
        <div className='self-center'>{icon}</div>
      </div>
      <div className='!w-full h-full '>
        <BarChart data={data} options={options} className="h-full" />
      </div>
    </div>
  );
}

export {StatCardBarChart};
