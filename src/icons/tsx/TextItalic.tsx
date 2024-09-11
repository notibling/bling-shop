import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M9 1h12a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2m-.744 20H3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H8.256" clipRule="evenodd" />
    <path d="m13.656 3-5.4 18h2.088l5.4-18z" opacity={0.5} />
  </svg>
);
export default SvgTextItalic;
