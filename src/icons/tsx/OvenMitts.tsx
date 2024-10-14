import * as React from 'react';
import type { SVGProps } from 'react';
const SvgOvenMitts = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='m13.298 20.026 6.78-6.63a6.315 6.315 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455C9.915 3.152 8.668 1.98 7.214 2c-1.773.027-3.182 1.817-3.147 4l-.033 3.34c-.007.757-.01 1.135-.144 1.47l-.004.011 9.307 9.308z' />
    <path d='m4.019 16.537 3.569 3.49C8.933 21.341 9.606 22 10.443 22c.814 0 1.473-.624 2.75-1.871L3.886 10.82c-.136.333-.432.654-1.017 1.29-.58.63-.869 1.098-.869 1.635 0 .817.673 1.475 2.019 2.791' opacity={0.5} />
  </svg>
);
export default SvgOvenMitts;
