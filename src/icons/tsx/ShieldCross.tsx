import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShieldCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"
      opacity={0.5}
    />
    <path d="M10.03 8.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94z" />
  </svg>
);
export default SvgShieldCross;
