import React from 'react';
import classNames from 'classnames';
import { CardVertical } from '@/components/molecules';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import { CardsSwiper } from '@/components/molecules/CardsSwiper';
interface SwiperDedicatedCardsProps {
  title?: string;
  imageSrc?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  className?: string;
  leftText?: string;
  rightText?: string;
  centerText?: string;
  centerClassName?: string;
  leftClassName?: string;
  rightClassName?: string;
}

const SwiperDedicatedCards: React.FC<SwiperDedicatedCardsProps> = ({ leftText, centerText, rightText, leftClassName, centerClassName, rightClassName }) => {
  const { conditionalValue, range } = useBreakpoint();
  return (
    <>
      <section className={classNames('w-full', 'lg:h-▀[500px]', 'flex', 'bg-slate-200', 'items-center', 'justify-center', 'py-5', 'lg:py-5', 'p-2', 'lg:p-0')}>
        <div className={classNames('w-full', 'lg:w-10/12', 'rounded-3xl', 'p-2', 'bg-white', 'flex', 'h-auto', 'flex-col')}>
          <div className={'w-full flex h-auto gap-5 font-bold text-slate-700'}>
            <div className='flex-1 flex justify-start'>{leftText && <h2 className={classNames(leftClassName, 'w-auto h-auto text-nowrap text-md p-1 px-2 font-bold rounded-full')}>{leftText}</h2>}</div>
            <div className='flex-1 flex justify-center'>{centerText && <h2 className={classNames(centerClassName, 'w-auto h-auto text-nowrap text-md p-1 px-2 font-bold rounded-full')}>{centerText}</h2>}</div>
            <div className='flex-1 flex justify-end'>{rightText && <h2 className={classNames(rightClassName, 'w-auto h-auto text-nowrap text-md p-1 px-2 font-bold rounded-full')}>{rightText}</h2>}</div>
          </div>

          <div className={classNames('w-full', 'flex', 'p-3', 'mx-auto', 'items-stretch')}>
            <CardsSwiper
              init={true}
              slidesPerView={conditionalValue({
                sm: 3,
                md: 3,
                lg: 6,
                xl: 6
              })}
              centeredSlides={false}
              spaceBetween={0}
              autoplay={{ delay: 6000 }}
              initialSlide={1}
              grabCursor={true}
              speed={400}
              loop={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className={classNames('w-full')}
              swiperSlideProps={{
                className: classNames('!flex', 'items-stretch', 'p-2', 'rounded-3xl')
              }}
              id='cards-swiper-informative-tags'
            >
              <CardVertical
                shareButton={false}
                basketButton={range.sm ? '' : 'false'}
                height='300px'
                discount='15%'
                className='lg:w-auto flex-grow'
                category='hogar'
                title='Conjunto de almohadas de plumas de ganso'
                condition='Nuevo Producto'
                rate='5'
                priceBefore='1500'
                price='300'
                badge='UY $'
                image='true'
                alt='product'
              />
              <CardVertical
                shareButton={false}
                basketButton={range.sm ? '' : 'false'}
                height='300px'
                discount='15%'
                className='lg:w-auto flex-grow'
                category='hogar'
                title='Conjunto de almohadas de plumas de ganso'
                condition='Nuevo Producto'
                rate='5'
                priceBefore='1500'
                price='300'
                badge='UY $'
                image='true'
                alt='product'
              />
              <CardVertical
                shareButton={false}
                basketButton={range.sm ? '' : 'false'}
                height='300px'
                discount='15%'
                className='lg:w-auto flex-grow'
                category='hogar'
                title='Conjunto de almohadas de plumas de ganso'
                condition='Nuevo Producto'
                rate='5'
                priceBefore='1500'
                price='300'
                badge='UY $'
                image='true'
                alt='product'
              />
              <CardVertical
                shareButton={false}
                basketButton={range.sm ? '' : 'false'}
                height='300px'
                discount='15%'
                className='lg:w-auto flex-grow'
                category='hogar'
                title='Conjunto de almohadas de plumas de ganso'
                condition='Nuevo Producto'
                rate='5'
                priceBefore='1500'
                price='300'
                badge='UY $'
                image='true'
                alt='product'
              />
              <CardVertical
                shareButton={false}
                basketButton={range.sm ? '' : 'false'}
                height='300px'
                discount='15%'
                className='lg:w-auto flex-grow'
                category='hogar'
                title='Conjunto de almohadas de plumas de ganso'
                condition='Nuevo Producto'
                rate='5'
                priceBefore='1500'
                price='300'
                badge='UY $'
                image='true'
                alt='product'
              />
              <CardVertical
                shareButton={false}
                basketButton={range.sm ? '' : 'false'}
                height='300px'
                discount='15%'
                className='lg:w-auto flex-grow'
                category='hogar'
                title='Conjunto de almohadas de plumas de ganso'
                condition='Nuevo Producto'
                rate='5'
                priceBefore='1500'
                price='300'
                badge='UY $'
                image='true'
                alt='product'
              />
            </CardsSwiper>
          </div>
        </div>
      </section>
    </>
  );
};

export {SwiperDedicatedCards};
