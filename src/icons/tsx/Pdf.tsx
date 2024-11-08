import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPdf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>

    <path fill='currentColor' 
      d='M21.77 22.59c-6.51.89-13.02.89-19.53 0-.63-.09-1.31-1.16-1.48-2.37C.04 14.74.04 9.26.76 3.78c.16-1.21.85-2.28 1.48-2.37a71.76 71.76 0 0119.53 0c.63.09 1.31 1.16 1.48 2.37.72 5.48.72 10.96 0 16.44-.16 1.21-.85 2.28-1.48 2.37z'
      opacity={0.5}
    ></path>
    <path fill='currentColor' d='M7.84 9.58c-.36-.16-.78-.24-1.26-.24H4.07v5.33h1.76v-1.31h.75c.49 0 .91-.08 1.26-.25.36-.17.63-.4.82-.7.19-.3.29-.65.29-1.07s-.1-.77-.29-1.07c-.19-.3-.47-.53-.82-.7zm-.83 2.22c-.12.11-.3.17-.54.17h-.64v-1.25h.64c.24 0 .42.06.54.17s.18.26.18.46-.06.35-.18.46zM13.64 9.66c-.44-.22-.95-.32-1.53-.32H9.54v5.33h2.57c.58 0 1.09-.11 1.53-.32.44-.22.79-.52 1.04-.92s.37-.87.37-1.43-.12-1.02-.37-1.42c-.25-.4-.59-.7-1.04-.92zm-.52 3.03c-.1.19-.25.33-.44.43-.19.1-.4.14-.65.14h-.74v-2.53h.74c.25 0 .47.05.65.14.19.1.33.24.44.43.1.19.16.42.16.69s-.05.51-.16.7z'></path>
    <path fill='currentColor' d='M19.93 10.69L19.93 9.33 15.69 9.33 15.69 14.67 17.45 14.67 17.45 12.96 19.62 12.96 19.62 11.6 17.45 11.6 17.45 10.69 19.93 10.69z'></path>
  </svg>
);
export default SvgPdf;

