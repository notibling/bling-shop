'use client';
import React from 'react';
import classNames from 'classnames';
import { Title, Section } from '@/components/atoms';
import { Masonry, MasonryItem } from '@/components/molecules';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { FaTicketAlt } from 'react-icons/fa';
import { featureFlags } from '@/feature-flags';

interface AdvertisementsProps {}

const items: MasonryItem[] = [
  { image: 'https://example.com/image1.jpg', alt: 'Imagen 1', size: 'square' },
  { image: 'https://example.com/image2.jpg', alt: 'Imagen 2', size: 'horizontal' },
  { image: 'https://example.com/image1.jpg', alt: 'Imagen 1', size: 'square' },
  { image: 'https://example.com/image1.jpg', alt: 'Imagen 1', size: 'square' },
  { image: 'https://example.com/image2.jpg', alt: 'Imagen 2', size: 'vertical' },
  { image: 'https://example.com/image1.jpg', alt: 'Imagen 1', size: 'square' },
  { image: 'https://example.com/image4.jpg', alt: 'Imagen 4', size: 'large' },
  { image: 'https://example.com/image1.jpg', alt: 'Imagen 1', size: 'square' },
  { image: 'https://example.com/image1.jpg', alt: 'Imagen 1', size: 'square' },
  { image: 'https://example.com/image1.jpg', alt: 'Imagen 1', size: 'square' },
  { image: 'https://example.com/image1.jpg', alt: 'Imagen 1', size: 'square' },
  { image: 'https://example.com/image2.jpg', alt: 'Imagen 2', size: 'vertical' },
  { image: 'https://example.com/image2.jpg', alt: 'Imagen 2', size: 'horizontal' },
  { image: 'https://example.com/image2.jpg', alt: 'Imagen 2', size: 'horizontal' },
  { image: 'https://example.com/image2.jpg', alt: 'Imagen 2', size: 'vertical' },
  // Agrega más elementos según sea necesario
];
const Advertisements: React.FC<AdvertisementsProps> = ({}) => {
  if (!featureFlags.components.adsFeature) return null;
  const { conditionalValue } = useBreakpoint();
  return (
    <>
      <Section className='!py-5 !px-5 !m-0' classNameContainer="bg-blue-300 !m-0 !flex-col flex !w-full">
        <div className={classNames('w-full', 'flex-wrap', 'lg:flex-nowrap', 'gap-2', 'flex')}>
          <Title icon={<FaTicketAlt />} iconColor="text-slate-700" titleClassName="text-slate-700" title="Anuncios" />
        </div>
        <div className="w-full h-auto ">
          <Masonry items={items} />
        </div>
      </Section>
    </>
  );
};

export default Advertisements;
