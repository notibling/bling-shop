import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShareCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <g opacity={0.5}>
      <path d='M7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0 7.23 7.23 0 0 1 2.455-5.438M17.788 6.438a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0 8.73 8.73 0 0 0-2.962-6.562M10.187 20.022a.75.75 0 1 0-.374 1.452c.7.18 1.433.276 2.187.276s1.487-.096 2.187-.276a.75.75 0 1 0-.374-1.452A7.3 7.3 0 0 1 12 20.25c-.627 0-1.234-.08-1.813-.228' />
    </g>
    <path d='M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0M2.5 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M18.5 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6' />
  </svg>
);
export default SvgShareCircle;
