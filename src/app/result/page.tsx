'use client';
import React, { Suspense, useEffect, useRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaArrowDown, FaArrowUp, FaClock, FaSearch, FaStar } from 'react-icons/fa';
import { FaArrowDownZA, FaArrowUpAZ, FaArrowUpShortWide, FaClockRotateLeft } from 'react-icons/fa6';
import { Button, Title, Item, Section } from '@/components/atoms';
import { Banner, BannerSize, CardVertical, FooterComponent } from '@/components/molecules';
import { TopMenu, MobileMenu, DropdownItem, Dropdown, ResultFilter, BannersFlat, RandomProducts } from '@/components/organisms';
import { getStaticFileUrl } from '@/utils/statics';
import { ProductsSearchProvider, useProductsSearch } from '@/contexts/ProductsSearch';

const description = 'Listado de resultados encontrados para tu búsqueda';

function Result() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef<any>(null);
  const { search, productDisplays } = useProductsSearch();

  const handleSearch = (query: string) => {
    search(query);
    router.replace(`/result?q=${query}`);
  };


  useEffect(() => {
    if (searchParams && searchRef.current) {
      const searchValue = searchParams.get('q') || '';
      search(searchValue);
      searchRef.current?.setSearchValue(searchValue);
    }
  }, [searchRef, searchParams]);

  return (
    <>
      <TopMenu ref={searchRef} onSearch={handleSearch} />
      <Section className='dark:bg-slate-950' classNameContainer='justify-between items-center  flex  flex-col lg:flex-row lg:flex-nowrap dark:bg-slate-900 !gap-0 '>
        <div className='flex flex-row items-center justify-between w-full gap-1 flex-nowrap '>
          <div className='flex flex-col items-start w-full h-auto p-2 lg:flex-row lg:justify-start '>
            <Title level='h4' title='Resultados' description={`"${description}"`} icon={<FaSearch />} descriptionClassName='text-blue-500 text-xs' />
          </div>
          <div className='flex flex-row flex-wrap items-center justify-end gap-2 w-fit '>
            <Dropdown
              bodyClassName={classNames('shadow-xl', 'min-w-[100px]')}
              trigger={<Button text='Ordenar' icon={<FaArrowUpShortWide />} className='flex gap-2 px-4 py-5 rounded-md bling-btn-primary dark:bling-btn-primary-dark dark:text-slate-400 ' />}
              position='bottom-right'
            >
              <DropdownItem className={classNames('w-[200px] flex flex-col shadow-md rounded-md ')}>
                <Item content='icon' icon={<FaStar />} text='Mejor Valorado' />
                <Item content='icon' icon={<FaArrowUp />} text='Precio Ascendente' />
                <Item content='icon' icon={<FaArrowDown />} text='Precio Descendente' />
                <Item content='icon' icon={<FaClockRotateLeft />} text='Más Antiguos' />
                <Item content='icon' icon={<FaClock />} text='Más Recientes' />
                <Item content='icon' icon={<FaArrowUpAZ />} text='Alfabetico' />
                <Item content='icon' icon={<FaArrowDownZA />} text='Orden Inverso' />
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
      </Section>
      <Section className='min-h-screen !justify-start flex flex-row !items-center dark:bg-slate-950' classNameContainer='dark:bg-slate-900'>
        <div className='lg:w-[250px] w-full h-auto self-stretch flex flex-col !justify-start !items-start bg-slate-100 gap-2 p-2 rounded-md dark:bg-slate-900 '>
          <div className='flex-col items-start justify-start hidden w-full h-auto gap-2 lg:flex'>
            <Banner
              image={'/images/webp/banners/BlingProductScene1.webp'}
              imageAlt='Descripción de la imagen'
              size={BannerSize.base}
              title='MES DE MAMÁ'
              description='Aumenta tus ventas con promos para mamá.'
              polarized
              className='h-[120px] w-full '
            ></Banner>
          </div>
          <div className='hidden w-full lg:flex'>
            <ResultFilter />

          </div>
        </div>
        <div className='w-full lg:w-auto flex-1 h-auto  !justify-start self-start flex flex-col !items-center bg-slate-100  dark:bg-slate-950 p-2 gap-2 rounded-md'>
          <div className={classNames('w-full', 'h-auto', 'grid', 'grid-cols-3', 'lg:grid-cols-5', 'relative', 'p-0', 'gap-2', 'align-center')}>
            {productDisplays.map((productDisplay, index) => (
              <Link key={productDisplay.id} href={`/product/${productDisplay.id}`} >

                <CardVertical
                  key={index}
                  shareButton={false}
                  basketButton={false}
                  padding=''
                  className=''
                  title={productDisplay.summary?.title}
                  price={productDisplay?.summary?.price}
                  priceBefore={productDisplay?.summary?.priceBefore}
                  badge='UY $'
                  stock={productDisplay?.summary?.stock}
                  image={getStaticFileUrl(productDisplay.product?.images?.[0])}
                  alt='product'
                />
              </Link>
            ))}

          </div>
        </div>
      </Section>
      {/*
      
      ------------------------------------------------------------------------------------------------
      //? SECCIÓN ----------------------------------- Section Random Products -----
      ------------------------------------------------------------------------------------------------
      */}
      <RandomProducts lgCols={6} lgRows={2} smCols={2} smRows={2} />
      {/*
      ------------------------------------------------------------------------------------------
      //? SECCIÓN ----------------------------------- 3 Banners Promocíón de Nuestras Apps -----
      ------------------------------------------------------------------------------------------
      */}
      <BannersFlat
        bannerOne='lg:w-3/12 hidden lg:block'
        categoryOne='Categoria Banner 1 One'
        titleOne='DISFRUTA DE DESCUENTOS ÚNICOS 1 One'
        descriptionOne='Descripción de banner 1 One'
        bannerTwo='lg:w-6/12 w-full'
        categoryTwo='Categoria Banner 2 Two'
        titleTwo='DISFRUTA DE DESCUENTOS ÚNICOS 2 Two'
        descriptionTwo='Descripción de banner 2 Two'
        bannerThree='lg:w-3/12 hidden lg:block '
        categoryThree='Categoria Banner 3 Three'
        titleThree='DISFRUTA DE DESCUENTOS ÚNICOS 3 Three'
        descriptionThree='Descripción de banner 3 Three'
      />
      <FooterComponent className='lg:mb-0 mb-14' brandFooter />
      <MobileMenu />
    </>
  );
}

export default function ResultsPage() {
  return (
    <ProductsSearchProvider>
      <Suspense>
        <Result />
      </Suspense>
    </ProductsSearchProvider>
  );
}
