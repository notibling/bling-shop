import * as React from 'react';
import type { SVGProps } from 'react';
const SvgForbiddenCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0 3.905-10.237 0-14.142-10.237-3.905-14.142 0' opacity={0.5} />
    <path d='M18.521 4.418 4.418 18.521a10 10 0 0 0 1.06 1.06L19.583 5.48a10 10 0 0 0-1.06-1.06' />
  </svg>
);
export default SvgForbiddenCircle;
