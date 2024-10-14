import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMenuDotsCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10' opacity={0.5} />
    <path d='M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
  </svg>
);
export default SvgMenuDotsCircle;
