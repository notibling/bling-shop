import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <circle cx={12} cy={12} r={7} opacity={0.5} />
    <path fillRule='evenodd' d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14' clipRule='evenodd' />
  </svg>
);
export default SvgRecord;
