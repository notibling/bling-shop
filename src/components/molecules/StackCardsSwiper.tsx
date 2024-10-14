'use client';
import React from 'react';
import { Swiper, SwiperProps, SwiperRef, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import classNames from 'classnames';

import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

interface IStackCardsSwiperProps extends SwiperProps {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  swiperSlideProps?: Partial<SwiperSlideProps>;
}

const StackCardsSwiper = React.forwardRef<SwiperRef, IStackCardsSwiperProps>(({ children, id, className, swiperSlideProps = {}, ...props }, ref: any) => {
  const childrenToRender = React.Children.toArray(children);
  return (
    <>
      <Swiper
        ref={ref}
        loop
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={classNames(id, className)}
        {...props}
      >
        {childrenToRender.map((child, index) => (
          <SwiperSlide {...swiperSlideProps} key={`${id}-${index}`}>
            {child}
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
});

export { StackCardsSwiper };