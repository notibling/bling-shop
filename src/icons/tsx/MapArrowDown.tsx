import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMapArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M8.037 14.144a.5.5 0 0 1-.68-.244L3.164 4.498c-.667-1.495.815-3.047 2.202-2.306l5.904 3.152c.46.245 1 .245 1.459 0l5.904-3.152c1.387-.741 2.869.81 2.202 2.306l-1.572 3.525a2 2 0 0 1-.932.974z' />
    <path d='M8.609 15.534a.5.5 0 0 0-.233.651l2.15 4.823c.59 1.323 2.355 1.323 2.946 0l3.968-8.898a.5.5 0 0 0-.68-.651z' opacity={0.5} />
  </svg>
);
export default SvgMapArrowDown;
