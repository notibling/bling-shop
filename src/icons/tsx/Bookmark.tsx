import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M21 11.098v4.993c0 3.096 0 4.645-.734 5.321-.35.323-.792.526-1.263.58-.987.113-2.14-.907-4.445-2.946-1.02-.901-1.529-1.352-2.118-1.47a2.2 2.2 0 0 0-.88 0c-.59.118-1.099.569-2.118 1.47-2.305 2.039-3.458 3.059-4.445 2.945a2.24 2.24 0 0 1-1.263-.579C3 20.736 3 19.188 3 16.091v-4.994C3 6.81 3 4.666 4.318 3.333S7.758 2 12 2s6.364 0 7.682 1.332S21 6.81 21 11.098'
      opacity={0.5}
    />
    <path d='M9 5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z' />
  </svg>
);
export default SvgBookmark;
