import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAltArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='m8.303 11.596 3.327-3.431a.5.5 0 0 1 .74 0l6.43 6.63c.401.414.158 1.205-.37 1.205h-5.723z' />
    <path d='M11.293 16H5.57c-.528 0-.771-.791-.37-1.205l2.406-2.482z' opacity={0.5} />
  </svg>
);
export default SvgAltArrowUp;
