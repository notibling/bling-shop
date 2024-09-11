'use client'
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section } from '@/components/atoms';


interface AnaliticsProps {


}

const Analitics: React.FC<AnaliticsProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section className='bg-blue-300'>
        <span className='text-2xl text-slate-700'>
          Analitics</span>
      </Section>
    </>
  );
};

export default Analitics;
