import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTimes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>

    <path fill='currentColor' d='M18.57 18.92c-.44.44-1.15.44-1.59 0L5.43 7.37C5 6.94 5 6.23 5.43 5.79a1.122 1.122 0 011.59 0l4.8 4.8 6.75 6.75c.43.43.43 1.14 0 1.58z'></path>
    <path fill='currentColor' 
      d='M10.24 12.18l1.59 1.59-4.81 4.8c-.44.43-1.15.43-1.59 0-.43-.44-.43-1.15 0-1.59l4.81-4.8zM18.57 7.02l-5.16 5.16-1.59-1.59 5.16-5.16c.22-.21.51-.32.8-.32s.57.11.79.32c.43.44.43 1.15 0 1.59z'
      opacity={0.5}
    ></path>

  </svg>


);
export default SvgTimes;

