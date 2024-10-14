import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSafeSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464' opacity={0.5} />
    <path d='M6.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0z' />
    <path
      fillRule='evenodd'
      d='M9.47 7.47a.75.75 0 0 1 1.06 0l1.402 1.401A3.73 3.73 0 0 1 14 8.25c.764 0 1.475.229 2.068.621L17.47 7.47a.75.75 0 1 1 1.06 1.06L17.13 9.932c.392.593.621 1.304.621 2.068s-.229 1.475-.621 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.73 3.73 0 0 1 14 15.75a3.73 3.73 0 0 1-2.068-.621L10.53 16.53a.75.75 0 1 1-1.06-1.06l1.401-1.402A3.73 3.73 0 0 1 10.25 12c0-.764.229-1.475.621-2.068L9.47 8.53a.75.75 0 0 1 0-1.06M11.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSafeSquare;
