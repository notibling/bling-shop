import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRecordMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
    <path d="M6 16h12a3.99 3.99 0 0 1-2.646-1H8.646c-.705.622-1.632 1-2.646 1" opacity={0.5} />
  </svg>
);
export default SvgRecordMinimalistic;
