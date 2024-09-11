import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPower = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8.792 5.147a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 21 8.25 8.25 0 0 1 8.792 5.147" opacity={0.5} />
    <path d="M12.75 2.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" />
  </svg>
);
export default SvgPower;