import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatRoundCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity={0.5} />
    <path d="M15.53 9.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411 3.48-3.48a.75.75 0 0 1 1.06 0" />
  </svg>
);
export default SvgChatRoundCheck;