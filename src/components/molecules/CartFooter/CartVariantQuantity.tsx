import React from 'react';
import { Quantity } from '@/components/atoms';

interface CartVariantQuantityProps {
  text: string;
  quantity: number;
    // eslint-disable-next-line no-unused-vars
  onChange: (quanity: number) => void;
}

const CartVariantQuantity: React.FC<CartVariantQuantityProps> = ({ text, quantity, onChange }) => {
  return (
    <div className='w-full flex flex-row flex-nowrap justify-between items-center'>
      <span>{text}</span>
      <Quantity initialQuantity={quantity} onChange={onChange} />
    </div>
  );
};

export { CartVariantQuantity };
