import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <circle  fill="currentColor" cx={12} cy={6} r={4} />
    <path  fill="currentColor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" opacity={0.5} />
  </svg>
);
export default SvgUser;
