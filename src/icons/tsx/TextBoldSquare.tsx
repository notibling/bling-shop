import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextBoldSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity={0.5} />
    <path
      fillRule="evenodd"
      d="M9.522 5.25A2.27 2.27 0 0 0 7.25 7.522v9.301c0 1.064.863 1.927 1.926 1.927H13a3.75 3.75 0 0 0 1.665-7.111A3.75 3.75 0 0 0 12 5.25zM14.25 9A2.25 2.25 0 0 1 12 11.25H8.75V7.522c0-.426.346-.772.772-.772H12A2.25 2.25 0 0 1 14.25 9m-5.5 7.823V12.75H13a2.25 2.25 0 0 1 0 4.5H9.176a.426.426 0 0 1-.426-.427"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTextBoldSquare;