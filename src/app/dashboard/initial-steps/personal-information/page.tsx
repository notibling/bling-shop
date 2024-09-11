"use client";
import React, { MutableRefObject, useRef } from "react";
import classNames from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";

import {FooterComponent, DarkModeBtn } from "@/components/molecules";

import { InitialStepsProvider } from "@/contexts/InitialSteps";
import { PersonalInformation } from "./PersonalInformation";
import { BusinessInformation } from "./BusinessInformation";
import { ShippingInformation } from "./ShippingInformation";
import { ResponsabilityInformation } from "./ResponsabilityInformation";
import { Logo, Section } from "@/components/atoms";
import { useDarkMode } from '@/hooks';
import { ShapeBRT } from "@/components/shapes";
import Image from "next/image";

const SwiperSlideContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "w-auto",
        "h-full",
        "bg-white",
        "rounded-md",
        "drop-shadow-md"
      )}
    >
      {children}
    </div>
  )
}
export default function InitialStepsPage() {

  const { darkMode } = useDarkMode();

  const swiperRef: MutableRefObject<Swiper | null> = useRef<Swiper | null>(null);
  return (
    <InitialStepsProvider>
   <DarkModeBtn />
<Section className="!p-0 dark:bling-dark-gradient-2 bling-light-gradient-1 " classNameContainer="py-4 !bg-transparent min-h-screen relative ">

  <div className=" absolute left-0 right-0 bottom-0  m-auto flex flex-col items-center justify-center">
<Logo width={800} className="opacity-20" />

</div>
          <Swiper
            allowTouchMove={false}
            onSwiper={(swiper) => swiperRef.current = swiper}
            grabCursor={false}
            autoHeight={true}
            className={classNames('max-w-full h-fit')}
            swiperSlideProps={{ className: classNames('rounded-md') }}
            id="login_register_swiper"
          >

<SwiperSlide>
              <BusinessInformation controller={swiperRef} />
            </SwiperSlide>
           <SwiperSlide>
              <PersonalInformation controller={swiperRef} />
            </SwiperSlide>

            <SwiperSlide>
              <ShippingInformation controller={swiperRef} />
            </SwiperSlide>


            <SwiperSlide>
              <ResponsabilityInformation controller={swiperRef} />
            </SwiperSlide>

          </Swiper>

          <div className="w-full h-auto absolute left-0 bottom-0 right-0 margin-auto flex flex-col items-center justify-end ">
          <ShapeBRT className="fill-bling-light-bg-1 dark:fill-bling-dark-bg-4" fillColor="" />
          <div className='w-full h-[300px] lg:h-[0px] bling-light-bg-1 dark:bling-dark-bg-4'></div>
       
          </div>
          </Section>

         
        <FooterComponent brandFooter />
    
    </InitialStepsProvider>
  );
}
