import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Title, Section } from '@/components/atoms';

const PaymentMethods = () => {
  return (
    <>
      <Section classNameContainer=" !bg-slate-900 relative overflow-hidden">
        <div className="w-full h-full flex items-center overflow-hidden absolute left-0 right-0 top-0 bottom-0 m-0 z-0">
          <Image unoptimized src="./images/webp/banners/BlingProductScene5.webp" className="image-gradient-overlay w-[500px] h-[500px] right-0  m-0 absolute bg-cover " objectFit="contain" width="100" height="100" alt="banner-payments-bling" />
        </div>
        <div className={classNames('w-full', 'z-[1]', 'lg:px-4', 'h-auto', 'flex', 'shiny-effect', 'py-5', 'lg:py-0', 'justify-center', 'items-center', 'rounded-md', 'overflow-hidden', 'flex-grow', 'flex-col', 'lg:flex-row')}>
          <div className="w-full lg:w-fit h-auto lg:h-[100px]  flex-col   text-sm  lg:py-0 flex justify-center items-center ">
            <div className="w-full h-auto flex flex-row flex-nowrap lg:mt-5 justify-center items-center gap-1">
              <Title title="Ahora con Bling" level="h4" titleClassName="text-white text-nowrap" />
              <span className="text-bling-yellow">|</span>
              <Title title="Pagás como querés " level="h4" titleClassName="text-white text-nowrap" />
              <span className="text-bling-yellow">*</span>
            </div>
            <span className="text-[10px] text-bling-yellow">*Econtrá más información aquí...</span>
          </div>

          <div className="w-full  h-auto lg:h-[100px] gap-2 text-sm  flex justify-center lg:justify-end items-center ">
            <div className="w-auto h-auto flex flex-col lg:flex-row flex-wrap justify-center lg:justify-end items-center gap-1">
              <div className="px-2 w-full lg:w-auto h-auto ">
                Aprovechá <span className="text-bling-yellow">descuentos excluivos</span> con tu tarjeta
              </div>
              <div className="w-full lg:w-auto h-auto flex flex-row gap-1 justify-center items-center">
                {['oca', 'mastercard', 'visa', 'dinnersclub'].map((image, index) => (
                  <Image
                    unoptimized
                    src={`./images/svg/Payments/${image}.svg`}
                    className="w-auto h-[25px]  border border-slate-200 bg-white aspect-video rounded-md bg-contain object-cover"
                    alt="image"
                    width={100}
                    height={100}
                    objectFit="cover"
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


export { PaymentMethods };
