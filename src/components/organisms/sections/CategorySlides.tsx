'use client'
import React from 'react';
import { Section, Title } from '@/components/atoms';
import { useDarkMode } from '@/hooks';
import Image from 'next/image';


interface CategorySlidesProps {}

const imageSizes = [30, 50, 80, 100, 150, 100, 80, 50, 30];

const CategorySlides: React.FC<CategorySlidesProps> = () => {
  const { darkMode } = useDarkMode();

  return (
    <Section className="py-10" classNameContainer="items-stretch justify-stretch !bg-transparent">
      <Title title=" nuevos productos de Diciembre"/>
      <div className="w-full h-auto flex flex-row gap-2 items-center justify-between">
        {imageSizes.map((size, index) => (
          <div
            key={index}
            className={`w-[${size}px] aspect-square bling-light dark:bling-dark p-2 flex items-center justify-center overflow-hidden object-contain rounded-full`}
          >
            <Image src="./images/avif/auriculares-f-b.avif" className='w-full h-full  object-cover rounded-full' width={100} height={100} unoptimized />
          </div>
        ))}
      </div>
    </Section>
  );
};

export { CategorySlides };
