import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlignHorizontaSpacing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M21 22.75a.75.75 0 0 1-.75-.75V2a.75.75 0 1 1 1.5 0v20a.75.75 0 0 1-.75.75m-18 0a.75.75 0 0 1-.75-.75V2a.75.75 0 1 1 1.5 0v20a.75.75 0 0 1-.75.75" clipRule="evenodd" opacity={0.5} />
    <path d="M12 20c1.886 0 2.829 0 3.415-.586S16 17.886 16 16V8c0-1.886 0-2.828-.585-3.414C14.829 4 13.885 4 12 4s-2.828 0-3.414.586S8 6.114 8 8v8c0 1.886 0 2.828.586 3.414S10.115 20 12 20" />
  </svg>
);
export default SvgAlignHorizontaSpacing;