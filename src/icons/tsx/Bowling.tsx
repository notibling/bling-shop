import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBowling = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity={0.5} />
    <path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
  </svg>
);
export default SvgBowling;
