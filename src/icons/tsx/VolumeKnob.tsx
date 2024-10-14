import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVolumeKnob = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0' />
    <path d='M20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M3.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2' opacity={0.5} />
    <path d='M6.697 5.283a1 1 0 1 1-1.415 1.414 1 1 0 0 1 1.415-1.414' opacity={0.7} />
    <path d='M18.718 17.303a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415' opacity={0.4} />
    <path d='M18.718 6.697a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414' opacity={0.7} />
    <path d='M6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415' opacity={0.4} />
  </svg>
);
export default SvgVolumeKnob;
