import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCallDroppedRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path stroke={props.color || 'currentColor'} strokeWidth={1.5} d='M15 4v1c0 1.886 0 2.828.586 3.414S17.115 9 19 9h1.5m0 0L18 7m2.5 2L18 11' />
    <path
      d='m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38'
      opacity={0.5}
    />
  </svg>
);
export default SvgCallDroppedRounded;
