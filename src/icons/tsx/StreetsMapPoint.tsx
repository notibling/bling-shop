import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStreetsMapPoint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M12 2c4.714 0 7.071 0 8.535 1.464.504.504.835 1.114 1.052 1.889L5.353 21.587c-.775-.217-1.385-.548-1.889-1.052C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2M5.5 8.757c0 1.785 1.117 3.868 2.86 4.613.406.173.874.173 1.28 0 1.743-.745 2.86-2.828 2.86-4.613C12.5 6.958 10.933 5.5 9 5.5S5.5 6.958 5.5 8.757"
      clipRule="evenodd"
    />
    <path d="M10.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    <g opacity={0.5}>
      <path d="M21.89 7.172C22 8.433 22 10.006 22 12c0 4.134 0 6.455-.987 7.951L15.06 14zM19.952 21.012l-5.951-5.951-6.83 6.828c1.262.111 2.835.111 4.83.111 4.134 0 6.455 0 7.951-.988" />
    </g>
  </svg>
);
export default SvgStreetsMapPoint;