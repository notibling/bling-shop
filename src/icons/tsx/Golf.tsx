import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGolf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <ellipse cx={12} cy={18.5} opacity={0.5} rx={10} ry={3.5} />
    <path d="M12 1.25a.75.75 0 0 1 .75.75v1.036l5.008 2.504.054.027c.734.367 1.36.68 1.796.984.441.309.906.757.906 1.449s-.465 1.14-.906 1.449c-.436.304-1.062.617-1.796.984l-5.062 2.53V18a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" />
  </svg>
);
export default SvgGolf;
