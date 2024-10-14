import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSidebarMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h5V3h-5C6.229 3 4.343 3 3.172 4.172' clipRule='evenodd' opacity={0.5} />
    <path d='M22 13v-2c0-3.771 0-5.657-1.172-6.828-.974-.975-3.192-1.139-5.828-1.166v17.988c2.636-.027 4.854-.191 5.828-1.166C22 18.657 22 16.771 22 13' />
  </svg>
);
export default SvgSidebarMinimalistic;
