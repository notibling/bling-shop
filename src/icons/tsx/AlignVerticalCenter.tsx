import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlignVerticalCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5"
      clipRule="evenodd"
    />
    <path d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5" />
    <g opacity={0.5}>
      <path d="M5 11.25H2a.75.75 0 0 0 0 1.5h3zM10 12.75h4v-1.5h-4zM19 12.75h3a.75.75 0 0 0 0-1.5h-3z" />
    </g>
  </svg>
);
export default SvgAlignVerticalCenter;
