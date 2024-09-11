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
  const image = color ? color === 'light' ? '/images/svg/BlingLogoWhite.svg' : '/images/svg/BlingLogoBlack.svg' : imagePath;
  return (
    <div className={classNames(className)}>
      <Link href="/">
        <Image color={(_darkMode || darkMode) ? 'white' : 'black'} width={width} height={height} alt="Bling Logo" src={image} />
      </Link>
    </div>
  );
};

export { Logo };
