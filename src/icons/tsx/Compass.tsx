import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10' opacity={0.5} />
    <path d='M13.024 14.56c.493-.197.739-.296.932-.465q.075-.065.139-.139c.17-.193.268-.44.465-.932.924-2.31 1.386-3.465.938-4.124a1.5 1.5 0 0 0-.398-.398c-.66-.448-1.814.014-4.124.938-.493.197-.74.295-.933.465q-.074.065-.138.139c-.17.193-.268.44-.465.932-.924 2.31-1.386 3.464-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938' />
  </svg>
);
export default SvgCompass;
