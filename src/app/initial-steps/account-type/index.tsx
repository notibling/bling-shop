
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import { FaBasketShopping, FaShop } from 'react-icons/fa6';
import { DarkModeBtn, FooterComponent } from '@/components/molecules';
import { Button, Icon, Item } from '@/components/atoms';
import { IUser } from '@/entities/User';
import { useGlobalState } from '@/contexts/GlobalState';
import * as userOperations from '@/contexts/GlobalState/user/operations';
import { CheckCircle } from '@/icons/tsx';
import { ShapeBRT } from '@/components/shapes/ShapeBRT';


interface IAccountTypeProps {
  onSelect: (type: 'business' | 'client') => void;
}


function AccountType({ onSelect }: IAccountTypeProps): React.JSX.Element {
  return (
    <>
      <main className={classNames('overflow-x-hidden', 'h-auto', 'bg-cover', 'min-h-screen', 'w-full', 'flex', 'justify-center', 'items-center', 'flex-col', 'relative', 'dark:bling-dark-bg-1', 'bling-light-bg-5')}>
        <DarkModeBtn />
        <div className={classNames('flex', 'w-full', 'flex-grow', 'h-auto', 'relative', 'z-[10]', 'overflow-x-hidden', 'justify-center')}>
          <div className={classNames('flex', 'gap-5', 'w-full', 'items-center', 'z-[90]', 'lg:flex-row', 'flex-col', 'h-auto', 'overflow-x-hidden', 'p-5', 'justify-center')}>
            {/*
      ------------------------------------------------------------------------
      //? SECCIÓN ----------------------------------- PERSONAL CARD TIER -----
      ------------------------------------------------------------------------
      */}
            <div className={classNames('flex', 'w-[400px]', 'h-auto', 'lg:h-auto', 'py-10', 'px-2', 'bg-white', 'flex-col', 'rounded-md', 'gap-2')}>
              <div className={classNames('flex', 'w-full', 'h-auto', 'p-1', 'flex-col', 'items-center', 'justify-center', 'gap-2')}>
                <div className={classNames('w-full', 'flex', 'h-auto', 'lg:flex-col', 'items-center', 'lg:p-0', 'p-2')}>
                  <span className={classNames('w-1/3', 'lg:w-full', 'h-auto', 'text-5xl', 'text-slate-700', 'font-bold', 'flex', 'justify-center', 'items-center')}>
                    <FaBasketShopping></FaBasketShopping>
                  </span>

                  <span className={classNames('w-2/3', 'lg:w-full', 'h-auto', 'text-2xl', 'text-left', 'lg:text-center', 'text-slate-700', 'font-bold')}>Quiero Comprar</span>
                </div>
                <div className={classNames('w-full', 'flex', 'h-auto', 'items-center', 'justify-center')}>
                  <span className='w-fit indicator-item badge badge-primary'>GRATIS</span>
                </div>
              </div>
              <div className={classNames('flex', 'w-full', 'h-auto', 'p-1', 'flex-row', 'items-center', 'justify-center')}>
                <span className={classNames('w-auto', 'h-auto', 'text-xs', 'text-slate-700', 'px-10', 'pb-0', 'text-center')}>Los productos más virales, descuentos exclusivos, eventos únicos y promociones al mejor precio!</span>
              </div>

              <div className={classNames('flex', 'w-full', 'h-auto', 'p-1', 'flex-col', 'items-center', 'justify-center')}>
                <div className='w-full h-auto items-center justify-center flex flex-row'>
                  <span className={classNames('w-auto', 'h-auto', 'text-md', 'lg:text-2xl', 'text-slate-700')}>$</span>
                  <span className={classNames('w-auto', 'h-auto', 'text-3xl', 'lg:text-5xl', 'text-slate-700', 'font-bold')}>
                  00<span className={classNames('text-md', 'lg:text-3xl', 'font-bold')}>,00</span>
                  </span>
                </div>
                <div className='w-full h-auto items-center justify-center flex flex-row'>
                  <span className={classNames('text-md', 'lg:text-1xl', 'font-bold', 'text-slate-700')}>/ mes</span>
                </div>
              </div>

              <div className={classNames('flex', 'w-full', 'h-auto', 'px-10', 'py-5', 'flex-col', 'flex-grow', 'justify-start', 'flex-shrink-0')}>
                <div className='text-center w-full h-auto pb-2 font-bold'>Beneficios</div>

                <Item content='icon' contentClassName={'bg-transparent h-6 !text-slate-700'} icon={<Icon color='!text-slate-700' name={CheckCircle} size={15} />} text='Compra fácil y seguro' />
                <Item content='icon' contentClassName={'bg-transparent h-6 !text-slate-700'} icon={<Icon color='!text-slate-700' name={CheckCircle} size={15} />} text='Tiendas y Marcas Oficiales' />
                <Item content='icon' contentClassName={'bg-transparent h-6 !text-slate-700'} icon={<Icon color='!text-slate-700' name={CheckCircle} size={15} />} text='Guarda y comparte productos' />
                <Item content='icon' contentClassName={'bg-transparent h-6 !text-slate-700'} icon={<Icon color='!text-slate-700' name={CheckCircle} size={15} />} text='Obtén descuentos de temporada' />
                <Item content='icon' contentClassName={'bg-transparent h-6 !text-slate-700'} icon={<Icon color='!text-slate-700' name={CheckCircle} size={15} />} text='Hasta 12 cuotas sin interés' />
                <Item content='icon' contentClassName={'bg-transparent h-6 !text-slate-700'} icon={<Icon color='!text-slate-700' name={CheckCircle} size={15} />} text=' Atención al cliente Personalizada' />
                <Item content='icon' contentClassName={'bg-transparent h-6 !text-slate-700'} icon={<Icon color='!text-slate-700' name={CheckCircle} size={15} />} text='Protocolos de seguridad 24/7 ' />
              </div>

              <div className={classNames('flex', 'w-full', 'h-auto', 'flex-col', 'items-center', 'justify-center')}>
                <span className={classNames('w-auto', 'h-auto', 'text-sm', 'text-slate-900', 'font-bold')}>¡Compra fácil, rápido y seguro!</span>
              </div>
              <Button onClick={() => onSelect('client')}  className={classNames('btn', 'w-10/12', 'self-center', 'h-12', 'bg-slate-900', 'text-md', 'text-white')}>
                Crear cuenta Personal
              </Button>
            </div>

            {/*
      ------------------------------------------------------------------------
      //? SECCIÓN ----------------------------------- BUSINESS CARD TIER -----
      ------------------------------------------------------------------------
      */}
            <div className={classNames('flex', 'w-[400px]', 'h-auto', 'lg:h-auto', 'py-10', 'px-2', 'bg-slate-900', 'flex-col', 'rounded-md', 'gap-2')}>
              <div className={classNames('flex', 'w-full', 'h-auto', 'p-1', 'flex-col', 'items-center', 'justify-center', 'gap-2')}>
                <div className={classNames('w-full', 'flex', 'h-auto', 'lg:flex-col', 'items-center', 'lg:p-0', 'p-2')}>
                  <span className={classNames('w-1/3', 'lg:w-full', 'h-auto', 'text-5xl', 'text-slate-100', 'font-bold', 'flex', 'justify-center', 'items-center')}>
                    <FaShop></FaShop>
                  </span>
                  <span className={classNames('w-auto', 'h-auto', 'text-2xl', 'text-slate-100', 'font-bold')}>Quiero Vender</span>
                </div>
                <div className={classNames('w-full', 'flex', 'h-auto', 'items-center', 'justify-center')}>
                  <span className='w-fit indicator-item badge badge-primary'>OFERTA POR TIEMPO LIMITADO</span>
                </div>
              </div>
              <div className={classNames('flex', 'w-full', 'h-auto', 'p-1', 'flex-row', 'items-center', 'justify-center')}>
                <span className={classNames('w-auto', 'h-auto', 'text-xs', 'text-slate-100', 'px-10', 'pb-0', 'text-center')}>Ideal si tienes una Tienda Online, crea tu cuenta empresarial y comienza a vender ahora mismo!</span>
              </div>

              <div className={classNames('flex', 'w-full', 'h-auto', 'p-1', 'flex-col', 'items-center', 'justify-center')}>
                <div className='w-full h-auto items-center justify-center flex flex-row'>
                  <span className={classNames('w-auto', 'h-auto', 'text-3xl', 'lg:text-5xl', 'text-slate-100', 'font-bold')}>
                8 &plusmn; 11<span className={classNames('text-md', 'lg:text-3xl', 'font-bold')}>%</span>
                  </span>
                </div>
                <div className='w-full h-auto items-center justify-center flex flex-row'>
                  <span className={classNames('text-md', 'lg:text-1xl', 'font-bold', 'text-slate-100')}>* transacción</span>
                </div></div>
              <div className={classNames('flex', 'w-full', 'h-auto', 'flex-row', 'items-center', 'justify-center')}>
             
     
              </div>

              <div className={classNames('flex', 'w-full', 'h-auto', 'px-10', 'py-5', 'flex-col', 'flex-grow', 'justify-start', 'flex-shrink-0')}>
                <div className='text-center w-full h-auto pb-2 text-white font-bold'>Beneficios</div>

                <Item content='icon' contentClassName={'bg-transparent h-6  !text-white'} icon={<Icon name={CheckCircle} size={15} />} text='Carga de productos Masiva' />
                <Item content='icon' contentClassName={'bg-transparent h-6  !text-white'} icon={<Icon name={CheckCircle} size={15} />} text='Atención al Cliente Personalizada' />
                <Item content='icon' contentClassName={'bg-transparent h-6  !text-white'} icon={<Icon name={CheckCircle} size={15} />} text='Sincronización con WooCommerce' />
                <Item content='icon' contentClassName={'bg-transparent h-6  !text-white'} icon={<Icon name={CheckCircle} size={15} />} text='La tasa de interés más baja' />
                <Item content='icon' contentClassName={'bg-transparent h-6  !text-white'} icon={<Icon name={CheckCircle} size={15} />} text='Top 10 en Audiencia de clientes activos' />
                <Item content='icon' contentClassName={'bg-transparent h-6  !text-white'} icon={<Icon name={CheckCircle} size={15} />} text='Sistemas de Promoción y Publicidad' />
                <Item content='icon' contentClassName={'bg-transparent h-6  !text-white'} icon={<Icon name={CheckCircle} size={15} />} text='Análisis y Estadística en tiempo real' />
              </div>

              <div className={classNames('flex', 'w-full', 'h-auto', 'flex-col', 'items-center', 'justify-center')}>
                <span className={classNames('w-auto', 'h-auto', 'text-sm', 'text-slate-100', 'font-bold')}>¿Qué esperás para vender?</span>
              </div>
              <Button onClick={() => onSelect('business')} className={classNames('btn', 'w-10/12', 'self-center', 'h-12', 'text-slate-900', 'text-md', 'bg-white')}>
                Crear cuenta Empresarial
              </Button>
            </div> </div>
          <div className='w-full h-auto absolute left-0 bottom-0 right-0 margin-auto flex flex-col items-center justify-end '>
            <ShapeBRT className='fill-bling-light-bg-1 dark:fill-bling-dark-bg-4' fillColor='' />
            <div className='w-full h-[300px] lg:h-[0px] bling-light-bg-1 dark:bling-dark-bg-4'></div>
       
          </div>
         
        </div>
     
        <FooterComponent className={classNames('z-10')} brandFooter />
        
      </main>
    </>
  );
}

export default  AccountType ;


