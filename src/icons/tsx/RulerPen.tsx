import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRulerPen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M16 22c-1.886 0-2.828 0-3.414-.586-.503-.502-.574-1.267-.584-2.664L12 17.25V6.75l.002-1.5c.01-1.397.081-2.162.584-2.664C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22z'
      opacity={0.5}
    />
    <path d='M15 8.25h-3v1.5h3a.75.75 0 0 0 0-1.5M14 5.25h-1.998L12 6.75h2a.75.75 0 0 0 0-1.5M14 11.25h-2v1.5h2a.75.75 0 0 0 0-1.5M15 14.25h-3v1.5h3a.75.75 0 0 0 0-1.5M14 17.25h-2l.002 1.5H14a.75.75 0 0 0 0-1.5M8 14.98V7a7.9 7.9 0 0 1-3 .589A7.9 7.9 0 0 1 2 7v7.98c0 .622 0 .934.038 1.239a5 5 0 0 0 .25 1.057c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.836.52-1.126a5 5 0 0 0 .25-1.057C8 15.913 8 15.602 8 14.979' />
    <path d='M5 2a3 3 0 0 1 3 3v2a7.9 7.9 0 0 1-3 .589A7.9 7.9 0 0 1 2 7V5a3 3 0 0 1 3-3' opacity={0.5} />
  </svg>
);
export default SvgRulerPen;
