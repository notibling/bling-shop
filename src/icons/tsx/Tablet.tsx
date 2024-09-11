import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.172 18.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828" opacity={0.5} />
    <path d="M9 16.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgTablet;