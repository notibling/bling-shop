import React from 'react';
import { useDarkMode } from '@/hooks';

interface IProps {
  title: string;
  value: string;
  subtitle?: string;
  width?: string; // Cambiado a string para admitir valores como "100%"
  height?: string; // Cambiado a string para admitir valores como "100%"
  className?: string;
}

const WaveChart: React.FC<IProps> = ({
  title,
  value,
  subtitle,
  width = '100%',
  height = '100%',
  className = ''
}) => {
  const isDarkMode = useDarkMode();

  const wavePath = `
    M 0 50 
    C 50 80, 100 20, 150 50 
    C 200 80, 250 20, 300 50 
    V 150 
    H 0 
    Z
  `;

  const gradientId = isDarkMode ? 'gradient-dark' : 'gradient-light';
  const textColor = isDarkMode ? '#FFFFFF' : '#000000';

  return (
    <div
      className={`${className} w-full h-full border bling-light-border dark:bling-dark-border`} 
      style={{
        width,
        height,
        position: 'relative',

        borderRadius: '12px',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      <svg width='100%' height='100%' viewBox='0 0 300 150'> {/* viewBox fijo para escalabilidad */}
        <defs>
          <linearGradient id={gradientId} x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset='100%' style={{ stopColor: '#2563eb', stopOpacity: 0.02 }} />
          </linearGradient>
        </defs>
        <path d={wavePath} fill={`url(#${gradientId})`} />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: textColor
        }}
      >
        <div style={{ fontSize: '14px', marginBottom: '8px' }} className='bling-light-text  dark:text-white  rounded-md  select-none    w-fit px-1'>{title}</div>
        <div style={{ fontSize: '28px', fontWeight: 'bold' }} className='bling-light-text dark:text-white  rounded-md  select-none    w-fit px-1'>{value}</div>
        {subtitle && <div style={{ fontSize: '12px', marginTop: '4px' }} className='bling-light-text dark:text-white   rounded-md  select-none    w-fit px-1'>{subtitle}</div>}
      </div>
    </div>
  );
};

export { WaveChart };
