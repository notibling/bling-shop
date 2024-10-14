import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTestTubeMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M3.187 15.048a4.085 4.085 0 0 0 0 5.76 4.04 4.04 0 0 0 5.734 0l3.746-3.763-1.772-.736a2.36 2.36 0 0 1-1.408-1.906 2.35 2.35 0 0 0-2.074-2.082h-1.51z' />
    <path fillRule='evenodd' d='M13.362 2.233a.8.8 0 0 1 1.132.003l7.273 7.305a.8.8 0 0 1-1.134 1.129L13.36 3.364a.8.8 0 0 1 .002-1.13' clipRule='evenodd' />
    <path d='M14.09 4.098 3.187 15.048a4.085 4.085 0 0 0 0 5.76 4.04 4.04 0 0 0 5.734 0L19.824 9.855z' opacity={0.5} />
  </svg>
);
export default SvgTestTubeMinimalistic;
