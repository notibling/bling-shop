import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRoundAltArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" opacity={0.5} />
    <path d="M12.97 8.47a.75.75 0 1 1 1.06 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z" />
  </svg>
);
export default SvgRoundAltArrowLeft;