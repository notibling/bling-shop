import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSoundwave = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-8 7a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75'
      clipRule='evenodd'
    />
    <g opacity={0.5}>
      <path d='M16.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zM8.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0z' />
    </g>
  </svg>
);
export default SvgSoundwave;
