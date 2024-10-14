import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWeigher = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z' opacity={0.5} />
    <path d='M7.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8.645 6.31a18.3 18.3 0 0 1 6.71 0l.476.088c.88.164 1.4 1.194 1.068 2.118l-.744 2.076c-.108.301-.399.467-.68.389a12.9 12.9 0 0 0-4.724-.417L10 8.222c-.156-.486-.637-.74-1.073-.565s-.662.71-.506 1.197l.64 1.99q-.27.063-.534.137c-.282.078-.573-.088-.68-.389L7.1 8.516c-.332-.924.188-1.954 1.068-2.118z' />
  </svg>
);
export default SvgWeigher;
