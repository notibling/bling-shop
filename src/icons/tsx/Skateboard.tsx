import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSkateboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0' />
    <path
      fillRule='evenodd'
      d='M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04'
      clipRule='evenodd'
      opacity={0.5}
    />
  </svg>
);
export default SvgSkateboard;
