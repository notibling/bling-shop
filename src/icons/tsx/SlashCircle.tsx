import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSlashCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10' opacity={0.5} />
    <path d='M14.019 7.364a.75.75 0 0 0-1.449-.388l-2.588 9.66a.75.75 0 0 0 1.449.388z' />
  </svg>
);
export default SvgSlashCircle;
