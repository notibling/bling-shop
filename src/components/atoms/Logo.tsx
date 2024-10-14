'use client';
// Logo.tsx
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

import { useDarkMode } from '@/hooks';

interface LogoProps {
  className?: string;
  darkMode?: boolean;
  width?: number;
  height?: number;
  color?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', darkMode: _darkMode, width = 100, height = 100, color }) => {
  const { darkMode } = useDarkMode();
  const imagePath = (_darkMode || darkMode) ? '/images/svg/BlingLogoWhite.svg' : '/images/svg/BlingLogoBlack.svg';
  let image;

  if (color) {
    if (color === 'light') {
      image = '/images/svg/BlingLogoWhite.svg';
    } else {
      image = '/images/svg/BlingLogoBlack.svg';
    }
  } else {
    image = imagePath;
  }

  return (
    <div className={classNames(className)}>
      <Link href='/'>
        <Image color={(_darkMode || darkMode) ? 'white' : 'black'} width={width} height={height} alt='Bling Logo' src={image} />
      </Link>
    </div>
  );
};

export { Logo };
