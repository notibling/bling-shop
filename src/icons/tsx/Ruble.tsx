import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRuble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" clipRule="evenodd" opacity={0.5} />
    <path
      fillRule="evenodd"
      d="M9 13.25a.75.75 0 1 0 0 1.5h.25V17a.75.75 0 0 0 1.5 0v-2.25H12a.75.75 0 0 0 0-1.5h-1.25v-.5h2.75a3.25 3.25 0 0 0 0-6.5h-2.338c-.146 0-.297 0-.436.022a1.75 1.75 0 0 0-1.454 1.454c-.022.139-.022.29-.022.436v3.088H9a.75.75 0 1 0 0 1.5h.25v.5zm4.5-2h-2.75V8.2l.001-.198.002-.043a.25.25 0 0 1 .206-.206l.043-.002H13.5a1.75 1.75 0 1 1 0 3.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRuble;