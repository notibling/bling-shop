import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z" opacity={0.5} />
    <path fillRule="evenodd" d="M12 4.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.25 15.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clipRule="evenodd" />
  </svg>
);
export default SvgSpeaker;
