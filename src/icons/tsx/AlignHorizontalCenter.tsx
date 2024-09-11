import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlignHorizontalCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M14.5 14h-5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C7 15.098 7 15.565 7 16.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C8.098 19 8.565 19 9.5 19h5c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 14 15.435 14 14.5 14"
      clipRule="evenodd"
    />
    <path d="M19 7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 5 17.435 5 16.5 5h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 10 6.565 10 7.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C19 8.902 19 8.435 19 7.5" />
    <g opacity={0.5}>
      <path d="M12.75 5V2a.75.75 0 0 0-1.5 0v3zM11.25 10v4h1.5v-4zM11.25 19v3a.75.75 0 0 0 1.5 0v-3z" />
    </g>
  </svg>
);
export default SvgAlignHorizontalCenter;
