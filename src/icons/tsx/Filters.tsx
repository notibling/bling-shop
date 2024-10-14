import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0' />
    <path d='M13.58 13.79a6.002 6.002 0 0 1-7.16-3.58 6 6 0 1 0 7.16 3.58' opacity={0.7} />
    <path d='M13.58 13.79c.271.684.42 1.43.42 2.21a5.99 5.99 0 0 1-2 4.472 6 6 0 1 0 5.58-10.262 6.01 6.01 0 0 1-4 3.58' opacity={0.4} />
  </svg>
);
export default SvgFilters;
