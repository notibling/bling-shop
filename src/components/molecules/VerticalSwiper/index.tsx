'use client';
import React, { useEffect, useRef, useState } from 'react';
import './VerticalSwiper.css';

interface VerticalSwiperProps {
  height: string;
  className?: string;
  children: React.ReactNode;
}

const VerticalSwiper: React.FC<VerticalSwiperProps> = ({ height, className, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);
  const heightValue = parseInt(height, 10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % totalItems;
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <div
      className={`vertical-swiper ${className || ''}`}
      style={{ '--swiper-height': height } as React.CSSProperties}
    >
      <div
        className='swiper-container'
        style={{ transform: `translateY(-${currentIndex * heightValue}px)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div className='swiper-item' key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export { VerticalSwiper };
