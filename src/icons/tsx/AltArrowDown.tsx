import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAltArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='m8.303 12.404 3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z' />
    <path d='M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z' opacity={0.5} />
  </svg>
);
export default SvgAltArrowDown;
