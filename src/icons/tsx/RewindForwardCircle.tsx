import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRewindForwardCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10' opacity={0.5} />
    <path d='M13.437 7.461a.75.75 0 0 0-.872 1.22l3.221 2.302a1.25 1.25 0 0 1 0 2.034l-3.221 2.301a.75.75 0 0 0 .872 1.22l3.221-2.3a2.75 2.75 0 0 0 0-4.476z' />
    <path d='M7.5 15.132V8.869a1 1 0 0 1 1.555-.832l4.697 3.131a1 1 0 0 1 0 1.664l-4.697 3.132a1 1 0 0 1-1.555-.832' />
  </svg>
);
export default SvgRewindForwardCircle;
