'use client';
import React, { useState } from 'react';
import { Button, Title } from '@/components/atoms';
import { Modal } from '@/components/molecules';
import { AdvertisementsRent } from '@/components/organisms';
import { FaCartShopping } from 'react-icons/fa6';

interface MasonryItem {
  image: string;
  alt: string;
  size: 'square' | 'horizontal' | 'vertical' | 'large';
}

interface Props {
  items: MasonryItem[];
}

const Masonry: React.FC<Props> = ({ items }) => {
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [selectedItemSize, setSelectedItemSize] = useState<string | null>(null);

  const handleViewAllClick1 = (size: string) => {
    setSelectedItemSize(size);
    setModalOpen1(true);
  };

  const getTitleFromSize = (size: string) => {
    switch (size) {
      case 'square':
        return 'Espacio 1x1';
      case 'horizontal':
        return 'Espacio 2x1';
      case 'vertical':
        return 'Espacio 1x2';
      case 'large':
        return 'Espacio 2x2';
      default:
        return 'Alquilar Espacio';
    }
  };

  return (
    <div className='masonryGrid'>
      <Modal
        isOpen={isModalOpen1}
        onClose={() => setModalOpen1(false)}
        title={getTitleFromSize(selectedItemSize || '')}
        content={<AdvertisementsRent blockSize={selectedItemSize} />}
        footer={
          <>
            <Button className='bling-btn-md' onClick={() => setModalOpen1(false)} text='Cerrar' />
            <Button className='gap-2 bling-btn-primary btn-md' text='Añadir al Carrito' icon={<FaCartShopping />} />
          </>
        }
        className='p-2 min-w-[400px]'
        overlayClassName='custom-overlay'
      />
      {items.map((item, index) => (
        <div key={index} className={`masonryItem ${item.size}`} style={{ backgroundImage: `url(${item.image})` }}>
          <div className='overlay'>
            <div className='flex flex-col self-center gap-2'>
              <Title level='h6' title='Alquilar este espacio' titleClassName='text-white' />
              <Button text='Alquilar' className='bling-btn-primary dark:bling-btn-primary-dark btn-sm' onClick={() => handleViewAllClick1(item.size)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Masonry, type MasonryItem };
