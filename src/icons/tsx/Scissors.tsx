import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScissors = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M6.654 1.633a.75.75 0 1 0-1.308.735L15.704 20.79a3.75 3.75 0 1 0-.136-3.303z' opacity={0.5} />
    <path d='M17.346 1.633a.75.75 0 1 1 1.308.735L8.296 20.79a3.75 3.75 0 1 1 .136-3.303z' />
  </svg>
);
export default SvgScissors;
