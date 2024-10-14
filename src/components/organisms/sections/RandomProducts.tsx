'use client';
import React from 'react';
import classNames from 'classnames';
import { Title, Section } from '@/components/atoms';
import { CardVertical } from '@/components/molecules';
import { FaMarker } from 'react-icons/fa6';
import { useBreakpoint } from '@/hooks/useBreakpoint';

interface RandomProductsProps {
  className?: string;
  rows?: number;
  cols?: number;
  smRows?: number;
  smCols?: number;
  mdRows?: number;
  mdCols?: number;
  lgRows?: number;
  lgCols?: number;
  xlRows?: number;
  xlCols?: number;
}

const RandomProducts: React.FC<RandomProductsProps> = ({className, rows = 4, cols = 3, smRows = 2, smCols = 2, mdRows = 3, mdCols = 2, lgRows = 2, lgCols = 4, xlRows = 2, xlCols = 6 }) => {
  const { range } = useBreakpoint();
  let totalProducts, gridColumnStyle;

  if (range.xl) {
    totalProducts = xlRows * xlCols;
    gridColumnStyle = `repeat(${xlCols}, minmax(0, 1fr))`;
  } else if (range.lg) {
    totalProducts = lgRows * lgCols;
    gridColumnStyle = `repeat(${lgCols}, minmax(0, 1fr))`;
  } else if (range.md) {
    totalProducts = mdRows * mdCols;
    gridColumnStyle = `repeat(${mdCols}, minmax(0, 1fr))`;
  } else if (range.sm) {
    totalProducts = smRows * smCols;
    gridColumnStyle = `repeat(${smCols}, minmax(0, 1fr))`;
  } else {
    totalProducts = rows * cols;
    gridColumnStyle = `repeat(${cols}, minmax(0, 1fr))`;
  }

  return (
    <>
      <Section classNameContainer='flex !flex-col !h-auto' className='w-full !h-auto'>
        <Title className={classNames('mb-1', 'self-start text-2xl')} level='h3' icon={<FaMarker />} iconColor=' text-3xl' titleClassName='text-lg lg:text-xl' title='Otras personas han buscado:' description='Productos relacionados' />
        <div className={classNames('w-full', 'h-auto', 'grid', 'relative', 'p-0', 'gap-4', 'align-center')} style={{ gridTemplateColumns: gridColumnStyle }}>
          {new Array(totalProducts).fill(0).map((_val, index) => (
            <CardVertical
              key={index}
              shareButton={false}
              basketButton={true}
              padding=''
              className='h-[285px] lg:h-[320px]'
              title='Altavoz Bluetooth resistente al agua y golpes'
              priceBefore='1800'
              price='399'
              badge='UY$'
              image='true'
              alt='product'
              rate={true}
              stock='ultimas unidades'
              condition='producto nuevo'
              freeShipping={true}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export { RandomProducts };
