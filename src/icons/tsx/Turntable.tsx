import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTurntable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.172 3.464C2 4.93 2 7.286 2 12s0 7.071 1.172 8.535S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.465C22 19.072 22 16.714 22 12s0-7.071-1.172-8.536S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.464" opacity={0.5} />
    <path fillRule="evenodd" d="M5.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m1.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0" clipRule="evenodd" />
    <path
      fillRule="evenodd"
      d="M14.75 9a2.25 2.25 0 1 1 3 2.122v3.642a2.75 2.75 0 0 1-1.52 2.46l-.895.447a.75.75 0 1 1-.67-1.342l.894-.447a1.25 1.25 0 0 0 .691-1.118v-3.642A2.25 2.25 0 0 1 14.75 9m1.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTurntable;
