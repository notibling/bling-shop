import React from 'react';
import { CardVertical } from '@/components/molecules';

const BusinessProducts = () => {
  return (
    <>
      <div className="w-full relative h-fit grid grid-cols-3 gap-2 box-border rounded-brand">
        {new Array(6).fill(0).map((_val, index) => (
          <CardVertical
            key={index}
            shareButton={false}
            basketButton={false}
            padding=""
            className="lg:h-[305px] w-full"
            title="Altavoz Bluetooth resistente al agua y golpes"
            priceBefore="1800"
            price="399"
            badge="UY $"
            stock=""
            image="true"
            alt="product"
          />
        ))}
      </div>
    </>
  );
}

export { BusinessProducts };
