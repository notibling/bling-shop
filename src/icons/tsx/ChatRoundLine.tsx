import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatRoundLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity={0.5} />
    <path d="M7.825 12.85a.825.825 0 0 0 0 1.65h6.05a.825.825 0 0 0 0-1.65zM7.825 9a.825.825 0 0 0 0 1.65h8.8a.825.825 0 0 0 0-1.65z" />
  </svg>
);
export default SvgChatRoundLine;
