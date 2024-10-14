import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M16 16h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3' />
    <path fillRule='evenodd' d='M19 8h-3V5a3 3 0 1 1 3 3M8 8V5a3 3 0 1 0-3 3z' clipRule='evenodd' />
    <path d='M16 8H8v8h8z' opacity={0.5} />
  </svg>
);
export default SvgCommand;
