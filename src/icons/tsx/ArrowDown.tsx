import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' data-name='Capa 1' viewBox='0 0 24 24' {...props}>
    <path d='m16.83 16.25-4.28 4.27c-.3.31-.8.31-1.1 0l-4.27-4.27a.767.767 0 0 1 0-1.1c.3-.31.79-.31 1.1 0l2.91 2.91s.01.02.03.03c0 0 .01.02.02.03.41.41 1.09.42 1.5 0 .02-.02.03-.03.04-.05v.02l2.95-2.94c.31-.31.8-.31 1.1 0 .31.3.31.79 0 1.1' />
    <path d='M12.78 4.03v14.04s-.02.03-.04.05c-.41.42-1.09.41-1.5 0-.01-.01-.02-.02-.02-.03V4.03a.781.781 0 0 1 1.56 0' opacity={0.5} />
  </svg>
);
export default SvgArrowDown;
