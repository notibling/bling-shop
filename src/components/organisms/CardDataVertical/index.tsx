'use client';
import React from 'react';
import classNames from 'classnames';
import LineChart from '@/components/molecules/Charts/Line';
import { Button, Icon, Title } from '@/components/atoms';

interface CardDataVerticalProps {
  text?: string;
  number?: number;
  symbol?: string;
  date?: string;
  chartClassName?: string | string[] | any;
  isActive: boolean;
  bigNumber?: boolean;
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

const CardDataVertical: React.FC<CardDataVerticalProps> = ({ 
  text, 
  number, 
  className,
  bigNumber = true,
  isActive, 
  symbol,
  date,
  chartData, 
  chartOptions, 
  title, 
  chartClassName,
  icon, 
  buttonIcon 
}) => {
  return (
    <div
      className={classNames(
        'w-auto h-auto bling-light dark:bling-dark rounded-md flex flex-col p-2 box-border gap-2  items-stretch justify-between',
        className
      )}
    >
      <div className="w-full h-auto flex flex-row flex-nowrap justify-between gap-1 items-center">
        <Title level="h6" icon={icon} title={title} titleClassName="leading-4" />
        <Button 
          icon={buttonIcon} 
          iconClassName="bling-light-border dark:bling-dark" 
          className="!w-[35px] !h-[35px] bling-btn-primary bling-light dark:bling-dark !p-0 flex !rounded-full !m-0" 
        />
      </div>
      <div className="w-full h-auto flex border  flex-row bling-light-border dark:bling-dark-border rounded-md p-1 gap-1">
        <Button text="Hoy" className="btn-sm bling-btn-primary dark:bling-btn-primary-dark bling-light dark:bling-dark w-1/3"/> <Button text="Semana" className="btn-sm bling-btn-primary dark:bling-btn-primary-dark bling-light dark:bling-dark w-1/3"/> <Button text="Mes" className="btn-sm bling-btn-primary dark:bling-btn-primary-dark bling-light dark:bling-dark w-1/3"/>
      </div>
       
        <div className={classNames(' flex flex-row w-full' )}>
          <LineChart
          container={{
            className: classNames('!w-full !h-full', chartClassName)
          }}
            data={chartData}
            options={chartOptions}
          />
        </div>
      
        <div className="w-full h-auto flex flex-row gap-1">
        {bigNumber && (<div className="w-1/2 h-auto flex flex-row justify-start items-center">
            <div className="w-auto h-auto flex justify-start items-end">
              <span className="text-5xl grow font-JetBrainsMono">{symbol}{number}</span>
            </div>
            <div className="w-auto h-auto flex-col flex flex-wrap">
              <span className="text-3xl w-auto h-1/2 flex justify-end items-end">
                <Icon name="ArrowUp" color="green" size={20} />
              </span>
              <span className="text-2xl w-auto h-1/2 flex justify-end font-JetBrainsMono">k</span>
            </div>
          </div> )}
          {date && ( 
          <div className="w-1/2 h-auto flex flex-col grow items-center justify-center">
            <span className='w-full text-right text-xs '>Actualizado:</span>
            <span className='w-full text-right text-sm font-bold '>{date}</span> </div>)}
     
          
          </div>
    </div>
  );
};

export { CardDataVertical };
