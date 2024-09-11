import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDumbbellSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 15V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C17.697 7 17.464 7 17 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C15 8.304 15 8.536 15 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C19 15.697 19 15.464 19 15M5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C6.304 17 6.536 17 7 17s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C9 15.697 9 15.464 9 15V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.696 7 7.464 7 7 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C5 8.304 5 8.536 5 9" />
    <path d="M15 12.75H9v-1.5h6z" opacity={0.5} />
    <g opacity={0.5}>
      <path d="M3.5 12A2 2 0 0 1 5 10.063v3.874A2 2 0 0 1 3.5 12M20.5 12a2 2 0 0 1-1.5 1.937v-3.874a2 2 0 0 1 1.5 1.936" />
    </g>
  </svg>
);
export default SvgDumbbellSmall;