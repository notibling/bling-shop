import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRouting = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M17.47 16.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06L18.94 19l-1.47-1.47a.75.75 0 0 1 0-1.06' clipRule='evenodd' />
    <path d='M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0' />
    <path d='M7.855 5.75a2 2 0 0 0 0-1.5H16.5a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 1 0 0 5.5h10.69l.75.75-.75.75H7.5a4.25 4.25 0 0 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5z' opacity={0.5} />
  </svg>
);
export default SvgRouting;
