import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBackpack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M7.292 4.786A5.97 5.97 0 0 0 3 10.416l-.001.18v2.323q.155-.001.305.065a21.54 21.54 0 0 0 17.39 0 .75.75 0 0 1 .305-.065v-2.503a5.97 5.97 0 0 0-4.291-5.63c-.278-.091-1.12-.254-1.506-.324-2.12-.36-4.286-.36-6.406 0-.405.077-1.272.249-1.506.324M10 11.926a.747.747 0 0 0-.75.745c0 .411.336.745.75.745h4c.414 0 .75-.334.75-.745a.747.747 0 0 0-.75-.745z"
      clipRule="evenodd"
    />
    <path
      d="M8.873 3.992A2.25 2.25 0 0 1 11 2.49h2c.983 0 1.82.626 2.126 1.502.045.13.068.28.077.47.386.07 1.227.233 1.505.324v-.061c0-.339-.011-.782-.165-1.222A3.75 3.75 0 0 0 13 1h-2a3.75 3.75 0 0 0-3.544 2.503c-.153.44-.165.883-.165 1.222v.06c.233-.075 1.1-.247 1.505-.323.01-.19.032-.34.077-.47M21 14.477q-1.352.573-2.75.966v1.2a.75.75 0 0 1-.75.746.75.75 0 0 1-.75-.745v-.832A23.06 23.06 0 0 1 3 14.477v1.546a4.495 4.495 0 0 0 3.539 4.381c3.597.794 7.325.794 10.923 0A4.495 4.495 0 0 0 21 16.023z"
      opacity={0.5}
    />
  </svg>
);
export default SvgBackpack;
