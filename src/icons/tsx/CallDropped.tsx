import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCallDropped = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path stroke={props.color || 'currentColor'} strokeWidth={1.5} d="M15 4v1c0 1.886 0 2.828.586 3.414S17.115 9 19 9h1.5m0 0L18 7m2.5 2L18 11" />
    <path
      d="m15.556 14.548-.455.48s-1.083 1.139-4.038-1.972-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"
      opacity={0.5}
    />
  </svg>
);
export default SvgCallDropped;