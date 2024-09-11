'use client';
import React, { Fragment,  } from 'react';
import { Button, Checkbox, Chip, Icon } from '@/components/atoms';
import { BaseTable } from '@/components/organisms';
import { Eye } from '@/icons/tsx';
import Image from 'next/image';

interface ITableInvoicePurchasedProps {}

const TableInvoicePurchased: React.FC<ITableInvoicePurchasedProps> = ({}) => {
  return (
    <Fragment>
      <BaseTable
        rowHeaderClassName="text-center"
       
        headers={[<Checkbox key="checkbox-header" onChange={() => {}} />, 'Portada','N° Factura', 'Producto','Tienda', 'Fecha de Emisión', 'Cantidad', 'Precio Total', 'Estado de pago', 'Ver']}
        rows={[
          {
            data: [
              <div className="flex justify-center items-center">
                <Checkbox onChange={() => {}} />
              </div>,
              <div className="flex justify-center items-center   ">
                <div className="w-[40px] h-[40px]">
                  <Image unoptimized src="/images/avif/auriculares-f-b.avif" className="object-cover w-full mask mask-squircle h-full bg-contain rounded-md" width={40} height={40} objectFit="cover" alt="product" />
                </div>
              </div>,
               <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">BL-0123456789</p>,
                            <div className="max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto">Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
                            <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">BLING</p>,
              <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">01/07/2024</p>,
              <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">1 Unidad</p>,
              <div className="flex justify-center items-center">
                <Chip status="info" text="$50.00" className="font-JetBrainsMono  self-center" />
              </div>,
              <div className="flex justify-center items-center">
                <Chip status="success" text="Pago Exitoso" className="font-JetBrainsMono self-center" />
              </div>,
              <div className="flex justify-center items-center">
                <Button icon={<Icon name={Eye} size={20} />} className="h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4" />
              </div>,
            ],
          },
          {
            data: [
              <div className="flex justify-center items-center">
                <Checkbox onChange={() => {}} />
              </div>,
              <div className="flex justify-center items-center   ">
                <div className="w-[40px] h-[40px]">
                  <Image unoptimized src="/images/avif/auriculares-f-b.avif" className="object-cover w-full mask mask-squircle h-full bg-contain rounded-md" width={40} height={40} objectFit="cover" alt="product" />
                </div>
              </div>,
               <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">BL-0123456789</p>,
                            <div className="max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto">Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
                            <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">BLING</p>,
              <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">01/07/2024</p>,
              <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">1 Unidad</p>,
              <div className="flex justify-center items-center">
                <Chip status="info" text="$50.00" className="font-JetBrainsMono  self-center" />
              </div>,
              <div className="flex justify-center items-center">
                <Chip status="success" text="Pago Exitoso" className="font-JetBrainsMono self-center" />
              </div>,
              <div className="flex justify-center items-center">
                <Button icon={<Icon name={Eye} size={20} />} className="h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4" />
              </div>,
            ],
          },
          {
            data: [
              <div className="flex justify-center items-center">
                <Checkbox onChange={() => {}} />
              </div>,
              <div className="flex justify-center items-center   ">
                <div className="w-[40px] h-[40px]">
                  <Image unoptimized src="/images/avif/auriculares-f-b.avif" className="object-cover w-full mask mask-squircle h-full bg-contain rounded-md" width={40} height={40} objectFit="cover" alt="product" />
                </div>
              </div>,
               <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">BL-0123456789</p>,
                            <div className="max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto">Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
                            <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">BLING</p>,
              <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">01/07/2024</p>,
              <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">1 Unidad</p>,
              <div className="flex justify-center items-center">
                <Chip status="info" text="$50.00" className="font-JetBrainsMono  self-center" />
              </div>,
              <div className="flex justify-center items-center">
                <Chip status="success" text="Pago Exitoso" className="font-JetBrainsMono self-center" />
              </div>,
              <div className="flex justify-center items-center">
                <Button icon={<Icon name={Eye} size={20} />} className="h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4" />
              </div>,
            ],
          },
          {
            data: [
              <div className="flex justify-center items-center">
                <Checkbox onChange={() => {}} />
              </div>,
              <div className="flex justify-center items-center   ">
                <div className="w-[40px] h-[40px]">
                  <Image unoptimized src="/images/avif/auriculares-f-b.avif" className="object-cover w-full mask mask-squircle h-full bg-contain rounded-md" width={40} height={40} objectFit="cover" alt="product" />
                </div>
              </div>,
               <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">BL-0123456789</p>,
                            <div className="max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto">Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
                            <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">BLING</p>,
              <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">01/07/2024</p>,
              <p className=" text-center bling-light-text dark:bling-dark-text font-JetBrainsMono">1 Unidad</p>,
              <div className="flex justify-center items-center">
                <Chip status="info" text="$50.00" className="font-JetBrainsMono  self-center" />
              </div>,
              <div className="flex justify-center items-center">
                <Chip status="success" text="Pago Exitoso" className="font-JetBrainsMono self-center" />
              </div>,
              <div className="flex justify-center items-center">
                <Button icon={<Icon name={Eye} size={20} />} className="h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4" />
              </div>,
            ],
          },
        ]}
      />
    
    </Fragment>
  );
};
export { TableInvoicePurchased };
