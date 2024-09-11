import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWashingMachine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M9.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0" />
    <path
      fillRule="evenodd"
      d="M3 9h18v4c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-1.129C16.18 21 14.806 21 13 21h-2c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697C3 18.657 3 16.771 3 13zm9 2.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
      clipRule="evenodd"
    />
    <path d="M4.171 3.172c-.974.974-1.138 2.442-1.166 5.078V9H21v-.75c-.028-2.636-.198-4.104-1.172-5.078C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.17 3.172" opacity={0.5} />
    <path d="M6.5 4.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgWashingMachine;
