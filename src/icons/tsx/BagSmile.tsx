import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBagSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M4.083 11.894c.439-2.34.658-3.511 1.491-4.203C6.408 7 7.598 7 9.98 7h4.04c2.383 0 3.573 0 4.407.691.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 23 14.771 23H9.23c-3.349 0-5.024 0-5.923-1.084-.9-1.084-.591-2.73.026-6.022z"
      opacity={0.5}
    />
    <path d="M9.75 5.985a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5.985a3.75 3.75 0 1 0-7.5 0V7c.438-.013.934-.015 1.5-.015zM9.878 15.75a2.251 2.251 0 0 0 4.245 0 .75.75 0 1 1 1.414.5 3.751 3.751 0 0 1-7.073 0 .75.75 0 1 1 1.414-.5" />
  </svg>
);
export default SvgBagSmile;