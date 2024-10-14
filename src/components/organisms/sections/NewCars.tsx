'use client';
import React from 'react';
import { Button, Icon, Section, Title } from '@/components/atoms';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import Image from 'next/image';

interface NewCarsProps {
  title?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  className?: string;
}

const NewCars: React.FC<NewCarsProps> = ({}) => {
  const { range } = useBreakpoint();
  return (
    <>
      <Section classNameContainer='lg:h-[450px] h-[350px] items-stretch !bg-transparent !p-0   dark:from-bling-dark-bg-2    bg-gradient-to-t from-bling-light via-20% !via-transparent to-transparent ' >
       <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
        <div className='col-span-1  flex items-center justify-center  px-10 '>
          <div className='w-auto h-auto flex flex-col items-center justify-center gap-4 shadow-sm box-border dark:bling-dark-bg-2 bling-light p-10 rounded-brand text-center '>
          <Title title={'¿Ya conociste tu próximo coche?'} level='h3' className={'w-auto dark:text-white self-center text-cen'}/>
          <div className='w-full h-auto flex flex-col lg:flex-row gap-2'>
            <span className='dark:bling-dark-text'>Ahora podés financiar hasta el 50% de tu próximo vehículo en 24 cuotas sin interés.</span>
      
          <Button className='h-12 w-auto px-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4 text-nowrap' text='Ver Más' />    </div>
          </div>
        </div>
        <div className='col-span-1 rounded-md  overflow-hidden flex items-center justify-center'>
         
          <Image unoptimized width={100} height={100} alt='NewCars' src='/images/avif/bling-car.avif' className='w-full h-auto object-contain' />
        </div>
       </div>
      </Section>
    </>
  );
};

export { NewCars };

