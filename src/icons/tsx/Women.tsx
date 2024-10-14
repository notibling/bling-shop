import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWomen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <circle cx={12} cy={9} r={7} opacity={0.5} />
    <path d='M11.25 15.96v1.79H9.5a.75.75 0 1 0 0 1.5h1.75V22a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-1.79a7 7 0 0 1-1.5 0' />
  </svg>
);
export default SvgWomen;
