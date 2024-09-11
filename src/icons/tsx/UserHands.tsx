import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserHands = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M3.905 15.892A4.124 4.124 0 0 1 8 12.25h8a4.124 4.124 0 0 1 4.096 3.642l.649 5.52a.75.75 0 1 1-1.49.176l-.65-5.52A2.624 2.624 0 0 0 16 13.75H8c-1.33 0-2.45.996-2.606 2.317l-.65 5.52a.75.75 0 0 1-1.489-.175z"
      clipRule="evenodd"
    />
    <circle cx={12} cy={6} r={4} />
    <path d="M8 13.75V18c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-4.25z" opacity={0.5} />
  </svg>
);
export default SvgUserHands;
