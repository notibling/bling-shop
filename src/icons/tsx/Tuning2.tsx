import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTuning2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6M14.25 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    <g opacity={0.5}>
      <path d="M17.166 7.709a3 3 0 0 0-.021-1.5h4.605a.75.75 0 0 1 0 1.5zM11.356 6.209a3 3 0 0 0-.022 1.5H1.75a.75.75 0 0 1 0-1.5zM6.356 16.209H1.75a.75.75 0 0 0 0 1.5h4.584a3 3 0 0 1 .022-1.5M12.166 17.709h9.584a.75.75 0 0 0 0-1.5h-9.605a3 3 0 0 1 .02 1.5" />
    </g>
  </svg>
);
export default SvgTuning2;
