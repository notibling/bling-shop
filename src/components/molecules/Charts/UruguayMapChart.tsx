import React from 'react';
import Uruguay from '../Country/Uruguay';

interface DepartmentSales {
    name: string;
    sales: number;
    color: string;
}

interface UruguayMapProps {
    salesData: DepartmentSales[];
}

const UruguayMap: React.FC<UruguayMapProps> = ({ salesData }) => {
  return (
    <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-between relative rounded-md bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border'>
      <div className='w-4/6 h-auto relative flex-row flex justify-center items-center p-4'>
        <Uruguay className='max-w-[350px] self-center block dark:stroke-bling-dark-bg-1 stroke-bling-light-bg-5 dark:fill-bling-dark-bg-3 fill-bling-light-bg-3'/>
      </div>
      <div className='w-2/6 h-auto flex flex-col items-center justify-start'>
          
        <h3>Resumen de ventas</h3>
        <ul>
          {salesData.map((dep, index) => (
            <li key={index} style={{ color: dep.color }}>
              {dep.name} {dep.sales}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export {UruguayMap};
