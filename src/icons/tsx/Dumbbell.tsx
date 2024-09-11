import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDumbbell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M22 10v4c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 17 19.932 17 19 17s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C16 15.398 16 14.432 16 13.5v-3c0-.932 0-1.898.152-2.265a2 2 0 0 1 1.083-1.083C17.602 7 18.068 7 19 7s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 8.602 22 9.068 22 10m-14 .5v3c0 .932 0 1.898-.152 2.265a2 2 0 0 1-1.083 1.083C6.398 17 5.932 17 5 17s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 15.398 2 14.932 2 14v-4c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 7 4.068 7 5 7s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C8 8.602 8 9.568 8 10.5"
      clipRule="evenodd"
    />
    <path d="M16 10.5H8v3h8z" opacity={0.5} />
  </svg>
);
export default SvgDumbbell;