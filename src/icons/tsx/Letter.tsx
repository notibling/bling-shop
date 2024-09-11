import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLetter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M14.2 3H9.8C5.652 3 3.577 3 2.289 4.318S1 7.758 1 12s0 6.364 1.289 7.682S5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318S23 16.242 23 12s0-6.364-1.289-7.682S18.348 3 14.2 3" opacity={0.5} />
    <path d="M19.128 8.034a.825.825 0 0 0-1.056-1.268l-2.375 1.98c-1.026.855-1.738 1.447-2.34 1.833-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.766a.825.825 0 0 0-1.056 1.268l2.416 2.013c.975.813 1.765 1.471 2.463 1.92.726.467 1.434.763 2.25.763.814 0 1.522-.296 2.249-.763.697-.449 1.487-1.107 2.462-1.92z" />
  </svg>
);
export default SvgLetter;
