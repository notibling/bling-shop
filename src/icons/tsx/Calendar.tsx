import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724' />
    <path d='M22 14v-2c0-.839-.003-2.335-.016-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.772 22 14' opacity={0.5} />
    <path d='M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0' />
  </svg>
);
export default SvgCalendar;
