import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMapArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M9.856 15.962a.5.5 0 0 0 .244.68l9.402 4.193c1.495.667 3.047-.814 2.306-2.202l-3.152-5.904c-.245-.459-.245-1 0-1.458l3.152-5.904c.741-1.388-.81-2.87-2.306-2.202l-3.525 1.572a2 2 0 0 0-.974.932z' />
    <path d='M8.466 15.39a.5.5 0 0 1-.651.233l-4.823-2.15c-1.323-.59-1.323-2.355 0-2.945L11.89 6.56a.5.5 0 0 1 .65.68z' opacity={0.5} />
  </svg>
);
export default SvgMapArrowLeft;
