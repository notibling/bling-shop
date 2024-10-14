import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWheel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} viewBox='0 0 24 24' {...props}>
    <g fill='currentColor' opacity={0.5}>
      <path d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6' />
      <path fillRule='evenodd' d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12m3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0' clipRule='evenodd' />
    </g>
    <path
      fill='currentColor'
      d='m9.672 17.532 1.525-2.64a3 3 0 0 1-1.299-.751l-1.524 2.64c.397.301.832.555 1.298.75M6.046 12.75h3.048a3 3 0 0 1 0-1.5H6.047a6 6 0 0 0 0 1.5m2.327-5.53 1.524 2.64a3 3 0 0 1 1.299-.751l-1.525-2.64a6 6 0 0 0-1.298.75m4.429 1.89 1.525-2.64c.465.195.901.449 1.298.75l-1.524 2.64a3 3 0 0 0-1.299-.75m2.103 3.641a3 3 0 0 0 0-1.5h3.048a6 6 0 0 1 0 1.5zm-2.103 2.141c.497-.137.942-.4 1.299-.75l1.524 2.64a6 6 0 0 1-1.298.75z'
    />
  </svg>
);
export default SvgWheel;
