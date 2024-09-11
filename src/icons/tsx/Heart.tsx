import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" fillRule="evenodd" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137 2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" clipRule="evenodd" opacity={0.5} />
    <path fill="currentColor" d="M15.038 18.91C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636V20.5c1 0 2-.77 3.038-1.59" />
  </svg>
);
export default SvgHeart;
