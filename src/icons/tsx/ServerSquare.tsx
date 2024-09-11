import * as React from 'react';
import type { SVGProps } from 'react';
const SvgServerSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <g opacity={0.5}>
      <path d="M14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-.25h20V13c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21M10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v.25H2V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3" />
    </g>
    <path fillRule="evenodd" d="M22 12.75H2v-1.5h20z" clipRule="evenodd" />
    <path d="M12.75 16.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M12.75 7.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M6 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M9 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75" />
  </svg>
);
export default SvgServerSquare;
