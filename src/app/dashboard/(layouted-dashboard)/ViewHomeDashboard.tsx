import React from 'react';
import classNames from 'classnames';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Banner, BannerSize } from '@/components/molecules';

interface ViewHomeDashboardProps {}

const ViewHomeDashboard: React.FC<ViewHomeDashboardProps> = ({}) => {
  return (
    <>
      <div className={classNames('w-full', 'h-auto', 'gap-2', 'rounded-sm', 'flex-wrap', 'lg:flex-nowrap', 'flex', 'flex-row', 'flex-grow', 'justify-between')}>
        <div className={classNames('w-full', 'w-2/3', 'h-auto', 'gap-2', 'rounded-sm', 'flex', 'flex-col')}>
          <div className={classNames('w-full', 'h-[350px]', 'bg-slate-200', 'rounded-xl')}>
            <Banner
              image={'/images/webp/banners/BlingProductScene1.webp'}
              imageAlt='Descripción de la imagen'
              size={BannerSize.base}
              title='Crea nuevos productos'
              buttonText='Crear Nuevo Producto'
              description='Genera más ventas con publicaciones de Alta Calidad.'
              polarized
            ></Banner>
          </div>
          <div className={classNames('w-full', 'h-auto', 'flex', 'flex-row', 'flex-grow', 'justify-between', 'gap-2')}>
            <div className={classNames('w-1/2', 'h-[150px]', 'bg-slate-200', 'rounded-xl', 'flex', 'flex-row')}>
              <Banner
                image={'/images/webp/banners/BlingProductScene2.webp'}
                imageAlt='Descripción de la imagen'
                size={BannerSize.xs}
                title='Revisa tus métricas'
                description='Apoyate en tus mediciones para crecer infinitamente.'
                buttonBackground='!bg-slate-900'
                polarized
              ></Banner>
            </div>
            <div className={classNames('w-1/2', 'h-[150px]', 'bg-slate-200', 'rounded-xl', 'flex', 'flex-grow')}>
              <Banner
                image={'/images/webp/banners/BlingProductScene8.webp'}
                imageAlt='Atiende a tus clientes'
                size={BannerSize.xs}
                title='Atiende a tus clientes'
                description='Responde las consultas de tus clientes, ganale a tu competencia con una mejor atención.'
                polarized
              ></Banner>
            </div>
          </div>
        </div>
        <div className={classNames('w-full', 'lg:w-1/3', 'h-auto', 'gap-2', 'rounded-sm', 'flex', 'flex-col')}>
          <div className={classNames('w-full', 'h-[171px]', 'bg-slate-200', 'rounded-xl')}>
            <Banner image={'/images/webp/banners/BlingProductScene4.webp'} imageAlt='Crea nuevas Campañas' size={BannerSize.xs} title='Crea nuevas Campañas' description='Llega más lejos, encuentra más clientes.' polarized></Banner>
          </div>
          <div className={classNames('w-full', 'h-[171px]', 'bg-slate-200', 'rounded-xl')}>
            <Banner
              image={'/images/webp/banners/BlingProductScene6.webp'}
              imageAlt='Descripción de la imagen'
              size={BannerSize.xs}
              title='Coordina tus Envíos'
              description='Mantén ordenados tus horarios, envíos, y agiliza tus entregas.'
              polarized
            ></Banner>
          </div>
          <div className={classNames('w-full', 'h-[150px]', 'bg-slate-200', 'rounded-xl')}>
            <Banner image={'/images/webp/banners/BlingProductScene3.webp'} imageAlt='Descripción de la imagen' size={BannerSize.lg} title='Crea Tu Propia Tienda' description='Genera más ventas con publicaciones de Alta Calidad.' polarized></Banner>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewHomeDashboard;
