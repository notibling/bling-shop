import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMagnet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M17 2h-4C7.477 2 3 6.477 3 12s4.477 10 10 10h4v-5h-4a5 5 0 0 1 0-10h4z' />
    <g opacity={0.5}>
      <path d='M17 7h2.5A1.5 1.5 0 0 0 21 5.5v-2A1.5 1.5 0 0 0 19.5 2H17zM17 17v5h2.5a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z' />
    </g>
  </svg>
);
export default SvgMagnet;
