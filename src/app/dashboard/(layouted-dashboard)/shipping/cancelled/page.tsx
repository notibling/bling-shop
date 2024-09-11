'use client';
import React from 'react';
import { Button, Icon, Item, Section, Separator, Title } from '@/components/atoms';
import { SearchBar, Pagination } from '@/components/molecules';
import { AlignVerticalSpacing, Check, Csv, DownloadMinimalistic, ListDownMinimalistic, Pause, Pdf, Pen2, Play, Printer2, Times, TrashBin2, Xls } from '@/icons/tsx';
import { Dropdown, DropdownItem, TitleSection } from '@/components/organisms';
import { TableCancelledShipping } from '@/components/Views/Dashboard/Shipping';



interface CancelledShippingProps {}

const CancelledShipping: React.FC<CancelledShippingProps> = ({}) => {
  return (
    <>

      <Section Empty={true} className="flex-col  items-start justify-start h-fit !p-0 m-0 flex gap-4 !bg-transparent rounded-md">
      
      <TitleSection icon={Times}
                      iconSize={30}
                      title={
                        <>
                         <div className="w-auto h-auto flex-row justify-start items-center flex gap-1"><span>Envíos</span><span className='bling-status bling-status-error dark:bling-status-error-dark font-JetBrainsMono leading-normal h-6 items-center justify-center '>Cancelados</span></div> 
                        </>
                      } 
                      description="Estos envíos no llegarán a destino"
                      level="h5"
                      pattern={'dhb-pat-shipping'} />
    

        <div className="w-full  gap-2  grid grid-cols-2 lg:grid-cols-3 bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border p-2 rounded-md">
          <div className="col-span-1  order-1 lg:order-1 flex flex-row gap-2 justify-start items-center z-[999] ">
          <Dropdown position='bottom-right' trigger={<Button icon={<Icon name={ListDownMinimalistic} size={20} />} text="Mostrar" className={'btn-md bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border'} />}>
              <DropdownItem className="flex flex-col min-w-[150px]">
                <Item content="text"  textClassName="text-nowrap" text="10 Productos" suffix={<Icon name={Check} size={20} />} />
                <Item content="text"  textClassName="text-nowrap" text="20 Productos" />
                <Item content="text"  textClassName="text-nowrap" text="50 Productos" />
                <Item content="text"  textClassName="text-nowrap" text="100 Productos" />
              </DropdownItem>
            </Dropdown>

            <Dropdown position='bottom-right'  trigger={<Button icon={<Icon name={AlignVerticalSpacing} size={20} />}text="Acciones" className={'btn-md bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border'} />}>
              <DropdownItem className="flex flex-col min-w-[150px]">
       
                <Item content="icon" icon={<Icon name={TrashBin2} size={20} />} textClassName="text-nowrap" text="Eliminar" />
              </DropdownItem>
            </Dropdown>
           
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-row order-3 lg:order-2 gap-2 justify-center items-center">
            <SearchBar className="w-full" placeholder="N° Envío  " />
          </div>
          <div className="col-span-1 order-2 lg:order-3 flex flex-row gap-2  justify-end items-center">
          <Dropdown position='bottom-left'  trigger={<Button icon={<Icon name={DownloadMinimalistic} size={20} />} text="Descargar" className={'btn-md bling-btn-primary dark:bling-btn-primary-dark border bling-light-border dark:bling-dark-border'} />}>
          <DropdownItem className="flex flex-col min-w-[150px]">
                <Item content="icon" icon={<Icon name={Csv} size={20} />} text="CSV" />
                <Item content="icon" icon={<Icon name={Pdf} size={20} />} text="PDF" />
                <Item content="icon" icon={<Icon name={Xls} size={20} />} text="XLS" />
                <Separator noText={true} borderClassName="!my-0 " />
                <Item content="icon" icon={<Icon name={Printer2} size={20} />} text="Imprimir" />
              </DropdownItem>
            </Dropdown>

            
          </div>
        </div>

        <div className="relative flex flex-col   w-full h-full bling-light dark:bling-dark-bg-1 border bling-light-border dark:bling-dark-border rounded-md ">
          <div className=" p-2">
            <TableCancelledShipping />
  
          </div>
         <Pagination />
        </div>
      </Section>
      
    </>
  );
};

export  default CancelledShipping  ;