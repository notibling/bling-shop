import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWidget2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M2 6.634a4.634 4.634 0 1 1 9.268 0 4.634 4.634 0 0 1-9.268 0" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12.732 17.366a4.634 4.634 0 1 1 9.268 0 4.634 4.634 0 0 1-9.268 0" clipRule="evenodd" opacity={0.5} />
    <path d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5" />
    <path d="M13 6.5c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" opacity={0.5} />
  </svg>
);
export default SvgWidget2;
