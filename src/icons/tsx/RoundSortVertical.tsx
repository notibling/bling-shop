import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRoundSortVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10' opacity={0.5} />
    <path d='M11.445 10.246a.75.75 0 1 0 1.11 1.008L13.75 9.94V16a.75.75 0 0 0 1.5 0V9.94l1.195 1.315a.75.75 0 1 0 1.11-1.01l-2.5-2.75a.75.75 0 0 0-1.11 0z' />
    <path d='M7.555 12.746a.75.75 0 1 0-1.11 1.008l2.5 2.75a.75.75 0 0 0 1.11 0l2.5-2.75a.75.75 0 0 0-1.11-1.008L10.25 14.06V8a.75.75 0 1 0-1.5 0v6.06z' />
  </svg>
);
export default SvgRoundSortVertical;
