'use client'
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section } from '@/components/atoms';


interface GeneralInformationProps {


}

const GeneralInformation: React.FC<GeneralInformationProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section className='bg-blue-300'>
        <span className='text-slate-700 text-2xl'>
          GeneralInformation</span>
      </Section>
    </>
  );
};

export default GeneralInformation;
