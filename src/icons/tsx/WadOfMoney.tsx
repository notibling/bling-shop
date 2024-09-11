import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWadOfMoney = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M14.25 19h1.5c2.317-.005 3.558-.062 4.472-.674a4 4 0 0 0 1.104-1.103C22 16.213 22 14.809 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.103c-.915-.612-2.155-.669-4.472-.674h-1.5V9H15a3 3 0 1 1 0 6h-.75zM9.75 19v-4H9a3 3 0 1 1 0-6h.75V5.001h-1.5c-2.317.005-3.557.062-4.472.674a4 4 0 0 0-1.104 1.103C2 7.787 2 9.192 2 12c0 2.81 0 4.214.674 5.223a4 4 0 0 0 1.104 1.103c.915.612 2.155.669 4.472.674z" />
    <path d="M9.75 19h4.5V5h-4.5z" opacity={0.5} />
  </svg>
);
export default SvgWadOfMoney;