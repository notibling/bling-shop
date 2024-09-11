import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSliderVerticalMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M5.846 8c0-2.828 0-4.243.901-5.121C7.65 2 9.1 2 12 2s4.352 0 5.253.879c.9.878.9 2.293.9 5.121v8c0 2.828 0 4.243-.9 5.121C16.352 22 14.9 22 12 22c-2.9 0-4.351 0-5.253-.879-.9-.878-.9-2.293-.9-5.121z" />
    <path
      fillRule="evenodd"
      d="M2.77 3.75a.76.76 0 0 1 .768.75v15a.76.76 0 0 1-.769.75A.76.76 0 0 1 2 19.5v-15a.76.76 0 0 1 .77-.75m18.46 0a.76.76 0 0 1 .77.75v15a.76.76 0 0 1-.77.75.76.76 0 0 1-.768-.75v-15a.76.76 0 0 1 .769-.75"
      clipRule="evenodd"
      opacity={0.5}
    />
  </svg>
);
export default SvgSliderVerticalMinimalistic;
