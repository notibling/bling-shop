import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMaximizeSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity={0.5} />
    <path
      fillRule="evenodd"
      d="M13.25 6.25a.75.75 0 0 0 0 1.5h1.94l-3.72 3.72-3.72 3.72v-1.94a.75.75 0 0 0-1.5 0V17c0 .414.336.75.75.75h3.75a.75.75 0 0 0 0-1.5H8.81l3.72-3.72 3.72-3.72v1.94a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMaximizeSquare;