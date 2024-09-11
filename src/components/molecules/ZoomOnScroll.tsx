import React, { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import { useScrollElement } from '@/hooks';

interface ZoomOnScrollProps {
  children: JSX.Element;
  zoomOut?: boolean;
}

const ZoomOnScroll: React.FC<ZoomOnScrollProps> = ({ children, zoomOut }) => {
  const size = useRef<number>(0.5);
  const { ref: desktopRef, offset: offsetDesktop = 0, height, top } = useScrollElement();

  function calculate() {
    const initial = 0.5;
    if(offsetDesktop-(height) > 0) return;

    const rest = offsetDesktop / height;
    //  if(rest >= 1) return 1;

    let result = Math.abs(1 - Math.abs(rest));
    if(result> 1 && !zoomOut) return;
    if (result < initial) result = initial;
    

   
    size.current = (size.current < result) ? result : size.current;

    console.log({size: size.current, result, offsetDesktop})

    return size.current;
   }


   
  useEffect(() => {
    calculate();
  }, [offsetDesktop]);

  const childrenCopy = React.cloneElement(children, {  ref: desktopRef, className: classNames('invisible') });
  const originalChildren = React.cloneElement(children, {  style:{ transform: `scale(${calculate()})` } });
  
  return (
    <React.Fragment>
      {originalChildren}
      {childrenCopy}
    </React.Fragment>
  );
};

export { ZoomOnScroll };
