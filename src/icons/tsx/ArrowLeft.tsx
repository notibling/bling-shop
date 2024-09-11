import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" data-name="Capa 1" viewBox="0 0 24 24" {...props}>
    <path d="m7.76 16.83-4.27-4.28c-.31-.3-.31-.8 0-1.1l4.27-4.28c.31-.31.8-.31 1.1 0 .31.3.31.79 0 1.1l-2.91 2.91s-.02.01-.03.03c0 0-.02.01-.03.02a1.06 1.06 0 0 0 0 1.5c.02.02.03.03.05.04h-.02l2.94 2.95c.31.31.31.8 0 1.1-.3.31-.79.31-1.1 0Z" />
    <path d="M19.98 12.78H5.94s-.03-.02-.05-.04a1.06 1.06 0 0 1 0-1.5c.01-.01.02-.02.03-.02h14.06a.781.781 0 0 1 0 1.56" opacity={0.5} />
  </svg>
);
export default SvgArrowLeft;
