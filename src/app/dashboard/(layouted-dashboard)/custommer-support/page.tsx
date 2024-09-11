'use client';
import React from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Section } from '@/components/atoms';


interface CustomerSupportProps {


}

const CustomerSupport: React.FC<CustomerSupportProps> = ({

}) => {
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section className='bg-blue-300'>
        <span className='text-slate-700 text-2xl'>
          CustomerSupport</span>
      </Section>
    </>
  );
};

export default CustomerSupport;
