import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinimalisticMagnifer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M20.313 11.157a9.157 9.157 0 1 1-18.313 0 9.157 9.157 0 0 1 18.313 0' opacity={0.5} />
    <path fillRule='evenodd' d='M18.839 18.839a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022' clipRule='evenodd' />
  </svg>
);
export default SvgMinimalisticMagnifer;
