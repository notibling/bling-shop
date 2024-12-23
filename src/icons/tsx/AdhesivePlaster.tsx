import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAdhesivePlaster = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M3.213 3.213a4.14 4.14 0 0 0 0 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858L9.07 3.213a4.14 4.14 0 0 0-5.858 0m6.132 5.018A.788.788 0 1 0 8.23 9.345.788.788 0 0 0 9.345 8.23m2.784.928a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114m3.712 3.712a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.114m.929 3.899a.787.787 0 1 0-1.114-1.114.787.787 0 0 0 1.114 1.114m-3.713-3.713a.787.787 0 1 0-1.113-1.114.787.787 0 0 0 1.113 1.114m.928 1.67a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.113M9.16 11.016a.787.787 0 1 1 1.114 1.114.787.787 0 0 1-1.114-1.114'
      clipRule='evenodd'
    />
    <g opacity={0.5}>
      <path d='M20.787 9.071a4.142 4.142 0 0 0-5.858-5.858L12 6.143 17.858 12zM12 17.858 6.142 12l-2.929 2.929a4.142 4.142 0 0 0 5.858 5.858z' />
    </g>
  </svg>
);
export default SvgAdhesivePlaster;
