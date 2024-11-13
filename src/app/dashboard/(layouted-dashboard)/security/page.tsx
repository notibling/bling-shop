'use client';
import React from 'react';
import { Section } from '@/components/atoms';


interface SecurityProps {


}

const Security: React.FC<SecurityProps> = ({ }) => {
  return (
    <>
      <Section className='bg-blue-300'>
        <span className='text-2xl text-slate-700'>
          Seguridad</span>
      </Section>
    </>
  );
};

export default Security;
