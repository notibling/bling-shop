import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStopCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10' opacity={0.5} />
    <path d='M8.586 8.586C8 9.172 8 10.114 8 12s0 2.828.586 3.414S10.114 16 12 16s2.828 0 3.414-.586S16 13.886 16 12s0-2.828-.586-3.414S13.886 8 12 8s-2.828 0-3.414.586' />
  </svg>
);
export default SvgStopCircle;
