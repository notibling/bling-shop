import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTuningSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity={0.5} />
    <path d="M16 10.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75M7.25 14a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0zM16 19.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75M7.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z" />
    <path
      fillRule="evenodd"
      d="M16 16.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5m0-1.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M10.75 10a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0m-1.5 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTuningSquare;