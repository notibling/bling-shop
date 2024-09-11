import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFaceScanCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M10.801 2.57a.71.71 0 0 1-.555.838 8.78 8.78 0 0 0-6.838 6.838.71.71 0 1 1-1.394-.283 10.2 10.2 0 0 1 7.949-7.949.71.71 0 0 1 .838.556M2.57 13.199a.71.71 0 0 1 .838.555 8.78 8.78 0 0 0 6.838 6.838.71.71 0 1 1-.283 1.394 10.2 10.2 0 0 1-7.948-7.949.71.71 0 0 1 .555-.838M13.199 2.57a.71.71 0 0 1 .838-.556 10.2 10.2 0 0 1 7.949 7.949.711.711 0 0 1-1.394.283 8.78 8.78 0 0 0-6.838-6.838.71.71 0 0 1-.555-.838M21.43 13.199a.71.71 0 0 1 .556.838 10.2 10.2 0 0 1-7.949 7.949.711.711 0 0 1-.283-1.394 8.78 8.78 0 0 0 6.838-6.838.71.71 0 0 1 .838-.555"
      clipRule="evenodd"
    />
    <path d="M12 19.583a7.583 7.583 0 1 0 0-15.166 7.583 7.583 0 0 0 0 15.166" opacity={0.5} />
    <path d="M8.94 14.539a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69.71.71 0 1 1 .847 1.142 4.87 4.87 0 0 1-2.912.97 4.87 4.87 0 0 1-2.911-.97.71.71 0 0 1-.148-.994M14.488 11.644c.458 0 .83-.557.83-1.244s-.372-1.244-.83-1.244-.83.557-.83 1.244.372 1.244.83 1.244M9.512 11.644c.458 0 .83-.557.83-1.244s-.372-1.244-.83-1.244-.83.557-.83 1.244.372 1.244.83 1.244" />
  </svg>
);
export default SvgFaceScanCircle;
