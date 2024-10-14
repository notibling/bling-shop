import React from 'react';
import { Button, Icon, ProgressBar, Title } from '../atoms';
import { Box, DoubleAltArrowUp, HomeAdd } from '@/icons/tsx';

interface ProductCounterProps {
    showText?: boolean;
  
}

const ProductCounter: React.FC<ProductCounterProps> = ({ 
   
  showText = true
}) => {
  return (
    <>
      <div className='w-full h-auto flex flex-col  border bling-light-border dark:bling-dark-border !bg-transparent p-2 rounded-md justify-center items-center gap-2 overflow-hidden'>
    
        <div className='w-full h-auto flex flex-row justify-between items-center'>
          <div className={`${showText ? 'mx-2' : ''} mx-2 bling-light-text dark:bling-dark-text flex flex-row items-center justify-center text-center`}>
            <Icon name={Box} size={40} className={'self-center'} /></div>
          {showText && (<Title level='p' titleClassName='text-left leading-tight' title={showText ? 'Productos Cargados' : ''} className='grow' iconClassName='items-center justify-center flex text-center' description={showText ? 'Prueba Piloto' : ''} />)}
          {showText && (<Button icon={<Icon name={DoubleAltArrowUp} size={20} />} className='bling-btn-primary dark:bling-btn-primary-dark aspect-square w-[40px] h-[40px] rounded-md'/>)}
        </div>
        <ProgressBar progress={75} height='h-3' bgColor={'bling-light-bg-3 dark:bling-dark-bg-2'} color='bg-emerald-500' />

      </div>
    </>
  );
};

export { ProductCounter};
