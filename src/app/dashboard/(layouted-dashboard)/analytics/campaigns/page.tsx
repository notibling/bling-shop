'use client';
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section} from '@/components/atoms';
import { SmartHome } from '@/icons/tsx';
import { TitleSection } from '@/components/organisms';
import { Button } from '@mui/base';


interface CampaignsProps {

  
}

const Campaigns: React.FC<CampaignsProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section Empty={true} className='!flex-col !items-start !justify-start !h-fit !p-0 !m-0  !flex !gap-4 !bg-transparent rounded-md '>
       
        <TitleSection icon={SmartHome}
          iconSize={30}
          title='Campañas' 
          description='Resumen de campañas'
          level='h6'
          pattern={'dhb-pat-sales'} />
     
     <TitleSection 
    
          title='Publicidades activas' 
          level='h6'
          />
     <TitleSection 
    
    title='Publicidades pausadas' 
    level='h6'
    />
    <TitleSection 
    
    title='Publicidades en revisión' 
    level='h6'
    />
      </Section>
    </>
  );
};

export default Campaigns;
