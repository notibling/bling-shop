'use client';
import React, { Fragment, useState } from 'react';
import * as productOperations from '@/contexts/GlobalState/product/operations';
import { Button, Checkbox, Chip, Icon, Item } from '@/components/atoms';
import { usePromise, usePromiseState } from '@/hooks';
import { BaseTable, Dropdown, DropdownItem, useToasts } from '@/components/organisms';
import { ChatLine, Eye, Pen2, Times, TrashBin2 } from '@/icons/tsx';
import Image from 'next/image';
import { Pagination } from '@/components/molecules';


interface ITableInProgressSalesProps {}

const TableInProgressSales: React.FC<ITableInProgressSalesProps> = ({}) => {
  const toasts = useToasts();
  const [reloader, setReloader] = useState<number>(0);

  const { result: productsResult } = usePromiseState(() => productOperations.fetchProductDisplays({ page: 1, pageSize: 10 }), [reloader]);
  const { perform: performDelete } = usePromise(productOperations.deleteProduct);

  const productsDisplays = productsResult?.productDisplays ?? [];

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
        rowHeaderClassName='text-center '
        headers={[<Checkbox key='checkbox-header' onChange={() => {}} />, 'Portada', 'SKU', 'Producto', 'Fecha de Creación', 'Stock', 'Precio', 'Estado', 'Anotaciones', 'Ver']}
        rows={[
        
          {
            data: [
              <div className='flex justify-center items-center h-auto'>
                <Checkbox onChange={() => {}} />
              </div>,
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <p className=' text-left bling-light-text dark:bling-dark-text font-JetBrainsMono'>BLING-12345</p>,
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>25 Uni.</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              
              <Dropdown position='bottom-left' trigger={ <Chip status='warning' text='En Progreso' className='font-JetBrainsMono self-center hover:scale-105  transition-all ease-in-out duration-150' />}>
                <DropdownItem className='flex flex-col min-w-[150px]'>
                  <Item content='icon' icon={<Icon name={ChatLine} size={20} />} textClassName='text-nowrap' text='Contactar Cliente' />
                
                  <Item content='icon' icon={<Icon name={Times} size={20} />} textClassName='text-nowrap' text='Cancelar Venta' />
                </DropdownItem>
              </Dropdown>,             
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>El producto no corresponde a la categoría asignada</div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center h-auto'>
                <Checkbox onChange={() => {}} />
              </div>,
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <p className=' text-left bling-light-text dark:bling-dark-text font-JetBrainsMono'>BLING-12345</p>,
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>25 Uni.</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              
              <Dropdown position='bottom-left' trigger={ <Chip status='warning' text='En Progreso' className='font-JetBrainsMono self-center hover:scale-105  transition-all ease-in-out duration-150' />}>
                <DropdownItem className='flex flex-col min-w-[150px]'>
                  <Item content='icon' icon={<Icon name={ChatLine} size={20} />} textClassName='text-nowrap' text='Contactar Cliente' />
                
                  <Item content='icon' icon={<Icon name={Times} size={20} />} textClassName='text-nowrap' text='Cancelar Venta' />
                </DropdownItem>
              </Dropdown>,             
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>El producto no corresponde a la categoría asignada</div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center h-auto'>
                <Checkbox onChange={() => {}} />
              </div>,
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <p className=' text-left bling-light-text dark:bling-dark-text font-JetBrainsMono'>BLING-12345</p>,
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>25 Uni.</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              
              <Dropdown position='bottom-left' trigger={ <Chip status='warning' text='En Progreso' className='font-JetBrainsMono self-center hover:scale-105  transition-all ease-in-out duration-150' />}>
                <DropdownItem className='flex flex-col min-w-[150px]'>
                  <Item content='icon' icon={<Icon name={ChatLine} size={20} />} textClassName='text-nowrap' text='Contactar Cliente' />
                
                  <Item content='icon' icon={<Icon name={Times} size={20} />} textClassName='text-nowrap' text='Cancelar Venta' />
                </DropdownItem>
              </Dropdown>,             
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>El producto no corresponde a la categoría asignada</div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center h-auto'>
                <Checkbox onChange={() => {}} />
              </div>,
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <p className=' text-left bling-light-text dark:bling-dark-text font-JetBrainsMono'>BLING-12345</p>,
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>25 Uni.</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              
              <Dropdown position='bottom-left' trigger={ <Chip status='warning' text='En Progreso' className='font-JetBrainsMono self-center hover:scale-105  transition-all ease-in-out duration-150' />}>
                <DropdownItem className='flex flex-col min-w-[150px]'>
                  <Item content='icon' icon={<Icon name={ChatLine} size={20} />} textClassName='text-nowrap' text='Contactar Cliente' />
                
                  <Item content='icon' icon={<Icon name={Times} size={20} />} textClassName='text-nowrap' text='Cancelar Venta' />
                </DropdownItem>
              </Dropdown>,             
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>El producto no corresponde a la categoría asignada</div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          },
          {
            data: [
              <div className='flex justify-center items-center h-auto'>
                <Checkbox onChange={() => {}} />
              </div>,
              <div className='flex justify-center items-center   '>
                <div className='w-[40px] h-[40px]'>
                  <Image unoptimized src='/images/avif/auriculares-f-b.avif' className='object-cover w-full mask mask-squircle h-full bg-contain rounded-md' width={40} height={40} objectFit='cover' alt='product' />
                </div>
              </div>,
              <p className=' text-left bling-light-text dark:bling-dark-text font-JetBrainsMono'>BLING-12345</p>,
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>Botella de Agua Paraarraica de Agua Paraarraicade Agua Paraarraicade Agua Paraarraicade Agua Paraarraica</div>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>01/07/2024</p>,
              <p className=' text-center bling-light-text dark:bling-dark-text font-JetBrainsMono'>25 Uni.</p>,
              <div className='flex justify-center items-center'>
                <Chip status='info' text='$50.00' className='font-JetBrainsMono  self-center' />
              </div>,
              
              <Dropdown position='bottom-left' trigger={ <Chip status='warning' text='En Progreso' className='font-JetBrainsMono self-center hover:scale-105  transition-all ease-in-out duration-150' />}>
                <DropdownItem className='flex flex-col min-w-[150px]'>
                  <Item content='icon' icon={<Icon name={ChatLine} size={20} />} textClassName='text-nowrap' text='Contactar Cliente' />
                
                  <Item content='icon' icon={<Icon name={Times} size={20} />} textClassName='text-nowrap' text='Cancelar Venta' />
                </DropdownItem>
              </Dropdown>,             
              <div className='max-w-[250px]  max-lines-2 overflow-ellipsis !line-clamp-2 text-wrap block  h-auto'>El producto no corresponde a la categoría asignada</div>,
              <div className='flex justify-center items-center'>
                <Button icon={<Icon name={Eye} size={20} />} className='h-10 w-10 rounded-md  dark:bling-btn-primary-dark bling-btn-primary border  dark:border-bling-dark-bg-5 border-bling-light-bg-4' />
              </div>
            ]
          }
          
        
        ]}
      />
      <Pagination />
    </Fragment>
  );
};
export { TableInProgressSales };
