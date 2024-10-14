import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGps = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0' opacity={0.5} />
    <path d='M12 8.512a3.488 3.488 0 1 0 0 6.976 3.488 3.488 0 0 0 0-6.976M12.75 2a.75.75 0 0 0-1.5 0v2.035a8 8 0 0 1 1.5 0zM19.965 12.75a8 8 0 0 0 0-1.5H22a.75.75 0 0 1 0 1.5zM11.25 19.965a8 8 0 0 0 1.5 0V22a.75.75 0 0 1-1.5 0zM4.035 11.25a8 8 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5z' />
  </svg>
);
export default SvgGps;
