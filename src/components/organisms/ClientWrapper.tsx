'use client'
import dynamic from 'next/dynamic';

const ClientWrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return dynamic(() => (<>{children}</>) as any, { ssr: false }) as any;
}

export { ClientWrapper }