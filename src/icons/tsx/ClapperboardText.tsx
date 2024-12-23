import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClapperboardText = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M16.54 2.088C15.33 2 13.845 2 12 2h-.098l-3.5 5.25h4.697zM10.096 2.004c-3.474.027-5.38.208-6.631 1.46-.858.858-1.213 2.022-1.36 3.786h4.494zM20.536 3.464c.857.858 1.213 2.022 1.36 3.786h-6.994l3.297-4.946c.993.21 1.74.563 2.337 1.16' />
    <path d='M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12' opacity={0.5} />
    <path d='M5.75 17.5a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.5a.75.75 0 0 1-.75-.75M6.5 13.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z' />
  </svg>
);
export default SvgClapperboardText;
