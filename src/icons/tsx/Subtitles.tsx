import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSubtitles = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4" opacity={0.5} />
    <path d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M18.75 13a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 .75-.75M11.75 16a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M12.25 13a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .75-.75M15.75 16a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M7.75 13a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75" />
  </svg>
);
export default SvgSubtitles;
