import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMapPointWave = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M19.717 20.362C21.143 19.585 22 18.587 22 17.5c0-1.152-.963-2.204-2.546-3C17.623 13.58 14.962 13 12 13s-5.623.58-7.454 1.5C2.963 15.296 2 16.348 2 17.5s.963 2.204 2.546 3C6.377 21.42 9.038 22 12 22c3.107 0 5.882-.637 7.717-1.638"
      opacity={0.5}
    />
    <path fillRule="evenodd" d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clipRule="evenodd" />
  </svg>
);
export default SvgMapPointWave;