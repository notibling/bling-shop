import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRadialBlur = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <circle cx={12} cy={12} r={10} opacity={0.5} />
    <path d='M15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M19 9.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M19 14.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0M15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M9.75 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M14.25 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5' />
  </svg>
);
export default SvgRadialBlur;
