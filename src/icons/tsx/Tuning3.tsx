import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTuning3 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0M18 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0' />
    <g opacity={0.5}>
      <path d='M12.75 10.145a2 2 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0zM11.25 13.855a2 2 0 0 0 1.5 0V19a.75.75 0 0 1-1.5 0zM19.25 12.145a2 2 0 0 1 1.5 0V5a.75.75 0 0 0-1.5 0zM19.25 15.855V19a.75.75 0 0 0 1.5 0v-3.145a2 2 0 0 1-1.5 0M4.75 8.145a2 2 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0zM4.75 11.855a2 2 0 0 1-1.5 0V19a.75.75 0 0 0 1.5 0z' />
    </g>
  </svg>
);
export default SvgTuning3;
