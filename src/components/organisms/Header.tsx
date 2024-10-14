'use client';
import React, { useRef } from 'react';
import classNames from 'classnames';
import { Section } from '@/components/atoms';
import { Banner, CardsSwiper } from '@/components/molecules';
import { SwiperClass } from 'swiper/react';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useBreakpoint } from '@/hooks/useBreakpoint';

const Header = ({}) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const {
    conditionalValue
  } = useBreakpoint();

  return (
    <>
      <Section className='!w-full lg:!p-0 lg:!m-0 dark:bg-slate-950 bg-white' classNameContainer='!w-full !m-0 !bg-transparent !px-0 '>
        <header className={classNames('w-full', 'h-[25rem]', 'flex-grow', 'box-border', 'overflow-hidden', 'overflow-y-hidden')}>
          <CardsSwiper
            id='card-swiper-1'
            ref={swiperRef}
            init={true}
            slidesPerView={conditionalValue({ sm: 1, md: 2, lg: 2 })}
            centeredSlides={true}
            spaceBetween={10}
            autoplay={{ delay: 6000 }}
            initialSlide={1}
            grabCursor={true}
            speed={400}
            loop={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className={classNames('', 'w-full', 'h-full', 'p-1')}
          >
            <Banner
              
              titleClassName={classNames('@xs:text-4xl', 'bling-text-shadow')}
              descriptionClassName={classNames('@xs:text-md', 'bling-text-shadow')}
              categoryClassName={classNames('@xs:text-md', 'bling-badge', '!w-fit', 'text-left', 'text-slate-700', 'font-bold')}
              image={'/images/webp/banners/hairingsalon.webp'}
              category='CUPONES'
              title='DISFRUTÁ DE <br/> DESCUENTOS<br/> ÚNICOS'
              description='Encontrá cupones de descuento en miles de servicios'
             
            />
            <Banner
              
              titleClassName={classNames('@xs:text-4xl', 'bling-text-shadow')}
              descriptionClassName={classNames('@xs:text-md', 'bling-text-shadow')}
              categoryClassName={classNames('@xs:text-md', 'bling-badge', '!w-fit', 'text-left', 'text-slate-700', 'font-bold')}
              image={'/images/webp/banners/tshirtcommerce.webp'}
              category='ANUNCIO'
              title='LAS MEJORES<br/>  MARCAS,<br/> CALIDAD QUE<br/>  CONOCÉS'
              description='Descubrí experiencias únicas de las mejores marcas.'
             
            />
            <Banner
              
              titleClassName={classNames('@xs:text-4xl', 'bling-text-shadow')}
              descriptionClassName={classNames('@xs:text-md', 'bling-text-shadow')}
              categoryClassName={classNames('@xs:text-md', 'bling-badge', '!w-fit', 'text-left', 'text-slate-700', 'font-bold')}
              image={'/images/webp/banners/deliverytruckdeposit.webp'}
              category='SOPORTE'
              title='GARANTÍAS DE<br/>  ENTREGA Y<br/>  DEVOLUCIÓN'
              description='Importante es tener lo que querés, cuando lo querés.'
             
            />
            <Banner
              
              titleClassName={classNames('@xs:text-4xl', 'bling-text-shadow')}
              descriptionClassName={classNames('@xs:text-md', 'bling-text-shadow')}
              categoryClassName={classNames('@xs:text-md', 'bling-badge', '!w-fit', 'text-left', 'text-slate-700', 'font-bold')}
              image={'/images/webp/banners/house.webp'}
              category='ANUNCIO'
              title='¿PENSÁS EN <br/> COMPRAR O<br/> VENDER?'
              description='¡Ahora podés hacer ambas cosas y más!'
                
            />
            <Banner
              
              titleClassName={classNames('@xs:text-4xl', 'bling-text-shadow')}
              descriptionClassName={classNames('@xs:text-md', 'bling-text-shadow')}
              categoryClassName={classNames('@xs:text-md', 'bling-badge', '!w-fit', 'text-left', 'text-slate-700', 'font-bold')}
              image={'/images/webp/banners/ourshop.webp'}
              category='ANUNCIO'
              title='CREÁ TU TIENDA<br/>  Y VENDELO TODO<br/>  AHORA MISMO'
              description='¿Sos emprendedor/a? ¡Empezar hoy es Gratis!'
                
            />
            <Banner
              
              titleClassName={classNames('@xs:text-4xl', 'bling-text-shadow')}
              descriptionClassName={classNames('@xs:text-md', 'bling-text-shadow')}
              categoryClassName={classNames('@xs:text-md', 'bling-badge', '!w-fit', 'text-left', 'text-slate-700', 'font-bold')}
              image={'/images/webp/banners/womansupport.webp'}
              category='SOPORTE'
              title='ATENCIÓN<br/>  AL CLIENTE<br/> & SOPORTE'
              description='Atención Personalizada y Soporte Remoto.'
                
            />
            <Banner
              
              titleClassName={classNames('@xs:text-4xl', 'bling-text-shadow')}
              descriptionClassName={classNames('@xs:text-md', 'bling-text-shadow')}
              categoryClassName={classNames('@xs:text-md', 'bling-badge', '!w-fit', 'text-left', 'text-slate-700', 'font-bold')}
              image={'/images/webp/banners/beautyproducts.webp'}
              category='ANUNCIO'
              title='NUEVOS PRODUCTOS<br/> TODOS LOS DÍAS'
              description='Ofrecidos por las empresas más importantes del País.'
                
            />
          </CardsSwiper>
        </header>
      </Section>
    </>
  );
};

export { Header };
