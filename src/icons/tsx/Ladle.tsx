import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLadle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M16 17c3.054 0 6-1.12 6-2.5S19.054 12 16 12s-6.632 1.12-6.632 2.5S12.946 17 16 17' opacity={0.5} />
    <path d='M6.434 2.5A2.934 2.934 0 0 0 3.5 5.434a.75.75 0 0 1-1.5 0 4.434 4.434 0 1 1 8.868 0v7.568c-.897.413-1.486.924-1.5 1.478V5.434A2.934 2.934 0 0 0 6.434 2.5M9.368 14.52c.009.323.212.632.558.914C11.05 16.352 13.676 17 16 17c3.054 0 6-1.12 6-2.5v1.184a6.316 6.316 0 1 1-12.632 0V14.5z' />
  </svg>
);
export default SvgLadle;
