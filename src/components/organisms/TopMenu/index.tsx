'use client';
import React, { useState, forwardRef } from 'react';
import classNames from 'classnames';
import { Button, Logo, Section, Marquee, LightBar } from '@/components/atoms';
import { SearchBar, Modal, Notify, CardHorizontal } from '@/components/molecules';
import { Dropdown, DropdownItem, ResultFilter, UserButton } from '@/components/organisms';
import { FaBars, FaBell, FaFileInvoice, FaHeart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { FaArrowDownWideShort, FaArrowRightFromBracket, FaRepeat, FaTicket } from 'react-icons/fa6';
import { useAuth, useDarkMode, useLightBar } from '@/hooks';
import { useCart } from '@/contexts/Cart';

import { CartCTA } from './CartCTA';

interface TopMenuProps {
  FastLinks?: boolean;
  InfoBar?: boolean;
  className?: string;
  LogoColor?: 'black' | 'white';
  // eslint-disable-next-line
  onSearch?: (value: string) => void;
}

const TopMenu = forwardRef<any, TopMenuProps>(({ FastLinks = true, InfoBar = true, className = '', onSearch }, searchRef: any) => {
  const { darkMode } = useDarkMode();
  const { user } = useAuth();  // Obtenemos el estado de autenticación
  const { cartItems } = useCart();


  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);

  // eslint-disable-next-line
  const handleViewAllClick1 = () => {
    setModalOpen1(true);
  };
  // eslint-disable-next-line
  const handleViewAllClick2 = () => {
    setModalOpen2(true);
  };

  const {
    showLightBar,
    lightBarPosition,
    lightLevel,
    toggleLightBar,
    setPosition,
    changeLightLevel 
  } = useLightBar();

  const handleLightLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeLightLevel(Number(e.target.value));
  };

  return (
    <>
      <Section className='!w-full !overflow-visible !p-0 !m-0 shadow-md' classNameContainer='!w-full  !overflow-visible !p-0 !m-0'>
        <LightBar show={showLightBar} position={lightBarPosition} lightLevel={lightLevel} />
        <Modal
          isOpen={isModalOpen2}
          onClose={() => setModalOpen2(false)}
          title='Filtrar Resultados'
          content={<ResultFilter />}
          footer={
            <>
              <Button text='Cerrar' className='bling-btn-secondary btn-md' onClick={() => setModalOpen2(false)} />
              <Button text='Aplicar Filtros' className='bling-btn-primary btn-md' />
            </>
          }
          className='p-2'
          overlayClassName='custom-overlay'
        />
        <Modal
          isOpen={isModalOpen1}
          onClose={() => setModalOpen1(false)}
          title='Carrito de compras'
          content={
            <div className='max-w-[500px]  flex flex-col gap-1'>
              {cartItems.map((item) => (
                <CardHorizontal key={item.id} actions={true} deleteButton={true} shareButton={false} imageClassName='aspect-square' title={item.title} priceBefore={item.priceBefore} price={item.price} badge='UY $' image='true' imageAlt='product' />
              ))}
            </div>
          }
          footer={
            <div className='flex flex-row items-center justify-end w-full h-auto gap-2 flex-nowrap'>
              <Button icon={<FaTimes />} text='Cerrar' className='h-[45px] bling-btn-secondary  py-6 p-4 gap-2' onClick={() => setModalOpen1(false)} />
              <Button icon={<FaFileInvoice />} text='Finalizar Compra' className='gap-2 p-4 py-6 btn-md dark:bling-dark-bg-3 bling-btn-primary' />
            </div>
          }
          className='p-2'
          overlayClassName='custom-overlay'
        />
        {/* --------------------------------------------- CABECERA - NAV */}

        <nav className={classNames('w-full', 'h-a', 'rounded-b-brand', 'lg:rounded-none', 'lg:pb-0', 'flex-col', 'justify-center', 'items-center', 'flex', 'content-center', 'items-center', 'bg-white', 'dark:bg-slate-900', className)}>
          {/* --------------------------------------------- CABECERA - NAV - ENLACES */}
          {FastLinks && (
            <Section className='!w-full !overflow-hidden !p-1 !m-0 shadow-md bg-slate-200  dark:bg-slate-950 ' classNameContainer=' !bg-transparent !overflow-visible !p-0 !m-0'>
              <div className={classNames('w-full', '!overflow-visible', 'lg:p-0', 'px-5', 'h-full', 'text-[10px]', ' text-slate-600', 'flex', 'mx-auto', 'justify-between', 'items-center')}>
                <a href='' className='link !no-underline'>
                  Bling.uy | Todo a un 🔔 de distancia.
                </a>
                <a href='' className='link hidden lg:block !no-underline'>
                  12 Cuotas con todas las tarjetas
                </a>
                <a href='' className='link hidden lg:block !no-underline'>
                  Envíos en el día
                </a>
                <a href='' className='link hidden lg:block !no-underline'>
                  Miles de marcas
                </a>
                <a href='' className='link hidden lg:block !no-underline'>
                  Control de calidad
                </a>
                <a href='' className='link hidden lg:block !no-underline'>
                  Centro de Políticas
                </a>
                <a href='' className='link !no-underline'>
                  Asistencia al cliente
                </a>
              </div>
            </Section>
          )}
          {/* --------------------------------------------- CABECERA - NAV - LOGO/SEARCH/BUTTONS */}
          <div className={classNames('w-full', 'gap-2', '!overflow-visible', 'lg:flex-nowrap', 'flex-wrap', 'order-2', 'p-5', 'lg:pr-0', 'lg:pl-0', 'lg:w-10/12', 'lg:h-20', 'h-auto', 'flex', 'mx-auto', 'justify-between', 'items-center')}>
            {/* --------------------------------------------- CABECERA - NAV - LOGO */}
            <div className={classNames('lg:w-4/12', 'flex', 'w-1/3', 'order-1', 'flex', 'flex-row', 'justify-center','align-middle', 'items-center', 'gap-4')}>
              <div className={classNames('flex', 'h-full', 'w-full', 'join-item', ' text-slate-100', 'self-center')}>
                <Logo darkMode={darkMode} className={classNames('w-20 flex flex-col justify-center')} />
              </div>
              <a
                href=''
                className={classNames(
                  'aspect-square',
                  'h-12',
                  'hidden',
                  'lg:flex',
                  'rounded-md',
                  'hover:shadow-md',
                  'hover:text-blue-500',
                  'dark:hover:text-blue-500',
                  'transition-all',
                  'cursor-pointer',
                  'flex',
                  'justify-center',
                  'items-center',
                  'dark:hover:bg-slate-800',
                  'text-lg',
                  'text-slate-700',
                  'dark:text-slate-600'
                )}
              >
                <FaRepeat className={classNames('self-center', 'text-lg')} />
              </a>
            </div>
            
            {/* --------------------------------------------- CABECERA - NAV - SEARCHBAR */}
            <div className={classNames('w-full', 'lg:w-6/12', 'flex', 'gap-1', 'lg:pt-0', 'pt-2', 'lg:block', 'order-6', 'lg:order-2')}>
              <SearchBar ref={searchRef} onSearch={onSearch} className={classNames('w-full')}></SearchBar>
              <Button
                icon={<FaArrowDownWideShort />}
                className={classNames(
                  'w-12',
                  'h-12',
                  'flex',
                  '!p-0',
                  'lg:hidden',
                  'rounded-md',
                  'hover:shadow-md',
                  'hover:text-blue-500',
                  'dark:bg-slate-900',
                  'bling-btn-secondary',
                  'transition-all',
                  'cursor-pointer',
                  'flex',
                  'justify-center',
                  
                  'items-center',
                  'text-lg',
                  'text-slate-700',
                  'order-4'
                )}
                onClick={() => setModalOpen2(true)}
              />
            </div>
            {/* --------------------------------------------- CABECERA - NAV - LOGIN/REGISTER/MENU */}
            <div className={classNames('w-1/2', '!overflow-visible', 'lg:w-4/12', 'order-3', 'h-14', 'gap-1', 'items-center', 'flex', 'justify-end ')}>
             
            <a
                href=''
                className={classNames(
                  'aspect-square',
                  'h-12',
                  'p-a',
                  'hidden',
                  'lg:flex',
                  'bg-transparent',
                  'rounded-md',
                  'hover:shadow-md',
                  'hover:text-red-500',
                  'dark:hover:text-red-500',
                  'transition-all',
                  'cursor-pointer',
                  'justify-center',
                  'dark:hover:bg-slate-800',
                  'items-center',
                  'text-lg',
                  'text-slate-700',
                  'dark:text-slate-600'
                )}
              >
                <FaHeart className={classNames('self-center', 'text-lg')} />
              </a>

              <CartCTA />
              <Dropdown
                bodyClassName='w-auto h-auto overflow-visible'
                trigger={
                  <Button
                    icon={<FaBell />}
                    className={classNames(
                      'aspect-square',
                      'h-12',
                      'hidden',
                      'lg:flex',
                      'bg-transparent',
                      'rounded-md',
                      'hover:shadow-md',
                      'hover:bg-transparent',
                      'hover:text-bling-yellow',
                      'dark:hover:text-bling-yellow',
                      'dark:hover:bg-slate-800',
                      'transition-all',
                      'cursor-pointer',
                      'flex',
                      'justify-center',
                      'items-center',
                      'text-lg',
                      'text-slate-700',
                      'dark:text-slate-600'
                    )}
                  />
                }
                position='bottom-left'
              >
                <DropdownItem shouldClose={false} className={classNames('w-[300px] h-auto flex flex-col !gap-1 dark:bg-slate-900 bg-slate-100 p-2 border-none shadow-md rounded-md')}>
                  <Notify showCloseButton={true} title='Nuevas Ofertas Disponibles' description='Recuperá los descuentos de la semana pasada!' />
                  <Notify showCloseButton={true} title='Nuevas Ofertas Disponibles' description='Recuperá los descuentos de la semana pasada!' />
                  <Notify showCloseButton={true} title='Nuevas Ofertas Disponibles' description='Recuperá los descuentos de la semana pasada!' />
                  <Notify showCloseButton={true} title='Nuevas Ofertas Disponibles' description='Recuperá los descuentos de la semana pasada!' />

                </DropdownItem>
              </Dropdown>
       
              <UserButton    
                image='/images/webp/user/woman.webp'
                showLightBar={showLightBar}
                showName={false}
                lightBarPosition={lightBarPosition}
                onToggleLightBar={toggleLightBar}
                onChangePosition={setPosition}
                lightLevel={lightLevel}
                onLightLevelChange={handleLightLevelChange}
              />
                
                    
              <a href='' className={classNames('w-12', 'h-12', 'flex', 'lg:hidden', 'rounded-md', 'hover:shadow-md', 'transition-all', 'cursor-pointer', 'flex', 'justify-center', 'items-center', 'text-lg', 'text-slate-700', 'order-4')}>
                <FaBars className={classNames('self-center', 'text-lg')} />
              </a>    </div>
          </div>

          {/* --------------------------------------------- CABECERA - NAV - INFORMATIVEBAR */}
          {InfoBar && (
            <div className={classNames('w-full', 'order-4', 'h-10', 'hidden', 'lg:block', 'flex', 'text-nowrap', 'dark:bg-slate-950', 'bg-slate-100', 'mx-auto', 'justify-between', 'items-center')}>
              <div className={classNames('w-full', 'p-5', 'lg:p-0', 'lg:w-10/12', 'h-full', 'flex', 'mx-auto', 'justify-between', 'items-center', 'gap-2', 'flex-row', 'flex-nowrap')}>
                {/* //todo ----------------------- PROMO TEMPORAL -----------------------*/}
                <div className={classNames('w-8/12', 'lg:w-auto', 'overflow-hidden', 'text-slate-700', 'bg-slate-900', 'flex', 'mr-3', 'items-center', 'rounded-md', 'flex-nowrap overflow-hidden', 'text-white', 'text-xs', 'font-bold')}>
                  <span className={classNames('w-auto', 'p-0', 'px-1', 'font-black', 'text-[10px]', 'flex', 'bg-bling-yellow', 'rounded-md', 'text-slate-700', 'ml-1')}>PROMO:</span>

                  <div className='w-[150px] overflow-hidden h-6 flex flex-col items-center justify-center  p-0 m-0'>
                    <Marquee speed={8} direction='up' className='w-full h-full p-1'>
                      <div className={classNames('w-full flex text-nowrap justify-center my-1 items-center text-[10px]  dark:bling-dark rounded-md')}>MES DE MAMA</div>
                      <div className={classNames('w-full flex text-nowrap justify-center my-1 items-center text-[10px]  dark:bling-dark rounded-md')}>
                        <span>| 00 d | 00 h | 00 m | 00 s |</span>
                      </div>
                    </Marquee>
                  </div>
                </div>

                {/* //todo ----------------------- CATEGORIAS -----------------------*/}
                <div className={classNames('w-0', 'lg:w-8/12', 'h-full', 'flex', 'items-center', 'justify-center', 'gap-1', 'self-center')}>
                  <Button text='Hogar' className={classNames('bling-btn-primary', 'dark:bling-btn-primary-dark', 'btn-xs')} />
                  <Button text='Tecnología' className={classNames('bling-btn-primary', 'dark:bling-btn-primary-dark', 'btn-xs')} />
                  <Button text='Vestimenta' className={classNames('bling-btn-primary', 'dark:bling-btn-primary-dark', 'btn-xs')} />
                  <Button text='Herramientas' className={classNames('bling-btn-primary', 'dark:bling-btn-primary-dark', 'btn-xs')} />
                  <Button text='Vehículos' className={classNames('bling-btn-primary', 'dark:bling-btn-primary-dark', 'btn-xs')} />
                  <Button text='Inmuebles' className={classNames('bling-btn-primary', 'dark:bling-btn-primary-dark', 'btn-xs')} />
                  <Button text='Servicios' className={classNames('bling-btn-primary', 'dark:bling-btn-primary-dark', 'btn-xs')} />
                </div>
                {/* //todo ----------------------- LLAMADO DE ACCIÓN -----------------------*/}
                <div className={classNames('w-4/12', 'lg:w-2/12', 'h-8', 'flex', 'items-center', 'justify-end')}>
                  <div
                    className={classNames(
                      'w-auto',
                      'h-auto',
                      'inline-block',
                      'rounded-md',
                      'p-1',
                      'hover:bg-bling-yellow',

                      'cursor-pointer',
                      'text-white',
                      'flex',
                      'gap-2',
                      'align-middle',
                      'justify-center',
                      'items-center',
                      'flex-row',
                      'flex-nowrap',
                      'bg-slate-900',
                      'text-xs'
                    )}
                  >
                    {' '}
                    <span>Recolectar Cupones</span>
                    <span className={classNames('w-auto', 'p-0', 'px-1', 'font-black', 'text-[10px]', 'flex', 'bg-bling-yellow', 'rounded-md', 'text-slate-700', 'ml-1', 'gap-2', 'px-1', 'items-center', 'flex', 'justify-center')}>
                      <FaTicket className={classNames('self-center', 'text-lg')}></FaTicket>0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </Section>
    </>
  );
});

export { TopMenu };
