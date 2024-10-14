import React from 'react';
import { useDarkMode } from '@/hooks';

export interface ISection {
  value: number;
  color?: string;
  label?: string; // Nuevo campo para el texto
}

export interface IProps {
  title?: string | string[];
  description?: string | string[];
  value: number;
  maxValue: number;
  size?: number;
  sections?: ISection[];
}

const CircularChart = ({
  value,
  maxValue,
  title,
  description,
  size = 120,
  sections = []
}: IProps) => {
  const isDarkMode = useDarkMode();

  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;

  const defaultColors = isDarkMode
    ? { path: '#FFFFFF', trail: '#333333', text: '#FFFFFF', label: '#CCCCCC' }
    : { path: '#4a90e2', trail: '#f0f0f0', text: '#000000', label: '#6c757d' };

  let accumulatedOffset = 0;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: 'rotate(-90deg)' }}
     
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='transparent'
          stroke={defaultColors.trail}
          strokeWidth='10'
          
        />
        {sections.length > 0 ? (
          sections.map((section, index) => {
            const sectionValue = section.value || 0;
            const sectionCircumference =
              (sectionValue / maxValue) * circumference;
            const sectionOffset = accumulatedOffset;
            accumulatedOffset += sectionCircumference;
            const sectionColor = section.color || defaultColors.path;

            return (
              <circle
                key={index}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill='transparent'
                stroke={sectionColor}
                strokeWidth='10'
                strokeDasharray={`${sectionCircumference} ${circumference}`}
                strokeDashoffset={-sectionOffset}
                strokeLinecap='round'
              />
            );
          })
        ) : (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill='transparent'
            stroke={defaultColors.path}
            strokeWidth='10'
            strokeDasharray={circumference}
            strokeDashoffset={-accumulatedOffset}
            strokeLinecap='round'
           
          />
        )}
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}
      >
        <span
          style={{ fontSize: '24px', fontWeight: 'bold' }}
          className='bling-light-text dark:text-white'
        >
          {value}
        </span>
        <br />
        <div className='w-auto h-auto flex flex-col'>
          <span className='w-full text-center bling-light-text dark:text-white h-auto font-bold text-xs'>
            {title}
          </span>
          <span className='w-full text-center bling-light-text dark:text-gray-500 h-auto text-[10px]'>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export { CircularChart };
