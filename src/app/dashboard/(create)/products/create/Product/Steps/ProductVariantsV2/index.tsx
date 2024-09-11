import { Button, Icon, Input, Item, Title } from '@/components/atoms';
import { Dropdown } from '@/components/organisms';
import {  NotesMinimalistic } from '@/icons/tsx';
import classNames from 'classnames';
import Image from 'next/image';
import { FaImage, FaPlus} from 'react-icons/fa';

function ProductVariantsV2() {
  return (
    <>
     <div className="w-full h-auto  p-4 flex items-center justify-center flex-col gap-3">
     <Title icon={<Icon name={NotesMinimalistic} size={20} color="#ffcc00" />}  title='Creador de Variantes' level='p' className={'bling-light dark:bling-dark rounded-md '} iconClassName='!p-2 !pr-0' titleClassName={'pr-3'} />
      </div>
    
      {/* ---- CONTENEDOR GENERAL---------------------------------------- */}

      <div className={classNames('w-full', 'lg:w-1/2', 'h-auto', 'flex', 'items-center', 'justify-center', 'flex-col', 'gap-3')}>
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}

        {/* ---- CONTAINER - ATRIBUTOS PRINCIPALES (PADRES) + MÁS INFORMACIÓN + BOTON CREAR VARIANTE  ----------------------------------------- */}
        <div className="w-full h-auto  bling-light dark:bling-dark-bg-5 p-2 grid grid-cols-1 lg:grid-cols-5 rounded-md gap-3">
          {/* ---- ATRIBUTOS PRINCIPALES (PADRES) ----------------------------------------- */}
          <div className="w-auto gap-4 grid grid-cols-3 col-span-1 lg:col-span-3 order-2 lg_order-1">
            <Dropdown trigger={<Button text="Atributo Padre 1" className="bling-btn-primary border col-span-1 bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark w-full h-12" />} bodyClassName="min-w-[200px] p-1">
              <Item content="text" text="Color" />
              <Item content="text" text="Talle" />
              <Item content="text" text="Tamaño" />
            </Dropdown>

            <Dropdown trigger={<Button text="Atributo Padre 2" className="bling-btn-primary border col-span-1 bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark w-full h-12" />} bodyClassName="min-w-[200px] p-1">
              <Item content="text" text="Color" />
              <Item content="text" text="Talle" />
              <Item content="text" text="Tamaño" />
            </Dropdown>
            <Dropdown trigger={<Button text="Atributo Padre 3" className="bling-btn-primary border  col-span-1 bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark w-full h-12" />} bodyClassName="min-w-[200px] p-1">
              <Item content="text" text="Color" />
              <Item content="text" text="Talle" />
              <Item content="text" text="Tamaño" />
            </Dropdown>
          </div>

          {/* ---- MÁS INFORMACION + BOTON CREATE ROW ----------------------------------------- */}
          <div className="w-auto  gap-4 grid grid-cols-3 lg:grid-cols-2 col-span-1 order-1 lg:order-2  lg:col-span-2">
            <div className="col-span-2 lg:col-span-1 items-center justify-center dark:bling-dark bling-light  flex p-2 rounded-md">
              <span className="text-xs">Más Información</span>
            </div>
            <div className="col-span-1 items-end justify-center">
              <Button icon={<FaPlus />} className="bling-btn-primary border col-span-1 bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark w-full h-12" />{' '}
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}

        {/* ---- INICIO CONTAINER - VARIANTE 1 ----------------------------------------- */}
        <div className={classNames('w-full', 'h-auto', 'border-2','border-blue-500', 'flex', 'bling-light', 'dark:bling-dark-bg-5', 'p-2', 'rounded-md', 'items-center', 'justify-center', 'flex-row', 'gap-3', 'grid', 'grid-cols-4', 'lg:grid-cols-5')}>
          {/* ---- VALORES - VARIANTE 1 ----------------------------------------- */}
          <div className="col-span-4 grid-cols-4 grid gap-3">
            <div className="col-span-4 grid-cols-2 lg:grid-cols-4 grid gap-3">
              <Dropdown trigger={<Button text="Valor Hijo 1" className="bling-btn-primary border col-span-1 bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark w-full h-12" />} bodyClassName="min-w-[200px] p-1">
                <Item content="text" text="Color" />
                <Item content="text" text="Talle" />
                <Item content="text" text="Tamaño" />
              </Dropdown>
              <Dropdown trigger={<Button text="Valor Hijo 2" className="bling-btn-primary border col-span-1 bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark w-full h-12" />} bodyClassName="min-w-[200px] p-1">
                <Item content="text" text="Color" />
                <Item content="text" text="Talle" />
                <Item content="text" text="Tamaño" />
              </Dropdown>
              <Dropdown trigger={<Button text="Valor Hijo 3" className="bling-btn-primary border col-span-1 bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark w-full h-12" />} bodyClassName="min-w-[200px] p-1">
                <Item content="text" text="Color" />
                <Item content="text" text="Talle" />
                <Item content="text" text="Tamaño" />
              </Dropdown>
              <Button text="Imagen" icon={<FaImage />} className="bling-btn-primary justify-between dark:bling-btn-primary-dark col-span-1 p-6" />
            </div>

            <div className="col-span-4 grid-cols-2 lg:grid-cols-4 grid gap-3">
              <Input
                placeholder="SKU"
                className="col-span-1"
                left={
                  <div className={classNames('flex', 'items-center')}>
                    <span className={`rounded-full px-2 p-1 bg-yellow-500  text-nowrap text-xs overflow-hidden !text-white font-bold lg:text-md  `}>SKU</span>
                  </div>
                }
              />
                 <Input
                placeholder="0"
                className="col-span-1"
                left={
                  <div className={classNames('flex', 'items-center')}>
                    <span className={`rounded-full px-2 p-1  text-nowrap text-xs overflow-hidden !text-white font-bold lg:text-md bg-violet-500 `}>Stock:</span>
                  </div>
                }
              />
              <Input
                placeholder="0.00"
                className="col-span-1"
                left={
                  <div className={classNames('flex', 'items-center')}>
                    <span className={`rounded-full px-2 p-1  text-nowrap text-xs overflow-hidden !text-white font-bold lg:text-md bg-orange-400 `}>Antes:</span>
                  </div>
                }
              />
              <Input
                placeholder="0.00"
                className="col-span-1"
                left={
                  <div className={classNames('flex', 'items-center')}>
                    <span className={`rounded-full px-2 p-1  text-nowrap text-xs overflow-hidden !text-white font-bold lg:text-md bg-emerald-400 `}>Ahora:</span>
                  </div>
                }
              />
           
            </div>
          </div>

          {/* ---- IMAGEN - VARIANTE 1 ----------------------------------------- */}
          <div className="col-span-1 grid-cols-1 grid bling-light dark:bling-dark rounded-md p-1 ">
            <div className="w-auto h-auto flex flex-col gap-2 lg:flex-row justify-stretch items-center overflow-hidden ">
              <Image unoptimized src="https://via.placeholder.com/100" width={100} height={100} className="aspect-square lg:order-1 order-2  rounded-md " alt="image" />
              <div className="w-full  h-full bg-blue-500 rounded-md p-0 m-0 lg:order-2 order-1 justify-center items-center flex-row  flex  ">
                <span className=" lg:rotate-90 text-white text-sm lg:absolute  lg:-translate-x-0 lg:-translate-y-0  ">Principal</span>
              </div>
            </div>
          </div>
        </div>
        {/*  ---- FIN CONTAINER - VARIANTE 1 ----------------------------------------- */}
        <Button text="Añadir Variante" className="order-2 w-[200px] btn-md bling-btn-primary dark:bling-btn-primary-dark" />
      </div>
      {/*  ---- FIN CONTENEDOR GENERAL---------------------------------------- */}
    </>
  );
}

export { ProductVariantsV2 };
