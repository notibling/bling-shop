import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlipVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <g opacity={0.5}>
      <path d='M18.114 22H5.886c-1.702 0-2.553 0-2.832-.542-.28-.543.216-1.235 1.205-2.62l1.13-1.582c.44-.616.66-.924.982-1.09C6.694 16 7.073 16 7.83 16h8.34c.757 0 1.136 0 1.459.166s.543.474.983 1.09l1.13 1.581c.988 1.386 1.483 2.078 1.204 2.62s-1.13.543-2.832.543M18.114 2H5.886c-1.702 0-2.553 0-2.832.542-.28.543.216 1.235 1.205 2.62l1.13 1.582c.44.616.66.924.982 1.09C6.694 8 7.073 8 7.83 8h8.34c.757 0 1.136 0 1.459-.166s.543-.474.983-1.09l1.13-1.582c.988-1.385 1.483-2.077 1.204-2.62C20.666 2 19.816 2 18.114 2' />
    </g>
    <path
      fillRule='evenodd'
      d='M1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFlipVertical;
