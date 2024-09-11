import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVinyl = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity={0.5} />
    <path fillRule="evenodd" d="M13.818 3.395a.75.75 0 0 1 .669-.11 9.54 9.54 0 0 1 6.228 6.228.75.75 0 1 1-1.43.45 8.05 8.05 0 0 0-4.273-4.87v7.276a3.381 3.381 0 1 1-1.5-2.81V4a.75.75 0 0 1 .306-.605" clipRule="evenodd" />
  </svg>
);
export default SvgVinyl;
