import { Icon, Section } from '@/components/atoms';
import { Bill, Code, HandMoney, LinkMinimalistic, QrCode, Wallet } from '@/icons/tsx';
import React from 'react';

interface CircleMethodsProps {

}

const CircleMethods: React.FC<CircleMethodsProps> = ({ }) => {
  return (
    <Section classNameContainer=' !bg-transparent !gap-4 items-stretch relative overflow-hidden !p-0 !py-[20px] !flex-row !flex-wrap lg:!flex-nowrap !items-start !justify-center '>
      

      <div className='w-1/3 lg:w-[150px] dark:bling-dark bling-light  gap-2  lg:hover:gap-4 transition-all duration-150 ease-in-out aspect-square border bling-light-border dark:bling-dark-border rounded-full flex flex-col items-center justify-center'>
        <Icon name={QrCode} size={70}/>
        <span className='w-full h-auto text-center bling-light-text dark:text-white text-[10px]  font-bold'>CÓDIGO QR</span></div>
      <div className='w-1/3 lg:w-[150px] dark:bling-dark bling-light  gap-2  lg:hover:gap-4 transition-all duration-150 ease-in-out aspect-square border bling-light-border dark:bling-dark-border rounded-full flex flex-col items-center justify-center'>
        <Icon name={LinkMinimalistic} size={70}/>
        <span className='w-full h-auto text-center bling-light-text dark:text-white text-[10px]  font-bold'>LINK DE PAGO</span></div>
      <div className='w-1/3 lg:w-[150px] dark:bling-dark bling-light  gap-2  lg:hover:gap-4 transition-all duration-150 ease-in-out aspect-square border bling-light-border dark:bling-dark-border rounded-full flex flex-col items-center justify-center'>
        <Icon name={Code} size={70}/>
        <span className='w-full h-auto text-center bling-light-text dark:text-white text-[10px]  font-bold'>API</span></div>
      <div className='w-1/3 lg:w-[150px] dark:bling-dark bling-light  gap-2  lg:hover:gap-4 transition-all duration-150 ease-in-out aspect-square border bling-light-border dark:bling-dark-border rounded-full flex flex-col items-center justify-center'>
        <Icon name={Bill} size={70}/>
        <span className='w-full h-auto text-center bling-light-text dark:text-white text-[10px]  font-bold'>SUSCRIPCIONES</span></div>
      <div className='w-1/3 lg:w-[150px] dark:bling-dark bling-light  gap-2  lg:hover:gap-4 transition-all duration-150 ease-in-out aspect-square border bling-light-border dark:bling-dark-border rounded-full flex flex-col items-center justify-center'>
        <Icon name={Wallet} size={70}/>
        <span className='w-full h-auto text-center bling-light-text dark:text-white text-[10px]  font-bold'>WALLET</span></div>
      <div className='w-1/3 lg:w-[150px] dark:bling-dark bling-light  gap-2  lg:hover:gap-4 transition-all duration-150 ease-in-out aspect-square border bling-light-border dark:bling-dark-border rounded-full flex flex-col items-center justify-center'>
        <Icon name={HandMoney} size={70}/>
        <span className='w-full h-auto text-center bling-light-text dark:text-white text-[10px]  font-bold'>DONACIONES</span></div>

    </Section>
  );
};

export {CircleMethods};
