'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { useGlobalState } from '@/contexts/GlobalState';
import * as authOperations from '@/contexts/GlobalState/auth/operations';
import { useDarkMode } from '@/hooks/';
import Image from 'next/image';
import Link from 'next/link';
import { ToCopy, Title, Item, Button, Icon, Chip } from '@/components/atoms';
import { Dropdown, DropdownItem } from '@/components/organisms/';
import { AlignBottom, AlignHorizontaSpacing, AlignTop, AltArrowRight, AltArrowUp, Lightbulb } from '@/icons/tsx';
import { FaCog, FaEye, FaLink, FaMoon, FaPowerOff, FaShieldAlt, FaStore, FaUserCircle } from 'react-icons/fa';
import { FaBasketShopping } from 'react-icons/fa6';

interface UserButtonProps {
  showName?: boolean | { default: boolean; lg: boolean };
  image?: string;
  showLightBar?: boolean;
  lightLevel?: number;
  lightBarPosition?: 'top' | 'bottom' | 'horizontal';
  onToggleLightBar?: () => void;
  // eslint-disable-next-line
  onChangePosition?: (position: 'top' | 'bottom' | 'horizontal') => void;
}

const UserButton: React.FC<UserButtonProps> = ({
  showName,
  image,
  // eslint-disable-next-line
  showLightBar,
  // eslint-disable-next-line
  lightBarPosition,
  onToggleLightBar,
  onChangePosition
}) => {
  const { toggleDarkMode } = useDarkMode();
  const router = useRouter();
  // eslint-disable-next-line
  const { auth: { user } } = useGlobalState();


  const handleSignOut = () => {
    authOperations.signout();
    router.replace('/auth');
  };

  const handleLightLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLightLevel(Number(e.target.value));
  };
  
  const [lightLevel, setLightLevel] = useState(1);
  
  return (
    <>

      <Dropdown
        bodyClassName='w-auto h-auto overflow-visible '
        trigger={
          <Button
            imageHeight={40}
            imageWidth={40}
            imageClassName='rounded-md'
            textClassName='!px-5'
            image={image}
            showText={showName}
            text='Nickolas Machado'
            // text={showName ? `${user?.firstName} ${user?.lastName}` : ''}
            icon={!image && <FaUserCircle />}
            className={classNames(
              image || showName ? 'w-auto px-1 !text-xs rounded-md h-12' : 'w-12 py-0 px-0',
              'hidden lg:flex hover:shadow-md transition-all cursor-pointer flex justify-center dark:bling-dark-text items-center dark:hover:text-white text-lg'
            )}
          />
        }
        position='bottom-left'
      >
        <DropdownItem className='w-[300px] z-10 p-1 h-auto flex flex-col !gap-1 dark:bg-slate-900 shadow-md rounded-md'>
         
       
          <div className='flex items-center justify-between gap-2 p-2 rounded-md bling-light dark:bling-dark'>
            <div className='flex items-center  gap-2'>
              <div className='w-[50px] h-[50px] rounded-full  relative flex justify-center items-center'>
                <Image unoptimized src={image ?? ''} className='object-cover mask mask-squircle bg-contain rounded-md' alt='User Image' width={100} height={100} />
              </div>
              <Title title='name' titleClassName='text-slate-700 dark:text-white font-bold text-sm text-center' level='h6' description='id' descriptionClassName='text-xs text-slate-400' />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <ToCopy textToCopy='https://bling.uy'>
                <Button icon={<FaLink />} className='w-[30px] h-[30px] rounded-md' />
              </ToCopy>
              <Button icon={<FaCog />} className='w-[30px] h-[30px] rounded-md' />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <Link className='w-full' href='/dashboard'>
            <Item 
              content='icon' 
              className='w-full' 
              icon={<FaStore />} 
              text='Dashboard' 
              hideSuffix={true}
              suffix={<Icon name='AltArrowRight' size={20} className='self-center'  />} 
            />
            </Link>
            <Link className='w-full' href='/dashboard/sales'>
              <Item content='icon' className='w-full' icon={<FaStore />} text='Mis Ventas' suffix={<Chip text='0' className='py-1' status='neutral'/>} />
            </Link>
            <Item content='icon' className='w-full' icon={<FaBasketShopping />} text='Mis Compras' />
            <Item content='icon' className='w-full' icon={<FaEye />} text='Privacidad' />
            <Item content='icon' className='w-full' icon={<FaShieldAlt />} text='Centro de Soporte'  hideSuffix={true}
              suffix={<Icon name='AltArrowRight' size={20} className='self-center'  />} />
            <Item content='icon' className='w-full' icon={<FaMoon />} text='Modo Oscuro' onClick={toggleDarkMode} />
            <div className='flex items-center justify-between gap-1'>
              <Button className='w-1/5 btn-sm bling-btn-primary dark:bling-btn-primary-dark' icon={<Icon name={Lightbulb} size={20} />} onClick={onToggleLightBar} />
              <Button className='w-1/5 btn-sm bling-btn-primary dark:bling-btn-primary-dark' icon={<Icon name={AlignTop} size={20} />} onClick={() => onChangePosition?.('top')} />
              <Button className='w-1/5 btn-sm bling-btn-primary dark:bling-btn-primary-dark' icon={<Icon name={AlignBottom} size={20} />} onClick={() => onChangePosition?.('bottom')} />
              <Button className='w-1/5 btn-sm bling-btn-primary dark:bling-btn-primary-dark' icon={<Icon name={AlignHorizontaSpacing} size={20} />} onClick={() => onChangePosition?.('horizontal')} />
              <input
      id="light-level"
      type="range"
      className="w-1/5 bling-btn-primary dark:bling-btn-primary-dark"
      min="0"
      max="1"
      step="0.1"
      value={lightLevel}
      onChange={handleLightLevelChange} // Llamamos a la función cuando el input cambia
    />
         
            </div>
          </div>
          <div className='flex items-center justify-between gap-2 p-2 rounded-md bling-light dark:bling-dark' >
          <div className='w-full aspect-video rounded-md bling-bg-dots-light dark:bling-bg-dots-dark items-center justify-center flex-col flex border border-bling-dark-bg-4'>
            <span className='text-center dark:bling-dark-text font-bold'>PUBLICIDAD</span>
            <span className='text-center dark:bling-dark-text text-[10px]'>ASPECT RATIO 16:9</span></div>
          </div>
          <Item content='icon' className='w-full rounded-md text-nowrap hover:bg-red-500 dark:hover:bg-red-500 hover:text-white dark:hover:text-white dark:bg-slate-800 bg-slate-900 text-slate-400' icon={<FaPowerOff />} text='Cerrar Sesión' onClick={handleSignOut} />
        </DropdownItem>
      </Dropdown>
    </>
  );
};

export { UserButton };
