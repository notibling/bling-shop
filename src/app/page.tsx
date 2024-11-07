'use client';
import classNames from 'classnames';
import {
  BannersFlat,
  BeautyProducts,
  BestSeller,
  FeaturedProducts,
  Header,
  InformativeTags,
  RandomProducts,
  TabsCategories,
  TopMenu
} from '@/components/organisms';
import { Button, Section } from '@/components/atoms';
import { FooterComponent } from '@/components/molecules';
import { CategorySlides, NewCars } from '@/components/organisms/sections';


function Home() {


  return (
    <>
         
      <main className={classNames(
        'h-auto box-border bg-cover w-full flex justify-between items-center flex-col bg-white'
      )}>
        <TopMenu />
        <Header />
      </main>
 

      <InformativeTags />

      <BannersFlat
        bannerOne='lg:w-3/12 hidden lg:block'
        imageOne='/images/webp/banners/hometv.webp'
        categoryOne='No esperes más'
        titleOne='ES HORA DE RENOVARSE'
        descriptionOne='Con Nuevas Tecnologías'
        bannerTwo='lg:w-6/12 w-full'
        imageTwo='/images/webp/banners/sportcar.webp'
        categoryTwo='DESCUBRÍ NUEVAS'
        titleTwo='GRANDES MARCAS, CALIDAD QUE CONOCÉS'
        descriptionTwo='Diversidad de estilos para todos los gustos'
        bannerThree='lg:w-3/12 hidden lg:block'
        imageThree='/images/webp/banners/shoesman.webp'
        categoryThree='Cuando se trate de estilo'
        titleThree='DATE UN GUSTO SUPER ESPECIAL'
        descriptionThree='Sin perder la Calidad'
      />
n
      <BeautyProducts />
      <CategorySlides/>

      <BestSeller />
      <NewCars />
      <RandomProducts lgCols={6} lgRows={6} smCols={2} smRows={2} />

      <BannersFlat
        bannerOne='lg:w-6/12 hidden lg:block'
        categoryOne='Categoria Banner 1 One'
        titleOne='DISFRUTA DE DESCUENTOS ÚNICOS 1 One'
        descriptionOne='Descripción de banner 1 One'
        bannerTwo='lg:w-3/12 w-full'
        categoryTwo='Categoria Banner 2 Two'
        titleTwo='DISFRUTA DE DESCUENTOS ÚNICOS 2 Two'
        descriptionTwo='Descripción de banner 2 Two'
        bannerThree='lg:w-3/12 hidden lg:block'
        categoryThree='Categoria Banner 3 Three'
        titleThree='DISFRUTA DE DESCUENTOS ÚNICOS 3 Three'
        descriptionThree='Descripción de banner 3 Three'
      />

      <TabsCategories />

      <Section classNameContainer='!bg-transparent' className='dark:bg-slate-800 bg-slate-100'>
        <span className={classNames('text-slate-500 dark:text-white text-xl')}>
          ¡Recibí nuevas ofertas antes que todos!
        </span>
        <Button className={classNames(
          'p-6 dark:bg-slate-700 bg-slate-800 rounded-full',
          'dark:hover:bg-blue-600 hover:bg-blue-600 text-white'
        )}>
          Activar Notificaciones
        </Button>
      </Section>

      <BannersFlat
        bannerOne='lg:w-3/12 hidden lg:block'
        categoryOne='Categoria Banner 1 One'
        titleOne='DISFRUTA DE DESCUENTOS ÚNICOS 1 One'
        descriptionOne='Descripción de banner 1 One'
        bannerTwo='lg:w-6/12 w-full'
        categoryTwo='Categoria Banner 2 Two'
        titleTwo='DISFRUTA DE DESCUENTOS ÚNICOS 2 Two'
        descriptionTwo='Descripción de banner 2 Two'
        bannerThree='lg:w-3/12 hidden lg:block'
        categoryThree='Categoria Banner 3 Three'
        titleThree='DISFRUTA DE DESCUENTOS ÚNICOS 3 Three'
        descriptionThree='Descripción de banner 3 Three'
      />

      <FeaturedProducts />

      <FooterComponent brandFooter footerContent />
    </>
  );
}

export default Home;
