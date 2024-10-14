import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <circle cx={10} cy={14} r={8} opacity={0.5} />
    <path d='M17 1.25a.75.75 0 0 0 0 1.5h3.19l-5.088 5.088q.58.48 1.06 1.06l5.088-5.087V7a.75.75 0 0 0 1.5 0V2.25a1 1 0 0 0-1-1z' />
  </svg>
);
export default SvgMen;
