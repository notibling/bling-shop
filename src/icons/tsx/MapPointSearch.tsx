import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMapPointSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144 20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity={0.5} />
    <path fillRule="evenodd" d="M12 6.25a3.75 3.75 0 1 0 2.07 6.877l.898.902a.75.75 0 0 0 1.064-1.057l-.902-.907A3.75 3.75 0 0 0 12 6.25m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
  </svg>
);
export default SvgMapPointSearch;
