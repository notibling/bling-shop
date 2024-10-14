'use client';
import React, { useState } from 'react';

import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Title, Icon, Section } from '@/components/atoms';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

import { Notify } from '@/components/molecules';
import { BellBing } from '@/icons/tsx';
import { TitleSection } from '@/components/organisms';

interface NotificationsProps {}
const Notifications: React.FC<NotificationsProps> = () => {
  const [isChecked, setIsChecked] = useState(false);
  
  // Se utiliza la función handleSwitchChange para manejar el cambio del switch
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  // Se obtiene el valor de useBreakpoint, aunque no se utiliza en este momento
  const breakpoint = useBreakpoint();

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleSwitchChange} />
      <p>{isChecked ? 'Activado' : 'Desactivado'}</p>
    </div>
  );
}
  return (
    <>
      <Section Empty={true} className='!flex-col !items-start !justify-start !h-fit !p-0 !m-0  !flex !gap-4 !bg-transparent rounded-md '>
        
        <TitleSection icon={BellBing}
          iconSize={30}
          title='Notificaciones' 
          description='Actividad más reciente'
          level='h5'
          pattern={'dhb-pat-notifications'} />
      

        <div className='flex flex-col w-full h-auto gap-1  lg:flex-row'>
          <div className='w-full lg:w-1/3 min-h-[300px]  bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border h-auto flex flex-col relative  bling-light dark:bg-bling-dark-bg-2 rounded-md gap-1 p-1'>
            <div className='flex flex-row items-center justify-center bg-white bling-light-text dark:bling-dark-text gap-1 p-1 rounded-md  dark:bling-dark   nowrap'>
              <Icon name='UserCircle' className=' bling-light-text dark:bling-dark-text' size={20} />
              <Title level='h6' title='Cuenta' />
            </div>
            <div className='absolute top-0 bottom-0 left-0 opacity-40 right-0 z-0 flex items-center justify-center margin-0'>
              <Icon name='UserCircle' className='text-bling-light-text  dark:text-bling-dark-text' size={150} />
            </div>
            <div className='z-[1] flex flex-col w-full h-auto gap-1 '>
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
            </div>
          </div>

          <div className='w-full lg:w-1/3 min-h-[300px] h-auto flex flex-col relative bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border rounded-md gap-1 p-1'>
            <div className='flex flex-row items-center justify-center bg-white bling-light-text dark:bling-dark-text gap-1 p-1 rounded-md dark:bling-dark  nowrap'>
              <Icon name='Server' className=' bling-light-text dark:bling-dark-text' size={20} />
              <Title level='h6' title='Sistema' />
            </div>
            <div className='absolute top-0 bottom-0 left-0 opacity-40 right-0 z-0 flex items-center justify-center margin-0'>
              <Icon name='Server' className='text-bling-light-text  dark:text-bling-dark-text' size={150} />
            </div>
            <div className='z-[1] flex flex-col w-full h-auto gap-1'>
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
            </div>
          </div>
          <div className='w-full lg:w-1/3 min-h-[300px] h-auto flex flex-col relative  bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border rounded-md gap-1 p-1'>
            <div className='flex flex-row items-center justify-center bg-white bling-light-text dark:bling-dark-text gap-1 p-1  dark:bling-dark  rounded-md nowrap'>
              <Icon name='ShieldWarning' className=' bling-light-text dark:bling-dark-text' size={20} />
              <Title level='h6' title='Seguridad' />
            </div>
            <div className='absolute top-0 bottom-0 left-0 opacity-40 right-0 z-0 flex items-center justify-center margin-0'>
              <Icon name='ShieldWarning' className='text-bling-light-text  dark:text-bling-dark-text' size={150} />
            </div>
            <div className='z-[1] flex flex-col w-full h-auto gap-1'>
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Notifications;
