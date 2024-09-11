import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTuning4 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M10 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    <g opacity={0.5}>
      <path d="M13.855 12.75a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zM10.145 11.25a2 2 0 0 0 0 1.5H5a.75.75 0 0 1 0-1.5zM11.855 19.25a2 2 0 0 1 0 1.5H19a.75.75 0 0 0 0-1.5zM8.145 19.25H5a.75.75 0 0 0 0 1.5h3.145a2 2 0 0 1 0-1.5M15.855 4.75a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5zM12.145 4.75a2 2 0 0 1 0-1.5H5a.75.75 0 0 0 0 1.5z" />
    </g>
  </svg>
);
export default SvgTuning4;
