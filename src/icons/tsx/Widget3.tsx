import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWidget3 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M22.25 6.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0M11.25 17.5a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0' clipRule='evenodd' />
    <g fillRule='evenodd' clipRule='evenodd' opacity={0.5}>
      <path d='M1.75 6.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M12.75 17.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0' />
    </g>
  </svg>
);
export default SvgWidget3;
