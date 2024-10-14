import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8' clipRule='evenodd' opacity={0.5} />
    <path d='m5.48 19.582 4.272-4.273a4 4 0 0 1-1.06-1.06L4.418 18.52q.49.57 1.06 1.06M4.418 5.48l4.273 4.272a4 4 0 0 1 1.06-1.06L5.48 4.417q-.57.492-1.06 1.061M14.248 8.691l4.273-4.273q.57.492 1.06 1.061L15.31 9.752a4 4 0 0 0-1.06-1.06M19.582 18.52l-4.273-4.272a4 4 0 0 1-1.06 1.06l4.272 4.274q.57-.492 1.06-1.061' />
  </svg>
);
export default SvgHelp;
