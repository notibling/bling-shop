'use client';
import { useRef, useState } from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Logo, Section } from '@/components/atoms';
import { DarkModeBtn, FooterComponent } from '@/components/molecules';
import { RecoveryPassword } from './password';


import { ShapeBRT } from '@/components/shapes';
import { useDarkMode } from '@/hooks';
import RecoveryType from '.';
import { RecoveryEmail } from './email';

export default function Recovery(): React.JSX.Element {
  const [isPasswordSelected, setIsPasswordSelected] = useState(false);
  const swiperRef = useRef<Swiper | null>(null);
  useDarkMode();

  const handleRecoveryTypeSelect = (type: 'password' | 'email') => {
    setIsPasswordSelected(type === 'password');
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Avanzar al slider correspondiente
    }
  };

  return (
    <>
      <DarkModeBtn />
      <Section
        className='!p-0 dark:bling-dark-gradient-2 bling-light-gradient-1'
        classNameContainer='py-4 !bg-transparent min-h-screen relative'
      >
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
          id='recovery_swiper'
        >
          {/* Slide de selección de tipo de recuperación */}
          <SwiperSlide>
            <RecoveryType onSelect={handleRecoveryTypeSelect} />
          </SwiperSlide>

          {/* Slide de recuperación */}
          <SwiperSlide>
            {isPasswordSelected ? (
              <RecoveryPassword controller={swiperRef} />
            ) : (
              <RecoveryEmail controller={swiperRef} />
            )}
          </SwiperSlide>
        </Swiper>

        {/* Footer y Shape */}
        <div className='w-full h-auto absolute left-0 bottom-0 right-0 margin-auto flex flex-col items-center justify-end'>
          <ShapeBRT className='fill-bling-light-bg-1 dark:fill-bling-dark-bg-4' fillColor='' />
          <div className='w-full h-[300px] lg:h-[0px] bling-light-bg-1 dark:bling-dark-bg-4'></div>
        </div>
      </Section>
      <FooterComponent brandFooter />
    </>
  );
}
