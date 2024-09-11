'use client';
import React, { useMemo } from 'react';
import { Banner, Reviews } from '@/components/molecules';
import { Section, Title } from '@/components/atoms';
import { useSingleProduct } from '../SingleProduct.context';
import { BaseTable } from '@/components/organisms';

function RatingAndAttributes() {
  const { productDisplay } = useSingleProduct();


  const productAttributes = useMemo(() => {
    return productDisplay.product?.attributes?.map((attribute) => {
      return {
        name: attribute.attributeName,
        value: attribute.attributeValue
      }
    }) ?? [];
  }, [productDisplay]);


  const reviewsCount = 1745;
  const averageRating = 4.9;
  const reviewData = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 17 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 4 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <>
      <Section classNameContainer="!justify-start !items-start">
        <div className="w-full lg:w-1/2 h-auto  flex flex-col justify-center items-center gap-2">
          <Reviews reviewsCount={reviewsCount} averageRating={averageRating} reviewData={reviewData} />
          <Banner className="hidden lg:flex" contentSize="w-full h-[200px]" image="images/webp/banners/BlingProductScene1.webp" category="Nuevo" title="Llegó el Otoño" titleClassName="!text-2xl font-bold" description="Nuevos Descuentos de Otoño" />
        </div>
        <div className="w-full lg:w-1/2 h-auto  flex flex-col justify-start items-start gap-2">
          <Banner contentSize="w-full h-[200px]" image="images/webp/banners/BlingProductScene1.webp" category="Nuevo" title="Llegó el Otoño" titleClassName="!text-2xl font-bold" description="Nuevos Descuentos de Otoño" />
          <div className="flex flex-col items-center justify-between w-full h-auto rounded-md">
            <div className="flex flex-row items-center justify-start w-full h-auto p-2">
              <Title title="Atributos" level="h4" />
            </div>
            <div className="flex flex-wrap items-center justify-start w-full">
              <BaseTable headers={['Atributo', 'Valor']} rows={productAttributes.map((attribute) => ({
                data: [attribute.name, attribute.value]
              }))}></BaseTable>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export { RatingAndAttributes };
