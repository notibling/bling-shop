import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGamepadMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M13.172 8c2.54 0 3.809 0 4.785.614q.371.233.683.542c.82.81 1.11 2.047 1.687 4.52l1.023 4.373A2.858 2.858 0 0 1 16 19.957l-.12-.246a3.2 3.2 0 0 0-2.877-1.794h-2.005a3.2 3.2 0 0 0-2.876 1.794l-.12.246a2.858 2.858 0 0 1-5.35-1.908l1.022-4.374c.578-2.472.867-3.708 1.686-4.519a4 4 0 0 1 .684-.542C7.02 8 8.29 8 10.83 8z'
      opacity={0.5}
    />
    <path d='M9.25 12a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V15a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75zM15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15.75 4a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1A1.75 1.75 0 0 0 11.25 7v1h1.5V7a.25.25 0 0 1 .25-.25h1A1.75 1.75 0 0 0 15.75 5z' />
  </svg>
);
export default SvgGamepadMinimalistic;
