import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQuitPip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M13.996 21h-4l-1.115-.001c-3.04-.012-4.663-.12-5.713-1.17a3 3 0 0 1-.19-.214c-.843-1.021-.96-2.558-.975-5.235A21 21 0 0 1 2 13.887V11c0-3.771 0-5.657 1.17-6.828C4.344 3 6.23 3 10.002 3h4c3.77 0 5.656 0 6.828 1.172q.1.1.19.213c.842 1.021.959 2.558.975 5.235q.003.273.002.493V13c0 3.771 0 5.657-1.171 6.828S17.767 21 13.996 21"
      opacity={0.5}
    />
    <path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17M10.97 12.03a.75.75 0 1 0 1.06-1.06L9.31 8.25h1.19a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V9.31z" />
  </svg>
);
export default SvgQuitPip;
