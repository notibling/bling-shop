import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReel2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12' opacity={0.5} />
    <path fillRule='evenodd' d='M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5' clipRule='evenodd' />
    <path d='M5.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M13 18.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M18.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
  </svg>
);
export default SvgReel2;
