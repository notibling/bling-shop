'use client';
import React, { useMemo } from 'react';
import { FaBox, FaHeart, FaLink, FaShare } from 'react-icons/fa';
import { ToCopy, Button, Section } from '@/components/atoms';
import { useSingleProduct } from '../SingleProduct.context';
import Link from 'next/link';

const BreadCrumb = () => {
  const { productDisplay } = useSingleProduct();

  const entity = useMemo(() => {
    switch (productDisplay?.entity) {
      case 'product':
        return { text: 'Productos', link: '/products' };

      case 'service':
        return { text: 'Servicios', link: '/services' };

      case 'vehicle':
        return { text: 'Vehículos', link: '/vehicles' };

      default:
        return { text: 'Productos', link: '/products' };
    }
  }, [productDisplay]);


  const categories = useMemo(() => {
    const _categories = productDisplay.product?.categories ?? [];
    const [category] = _categories;

    if (!category) return [];

    return [
      {
        text: category?.parent?.name,
        link: `/result?category=${category?.parent?.id}`
      },
      {
        text: category.name,
        link: `/result?category=${category.id}`
      }
    ].filter((Boolean));
  }, [productDisplay]);


  return (
    <>
      <Section className='hidden lg:flex'>
        <div className='w-full lg:w-2/3 h-auto   text-slate-700 text-sm py-0 breadcrumbs'>
          <ul>
            <li>
              <a>
                <div className='flex flex-row w-fit gap-2 justify-center items-center p-1'>
                  <FaBox />
                  <span>{entity.text}</span>
                </div>
              </a>
            </li>
            {
              categories.map((category) => (
                <li>
                  <Link href={category.link}>
                    <div className='flex flex-row w-fit gap-2 justify-center items-center p-1'>
                      <span>{category.text}</span>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='w-full lg:w-1/3 h-auto hidden lg:flex gap-2  flex-row justify-end items-center'>
          <ToCopy textToCopy='https://bling.uy'>
            <Button icon={<FaLink />} text='Copiar' className='py-5 px-4 bling-btn-secondary rounded-md bling-light dark:bling-dark clickable gap-2 flex ' />
          </ToCopy>
          <Button icon={<FaShare />} text='Compartir' className='py-5 px-4 bling-btn-secondary rounded-md bling-light dark:bling-dark clickable gap-2 flex ' />
          <Button icon={<FaHeart />} text='Favoritos' className='py-5 px-4 bling-btn-secondary rounded-md bling-light dark:bling-dark clickable gap-2 flex ' />
        </div>
      </Section>
    </>
  );

};

export { BreadCrumb };
