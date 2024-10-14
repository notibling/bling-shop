import React from 'react';

const Guard = ({ guards, ...props }: any) => {
  const [CurrentGuard, restGuards] = guards;
  return (
    <CurrentGuard><Guard guards={restGuards} {...props} /></CurrentGuard>
  );
};

export const MultipleGuards = (...Guards: React.FC<any>[]) => {
  return (props: any) => <Guard guards={Guards} {...props} />;
};