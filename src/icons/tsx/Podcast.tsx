import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPodcast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M10.837 10.546c0-.402-.312-.728-.697-.728H8.58c.324-1.66 1.731-2.909 3.42-2.909 1.687 0 3.095 1.25 3.418 2.91H12.93c-.385 0-.697.325-.697.726 0 .402.312.728.697.728h2.559v1.454H12.93c-.385 0-.697.326-.697.728s.312.727.697.727h2.489c-.278 1.425-1.354 2.547-2.721 2.836v2.255c0 .401-.313.727-.698.727s-.698-.326-.698-.727v-2.255c-1.366-.289-2.443-1.411-2.72-2.836h1.558c.385 0 .697-.326.697-.727 0-.402-.312-.728-.697-.728H8.512v-1.454h1.628c.385 0 .697-.326.697-.727" />
    <path
      d="M12 4c-3.33 0-6.054 2.701-6.266 6.116a2.46 2.46 0 0 0-1.176-.298C3.145 9.818 2 11.012 2 12.485v1.94c0 1.472 1.145 2.666 2.558 2.666q.072 0 .143-.004v.004c1.334 0 2.415-1.127 2.415-2.518v-4.028c0-2.811 2.187-5.09 4.884-5.09s4.884 2.279 4.884 5.09v4.028c0 1.39 1.08 2.518 2.415 2.518v-.004q.07.004.143.004c1.413 0 2.558-1.194 2.558-2.667v-1.94c0-1.472-1.145-2.666-2.558-2.666-.424 0-.824.108-1.176.298C18.054 6.701 15.329 4 12 4"
      opacity={0.5}
    />
  </svg>
);
export default SvgPodcast;