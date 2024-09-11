import * as React from 'react';
import type { SVGProps } from 'react';
const SvgListDownMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.5}
    />
    <path fillRule="evenodd" d="M17.012 18.57c.28.24.695.24.976 0l3.5-3a.75.75 0 0 0-.976-1.14L17.5 17.013l-3.012-2.581a.75.75 0 1 0-.976 1.139z" clipRule="evenodd" />
  </svg>
);
export default SvgListDownMinimalistic;