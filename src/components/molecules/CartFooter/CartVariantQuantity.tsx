import React from 'react';
import { Quantity } from '@/components/atoms';

interface CartVariantQuantity {
  text: string;
  quantity: number;
  onChange: (quanity: number) => void;
}

const CartVariantQuantity: React.FC<CartVariantQuantity> = ({ text, quantity, onChange }) => {
  return (
    <div className="w-full flex flex-row flex-nowrap justify-between items-center">
      <span>{text}</span>
      <Quantity initialQuantity={quantity} onChange={onChange} />
    </div>
  );
};

export { CartVariantQuantity };
