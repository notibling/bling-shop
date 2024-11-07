'use client';
import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FooterComponent, DarkModeBtn } from '@/components/molecules';
import { InitialStepsProvider } from '@/contexts/InitialSteps';
import { ClientInformation } from './client';
import { BusinessInformation } from './business';
import { ShippingInformation } from './address';
import { ResponsabilityInformation } from './responsability';
import { Logo, Section } from '@/components/atoms';
import { useDarkMode } from '@/hooks';
import { ShapeBRT } from '@/components/shapes';
import AccountType from './account-type';


export default function InitialSteps() {
  useDarkMode();
  const swiperRef = useRef<Swiper | null>(null);
  const [isBusinessSelected, setIsBusinessSelected] = useState(false); // Estado para alternar entre Cliente y Empresa

  const handleNextStep = () => {
    // Avanza al siguiente paso (ShippingInformation)
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleAccountTypeSelect = (type: 'business' | 'client') => {
    setIsBusinessSelected(type === 'business');
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Avanza al siguiente paso después de la selección del tipo
    }
  };


  return (
    <InitialStepsProvider>
      <DarkModeBtn />
      <Section className='!p-0 dark:bling-dark-gradient-2 bling-light-gradient-1' classNameContainer='py-4 !bg-transparent min-h-screen relative'>
        <div className='absolute left-0 right-0 bottom-0 m-auto flex flex-col items-center justify-center'>
          <Logo width={800} className='opacity-20' />
        </div>
        
  
        <Swiper
          allowTouchMove={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          grabCursor={false}
          autoHeight={true}
          className={classNames('max-w-full h-fit rounded-md')}
          id='login_register_swiper'
        >
          <SwiperSlide>
            <AccountType onSelect={handleAccountTypeSelect} />
          </SwiperSlide>
          <SwiperSlide>
            {isBusinessSelected ? (
              <BusinessInformation controller={swiperRef} />
            ) : (
              <ClientInformation controller={swiperRef} />
            )}
          </SwiperSlide>

          <SwiperSlide>
            <ShippingInformation controller={swiperRef} />
          </SwiperSlide>

          <SwiperSlide>
            <ResponsabilityInformation controller={swiperRef} />
          </SwiperSlide>
        </Swiper>

        <div className='w-full h-auto absolute left-0 bottom-0 right-0 margin-auto flex flex-col items-center justify-end'>
          <ShapeBRT className='fill-bling-light-bg-1 dark:fill-bling-dark-bg-4' fillColor='' />
          <div className='w-full h-[300px] lg:h-[0px] bling-light-bg-1 dark:bling-dark-bg-4'></div>
        </div>
      </Section>
      <FooterComponent brandFooter />
    </InitialStepsProvider>
  );
}
