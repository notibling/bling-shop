import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBlingSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M3.46 20.54C4.93 22 7.28 22 12 22s7.07 0 8.53-1.47C22 19.07 22 16.71 22 12s0-7.07-1.47-8.54C19.07 2 16.71 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.28 2 12s0 7.07 1.46 8.53'
      style={{ isolation: 'isolate' }}
      fill='currentColor'
      opacity={0.5}
    ></path>
    <path
      d='M13.31 16.76c.01 1.8-2.84 1.63-2.61-.16.83.21 1.78.21 2.61 0 0 .05.01.1.01.16h-.01zM10.6 6.88c-1.36.43-2.47 1.54-2.92 2.89l-.95-.31c.54-1.67 1.9-3 3.57-3.54l.31.95h-.01zM17.27 9.47l-.95.31a4.583 4.583 0 00-2.92-2.9l.31-.95c1.67.53 3.02 1.87 3.56 3.54z'
      style={{ isolation: 'isolate' }}
      fill='currentColor'
    ></path>
    <path fill='currentColor' d='M16.22 14.25v2.01H7.77v-2.01c.17-.13.62-.45.79-.57.05-1.05-.21-3.09.38-4.01s.05-.09.07-.12.02-.04.03-.06c3.32-4.17 7.34-.17 6.39 4.2.17.12.62.45.79.57z'></path>
  </svg>


);
export default SvgBlingSquare;
