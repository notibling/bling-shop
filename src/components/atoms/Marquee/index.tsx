'use client';
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import './styles.css';

interface MarqueeProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  direction = 'left',
  speed = 10,
  pauseOnHover = false,
  className,
  children
}) => {
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeContainerRef.current;
    const marqueeContent = marqueeContentRef.current;

    if (marqueeContainer && marqueeContent) {
      const contentWidth = marqueeContent.scrollWidth;
      const contentHeight = marqueeContent.scrollHeight;
      let animationKeyframes = [];
      const animationOptions = {
        duration: speed * 1000,
        iterations: Infinity,
        easing: 'linear'
      };

      if (direction === 'left' || direction === 'right') {
        marqueeContent.style.whiteSpace = 'nowrap';
        if (direction === 'left') {
          animationKeyframes = [
            { transform: 'translateX(0)' },
            { transform: `translateX(-${contentWidth}px)` }
          ];
        } else {
          animationKeyframes = [
            { transform: `translateX(-${contentWidth}px)` },
            { transform: 'translateX(0)' }
          ];
        }
      } else {
        marqueeContent.style.whiteSpace = 'normal';
        if (direction === 'up') {
          animationKeyframes = [
            { transform: 'translateY(0)' },
            { transform: `translateY(-${contentHeight}px)` }
          ];
        } else {
          animationKeyframes = [
            { transform: `translateY(-${contentHeight}px)` },
            { transform: 'translateY(0)' }
          ];
        }
      }

      const animation = marqueeContent.animate(animationKeyframes, animationOptions);

      if (pauseOnHover) {
        marqueeContainer.addEventListener('mouseenter', () => animation.pause());
        marqueeContainer.addEventListener('mouseleave', () => animation.play());
      }
    }
  }, [direction, speed, pauseOnHover]);

  const marqueeClass = classNames(
    'marquee',
    {
      'marquee-left': direction === 'left',
      'marquee-right': direction === 'right',
      'marquee-up': direction === 'up',
      'marquee-down': direction === 'down'
    },
    className
  );

  return (
    <div className='marquee-container' ref={marqueeContainerRef}>
      <div className={marqueeClass} ref={marqueeContentRef}>
        {children}
        {children}
      </div>
    </div>
  );
};

export { Marquee };
