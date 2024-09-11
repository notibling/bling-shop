'use client'
import React from 'react';
import classNames from 'classnames';
import { Section } from '@/components/atoms';
import { CardVertical } from '@/components/molecules';
import { useBreakpoint } from '@/hooks/useBreakpoint';

interface BeautyProductsProps {
  title?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  className?: string;
}

const BeautyProducts: React.FC<BeautyProductsProps> = ({}) => {
  const { range } = useBreakpoint();
  return (
    <>
      <Section classNameContainer="lg:h-[75vh] h-[350px] items-stretch " >
        <div className={classNames('w-[33%]', 'hidden', 'lg:grid', 'lg:h-full', 'h-full', 'lg:grid-cols-2', 'relative', 'gap-4')}>
          <CardVertical shareButton={false} className=" h-1/2  flex-shrink flex-grow-0  lg:flex" price={300} badge="UY $"  imageClassName="h-full bg-cover bg-center object-cover" image="true" alt="product" basketButton={range.sm ? '' : 'false'} priceBefore={range.sm ? '' : 1500} />
          <CardVertical shareButton={false} className="h-1/2  flex-shrink flex-grow-0  lg:flex" price={300} badge="UY $"  imageClassName="h-full bg-cover bg-center object-cover" image="true" alt="product" basketButton={range.sm ? '' : 'false'} priceBefore={range.sm ? '' : 1500} />
          <CardVertical shareButton={false} height="100%" className="flex-shrink   flex-grow-0 hidden lg:flex" priceBefore={range.sm ? '' : 1500} price={300} badge="UY $"  imageClassName="h-full bg-cover bg-center object-cover" image="true" alt="product" />
          <CardVertical shareButton={false} height="100%" className="flex-shrink  flex-grow-0 hidden lg:flex" priceBefore={range.sm ? '' : 1500} price={300} badge="UY $"  imageClassName="h-full bg-cover bg-center object-cover" image="true" alt="product" />
        </div>
        <div className={classNames('w-full', 'lg:w-[33%]', 'h-100', 'flex', 'mx-auto', 'flex-col', 'flex-grow')}>
          <CardVertical shareButton={false} height="100%" className="w-full h-full flex-grow-0 flex-shrink" priceBefore="1500"  price={300} badge="UY $"  imageClassName="h-full bg-cover bg-center object-cover" image="true" alt="product" />
        </div>
        <div className={classNames('w-[33%]', 'lg:h-full', 'hidden', 'lg:grid', 'h-full', 'lg:grid-cols-2', 'relative', 'gap-4')}>
          <CardVertical shareButton={false} className=" h-1/2  flex-shrink flex-grow-0  lg:flex" price={300} badge="UY $"  imageClassName="h-full bg-cover bg-center object-cover" image="true" alt="product" basketButton={range.sm ? '' : 'false'} priceBefore={range.sm ? '' : 1500} />
          <CardVertical shareButton={false} className="h-1/2  flex-shrink flex-grow-0  lg:flex" price={300} badge="UY $"  imageClassName="h-full bg-cover bg-center object-cover" image="true" alt="product" basketButton={range.sm ? '' : 'false'} priceBefore={range.sm ? '' : 1500} />
          <CardVertical shareButton={false} height="100%" className="flex-shrink   flex-grow-0 hidden lg:flex" priceBefore={range.sm ? '' : 1500} price={300} badge="UY $"  imageClassName="h-full bg-cover bg-center object-cover" image="true" alt="product" />
          <CardVertical shareButton={false} height="100%" className="flex-shrink  flex-grow-0 hidden lg:flex" priceBefore={range.sm ? '' : 1500} price={300} badge="UY $"  imageClassName="h-full bg-cover bg-center object-cover" image="true" alt="product" />
        </div>
      </Section>
    </>
  );
};

export { BeautyProducts };
