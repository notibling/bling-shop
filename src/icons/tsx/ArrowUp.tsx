import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' data-name='Capa 1' viewBox='0 0 24 24' {...props}>
    <path d='m7.18 7.75 4.28-4.27c.3-.31.8-.31 1.1 0l4.27 4.27c.31.31.31.8 0 1.1-.3.31-.79.31-1.1 0l-2.91-2.91s-.01-.02-.03-.03c0 0-.01-.02-.02-.03a1.06 1.06 0 0 0-1.5 0c-.02.02-.03.03-.04.05v-.02L8.28 8.85c-.31.31-.8.31-1.1 0a.767.767 0 0 1 0-1.1' />
    <path d='M11.23 19.97V5.93s.02-.03.04-.05a1.06 1.06 0 0 1 1.5 0c.01.01.02.02.02.03v14.06a.781.781 0 0 1-1.56 0' opacity={0.5} />
  </svg>
);
export default SvgArrowUp;
