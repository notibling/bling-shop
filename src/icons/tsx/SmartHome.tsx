import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmartHome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22"
      opacity={0.5}
    />
    <path
      fillRule="evenodd"
      d="M2 12.25a.75.75 0 0 1 .75-.75c5.39 0 9.758 4.365 9.758 9.75a.75.75 0 0 1-1.5 0c0-4.556-3.697-8.25-8.257-8.25A.75.75 0 0 1 2 12.25m.75 2.25a.75.75 0 1 0 0 1.5 5.25 5.25 0 0 1 5.255 5.25.75.75 0 0 0 1.5 0 6.753 6.753 0 0 0-6.754-6.75M2 18.25a.75.75 0 0 1 .75-.75 3.75 3.75 0 0 1 3.754 3.75.75.75 0 0 1-1.502 0A2.25 2.25 0 0 0 2.751 19 .75.75 0 0 1 2 18.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmartHome;