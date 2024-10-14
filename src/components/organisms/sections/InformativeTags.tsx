'use client';
import React from 'react';
import classNames from 'classnames';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section } from '@/components/atoms';
import { CardsSwiper, InformativeTag } from '@/components/molecules';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

interface InformativeTagsProps { }

const InformativeTags: React.FC<InformativeTagsProps> = ({ }) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section classNameContainer='py-2 dark:bg-slate-900' className='dark:bg-slate-950 bg-slate-100'>
        <CardsSwiper
          init={true}
          slidesPerView={conditionalValue({
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5
          })}
          centeredSlides={false}
          spaceBetween={5}
          autoplay={{ delay: 6000 }}
          initialSlide={1}
          grabCursor={true}
          speed={400}
          loop={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className={classNames('w-full ')}
          swiperSlideProps={{
            className: classNames('!flex', 'items-stretch')
          }}
          id='cards-swiper-informative-tags'
        >
          <InformativeTag width='w-full' title='Llega hoy mismo' iconName='BoltCircle' iconColor='#fb923c' iconSize={40} />
          <InformativeTag width='w-full' title='Hasta en 12 cuotas' iconName='Card' iconColor='#bef264' iconSize={40} />
          <InformativeTag width='w-full' title='Envíos a Todo el País' iconName='CartLarge' iconColor='#3b82f6' iconSize={40} />
          <InformativeTag width='w-full' title='Garantías de Devolución' iconName='FileFavourite' iconColor='#34d399' iconSize={40} />
          <InformativeTag width='w-full' title='Protocolos de Seguridad' iconName='ShieldCheck' iconColor='#64748b' iconSize={40} />
          <InformativeTag width='w-full' title='Eventos y Promociones' iconName='Confetti' iconColor='#c084fc' iconSize={40} />
          <InformativeTag width='w-full' title='Estadísticas de mercado' iconName='Chart2' iconColor='#60a5fa' iconSize={40} />
          <InformativeTag width='w-full' title='Valoración y Reseñas' iconName='ChartSquare' iconColor='#fcd34d' iconSize={40} />
          <InformativeTag width='w-full' title='Atención al cliente' iconName='Dialog2' iconColor='#f0abfc' iconSize={40} />
          <InformativeTag width='w-full' title='Certificaciones Técnicas' iconName='FileCheck' iconColor='#22d3ee' iconSize={40} />
          <InformativeTag width='w-full' title='Descuentos Exclusivos' iconName='Sale' iconColor='#8b5cf6' iconSize={40} />
        </CardsSwiper>
      </Section>
    </>
  );
};

export { InformativeTags };
