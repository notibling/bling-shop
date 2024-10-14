import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHearts = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M2 9.137C2 14 6.02 16.592 8.962 18.911 10 19.73 11 20.501 12 20.501s2-.771 3.038-1.59C17.981 16.591 22 14.001 22 9.137S16.5.826 12 5.501C7.5.826 2 4.274 2 9.137' opacity={0.5} />
    <path d='M16.5 13.287c-2.475-2.716-5.5-.712-5.5 2.112 0 2.56 1.814 4.035 3.358 5.292l.044.036.427.35c.571.475 1.121.923 1.671.923s1.1-.448 1.671-.923C19.789 19.73 22 18.224 22 15.399c0-.927-.326-1.767-.853-2.38-1.075-1.251-2.985-1.556-4.647.268' />
  </svg>
);
export default SvgHearts;
