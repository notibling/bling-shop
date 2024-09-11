import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStructure = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0M22 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    <g opacity={0.5}>
      <path d="M16.093 4.256A1 1 0 0 0 16 4.25H8a1 1 0 0 0-.093.006 3 3 0 0 1 0 1.488q.045.006.093.006h8a1 1 0 0 0 .093-.006 3 3 0 0 1 0-1.488M19 8q.386 0 .744-.093.006.045.006.093v8a1 1 0 0 1-.006.093 3 3 0 0 0-1.488 0A1 1 0 0 1 18.25 16V8q0-.048.006-.093.358.091.744.093M16.093 18.256A1 1 0 0 0 16 18.25H8a1 1 0 0 0-.093.006 3 3 0 0 1 0 1.488q.045.006.093.006h8a1 1 0 0 0 .093-.006 3 3 0 0 1 0-1.488M5 8q-.386 0-.744-.093A1 1 0 0 0 4.25 8v8q0 .048.006.093a3 3 0 0 1 1.488 0A1 1 0 0 0 5.75 16V8a1 1 0 0 0-.006-.093Q5.386 7.998 5 8" />
    </g>
  </svg>
);
export default SvgStructure;
