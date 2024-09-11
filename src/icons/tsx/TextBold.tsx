import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextBold = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M4 4.609A3.61 3.61 0 0 1 7.609 1H12a6 6 0 0 1 0 12H4zM7.609 3C6.72 3 6 3.72 6 4.609V11h6a4 4 0 0 0 0-8z" clipRule="evenodd" />
    <path d="M4 13v6.941C4 21.631 5.37 23 7.059 23H14a6 6 0 0 0 2.102-11.622A5.98 5.98 0 0 1 12 13h2a4 4 0 0 1 0 8H7.059A1.06 1.06 0 0 1 6 19.94V13z" opacity={0.5} />
  </svg>
);
export default SvgTextBold;
