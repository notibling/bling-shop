import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExpressionlessCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10' opacity={0.5} />
    <path d='M8.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5.448 1.5 1 1.5' />
  </svg>
);
export default SvgExpressionlessCircle;
