import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M22 12c0 5.523-4.477 10-10 10a10 10 0 0 1-3.321-.565A9 9 0 0 1 8 18c0-2.221.805-4.255 2.138-5.824A6.5 6.5 0 0 0 15.5 15a6.5 6.5 0 0 0 5.567-3.143c.24-.396.933-.32.933.143' clipRule='evenodd' opacity={0.5} />
    <path d='M2 12c0 4.359 2.789 8.066 6.679 9.435A9 9 0 0 1 8 18c0-2.221.805-4.254 2.138-5.824A6.47 6.47 0 0 1 9 8.5a6.5 6.5 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2 6.477 2 2 6.477 2 12' />
  </svg>
);
export default SvgMoon;
