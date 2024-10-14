import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImport = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M4 12a8 8 0 1 0 16 0z' opacity={0.5} />
    <path fillRule='evenodd' d='M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06' clipRule='evenodd' />
  </svg>
);
export default SvgImport;
