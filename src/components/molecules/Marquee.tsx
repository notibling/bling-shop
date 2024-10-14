'use client';
import classNames from 'classnames';
import React, { HTMLProps, useEffect, useMemo, useRef, useState } from 'react';

interface IMarqueeProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  autoPlay?: boolean;
}

const getLerp = (current: number, target: number, factor: number) => current * (1 - factor) + target * factor;

const Marquee: React.FC<IMarqueeProps> = ({ children: child, autoPlay, className, ...props }) => {
  const lerp = useRef<{ current: number, target: number }>({ current: 0, target: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const calculatorElement = useRef<HTMLDivElement>(null);
  const element = useRef<HTMLDivElement>(null);

  const [loaded, setLoaded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const speed = 0.1;
  const interpolationFactor = 0.1;
  const direction = 1;


  const play = () => {
    lerp.current.target += speed;
    lerp.current.current = getLerp(lerp.current.current, lerp.current.target, interpolationFactor);

    if (lerp.current.target > 100) {
      lerp.current.current -= lerp.current.target;
      lerp.current.target = 0;
    }

    const x = lerp.current.current * direction;

    if (element.current) {

      Array.from(element.current.children).map((child: any) => {
        child.style.transform = `translateX(${x}%)`;
      });

      console.log('PLAYING');
      window.requestAnimationFrame(play);
    }
  };

  const stop = () => {

  };


  useEffect(() => {

    if (calculatorElement.current && containerRef.current) {
      const { width } = calculatorElement.current.getBoundingClientRect();
      const { width: containerWidth } = containerRef.current.getBoundingClientRect();


      console.log({ width, containerWidth });
      const count = Math.ceil(containerWidth / width);

      console.log('MARQUEE', { count });
      setCount(count * 2);
      setLoaded(true);
    }
  }, [calculatorElement, containerRef]);

  useEffect(() => {
    if (element.current && loaded) {


      // element.current.style.cssText = `position: absolute; left: ${100 * -direction}%;`;
      // mirrorElement.current.style.cssText = `position: absolute; left: ${100 * -direction}%;`;
      if (autoPlay) {
        play();
      }
    }
  }, [element, loaded]);

  return (
    <div className={classNames(className ?? '', 'overflow-hidden')} ref={containerRef} {...props}>
      <div className='invisible w-max calculator' ref={calculatorElement}>{child} </div>
      <div ref={element} className='marquee inline relative whitespace-nowrap'>
        {
          new Array(count).fill(0).map((_, index) => (
            <div
              key={index}
              className={classNames('inline-flex', {
                'left-[-100%]': index % 2 === 0,
                'left-[100%]': index % 2 === 0
              })}

            >
              {child}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export { Marquee };