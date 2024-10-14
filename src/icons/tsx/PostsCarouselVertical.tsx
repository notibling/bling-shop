import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPostsCarouselVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <g opacity={0.5}>
      <path d='M8 5.5h8a3 3 0 0 0 3-3 .5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5 3 3 0 0 0 3 3M16 18.5H8a3 3 0 0 0-3 3 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 3 3 0 0 0-3-3' />
    </g>
    <path d='M5 11.5c0-1.886 0-2.828.586-3.414S7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586S19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414S16.886 16.5 15 16.5H9c-1.886 0-2.828 0-3.414-.586S5 14.386 5 12.5z' />
  </svg>
);
export default SvgPostsCarouselVertical;
