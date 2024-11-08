import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowToTopLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M17.53 10.03a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06L12 5.56l4.47 4.47a.75.75 0 0 0 1.06 0' clipRule='evenodd' />
    <g opacity={0.5}>
      <path d='M12.75 14.5c0 .953-.28 2.367-1.141 3.563-.89 1.235-2.365 2.187-4.609 2.187a.75.75 0 0 1 0-1.5c1.756 0 2.78-.715 3.391-1.563.639-.887.859-1.974.859-2.687V6.31l.75-.75.75.75zM12.198 3.776' />
    </g>
  </svg>
);
export default SvgArrowToTopLeft;
