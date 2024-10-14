import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <circle cx={12} cy={6} r={4} />
    <ellipse cx={12} cy={17} opacity={0.5} rx={7} ry={4} />
  </svg>
);
export default SvgUserRounded;
