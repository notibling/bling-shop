import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinimizeSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12' opacity={0.5} />
    <path d='M19.952 2.987a3.7 3.7 0 0 1 1.06 1.061L15.811 9.25h1.939a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 1.5 0v1.939zM4.048 21.012a3.7 3.7 0 0 1-1.06-1.06l5.201-5.202H6.25a.75.75 0 0 1 0-1.5H10a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0v-1.94z' />
  </svg>
);
export default SvgMinimizeSquare;
