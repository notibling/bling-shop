'use client';
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section} from '@/components/atoms';
import { SmartHome } from '@/icons/tsx';
import { TitleSection } from '@/components/organisms';


interface InsightsProps {

  
}

const Insights: React.FC<InsightsProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section Empty={true} className='!flex-col !items-start !justify-start !h-fit !p-0 !m-0  !flex !gap-4 !bg-transparent rounded-md '>
       
        <TitleSection icon={SmartHome}
          iconSize={30}
          title='Perspectivas' 
          description='Análisis de perspectivas'
          level='h5'
          pattern={'dhb-pat-sales'} />
     
      
      </Section>
    </>
  );
};

export default Insights;
