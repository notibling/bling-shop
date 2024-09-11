import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCameraMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.722a4.4 4.4 0 0 0 1.226-1.183C22 18.015 22 16.51 22 13.5s0-4.514-.75-5.595a4.4 4.4 0 0 0-1.225-1.183C18.904 6 17.343 6 14.222 6H9.778c-3.121 0-4.682 0-5.803.722A4.4 4.4 0 0 0 2.75 7.905C2 8.985 2 10.49 2 13.498v.002c0 3.01 0 4.514.749 5.595.324.468.74.87 1.226 1.183C5.096 21 6.657 21 9.778 21"
      opacity={0.5}
    />
    <path fillRule="evenodd" d="M8 4c0-.552.413-1 .923-1h6.154c.51 0 .923.448.923 1s-.413 1-.923 1H8.923C8.413 5 8 4.552 8 4" clipRule="evenodd" />
    <path fill="#fff" fillRule="evenodd" d="M17.278 10.286c0-.444.373-.804.833-.804h.556c.46 0 .833.36.833.804s-.373.804-.833.804h-.556c-.46 0-.833-.36-.833-.804" clipRule="evenodd" />
    <path
      fillRule="evenodd"
      d="M7.834 13.5c0-2.219 1.865-4.018 4.166-4.018s4.167 1.8 4.167 4.018c0 2.22-1.866 4.018-4.167 4.018S7.834 15.72 7.834 13.5m1.666 0c0-1.331 1.12-2.41 2.5-2.41s2.5 1.079 2.5 2.41-1.12 2.411-2.5 2.411-2.5-1.08-2.5-2.41M18.111 9.482c-.46 0-.833.36-.833.804s.373.804.833.804h.556c.46 0 .833-.36.833-.804s-.373-.804-.833-.804z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCameraMinimalistic;