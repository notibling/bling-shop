import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRulerAngular = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M6 2h12.75c1.24.001 1.888.02 2.361.337a2 2 0 0 1 .552.552C22 3.393 22 4.096 22 5.5s0 2.107-.337 2.611a2 2 0 0 1-.552.552C20.607 9 19.904 9 18.5 9H11c-.943 0-1.414 0-1.707.293S9 10.057 9 11v7.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552c-.316-.473-.336-1.121-.337-2.361V6c0-1.886 0-2.828.586-3.414S4.114 2 6 2"
      opacity={0.5}
    />
    <path d="M4 17.25H2v1.5h2a.75.75 0 0 0 0-1.5M5 14.25H2v1.5h3a.75.75 0 0 0 0-1.5M4 11.25H2v1.5h2a.75.75 0 0 0 0-1.5M5 8.25H2v1.5h3a.75.75 0 0 0 0-1.5M9.75 5V2h-1.5v3a.75.75 0 0 0 1.5 0M12.75 4V2h-1.5v2a.75.75 0 0 0 1.5 0M15.75 5V2h-1.5v3a.75.75 0 0 0 1.5 0M18.75 4V2h-1.5v2a.75.75 0 0 0 1.5 0" />
  </svg>
);
export default SvgRulerAngular;
