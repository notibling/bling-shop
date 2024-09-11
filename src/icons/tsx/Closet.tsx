import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloset = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M2.026 15.75c.066 2.021.302 3.235 1.145 4.078a3.1 3.1 0 0 0 1.079.697V22a.75.75 0 0 0 1.5 0v-1.129C6.82 21 8.194 21 10 21h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-1.475a3.1 3.1 0 0 0 1.078-.697c.809-.808 1.06-1.956 1.137-3.828l.01-.25c.001-.392.025-2.308.025-2.75v-3c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-1.25v13.75H2.026M6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m8.75-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm0-10a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <g opacity={0.5}>
      <path d="M10 2h1.25v5.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2M2.002 8.75Q2 9.337 2 10v3c0 .442.024 2.358.025 2.75h9.225v-7z" />
    </g>
  </svg>
);
export default SvgCloset;