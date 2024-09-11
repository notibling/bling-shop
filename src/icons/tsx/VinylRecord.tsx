import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVinylRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142-10.237-3.905-14.142 0-3.905 10.237 0 14.142" opacity={0.5} />
    <path d="M17.127 6.873a.75.75 0 1 0-1.061 1.06 5.75 5.75 0 0 1 0 8.132.75.75 0 1 0 1.06 1.061 7.25 7.25 0 0 0 0-10.253M7.934 7.934a.75.75 0 0 0-1.06-1.061 7.25 7.25 0 0 0 0 10.253.75.75 0 0 0 1.06-1.06 5.75 5.75 0 0 1 0-8.132" />
    <path fillRule="evenodd" d="M9.348 9.348a3.75 3.75 0 1 1 5.304 5.303 3.75 3.75 0 0 1-5.304-5.303m1.061 1.06a2.25 2.25 0 1 1 3.182 3.183 2.25 2.25 0 0 1-3.182-3.182" clipRule="evenodd" />
  </svg>
);
export default SvgVinylRecord;
