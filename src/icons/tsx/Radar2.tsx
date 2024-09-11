import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRadar2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity={0.5} />
    <path d="M11.125 6.823a5.248 5.248 0 1 1-3.636 2.49l.709.574A4.35 4.35 0 1 0 12 7.65a.75.75 0 0 0 0 1.5 2.85 2.85 0 1 1-2.61 1.703l2.138 1.73a.75.75 0 1 0 .944-1.166L8.274 8.019c-.562-.454-1.466-.412-1.918.279a6.749 6.749 0 1 0 4.519-2.953.75.75 0 1 0 .25 1.478" />
  </svg>
);
export default SvgRadar2;
