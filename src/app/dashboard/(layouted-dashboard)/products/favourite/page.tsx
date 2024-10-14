'use client';
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section } from '@/components/atoms';
import { Heart } from '@/icons/tsx';
import { TitleSection } from '@/components/organisms';


interface FavoriteProductsProps {


}

const FavoriteProducts: React.FC<FavoriteProductsProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section Empty={true} className='flex-col !h-auto items-start justify-start self-start !p-0 m-0 flex gap-4 !bg-transparent rounded-md'>
     
        <TitleSection icon={Heart}
          iconSize={30}
          title='Productos Favoritos' 
          description='Productos favoritos'
          level='h5'
          pattern={'dhb-pat-products'} />
      </Section>
    </>
  );
};

export default FavoriteProducts;
