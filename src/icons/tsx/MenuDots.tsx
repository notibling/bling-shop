import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMenuDots = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M21 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0' />
    <path d='M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0' opacity={0.5} />
  </svg>
);
export default SvgMenuDots;
