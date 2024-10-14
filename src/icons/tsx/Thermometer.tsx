import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='m5.962 20.174-.383.384a1.51 1.51 0 1 1-2.137-2.137l.384-.383a2.01 2.01 0 0 0 .578-1.647l-.09-.799a3.02 3.02 0 0 1 .867-2.47l8.943-8.942a4.028 4.028 0 1 1 5.696 5.696l-8.942 8.943a3.02 3.02 0 0 1-2.47.866l-.8-.089a2.01 2.01 0 0 0-1.646.578'
      opacity={0.5}
    />
    <path d='m12.518 17.18-1.061 1.06-1.3-1.301a.75.75 0 1 1 1.06-1.06zM15.727 13.97l-1.06 1.06-1.301-1.3a.75.75 0 0 1 1.06-1.06zM18.926 10.77l-1.06 1.061-1.301-1.3a.75.75 0 1 1 1.06-1.061z' />
    <path fillRule='evenodd' d='M16.03 7.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06-1.06l6.5-6.5a.75.75 0 0 1 1.06 0' clipRule='evenodd' />
  </svg>
);
export default SvgThermometer;
