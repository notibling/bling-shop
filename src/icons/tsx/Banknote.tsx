import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBanknote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M3.778 18.326C4.787 19 6.19 19 9 19h6c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C19.213 5 17.81 5 15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222c.292.437.667.812 1.104 1.104"
      opacity={0.5}
    />
    <path d="M5.5 15.75a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75M17.75 15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0z" />
    <path fillRule="evenodd" d="M8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0m1.5 0a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0" clipRule="evenodd" />
  </svg>
);
export default SvgBanknote;
