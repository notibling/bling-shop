import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudStorage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M8.94 14.44c-.44.439-.44 1.146-.44 2.56v2c0 1.414 0 2.121.44 2.56.439.44 1.146.44 2.56.44h1c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56v-2c0-1.414 0-2.121-.44-2.56-.439-.44-1.146-.44-2.56-.44h-1c-1.414 0-2.121 0-2.56.44M10.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      d="M22 12.353c0 2.88-2.181 5.256-5 5.603l-1.5.007V17c0-1.414 0-2.121-.44-2.56-.439-.44-1.146-.44-2.56-.44h-1c-1.414 0-2.121 0-2.56.44-.44.439-.44 1.146-.44 2.56v.993L7 18h-.714C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353"
      opacity={0.5}
    />
  </svg>
);
export default SvgCloudStorage;