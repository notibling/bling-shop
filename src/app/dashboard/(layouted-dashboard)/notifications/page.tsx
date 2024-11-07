'use client';
import React, { useState } from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { BellBing } from '@/icons/tsx';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { Icon, Section } from '@/components/atoms';
import { TitleSection } from '@/components/organisms';
import { Notify } from '@/components/molecules';


interface NotificationsProps {}

const Notifications: React.FC<NotificationsProps> = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Función para manejar el cambio del switch
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const breakpoint = useBreakpoint(); // Valor no utilizado en este momento, pero puedes integrarlo según tu necesidad

  return (
    <>
      <Section 
        Empty={true} 
        className='!flex-col !items-start !justify-start !h-fit !p-0 !m-0 !flex !gap-4 !bg-transparent rounded-md'>
        
        <TitleSection 
          icon={BellBing}
          iconSize={30}
          title='Notificaciones' 
          description='Actividad más reciente'
          level='h5'
          pattern='dhb-pat-notifications' 
        />
        
        <div className='flex flex-col w-full h-auto gap-1 lg:flex-row'>
          {/* Sección de Cuenta */}
          <div className='w-full lg:w-1/3 min-h-[300px] bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border h-auto flex flex-col relative rounded-md gap-1 p-1'>
            <div className='flex flex-row items-center justify-center bg-white bling-light-text dark:bling-dark-text gap-1 p-1 rounded-md'>
              <Icon name='UserCircle' className='bling-light-text dark:bling-dark-text' size={20} />
              <h6>Cuenta</h6>
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0 opacity-40 z-0 flex items-center justify-center'>
              <Icon name='UserCircle' className='text-bling-light-text dark:text-bling-dark-text' size={150} />
            </div>
            <div className='z-[1] flex flex-col w-full h-auto gap-1'>
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
            </div>
          </div>

          {/* Sección de Sistema */}
          <div className='w-full lg:w-1/3 min-h-[300px] h-auto flex flex-col relative bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border rounded-md gap-1 p-1'>
            <div className='flex flex-row items-center justify-center bg-white bling-light-text dark:bling-dark-text gap-1 p-1 rounded-md'>
              <Icon name='Server' className='bling-light-text dark:bling-dark-text' size={20} />
              <h6>Sistema</h6>
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0 opacity-40 z-0 flex items-center justify-center'>
              <Icon name='Server' className='text-bling-light-text dark:text-bling-dark-text' size={150} />
            </div>
            <div className='z-[1] flex flex-col w-full h-auto gap-1'>
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
            </div>
          </div>

          {/* Sección de Seguridad */}
          <div className='w-full lg:w-1/3 min-h-[300px] h-auto flex flex-col relative bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border rounded-md gap-1 p-1'>
            <div className='flex flex-row items-center justify-center bg-white bling-light-text dark:bling-dark-text gap-1 p-1 rounded-md'>
              <Icon name='ShieldWarning' className='bling-light-text dark:bling-dark-text' size={20} />
              <h6>Seguridad</h6>
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0 opacity-40 z-0 flex items-center justify-center'>
              <Icon name='ShieldWarning' className='text-bling-light-text dark:text-bling-dark-text' size={150} />
            </div>
            <div className='z-[1] flex flex-col w-full h-auto gap-1'>
              <Notify icon={<FaCheckCircle className='text-green-500' />} title='Operación exitosa' description='Su operación se ha completado con éxito.' showCloseButton={true} className='border-green-500' />
              <Notify icon={<FaExclamationTriangle className='text-red-500' />} title='Error en la operación' description='Ha ocurrido un error. Por favor, intente nuevamente.' showCloseButton={true} className='border-red-500' />
            </div>
          </div>
        </div>
        
        {/* Checkbox para Activar o Desactivar */}
        <div className='mt-4'>
          <label>
            <input type="checkbox" checked={isChecked} onChange={handleSwitchChange} />
            <span className='ml-2'>{isChecked ? 'Activado' : 'Desactivado'}</span>
          </label>
        </div>
      </Section>
    </>
  );
};

export default Notifications;
