import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeartPulse2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M2.346 11.25A6.3 6.3 0 0 1 2 9.26C2 3.35 7.5.663 12 5.5 16.5.663 22 3.349 22 9.26c0 .66-.125 1.327-.346 1.99h-3.13c-.546 0-1.03-.002-1.471.195-.441.196-.765.557-1.13.963l-.075.084-1.029 1.143a.25.25 0 0 1-.379-.007L10.89 9.323c-.14-.17-.289-.35-.435-.485a1.24 1.24 0 0 0-.773-.353 1.24 1.24 0 0 0-.81.258c-.16.116-.33.278-.49.43l-1.53 1.456c-.471.45-.57.526-.672.567-.103.042-.228.054-.879.054z'
      opacity={0.5}
    />
    <path d='M21.654 11.25h-3.13c-.546 0-1.03-.002-1.471.195-.441.196-.765.557-1.13.963l-.075.084-1.029 1.143a.25.25 0 0 1-.379-.007L10.89 9.323c-.14-.17-.289-.35-.435-.485a1.24 1.24 0 0 0-.773-.353 1.24 1.24 0 0 0-.81.258 5 5 0 0 0-.49.43l-1.53 1.456c-.471.45-.57.526-.672.568-.103.04-.227.053-.879.053H2.346c1.036 3.105 4.191 6.144 6.616 8.12C10.294 20.458 10.96 21 12 21s1.706-.543 3.038-1.63c2.425-1.976 5.58-5.015 6.616-8.12' />
  </svg>
);
export default SvgHeartPulse2;
