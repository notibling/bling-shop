'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const DynamicComponent = dynamic(() => Promise.resolve(() => <>{children}</>), { ssr: false });
  return <DynamicComponent />;
};

export { ClientWrapper };