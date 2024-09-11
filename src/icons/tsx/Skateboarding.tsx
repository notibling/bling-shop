import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSkateboarding = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M11.332 5.345a2.49 2.49 0 0 1 2.298-.177c1.727.74 2.042 3.055.574 4.229l-.445.356-.124.1a1.25 1.25 0 0 0 .115 1.98l.153.097.01.006.157.1a3.75 3.75 0 0 1 1.679 3.028l.001.175V16.5a.75.75 0 0 1-1.5 0v-1.396a2.25 2.25 0 0 0-1.008-1.817l-.093-.06q-.019-.01-.04-.025l-.018-.01q-.12-.074-.183-.117a2.75 2.75 0 0 1-.099-4.483l.458-.366a.987.987 0 0 0-1.14-1.609l-3.23 2.019a.75.75 0 0 1-.794-1.272z" />
    <path d="M2.498 16.443a.75.75 0 0 1 1.06.055l1.204 1.338c.237.264.574.414.929.414h12.618c.355 0 .692-.15.93-.414l1.203-1.338a.75.75 0 1 1 1.116 1.004l-1.205 1.338a2.75 2.75 0 0 1-2.044.91H5.691a2.75 2.75 0 0 1-2.044-.91l-1.204-1.338a.75.75 0 0 1 .055-1.06" />
    <g opacity={0.5}>
      <path d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15.772 9.818a.75.75 0 0 1 .91-.545 7.5 7.5 0 0 0 3.636 0 .75.75 0 0 1 .364 1.455 9 9 0 0 1-4.364 0 .75.75 0 0 1-.546-.91M11.53 13.47a.75.75 0 0 1 0 1.06 5.87 5.87 0 0 1-4.151 1.72H7a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0" />
    </g>
  </svg>
);
export default SvgSkateboarding;
