import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSocket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity={0.5} />
    <path fillRule="evenodd" d="M11.25 7.5V5.29a6.751 6.751 0 0 0 0 13.418V16.5a.75.75 0 1 1 1.5 0v2.209a6.751 6.751 0 0 0 0-13.418V7.5a.75.75 0 0 1-1.5 0M15 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clipRule="evenodd" />
  </svg>
);
export default SvgSocket;