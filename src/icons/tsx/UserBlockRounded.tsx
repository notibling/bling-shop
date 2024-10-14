import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserBlockRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <circle cx={12} cy={6} r={4} />
    <path fillRule='evenodd' d='M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3a2.24 2.24 0 0 0-.97-.22m2.03 1.28-3 3a2.25 2.25 0 0 0 3-3m-5.78.97a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0' clipRule='evenodd' />
    <path d='M17.216 14.332a3.751 3.751 0 0 0-1.97 6.213c-.97.29-2.075.455-3.246.455-3.866 0-7-1.79-7-4s3.134-4 7-4c2.072 0 3.934.515 5.216 1.332' opacity={0.5} />
  </svg>
);
export default SvgUserBlockRounded;
