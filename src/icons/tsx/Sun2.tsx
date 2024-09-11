import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSun2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
    <path
      fillRule="evenodd"
      d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <g opacity={0.5}>
      <path d="M3.669 3.716a.75.75 0 0 1 1.06-.048L6.95 5.7a.75.75 0 0 1-1.012 1.107L3.716 4.775a.75.75 0 0 1-.047-1.06M20.331 3.716a.75.75 0 0 1-.047 1.06l-2.222 2.03A.75.75 0 0 1 17.05 5.7l2.222-2.032a.75.75 0 0 1 1.06.048M17.026 17.025a.75.75 0 0 1 1.06 0l2.222 2.222a.75.75 0 1 1-1.06 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06M6.975 17.025a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.061-1.06l2.222-2.223a.75.75 0 0 1 1.06 0" />
    </g>
  </svg>
);
export default SvgSun2;
