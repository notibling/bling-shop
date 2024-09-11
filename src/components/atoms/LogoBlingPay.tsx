'use client';
// LogoBlingPay.tsx
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

import { useDarkMode } from '@/hooks';

interface LogoBlingPayProps {
  className?: string;
  darkMode?: boolean;
  width?: number;
  height?: number;
  color?: 'light' | 'dark';
}

const LogoBlingPay: React.FC<LogoBlingPayProps> = ({ className = '', darkMode: _darkMode, width = 100, height = 100, color }) => {
  const { darkMode } = useDarkMode();

  const imagePath = (_darkMode || darkMode) ? '/images/blingpay/blingpaylight.svg' : '/images/blingpay/blingpaydark.svg';
  const image = color ? color === 'light' ? '/images/blingpay/blingpaylight.svg' : '/images/blingpay/blingpaydark.svg' : imagePath;
  return (
    <div className={classNames(className)}>
      <Link href="/">
        <Image color={(_darkMode || darkMode) ? 'white' : 'black'} width={width} height={height} alt="Bling Pay" src={image} />
      </Link>
    </div>
  );
};

export { LogoBlingPay };
