import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatRoundDots = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12c0 1.76.413 3.423 1.148 4.898.195.392.26.84.147 1.263l-.655 2.448a1.43 1.43 0 0 0 1.75 1.751l2.45-.655a1.8 1.8 0 0 1 1.262.147A10.96 10.96 0 0 0 12 23" opacity={0.5} />
    <path d="M10.9 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0M6.5 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0M15.3 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0" />
  </svg>
);
export default SvgChatRoundDots;
