import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSkipPrevious = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19z" opacity={0.5} />
    <path d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648z" />
  </svg>
);
export default SvgSkipPrevious;
