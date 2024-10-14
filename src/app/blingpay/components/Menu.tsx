import React, { useState, useRef, useEffect } from 'react';
import { Button, LogoBlingPay, Title } from '@/components/atoms';
import Image from 'next/image';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to toggle submenu visibility
  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full z-[99] h-[80px] relative px-4 lg:p-0 flex flex-row items-center justify-between lg:justify-center bling-light dark:bling-dark-bg-2' ref={menuRef}>
      <div className='w-1/2 lg:w-3/12 flex justify-start gap-1  flex-row items-center '>
        <LogoBlingPay height={50} /> <div className='font-bold text-left text-xs text-yellow-400 '>|</div>
        <div className='font-bold text-left text-[10px] bling-light-text dark:text-white '>BlingCompany</div>

      </div>
      <div className='w-4/12 h-full  justify-center items-center hidden lg:flex gap-1'>
        <Button
          text='Comprar'
          className={
            'btn-md h-full rounded-none px-5  border-b border-transparent dark:bling-dark-text bling-light-text' +
    `${activeSubmenu === 'comprar' ? 'border-yellow-400 text-yellow-400' : ''} ` +
    'hover:border-yellow-400 focus:border-yellow-400 ' +
    'hover:text-yellow-400 focus:text-yellow-400 ' +
    'dark:hover:border-yellow-400 dark:focus:border-yellow-400 ' +
    'dark:hover:text-yellow-400 dark:focus:text-yellow-400 ' +
    'transition-colors duration-200 ease-in-out'
          }
          onClick={() => toggleSubmenu('comprar')}
        />


        <Button
          text='Vender'
          className={
            'btn-md h-full rounded-none px-5  border-b border-transparent dark:bling-dark-text bling-light-text' +
    `${activeSubmenu === 'vender' ? 'border-yellow-400 text-yellow-400' : ''} ` +
    'hover:border-yellow-400 focus:border-yellow-400 ' +
    'hover:text-yellow-400 focus:text-yellow-400 ' +
    'dark:hover:border-yellow-400 dark:focus:border-yellow-400 ' +
    'dark:hover:text-yellow-400 dark:focus:text-yellow-400 ' +
    'transition-colors duration-200 ease-in-out'
          }
          onClick={() => toggleSubmenu('vender')}
        />
        <Button
          text='Desarrolladores'
          className={
            'btn-md h-full rounded-none px-5  border-b border-transparent dark:bling-dark-text bling-light-text' +
    `${activeSubmenu === 'desarrolladores' ? 'border-yellow-400 text-yellow-400' : ''} ` +
    'hover:border-yellow-400 focus:border-yellow-400 ' +
    'hover:text-yellow-400 focus:text-yellow-400 ' +
    'dark:hover:border-yellow-400 dark:focus:border-yellow-400 ' +
    'dark:hover:text-yellow-400 dark:focus:text-yellow-400 ' +
    'transition-colors duration-200 ease-in-out'
          }
          onClick={() => toggleSubmenu('desarrolladores')}
        />

        <Button
          text='Solicitar'
          className={
            'btn-md h-full rounded-none px-5  border-b border-transparent dark:bling-dark-text bling-light-text' +
    `${activeSubmenu === 'solicitar' ? 'border-yellow-400 text-yellow-400' : ''} ` +
    'hover:border-yellow-400 focus:border-yellow-400 ' +
    'hover:text-yellow-400 focus:text-yellow-400 ' +
    'dark:hover:border-yellow-400 dark:focus:border-yellow-400 ' +
    'dark:hover:text-yellow-400 dark:focus:text-yellow-400 ' +
    'transition-colors duration-200 ease-in-out'
          }
          onClick={() => toggleSubmenu('solicitar')}
        />
       
      </div>
      <div className='w-1/2 lg:w-3/12 flex justify-end  gap-1'>
        <Button text='Ingresar' className={'btn-md rounded-md px-5 h-10 bling-btn-primary dark:bling-btn-primary-dark bling-light-border dark:bling-dark-border border'} />
        <Button text='Registrarse' className={'btn-md rounded-md px-5 h-10 bling-btn-primary dark:bling-btn-primary-dark bling-light-border dark:bling-dark-border border'} />
      </div>

      {/* Submenu for "Comprar" */}
      {activeSubmenu === 'comprar' && (
        <div className='absolute top-full border-t border-yellow-400 mt-2 left-0 w-10/12 self-center right-0 m-auto h-auto p-2 bg-white dark:bling-dark-bg-2 shadow-sm flex flex-row items-stretch justify-between rounded-md gap-2'>
          <div className='w-3/12 h-auto aspect-video relative rounded-md overflow-hidden'>
            <Image unoptimized alt='Submenu Comprar' src='./images/blingpay/herobackground.avif' layout='fill' className='absolute left-0 right-0 top-0 bottom-0 m-auto'/> 
          </div>
          <div className='w-6/12 h-auto grid-cols-2 grid items-center justify-between gap-2'>
            <Title level='h6' title='Crear una cuenta gratuita' description='Regístrese en BlingPay y comience a gestionar sus compras y pagos.' className={'col-span-1 p-2'}/>

            <Title level='h6' title='Comprar en línea con BlingPay' description='Utilice BlingPay para realizar compras seguras y rápidas en línea.' className={'col-span-1 p-2'}/>

            <Title level='h6' title='Ofertas y promociones' description='Aproveche descuentos y promociones exclusivas con BlingPay.' className={'col-span-1 p-2'}/>

            <Title level='h6' title='Costo de BlingPay' description='Descubra los costos y opciones disponibles para usar BlingPay.' className={'col-span-1 p-2'}/>

            <Title level='h6' title='Realizar pagos' description='Pague bienes y servicios con BlingPay de manera sencilla.' className={'col-span-1 p-2'}/>

            <Title level='h6' title='Métodos de pago' description='Explore los métodos de pago disponibles en BlingPay.' className={'col-span-1 p-2'}/>

            <Title level='h6' title='Gestionar compras y transacciones' description='Administre sus compras y transacciones directamente en BlingPay.' className={'col-span-1 p-2'}/>

            <Title level='h6' title='Crear una cuenta gratis hoy mismo' description='Administre sus compras y transacciones directamente en BlingPay.' className={'col-span-1 p-2 border bling-light-border dark:bling-dark-border rounded-md '}/>


          </div>
          <div className='w-3/12 h-auto bg-red-200 grid-cols-1 grid items-center justify-center gap-2'>
            <Title level='h6' title='Ultimas Novedades' description='¡A partir de hoy podés comprar desde cualquier lugar con un solo click!' className={'col-span-1'}/>
          </div>
        </div>
      )}
      {/* Submenu for "Vender" */}
      {activeSubmenu === 'vender' && (
        <div className='absolute top-full border-t border-yellow-400 mt-2 left-0 w-10/12 self-center right-0 m-auto h-auto p-2 bg-white dark:bling-dark-bg-2 shadow-sm rounded-md'>
          <p className='p-4'>Submenú de Vender</p>
        </div>
      )}
      {/* Submenu for "Solicitar Pagos" */}
      {activeSubmenu === 'solicitar' && (
        <div className='absolute top-full border-t border-yellow-400 mt-2 left-0 w-10/12 self-center right-0 m-auto h-auto p-2 bg-white dark:bling-dark-bg-2 shadow-sm rounded-md'>
          <p className='p-4'>Submenú de Solicitar Pagos</p>
        </div>
      )}
      {activeSubmenu === 'desarrolladores' && (
        <div className='absolute top-full border-t border-yellow-400 mt-2 left-0 w-10/12 self-center right-0 m-auto h-auto p-2 bg-white dark:bling-dark-bg-2 shadow-sm rounded-md'>
          
          <p className='p-4'>Submenú de desarrolladores</p>
        </div>
      )}
    </div>
  );
};

export { Menu };
