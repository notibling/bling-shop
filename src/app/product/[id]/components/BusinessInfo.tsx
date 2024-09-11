import React, { Component } from 'react';
import Image from 'next/image';
import { Title, Separator } from '@/components/atoms';
import { DayFromTo } from '@/components/molecules';
import { FaAward, FaCheck, FaCreditCard, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

interface BusinessInfoProps {
  verified?: boolean;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ verified }) => (
  <>
    <div className="w-full flex-grow h-auto  rounded-md ">
      <div className="w-full rounded-md h-[100px] mb-[20px] relative flex flex-row justify-center items-center border border-slate-200">
        <Image unoptimized src="./images/webp/banners/BlingProductScene4.webp" className="w-full h-full rounded-md bg-contain object-cover" alt="image" width={100} height={100} objectFit="cover" />

        <div className="absolute left-0 right-0 bottom-[-10px] w-full h-auto flex-row flex justify-center badge items-center">
          {verified && <FaCheck className="text-sm text-green-500" />}
          <Title title="Nombre Empresa" titleClassName="text-slate-700 font-bold text-sm text-center" level="h5" />
        </div>
      </div>
      <div className="w-full h-auto flex-row flex justify-center gap-1 flex-nowrap py-1 my-1 items-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex-col flex w-1/5 h-auto justify-center items-center" key={index}>
            <div className="text-slate-700 p-1 text-md gap-1 flex flex-col flex-wrap justify-center items-center">
              <FaAward className="text-md" />
              <span className="text-[10px] font-bold">+48mil</span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-auto flex-col flex justify-center p-1 items-center gap-2">
        <div className="w-auto h-auto flex flex-row flex-wrap justify-center items-center gap-1">
          <Separator size="my-3" textMiddle="Prestaciones" className="text-slate-400 text-xs border-slate-200" />
          {['Productos con Garantía', 'Metodos de Pago', 'Retiros Pickup', 'Envíos a todo el país'].map((text, index) => (
            <div className="text-slate-700 text-xs gap-2 flex flex-row flex-nowrap p-1 border-b border-slate-200 justify-start w-full items-center" key={index}>
              {index === 0 && <FaAward />}
              {index === 1 && <FaCreditCard />}
              {index === 2 && <FaShoppingCart />}
              {index === 3 && <FaMapMarkerAlt />}
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="w-auto h-auto flex flex-row flex-wrap justify-center items-center gap-1">
          <Separator size="my-3" textMiddle="Horarios" className="text-slate-400 text-xs border-slate-200" />
          {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day, index) => (
            <DayFromTo className="!text-[10px] font-bold" day={day} from="08:00" to="17:00" closed={index === 6} key={index} />
          ))}
        </div>
        <div className="w-auto h-auto flex flex-row flex-wrap justify-center items-center gap-1">
          <Separator size="my-3" textMiddle="Crédito / Débito" className="text-nowrap text-slate-400 text-xs border-slate-200" />
          {['oca', 'mastercard', 'visa', 'dinnersclub'].map((image, index) => (
            <Image unoptimized src={`./images/svg/Payments/${image}.svg`} className="w-auto h-[20px] border border-slate-200 aspect-video rounded-md bg-contain object-cover" alt="image" width={100} height={100} objectFit="cover" key={index} />
          ))}
        </div>

        {/* <div className="w-auto h-auto flex flex-row flex-wrap justify-center items-center gap-1">
          <Separator size="my-3" textMiddle="Débito" className="text-slate-400 text-xs border-slate-200" />
          {['oca', 'mastercard', 'visa', 'dinnersclub'].map((image, index) => (
            <Image
              unoptimized
              src={`./images/svg/Payments/${image}.svg`}
              className="w-auto h-[20px] border border-slate-200 aspect-video rounded-md bg-contain object-cover"
              alt="image"
              width={100}
              height={100}
              objectFit="cover"
              key={index}
            />
          ))}
          </div>*/}

        {/* <div className="w-auto h-auto flex flex-row flex-wrap justify-center items-center gap-1">
          <Separator size="my-3" textMiddle="Efectivo" className="text-slate-400 text-xs border-slate-200" />
          {['oca', 'mastercard', 'visa', 'dinnersclub'].map((image, index) => (
            <Image
              unoptimized
              src={`./images/svg/Payments/${image}.svg`}
              className="w-auto h-[20px] border border-slate-200 aspect-video rounded-md bg-contain object-cover"
              alt="image"
              width={100}
              height={100}
              objectFit="cover"
              key={index}
            />
          ))}
          </div> */}
      </div>
    </div>
  </>
);

export { BusinessInfo };
