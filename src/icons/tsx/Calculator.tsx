import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464C21 4.93 21 7.286 21 12s0 7.071-1.318 8.535S16.242 22 12 22' opacity={0.5} />
    <path d='M15 6H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C7 7.304 7 7.536 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
  </svg>
);
export default SvgCalculator;
