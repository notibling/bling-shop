import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M21.524 12H2.476A.476.476 0 0 1 2 11.524 9.524 9.524 0 0 1 11.524 2h.952A9.524 9.524 0 0 1 22 11.524a.476.476 0 0 1-.476.476" opacity={0.5} />
    <path fillRule="evenodd" d="M11.25 20v-8h1.5v8a2.75 2.75 0 1 1-5.5 0v-1a.75.75 0 0 1 1.5 0v1a1.25 1.25 0 1 0 2.5 0" clipRule="evenodd" />
    <path d="M7.84 12c.143-1.354.477-3.733 1.184-5.771.36-1.042.802-1.941 1.324-2.567.514-.616 1.055-.912 1.652-.912.598 0 1.139.296 1.652.912.523.626.964 1.525 1.325 2.567.707 2.038 1.04 4.417 1.183 5.771h1.509l-.008-.077c-.142-1.371-.489-3.94-1.267-6.185-.388-1.12-.901-2.212-1.59-3.037a5 5 0 0 0-.506-.527A9.6 9.6 0 0 0 12.476 2h-.952q-.935.002-1.82.174a5 5 0 0 0-.508.527c-.688.825-1.201 1.917-1.59 3.037-.778 2.244-1.125 4.814-1.266 6.185L6.332 12z" />
  </svg>
);
export default SvgUmbrella;