import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextSelection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9' clipRule='evenodd' />
    <path d='M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4' />
    <g opacity={0.5}>
      <path d='M4.75 5.855a2 2 0 0 1-1.5 0v12.29a2 2 0 0 1 1.5 0zM5.855 4.75h12.29a2 2 0 0 1 0-1.5H5.855a2 2 0 0 1 0 1.5M19.25 5.855a2 2 0 0 0 1.5 0v12.29a2 2 0 0 0-1.5 0zM18.145 19.25H5.855a2 2 0 0 1 0 1.5h12.29a2 2 0 0 1 0-1.5' />
    </g>
  </svg>
);
export default SvgTextSelection;
