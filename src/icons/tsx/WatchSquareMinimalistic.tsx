import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWatchSquareMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M6.778 18.326C7.787 19 9.19 19 12 19s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C5 7.787 5 9.19 5 12s0 4.213.674 5.222c.292.437.667.812 1.104 1.104"
      opacity={0.5}
    />
    <path d="M12 8.25a.75.75 0 0 1 .75.75v2.758l1.77 1.701a.75.75 0 1 1-1.04 1.082l-2-1.924a.75.75 0 0 1-.23-.54V9a.75.75 0 0 1 .75-.75" />
    <path fillRule="evenodd" d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2m0 20a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
  </svg>
);
export default SvgWatchSquareMinimalistic;
