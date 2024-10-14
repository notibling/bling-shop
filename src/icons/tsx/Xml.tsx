import * as React from 'react';
import type { SVGProps } from 'react';
const SvgXml = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fill='currentColor' 
      d='M21.77 22.59c-6.51.89-13.02.89-19.53 0-.63-.09-1.31-1.16-1.48-2.37C.04 14.74.04 9.26.76 3.78c.16-1.21.85-2.28 1.48-2.37a71.76 71.76 0 0119.53 0c.63.09 1.31 1.16 1.48 2.37.72 5.48.72 10.96 0 16.44-.16 1.21-.85 2.28-1.48 2.37z'
      opacity={0.5}
    ></path>
    <path fill='currentColor' d='M9.01 9.33L7.11 9.33 6.25 10.67 5.36 9.33 3.39 9.33 5.21 11.97 3.32 14.67 5.33 14.67 6.2 13.24 7.11 14.67 9.12 14.67 7.19 11.91 9.01 9.33z'></path>
    <path fill='currentColor' d='M14.14 9.33L12.48 12.17 10.78 9.33 9.34 9.33 9.34 14.67 10.94 14.67 10.94 12.32 12.07 14.19 12.85 14.19 13.98 12.23 13.99 14.67 15.6 14.67 15.58 9.33 14.14 9.33z'></path>
    <path fill='currentColor' d='M18.21 13.27L18.21 9.33 16.45 9.33 16.45 14.67 20.56 14.67 20.56 13.27 18.21 13.27z'></path>

  </svg>
);
export default SvgXml;
