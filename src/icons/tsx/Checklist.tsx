import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChecklist = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M8.048 2.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 0 1 1.166-.944l.708.875 3.697-3.451a.75.75 0 0 1 1.06.036M11.25 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M8.048 16.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875 3.697-3.451a.75.75 0 0 1 1.06.036M11.25 19a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75'
      clipRule='evenodd'
    />
    <g opacity={0.5}>
      <path d='M8.048 9.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875 3.697-3.451a.75.75 0 0 1 1.06.036M11.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75' />
    </g>
  </svg>
);
export default SvgChecklist;
