'use client';
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section} from '@/components/atoms';
import { SmartHome } from '@/icons/tsx';
import { TitleSection } from '@/components/organisms';


interface PurchasesProps {

  
}

const Purchases: React.FC<PurchasesProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section Empty={true} className='!flex-col !items-start !justify-start !h-fit !p-0 !m-0  !flex !gap-4 !bg-transparent rounded-md '>
       
        <TitleSection icon={SmartHome}
          iconSize={30}
          title='Estadísticas de Compras' 
          level='h6' />
     
    
      </Section>
    </>
  );
};

export default Purchases;
