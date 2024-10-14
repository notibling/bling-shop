import React from 'react';
import classNames from 'classnames';
import { Button, Checkbox } from '@/components/atoms';
import Image from 'next/image';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Popover } from '@/components/organisms';
import { useToasts } from '@/components/organisms/Toasts';
import { IProductDisplay } from '@/entities/ProductDisplay';

interface ProductDashboardProps {
  productDisplay: IProductDisplay;
  onDelete: (id: number) => void;
  title?: string;
  sku?: string;
  category?: string;
  stock?: string;
  price?: string;
  createdAt?: string;
  mainImage?: string;
}

const ProductDashboard: React.FC<ProductDashboardProps> = ({ productDisplay, onDelete, title, sku, category, stock, price, createdAt, mainImage }) => {
  const toasts = useToasts();

  return (
    <>
      {/* //* PRODUCTO  "<tr> </tr>" */}

      <tr className='relative '>
        {/* //? Polarizado - Blur + Texto Alerta + Texto Contacto + Link contacto */}
        {/*  <div className={classNames('absolute', 'w-full', 'h-full', 'top-0', 'button-0', 'left-0', 'right-0', 'mx-auto', 'backdrop-blur-sm', 'z-10', 'transition-all', 'ease-in-out', 'flex', 'items-center', 'justify-center', 'flex-col')}>
          <div className="bling-badge font-bold text-sm">'SKU-0000' - Este producto infringe nuestras Políticas</div>
          <div className="text-xs py-1 font-bold">
            ¿Cometimos un error?{' '}
            <a href="">
              <b>
                <u>Comunícate aquí</u>
              </b>
            </a>
            .
          </div>
        </div>*/}
        {/* //? Comienza Contenido de Fila */}
        {/* //TODO  CHECKBOX SELECCIONAR PRODUCTO */}
        <td className='w-[20px] p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 text-center hover:bg-blue-gray-50 '>
          <Checkbox onChange={() => { }}></Checkbox>
        </td>
        {/* //TODO  IMAGEN DE PRODUCTO */}
        <td className='p-4  transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 text-center hover:bg-blue-gray-50'>
          {' '}
          <Image src={mainImage ?? ''} width='100' height='100' alt='Product' unoptimized className={classNames('relative', 'inline-block', 'h-10', 'w-10', '!rounded-brand', 'object-cover', 'object-center')} />
        </td>
        {/* //TODO  TITULO  + SKU */}
        <td className='p-2 border-b border-blue-gray-50'>
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <p className='max-w-[180px] hover:overflow-x-visible hover:bg-white block  text-sm antialiased font-normal text-slate-700 text-wrap leading-4 lead text-ellipsis !line-clamp-2 overflow-x-hidden'>{title}</p>
              <p className='block max-w-[180px] hover:overflow-visible  text-sm antialiased font-normal leading-normal text-slate-700 opacity-70 text-nowrap text-ellipsis overflow-x-hidden'>{sku}</p>
            </div>
          </div>
        </td>
        {/* //TODO  CATEGORÍA  + FECHA DE CREACIÓN */}
        <td className='p-4 border-b border-blue-gray-50 hidden lg:table-cell'>
          <div className='flex flex-col'>
            <p className='block text-sm antialiased font-normal leading-normal text-slate-700'>{category}</p>
            <p className='block text-sm antialiased font-normal leading-normal text-slate-700 opacity-70'>{createdAt}</p>
          </div>
        </td>
        {/* //TODO  PRECIO ACTUAL */}
        <td className='p-4 border-b border-blue-gray-50h hidden lg:table-cell'>
          <div className='flex items-center justify-center'>
            <div className='text-center px-2 py-1 font-sans text-xs font-bold text-blue-900 uppercase rounded-md select-none whitespace-nowrap bg-blue-500/20'>
              <span className=''>{price}</span>
            </div>
          </div>
        </td>
        {/* //TODO  UNIDADES DISPONIBLES */}
        <td className='p-4 border-b border-blue-gray-50 hidden lg:table-cell'>
          <div className='flex items-center justify-center'>
            <div className='text-center px-2 py-1 font-sans text-xs font-bold text-green-900  rounded-md select-none whitespace-nowrap bg-green-500/20'>
              <span className=''>{stock}</span>
            </div>
          </div>
        </td>
        {/* //TODO  BOTONES DE MODIFICACIÓN */}
        <td className='p-4 border-b border-blue-gray-50'>
          <div className='flex items-center gap-2 justify-center'>
            <Popover toggle bodyClassName={classNames('w-[200px]')} trigger={
              <button className='w-10 h-10 items-center justify-center rounded-brand flex bg-slate-100 p-0 text-slate-500 hover:bg-slate-200 hover:text-slate-700 ' type='button'>
                <FaTrash className='w-5 h-5 flex' />
              </button>
            }>
              {
                ({ close }) => (
                  <>
                    <p className={classNames('text-xs')}>¿Estas seguro de eliminar este producto?</p>

                    <Button onClick={() => { onDelete(productDisplay.id); close(); }} icon={<FaTrash />} className={classNames(
                      'mt-2', '!text-xs', 'bg-red-700',
                      'text-white', 'py-3',
                      'px-2', '!outline-none', 'gap-2', 'w-full'
                    )} text='Eliminar producto' />
                  </>
                )
              }
            </Popover>

            <button onClick={() => toasts.show({
              message: Date.now().toString().slice(-10),
              type: 'success',
              duration: 4000
            })} className='w-10 h-10 items-center justify-center rounded-brand flex bg-slate-100 p-0 text-slate-500 hover:bg-slate-200 hover:text-slate-700 ' type='button'>
              <FaEdit className='w-5 h-5 flex' />
            </button>

          </div>
        </td>
        <td className='p-4 border-b border-blue-gray-50 hidden lg:table-cell'>
          <div className='flex items-center justify-center p-0 m-0 h-auto'>
            <input type='checkbox' className='toggle toggle-success' checked />
          </div>
        </td>
        {/* //? Finaliza Contenido de Fila */}
      </tr>
      {/* //* Finaliza PRODUCTO */}
    </>
  );
};

export { ProductDashboard };
