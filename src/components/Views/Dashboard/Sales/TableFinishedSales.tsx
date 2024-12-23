'use client';
import React, { Fragment, useState } from 'react';
import * as productOperations from '@/contexts/GlobalState/product/operations';
import { Button, Checkbox, Chip, Icon } from '@/components/atoms';
import { usePromise, usePromiseState } from '@/hooks';
import { BaseTable, useToasts } from '@/components/organisms';
import { Eye } from '@/icons/tsx';
import Image from 'next/image';
import { UserProfile } from '@/components/molecules';

interface ITableFinishedSalesProps {}

const TableFinishedSales: React.FC<ITableFinishedSalesProps> = ({}) => {
  const toasts = useToasts();
  const [reloader, setReloader] = useState<number>(0);

  const { result: productsResult } = usePromiseState(() => productOperations.fetchProductDisplays({ page: 1, pageSize: 10 }), [reloader]);
  const { perform: performDelete } = usePromise(productOperations.deleteProduct);
  // eslint-disable-next-line
  const productsDisplays = productsResult?.productDisplays ?? [];
  // eslint-disable-next-line
  const handleDelete = async(productDisplayId: number) => {
    const result = await performDelete(productDisplayId);

    if (result.success) {
      toasts.success('Producto eliminado satisfactoriamente', 4000);

      setReloader((prev) => prev + 1);
    } else {
      toasts.error('Hemos tenido un problema eliminando el producto', 4000);
    }
  };

  return (
    <Fragment>
      <BaseTable
        rowHeaderClassName='text-center'
       
        headers={[<Checkbox key='checkbox-header' onChange={() => {}} />, 'Portada', 'cliente - id - contacto', 'SKU - Producto', 'Fecha de venta', 'Precio', 'Estado', 'Ver']}
        rows={[
          {
            data: [
              <div className='flex justify-center items-center'>
                <Checkbox onChange={() => {}} />
              </div>,
             
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <div className='flex justify-start items-start'>
                <UserProfile
                  name='Whashington'
                  email='WhashingtonSutlook.com'
                  imageUrl='/images/avif/auriculares-f-b.avif'
                />
              </div>,
          
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>BLING-12345 - Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Chip status='success' text='Finalizado' className='font-JetBrainsMono self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center'>
                <Checkbox onChange={() => {}} />
              </div>,
             
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <div className='flex justify-start items-start'>
                <UserProfile
                  name='Whashington'
                  email='WhashingtonSutlook.com'
                  imageUrl='/images/avif/auriculares-f-b.avif'
                />
              </div>,
             
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>BLING-12345 -  Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Chip status='success' text='Finalizado' className='font-JetBrainsMono self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center'>
                <Checkbox onChange={() => {}} />
              </div>,
             
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <div className='flex justify-start items-start'>
                <UserProfile
                  name='Whashington'
                  email='WhashingtonSutlook.com'
                  imageUrl='/images/avif/auriculares-f-b.avif'
                />
              </div>,
          
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>BLING-12345 - Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Chip status='success' text='Finalizado' className='font-JetBrainsMono self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center'>
                <Checkbox onChange={() => {}} />
              </div>,
             
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <div className='flex justify-start items-start'>
                <UserProfile
                  name='Whashington'
                  email='WhashingtonSutlook.com'
                  imageUrl='/images/avif/auriculares-f-b.avif'
                />
              </div>,
          
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>BLING-12345 - Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Chip status='success' text='Finalizado' className='font-JetBrainsMono self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center'>
                <Checkbox onChange={() => {}} />
              </div>,
             
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <div className='flex justify-start items-start'>
                <UserProfile
                  name='Whashington'
                  email='WhashingtonSutlook.com'
                  imageUrl='/images/avif/auriculares-f-b.avif'
                />
              </div>,
          
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>BLING-12345 - Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Chip status='success' text='Finalizado' className='font-JetBrainsMono self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center'>
                <Checkbox onChange={() => {}} />
              </div>,
             
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <div className='flex justify-start items-start'>
                <UserProfile
                  name='Whashington'
                  email='WhashingtonSutlook.com'
                  imageUrl='/images/avif/auriculares-f-b.avif'
                />
              </div>,
          
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>BLING-12345 - Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Chip status='success' text='Finalizado' className='font-JetBrainsMono self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center'>
                <Checkbox onChange={() => {}} />
              </div>,
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <p className=' text-left bling-light-text dark:bling-dark-text font-JetBrainsMono'>BLING-12345</p>,
              <div className='max-w-[250px] max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>Botella de Agua Para Viaje 1.5L Ergonómica con mango de plastico y agarradera térmica</div>,

              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Chip status='success' text='Finalizado' className='font-JetBrainsMono self-center' />
              </div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          }
        ]}
      />
     
    </Fragment>
  );
};
export { TableFinishedSales };
