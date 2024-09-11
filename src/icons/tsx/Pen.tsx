import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20.848 8.713a3.932 3.932 0 0 0-5.561-5.561l-.887.887.038.111a8.75 8.75 0 0 0 2.092 3.32 8.75 8.75 0 0 0 3.431 2.13z" opacity={0.5} />
    <path d="m14.439 4.001-.039.038.038.112a8.75 8.75 0 0 0 2.093 3.32 8.75 8.75 0 0 0 3.43 2.13l-8.56 8.56c-.578.577-.867.865-1.185 1.114a6.6 6.6 0 0 1-1.211.748c-.364.174-.751.303-1.526.561l-4.083 1.361a1.06 1.06 0 0 1-1.342-1.341l1.362-4.084c.258-.774.387-1.161.56-1.525q.309-.646.749-1.212c.248-.318.537-.606 1.114-1.183z" />
  </svg>
);
export default SvgPen;
