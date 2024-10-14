'use client';
import React from 'react';
import classNames from 'classnames';
import { Button, Title, Section, Icon, AddToCartButton } from '@/components/atoms';
import Image from 'next/image';
import { Star } from '@/icons/tsx';
import { useDarkMode } from '@/hooks';

interface BestSellerProps {
  title?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  className?: string;
  imageAlt?: string;
}
const productDetails = {
  discount: 20, // Descuento en porcentaje
  badgeSymbol: '$', // Símbolo de la moneda
  priceBefore: '1,500', // Precio antes del descuento (sin los centavos)
  centsBefore: '99', // Centavos del precio antes del descuento
  badge: 'UY', // Etiqueta para mostrar el tipo de precio
  price: '1,200', // Precio actual (sin los centavos)
  cents: '50' // Centavos del precio actual
};
const BestSeller: React.FC<BestSellerProps> = ({ imageAlt }) => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <Section className=' py-10' classNameContainer='items-stretch justify-stretch '>
        {/*
        //todo --------------------------------------------- CARD EN DESKTOP (INICIO) 
        */}
        <div className={classNames('w-full', 'lg:w-4/12', 'h-auto', 'flex', 'text-sm', 'box-border', 'overflow-hidden', 'aspect-square', 'rounded-2xl', 'flex-grow', 'bg-contain')}>
          <Image
            unoptimized
            src={'/images/webp/banners/f-b.webp'}
            alt={imageAlt ?? ''}
            width='100'
            height='100'
            className={classNames('flex', 'bg-contain', 'bg-center', 'bg-no-repeat', 'text-sm', 'flex-grow', 'w-full', 'h-full', 'rounded-xl', 'aspect-square')}
          />
        </div>

        <div className={classNames('w-full', 'lg:w-5/12', 'flex-0', 'h-auto', 'flex-col', 'flex')}>
          <span className={classNames('w-fit bling-badge text-xs py-1  mb-2')}>MÁS VENDIDO</span>

          {/*
            //* --------------------------------------------- CARD EN MOBILE (FIN) 
            */}
          <Title
            title='Titulo de producto 60 caracteres propuesta valor o lo que sea'
            titleClassName=''
            descriptionClassName='leading-5'
            level='h3'
            description='Descripción breve de producto Lorem ipsum dolor sit, a de producto Lorem ipsum dolmet consectetur adipisicing elit. Laborum praesentium corporis cumque est deserunt eveniet fugiat quibusdam deleniti voluptatibus dolorem esse, commodi, doloribus animi. Quos, id
            odit? In, dolores vero!'
          />

          <div className={classNames('w-full', 'h-full', 'flex', 'lg:flex-row', 'flex-col-reverse', 'gap-5', 'lg:gap-0', 'py-2')}>
            <div className={classNames('w-full', 'lg:w-8/12', 'h-auto')}>
              <div className={classNames('w-full', 'h-auto', 'flex', 'flex-row', 'flex-wrap', 'py-2', 'gap-2')}>
                <span className={classNames('w-auto', 'border-none', 'text-nowrap', 'h-auto', 'badge', 'text-xs', 'dark:bg-slate-700', 'dark:text-slate-400', 'px-2')}>Envío Gratis</span>
                <span className={classNames('w-auto', 'border-none', 'text-nowrap', 'h-auto', 'badge', 'text-xs', 'dark:bg-slate-700', 'dark:text-slate-400', 'px-2')}>Llega hoy mismo</span>
                <span className={classNames('w-auto', 'border-none', 'text-nowrap', 'h-auto', 'badge', 'text-xs', 'dark:bg-slate-700', 'dark:text-slate-400', 'px-2')}>Hasta 12 Cuotas</span>
                <span className={classNames('w-auto', 'border-none', 'text-nowrap', 'h-auto', 'badge', 'text-xs', 'dark:bg-slate-700', 'dark:text-slate-400', 'px-2')}>Retiro en local</span>
              </div>
            </div>
            <div className={classNames('w-full', 'lg:w-4/12', 'flex', 'h-auto')}>
              <span className={classNames('w-full', 'h-auto', 'text-sm', 'font-bold', 'leading-9', 'text-slate-500')}></span>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between order-5 w-full h-auto p-2 bling-light dark:bling-dark rounded-md lg:order-5 text-slate-700'>
            {productDetails.discount && <div className='flex flex-row items-center justify-center h-auto px-3 py-1 text-xs text-white uppercase bg-green-500 border border-green-400 rounded-full w-fit'>Ahorrás: %{productDetails.discount}</div>}
            <div className='flex flex-row items-center justify-center h-auto w-fit'>
              <div className='flex flex-col items-start justify-start h-auto px-2 leading-5 w-fit'>
                <span className='text-xs text-start'>Antes:</span>
                <span className='text-sm text-start'>
                  <s>
                    {productDetails.badgeSymbol}
                    {productDetails.priceBefore}.{productDetails.centsBefore}
                  </s>
                </span>
              </div>
              <div className='flex flex-row items-center justify-center h-auto gap-1 px-2 font-bold leading-5 w-fit text-slate-700 dark:text-slate-300'>
                <span className='uppercase text-xs text-slate-700 dark:text-slate-100'>{productDetails.badge}</span>
                <span className=' text-slate-700 dark:text-slate-100'>{productDetails.badgeSymbol}</span>
                <span className='text-4xl text-slate-700 dark:text-slate-100'>{productDetails.price}</span>
                <span className='text-slate-700 dark:text-slate-100'>,{productDetails.cents}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames('w-full', 'grid', 'grid-cols-2', 'lg:grid-cols-1', 'lg:w-[250px]', 'h-auto', 'justify-between', 'items-stretch', 'flex-col', 'gap-2', 'flex')}>
          <div
            className={classNames(
              'w-full',
              'h-auto',
              'flex',
              'text-sm',
              'box-border',
              'overflow-hidden',
              'aspect-square',
              'bg-white',
              'rounded-2xl',
              'col-span-1',
              'bg-contain'
            )}
          >
            <Image
              unoptimized
              src={'/images/webp/banners/f-b2.webp'}
              alt={imageAlt ?? ''}
              width='100'
              height='100'
              className={classNames('flex', 'bg-contain', 'bg-center', 'bg-no-repeat', 'text-sm', 'w-full', 'h-full', 'rounded-xl', 'aspect-square')}
            />
          </div>
          <div className={classNames('w-full', 'justify-between', 'flex', 'flex-col', 'col-span-1', 'h-auto', 'hyphens-auto', 'truncate', 'text-balance')}>
            <table className={classNames('w-full', 'rounded-md', 'overflow-hidden', 'table-fixed', 'p-2', 'text-center')}>
              {/* head */}
              <thead>
                <tr className={classNames('w-full', 'text-center', 'bling-light-bg-1', 'dark:bling-dark-bg-1', 'text-white', 'text-xs', 'overflow-hidden', 'text-balance')}>
                  <th className={classNames('w-10', 'text-center', 'bling-light-text', 'dark:text-white', 'p-2')}>  TOP</th>
                  <th className={classNames('w-full', 'text-center', 'items-center', 'flex', 'flex-row', 'p-2')}>
                    <div className={classNames('w-full', 'text-center', 'text-nowrap', 'flex', 'flex-nowrap', 'items-center', 'justify-center')}>
                    
                      <span className={classNames('mx-2', 'h-auto', 'bling-light-text', 'bling-light-text', 'dark:text-white')}>Más vendidos</span>
          
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className={classNames('w-full', 'bling-light-bg-4', 'bling-light-text', 'dark:text-white', 'dark:bling-dark-bg-2', 'text-white', 'text-xs')}>
                  <th className={classNames('w-10', 'text-center', 'p-2')}>1</th>
                  <td className={classNames('w-full', 'h-auto', 'truncate', 'overflow-hidden', 'block', 'line-clamp-2', 'text-left', 'p-2')}>0asda 00000 00000 0000 000 0000000 0000 0000000 00000 0000000 000 00000 000</td>
                </tr>
                {/* row 2 */}
                <tr className={classNames('w-full', 'bling-light-bg-3', 'bling-light-text', 'dark:text-white', 'dark:bling-dark-bg-4', 'text-white', 'text-xs', 'overflow-hidden', 'text-balance')}>
                  <th className={classNames('w-10', 'text-center', 'p-2')}>2</th>
                  <td className={classNames('w-full', 'h-auto', 'truncate', 'overflow-hidden', 'block', 'line-clamp-2', 'p-2')}>Taper increiblemente normal con tapa que no cierra y más cosas que tampoco trae.</td>
                </tr>
                {/* row 3 */}
                <tr className={classNames('w-full', 'bling-light-bg-2', 'bling-light-text', 'dark:text-white', 'dark:bling-dark-bg-5', 'text-white', 'text-xs', 'overflow-hidden', 'text-balance')}>
                  <th className={classNames('w-10', 'text-center', 'p-2')}>3</th>
                  <td className={classNames('w-full', 'h-auto', 'truncate', 'overflow-hidden', 'block', 'line-clamp-2', 'p-2')}>Taper increiblemente normal con tapa que no cierra y más cosas que tampoco trae.</td>
                </tr>
              </tbody>
            </table>
         
            <div className={classNames('w-full', 'h-32', 'p-1', 'rounded-md', 'flex', 'flex-row', 'gap-2', 'h-auto', 'hyphens-auto', 'truncate', 'text-balance')}>
              <Button
                className={classNames(
                  'h-12',
                  'w-2/5',
                  'lg:w-1/3',
                  'flex',
                  'bg-slate-100',
                  'text-red-500',
                  'text-nowrap',
                  'text-xs',
                  'btn-md',
                  'lg:text-sm',
                  'px-3',
                  'items-center',
                  'justify-center',
                  'gap-2',
                  'flex-row',
                  'hover:bg-red-500',
                  'dark:bg-slate-800',
                  'dark:hover:bg-red-500',
                  'hover:!text-white',
                  'rounded-md'
                )}
                icon={<Icon name='Heart' color='inherit' size={25} />}
              />

              <AddToCartButton/>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export { BestSeller };
