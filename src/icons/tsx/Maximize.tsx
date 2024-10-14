import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M8.607 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-5.857a.75.75 0 1 1 1.5 0v4.046l5.72-5.72a.75.75 0 0 1 1.06 1.061l-5.72 5.72h4.047a.75.75 0 0 1 .75.75' clipRule='evenodd' opacity={0.6} />
    <path fillRule='evenodd' d='M15.393 2a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.857a.75.75 0 0 1-1.5 0V3.811l-5.72 5.72a.75.75 0 1 1-1.06-1.061l5.72-5.72h-4.047a.75.75 0 0 1-.75-.75' clipRule='evenodd' />
  </svg>
);
export default SvgMaximize;
