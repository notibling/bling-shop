import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17' />
    <path
      d='M13.996 21h-4l-1.115-.001c-3.04-.012-4.663-.12-5.713-1.17a3 3 0 0 1-.19-.214c-.843-1.021-.96-2.558-.976-5.235a21 21 0 0 1-.001-.493L2 13v-2C2 7.229 2 5.343 3.17 4.172S6.23 3 10 3h4c3.771 0 5.657 0 6.828 1.172q.1.1.19.213c.843 1.021.96 2.558.975 5.235q.005.273.002.493l.001.887v2c0 3.771 0 5.657-1.172 6.828S17.767 21 13.996 21'
      opacity={0.5}
    />
  </svg>
);
export default SvgPip;
