import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKeyMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M18.977 14.79a6.907 6.907 0 1 0-11.573-3.159c.095.369.01.768-.258 1.037L3.433 16.38a1.48 1.48 0 0 0-.424 1.21l.232 2.089c.025.223.125.43.283.589l.208.208a1 1 0 0 0 .589.283l2.089.232a1.48 1.48 0 0 0 1.21-.424l.71-.71 1.06-1.061 1.942-1.942c.27-.27.668-.353 1.037-.258a6.9 6.9 0 0 0 6.608-1.806"
      opacity={0.5}
    />
    <path d="M15.414 8.586a2 2 0 1 0-2.828 2.828 2 2 0 0 0 2.828-2.828M6.583 18.13l1.746 1.727 1.06-1.061-1.751-1.733a.75.75 0 1 0-1.055 1.066" />
  </svg>
);
export default SvgKeyMinimalistic;