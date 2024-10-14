import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAltArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M11.596 8.303 8.165 11.63a.5.5 0 0 0 0 .74l6.63 6.43c.414.401 1.205.158 1.205-.37v-5.723z' />
    <path d='M16 11.293V5.57c0-.528-.791-.771-1.205-.37l-2.482 2.406z' opacity={0.5} />
  </svg>
);
export default SvgAltArrowLeft;
