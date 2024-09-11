import React from 'react';
import { Button, Section } from '@/components/atoms';
import { BusinessInfo, BusinessProducts } from './';
import { FaBell, FaStore } from 'react-icons/fa';

const BusinessZone = () => {
  return (
    <>
      <Section>
        <div className="w-full lg:w-2/3  lg:order-1 h-auto  ">
          <BusinessProducts />
        </div>
        <div className="w-full lg:w-1/3 h-auto  lg:order-2 flex flex-col   gap-3">
          <div className="w-full aspect-[9/16] bg-white  rounded-md">
            <iframe
              height="100%"
              width="100%"
              className="rounded-md"
              src="https://www.youtube.com/embed/o1yyJdrDSZU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full h-auto flex flex-row gap-2">
            <Button className="py-3 bling-btn-secondary flex flex-nowrap p-3 justify-center items-center text-sm text-slate-700 w-1/2 gap-2 rounded-md">
              <FaBell />
              Seguir
            </Button>
            <Button className="py-3 bling-btn-primary flex flex-nowrap p-3 justify-center items-center text-sm text-slate-700 w-1/2  gap-2 rounded-md">
              <FaStore />
              Ver Tienda
            </Button>
          </div>
        </div>

        <div className="w-full flex-grow lg:w-[350px] h-auto  order-1 lg:order-2 ">
          <BusinessInfo />
        </div>
      </Section>
    </>
  );

}

export { BusinessZone };
