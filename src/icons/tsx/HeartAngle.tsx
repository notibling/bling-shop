import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeartAngle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M2 9.137c0 4.405 3.298 6.947 6.106 9.11q.44.337.856.664C10 19.73 11 20.501 12 20.501v-15C7.5.826 2 4.274 2 9.137' clipRule='evenodd' opacity={0.5} />
    <path d='m14 7.5-2-2v15c1 0 2-.77 3.038-1.589q.417-.328.856-.664C18.702 16.084 22 13.542 22 9.137c0-4.462-4.631-7.734-8.871-4.63L15.06 6.44A.75.75 0 0 1 14 7.499' />
  </svg>
);
export default SvgHeartAngle;
