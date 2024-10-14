import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrellis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M20.5 15V6.137c0-.387 0-.581-.018-.714q-.185-1.375-1.537-1.683c-.13-.03-.402-.055-.945-.104-1.002-.091-2.183-.44-3.231-.821C13.275 2.27 12.529 2 12 2s-1.275.271-2.769.815c-1.048.38-2.23.73-3.231.82-.543.05-.814.075-.945.105q-1.351.308-1.537 1.683c-.018.133-.018.327-.018.714V15h7.75v6h1.5v-6z'
      opacity={0.5}
    />
    <path d='M14.03 8.53a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 1 0 1.06 1.06zM11.03 7.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zM15.03 11.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06z' />
    <path
      fillRule='evenodd'
      d='M3 15h8.25v6H8c-.877 0-1.619 0-2.25-.026V22a.75.75 0 0 1-1.5 0v-1.19c-.58-.125-1.019-.336-1.371-.689-.768-.768-.865-1.946-.877-4.12A.997.997 0 0 1 3 15m3.25 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M16 21h-3.25v-6H21A.997.997 0 0 1 22 16c-.013 2.175-.11 3.353-.877 4.121-.353.353-.791.564-1.372.69V22a.75.75 0 0 1-1.5 0v-1.026C17.619 21 16.877 21 16 21m-1-3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTrellis;
