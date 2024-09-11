import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRadar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity={0.5} />
    <path d="M11.125 6.823a5.248 5.248 0 1 1-3.636 2.49l4.04 3.27a.75.75 0 1 0 .943-1.166L8.274 8.019c-.562-.454-1.466-.412-1.918.279a6.749 6.749 0 1 0 4.519-2.953.75.75 0 1 0 .25 1.478" />
  </svg>
);
export default SvgRadar;
