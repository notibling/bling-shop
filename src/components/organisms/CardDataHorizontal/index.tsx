'use client';
import React from 'react';
import classNames from 'classnames';
import { Button, Icon, Title } from '@/components/atoms';
import { LineChart } from '@/components/molecules/Charts';

interface CardDataHorizontalProps {
  text?: string;
  number?: number;
  symbol?: string;
  titleClassName?: string | string[] | any;
  chartClassName?: string | string[] | any;
  isActive: boolean;
  bigNumber?: boolean;
  dateButtons ?: boolean;
  className?: string | string[] | any ;
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill: boolean;
      borderColor: string;
      tension: number;
    }[];
  };
  chartOptions: object;
  title: string;
  icon: JSX.Element;
  buttonIcon: JSX.Element;
}

const CardDataHorizontal: React.FC<CardDataHorizontalProps> = ({ 
  text, 
  number, 
  className,
  titleClassName,
  bigNumber = true,
  isActive, 
  symbol,
  chartData, 
  chartOptions, 
  title, 
  chartClassName,
  icon, 
  buttonIcon,
  dateButtons = false,
}) => {
  return (
    <div
      className={classNames(
        'w-auto h-auto bling-light dark:bling-dark rounded-md flex flex-col p-2 box-border gap-2',
        className
      )}
    >
      <div className="w-full h-auto flex flex-row flex-nowrap justify-between grow gap-1">
        <Title level="h6" icon={icon} title={title} titleClassName={classNames('leading-4 ', titleClassName)} />
        <div className='!w-[35px] !h-[35px] box-border'>
        <Button 
          icon={buttonIcon} 
          iconClassName="dark:bling-dark" 
          className="!w-[35px] !h-[35px] box-border bling-btn-primary bling-light dark:bling-dark !p-0 flex !rounded-full !m-0" 
        /></div>
      </div>
      {dateButtons && (<div className="w-full h-auto flex flex-row bling-light-border dark:bling-dark-border rounded-md p-1 gap-1">
        <Button text="Hoy" className="btn-sm bling-light dark:bling-dark w-1/3"/> <Button text="Semana" className="btn-sm bling-light dark:bling-dark w-1/3"/> <Button text="Mes" className="btn-sm bling-light dark:bling-dark w-1/3"/>
      </div>)}
      <div className="w-full h-auto flex flex-row gap-1">
        {bigNumber && (
          <div className="w-1/2 h-auto flex flex-row justify-end">
            <div className="w-auto h-auto box-border flex justify-start items-end">
              <span className="lg:text-[2.5rem] text-4xl box-border grow font-JetBrainsMono">{number}</span>
            </div>
            <div className="w-auto h-auto flex-col flex flex-wrap">
              <span className="text-3xl w-auto h-1/2 flex justify-end items-end">
                <Icon name="ArrowUp" color="green" size={20} />
              </span>
              <span className="text-2xl w-auto h-1/2 flex justify-end font-JetBrainsMono">k</span>
            </div>
          </div>
        )}
        <div className={classNames(' flex flex-row', { 'w-1/2': bigNumber, 'w-full': !bigNumber })}>
          <LineChart
          container={{
            className: classNames('!w-full !h-full', chartClassName)
          }}
            
            
            data={chartData}
            options={chartOptions}
          />
        </div>
        </div>

     
    </div>
  );
};

export { CardDataHorizontal };
