import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRewindBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M22 6.426v11.148c0 1.847-1.6 3.015-2.903 2.118L13 15.232V8.768l6.097-4.46C20.399 3.411 22 4.58 22 6.426" clipRule="evenodd" opacity={0.5} />
    <path d="M13 7.123v9.754c0 1.616-1.467 2.638-2.661 1.853L2.92 13.853c-1.228-.807-1.228-2.899 0-3.706L10.34 5.27C11.533 4.485 13 5.507 13 7.123" />
  </svg>
);
export default SvgRewindBack;
