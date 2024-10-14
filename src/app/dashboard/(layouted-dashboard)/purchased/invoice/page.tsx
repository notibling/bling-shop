'use client';
import React from 'react';
import { Button, Icon, Item, Section, Separator } from '@/components/atoms';
import { Pagination, SearchBar } from '@/components/molecules';
import { AlignVerticalSpacing, AltArrowDown, BillList, Cart3, ChatLine, Check, Csv, DownloadMinimalistic, History2, ListDownMinimalistic, Pdf, Printer2, SortHorizontal, Star, Times, TrashBin2, Xls } from '@/icons/tsx';
import { Dropdown, DropdownItem, TitleSection } from '@/components/organisms';
import { TableInvoicePurchased } from '@/components/Views/Dashboard/Purchased';


interface InvoicePurchasedProps {}

const InvoicePurchased: React.FC<InvoicePurchasedProps> = ({}) => {
  return (
    <>
      <Section Empty={true} className='flex-col  items-start justify-start h-fit !p-0 m-0 flex gap-4 !bg-transparent rounded-md'>
        <TitleSection icon={BillList}
          iconSize={30}
          title='Facturas de compra' 
          description='Boletas de compras y adquisiciones'
          level='h5'
          pattern={'dhb-pat-purchased'} />
      
        <div className='w-full  gap-2  grid grid-cols-2 lg:grid-cols-3 bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border p-2 rounded-md'>
          <div className='col-span-1  order-1 lg:order-1 flex flex-row gap-2 justify-start items-center z-[999] '>
            <Dropdown position='bottom-right' trigger={<Button icon={<Icon name={ListDownMinimalistic} size={20} />} text='Mostrar' className={'btn-md bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border'} />}>
              <DropdownItem className='flex flex-col min-w-[150px]'>
                <Item content='text' textClassName='text-nowrap' text='10 Facturas' suffix={<Icon name={Check} size={20} />} />
                <Item content='text' textClassName='text-nowrap' text='20 Facturas' />
                <Item content='text' textClassName='text-nowrap' text='50 Facturas' />
                <Item content='text' textClassName='text-nowrap' text='100 Facturas' />
              </DropdownItem>
            </Dropdown>

            <Dropdown position='bottom-right' trigger={<Button icon={<Icon name={AlignVerticalSpacing} size={20} />}text='Acciones' className={'btn-md bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border'} />}>
              <DropdownItem className='flex flex-col min-w-[150px]'>
                <Item content='icon' icon={<Icon name={SortHorizontal} size={20} />} textClassName='text-nowrap' text='Solicitar Devolución' />
                <Item content='icon' icon={<Icon name={ChatLine} size={20} />} textClassName='text-nowrap' text='Contactar Vendedor' />
                <Item content='icon' icon={<Icon name={Star} size={20} />} textClassName='text-nowrap' text='Hacer Reseña' />
                <Item content='icon' icon={<Icon name={TrashBin2} size={20} />} textClassName='text-nowrap' text='Eliminar compra' />
              </DropdownItem>
            </Dropdown>
         
          </div>
          <div className='col-span-2 lg:col-span-1 flex flex-row order-3 lg:order-2 gap-2 justify-center items-center'>
            <SearchBar className='w-full' placeholder='N° Factura / Producto  ' />
          </div>
          <div className='col-span-1 order-2 lg:order-3 flex flex-row gap-2  justify-end items-center'>
            <Dropdown position='bottom-left' trigger={<Button icon={<Icon name={DownloadMinimalistic} size={20} />} text='Descargar' className={'btn-md bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border'} />}>
              <DropdownItem className='flex flex-col min-w-[150px]'>
                <Item content='icon' icon={<Icon name={Csv} size={20} />} text='CSV' />
                <Item content='icon' icon={<Icon name={Pdf} size={20} />} text='PDF' />
                <Item content='icon' icon={<Icon name={Xls} size={20} />} text='XLS' />
                <Separator noText={true} borderClassName='!my-0 ' />
                <Item content='icon' icon={<Icon name={Printer2} size={20} />} text='Imprimir' />
              </DropdownItem>
            </Dropdown>

            <Dropdown trigger={<Button iconRight={<Icon name={AltArrowDown} size={20} />} text='Estados' className={'btn-md bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border'} />}>
              <DropdownItem className='flex flex-col min-w-[150px]'>
                <Item content='icon' icon={<Icon name={Cart3} size={20} />} text='Todas las compras' />
                <Item content='icon' icon={<Icon name={History2} size={20} />} text='En Progreso' />
                <Item content='icon' icon={<Icon name={Check} size={20} />} text='Completadas' />
                <Item content='icon' icon={<Icon name={Times} size={20} />} text='Canceladas' />
              </DropdownItem>
            </Dropdown>
          </div>
        </div>

        <div className='relative flex flex-col   w-full h-full bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border rounded-md '>
          <div className=' p-2'>
            <TableInvoicePurchased />
  
          </div>
          <Pagination />
        </div>
      </Section>
      
    </>
  );
};

export default InvoicePurchased;
