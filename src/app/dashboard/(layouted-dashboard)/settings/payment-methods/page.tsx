'use client';
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section } from '@/components/atoms';


interface PaymentMethodsProps {


}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section className='bg-blue-300'>
        <span className='text-slate-700 text-2xl'>
          PaymentMethods</span>
      </Section>
    </>
  );
};

export default PaymentMethods;
