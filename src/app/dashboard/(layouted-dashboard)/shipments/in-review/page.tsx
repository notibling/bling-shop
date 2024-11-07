'use client';
import React from 'react';
import { Button, Icon, Item, Section, Separator } from '@/components/atoms';
import { SearchBar } from '@/components/molecules';
import { AlignVerticalSpacing, ChatLine, Check, Csv, DownloadMinimalistic, EyeScan, ListDownMinimalistic, Pdf, Pen2, Printer2, TrashBin2, Xls } from '@/icons/tsx';
import { Dropdown, DropdownItem, TitleSection } from '@/components/organisms';
import { TableInReviewShipping } from '@/components/Views/Dashboard/Shipping';


interface InReviewShippingProps {}

const InReviewShipping: React.FC<InReviewShippingProps> = ({}) => {
  return (
    <>
      <Section Empty={true} className='flex-col !h-auto items-start justify-start self-start !p-0 m-0 flex gap-4 !bg-transparent rounded-md'>

        <TitleSection icon={EyeScan} iconSize={30} level='h5' title={
          <>
            <div className='w-auto h-auto flex-row justify-start items-center flex gap-1'><span>Envíos</span><span className='bling-status font-JetBrainsMono leading-normal  bling-status-attention dark:bling-status-attention-dark h-6 items-center justify-center '>En Revisión</span></div> 
          </>
        } description='Envíos con observaciones pendientes'
        pattern={'dhb-pat-sales'} />


        <div className='w-full  gap-2  grid grid-cols-2 lg:grid-cols-3 bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border p-2 rounded-md'>
          <div className='col-span-1  order-1 lg:order-1 flex flex-row gap-2 justify-start items-center z-[999] '>
            <Dropdown position='bottom-right' trigger={<Button icon={<Icon name={ListDownMinimalistic} size={20} />} text='Mostrar' className={'btn-md bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border'} />}>
              <DropdownItem className='flex flex-col min-w-[150px]'>
                <Item content='text' textClassName='text-nowrap' text='10 Productos' suffix={<Icon name={Check} size={20} />} />
                <Item content='text' textClassName='text-nowrap' text='20 Productos' />
                <Item content='text' textClassName='text-nowrap' text='50 Productos' />
                <Item content='text' textClassName='text-nowrap' text='100 Productos' />
              </DropdownItem>
            </Dropdown>

            <Dropdown position='bottom-right' trigger={<Button icon={<Icon name={AlignVerticalSpacing} size={20} />}text='Acciones' className={'btn-md bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border'} />}>
              <DropdownItem className='flex flex-col min-w-[150px]'>
                <Item content='icon' icon={<Icon name={ChatLine} size={20} />} textClassName='text-nowrap' text='Apelar' />
                <Item content='icon' icon={<Icon name={Pen2} size={20} />} textClassName='text-nowrap' text='Editar' />
                <Item content='icon' icon={<Icon name={TrashBin2} size={20} />} textClassName='text-nowrap' text='Eliminar' />
              </DropdownItem>
            </Dropdown>
            
          </div>
          <div className='col-span-2 lg:col-span-1 flex flex-row order-3 lg:order-2 gap-2 justify-center items-center'>
            <SearchBar className='w-full' placeholder='SKU / Producto  ' />
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

            
          </div>
        </div>

        <div className='relative h-auto flex flex-col w-full bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border rounded-md '>
          <div className='p-2 h-auto  relative'>
            <TableInReviewShipping />
  
          </div>
         
        </div>
      </Section>
      
    </>
  );
};

export default InReviewShipping;
