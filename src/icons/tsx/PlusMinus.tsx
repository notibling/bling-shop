import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlusMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M2 12c0 4.714 0 7.071 1.464 8.535l17.072-17.07C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12" clipRule="evenodd" opacity={0.5} />
    <path d="M8 4.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5H8.75v1.75a.75.75 0 0 1-1.5 0V8.75H5.5a.75.75 0 0 1 0-1.5h1.75V5.5A.75.75 0 0 1 8 4.75" />
    <path fillRule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465l17.071-17.07C22 4.928 22 7.284 22 12s0 7.071-1.465 8.535C19.071 22 16.714 22 12 22m6-4.25a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0 0 1.5z" clipRule="evenodd" />
  </svg>
);
export default SvgPlusMinus;
