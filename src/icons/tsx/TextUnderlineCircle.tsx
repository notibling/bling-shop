import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextUnderlineCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" opacity={0.5} />
    <path d="M7.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8.75 7a.75.75 0 0 0-1.5 0v3a4.75 4.75 0 1 0 9.5 0V7a.75.75 0 0 0-1.5 0v3a3.25 3.25 0 0 1-6.5 0z" />
  </svg>
);
export default SvgTextUnderlineCircle;
