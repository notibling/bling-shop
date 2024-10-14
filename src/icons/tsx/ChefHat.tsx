import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChefHat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M18.998 18H5.002c.01 1.397.081 2.912.584 3.414C6.172 22 7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586.503-.502.574-2.017.584-3.414' />
    <path d='M7 5a5 5 0 0 0-2 9.584V18h14v-3.416a5.001 5.001 0 0 0-2.737-9.53 4.502 4.502 0 0 0-8.526 0A5 5 0 0 0 7 5' opacity={0.5} />
  </svg>
);
export default SvgChefHat;
