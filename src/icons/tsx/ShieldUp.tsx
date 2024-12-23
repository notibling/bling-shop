import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShieldUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z'
      opacity={0.5}
    />
    <path
      fillRule='evenodd'
      d='M10.95 8.4a1.75 1.75 0 0 1 2.1 0l3.4 2.55a.75.75 0 1 1-.9 1.2l-3.4-2.55a.25.25 0 0 0-.3 0l-3.4 2.55a.75.75 0 1 1-.9-1.2zm.6 3.55a.75.75 0 0 1 .9 0l2 1.5a.75.75 0 1 1-.9 1.2L12 13.488l-1.55 1.162a.75.75 0 1 1-.9-1.2z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgShieldUp;
