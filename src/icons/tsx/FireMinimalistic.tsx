import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFireMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M12 21c4.418 0 8-3.356 8-7.496 0-3.741-2.035-6.666-3.438-8.06-.26-.258-.694-.144-.84.189-.748 1.69-2.304 4.123-4.293 4.123-1.232.165-3.112-.888-1.594-6.107.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504 4 17.644 7.582 21 12 21'
      opacity={0.5}
    />
    <path d='M4.477 16.059A8.99 8.99 0 0 1 12 12a8.99 8.99 0 0 1 7.523 4.059A7.1 7.1 0 0 0 20 13.504c0-3.741-2.035-6.666-3.438-8.06-.26-.258-.694-.144-.84.189-.748 1.69-2.304 4.123-4.293 4.123-1.232.165-3.112-.888-1.594-6.107.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504c0 .897.168 1.757.477 2.555' />
  </svg>
);
export default SvgFireMinimalistic;
