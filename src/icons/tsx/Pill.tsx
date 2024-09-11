import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z" opacity={0.5} />
    <path d="m7.807 17.419-1.253-1.254.495-.095h.001l.014-.003.074-.018q.104-.024.315-.091c.282-.09.697-.243 1.21-.49 1.024-.493 2.438-1.364 3.939-2.866 1.501-1.501 2.372-2.915 2.866-3.939.247-.513.4-.928.49-1.21a5 5 0 0 0 .109-.389l.003-.014.095-.496 1.254 1.253-.032.103c-.11.342-.288.824-.568 1.404-.56 1.162-1.525 2.718-3.156 4.349s-3.187 2.597-4.349 3.157a11 11 0 0 1-1.507.599" />
  </svg>
);
export default SvgPill;
