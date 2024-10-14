import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M5 3a1 1 0 0 0-2 0v6a9 9 0 1 0 18 0V3a1 1 0 1 0-2 0v6A7 7 0 1 1 5 9z' opacity={0.5} />
    <path d='M4 20a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z' />
  </svg>
);
export default SvgTextUnderline;
