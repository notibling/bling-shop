import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTennis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M13.196 2.07A9.96 9.96 0 0 0 7 3.34 9.95 9.95 0 0 0 2.93 7.79c1.016.721 3.634 2.793 5.607 6.21a18.5 18.5 0 0 1 1.08 2.199q.133.323.246.633c1.068 2.929.945 5.051.942 5.097A9.96 9.96 0 0 0 17 20.66a9.96 9.96 0 0 0 4.197-4.731S17.964 14.33 15.464 10s-2.268-7.93-2.268-7.93' />
    <g opacity={0.5}>
      <path d='m3.83 17.768.043.06a10 10 0 0 0 1.825 1.94 10.03 10.03 0 0 0 5.106 2.161c.004-.055.124-2.175-.942-5.096a17.5 17.5 0 0 0-.888-2.03A19 19 0 0 0 8.536 14c-1.973-3.416-4.59-5.488-5.607-6.21a9.99 9.99 0 0 0 .901 9.978M20.66 7a9.99 9.99 0 0 0-7.464-4.929s-.232 3.6 2.268 7.93 5.733 5.928 5.733 5.928A9.99 9.99 0 0 0 20.66 7' />
    </g>
  </svg>
);
export default SvgTennis;
