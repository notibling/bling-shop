import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMouseMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 15V9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0" opacity={0.5} />
    <path d="M12 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" />
  </svg>
);
export default SvgMouseMinimalistic;
