'use client';
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section } from '@/components/atoms';


interface ShoppingInvoiceProps {


}

const ShoppingInvoice: React.FC<ShoppingInvoiceProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section className='bg-blue-300'>
        <span className='text-slate-700 text-2xl'>
          ShoppingInvoice</span>
      </Section>
    </>
  );
};

export default ShoppingInvoice;
