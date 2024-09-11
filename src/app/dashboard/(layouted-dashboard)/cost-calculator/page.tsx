'use client'
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section } from '@/components/atoms';


interface CostCalculatorProps {


}

const CostCalculator: React.FC<CostCalculatorProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section className='bg-blue-300'>
        <span className='text-slate-700 text-2xl'>
          CostCalculator</span>
      </Section>
    </>
  );
};

export default CostCalculator;
