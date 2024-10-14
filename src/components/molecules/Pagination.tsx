import React from 'react';
import { Button, Icon, Input } from '../atoms';

import { AltArrowLeft, AltArrowRight } from '@/icons/tsx';

interface PaginationProps {
 
}

const Pagination: React.FC<PaginationProps> = ({ }) => {
  return (
    <div className='flex items-center justify-center py-2 border-t dark:!border-bling-dark-bg-3 bling-light-border flex-row  flex-nowrap gap-2 '>
      <Button icon={<Icon name={AltArrowLeft} size={20} />} text='Anterior' className='h-[2.5rem] px-3 bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border' />
      <div className='w-auto h-auto text-sm flex flex-row justify-center items-center px-2  gap-2 flex-nowrap antialiased font-bold leading-normal '>
        <div className='text-nowrap'>Página</div>
        <Input className='max-w-[70px] h-[2.5rem] text-center border-[0.5px] bling-light-border dark:bling-dark-border' placeholder='1' /> <div className='text-nowrap'>de 10</div>
      </div>
      <Button iconRight={<Icon name={AltArrowRight} size={20} />} text='Siguiente' className='h-[2.5rem] px-3 bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border' />
    </div>
  );
};

export {Pagination};
