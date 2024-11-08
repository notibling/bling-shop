import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDialog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} viewBox='0 0 24 24' {...props}>
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M18 14a8 8 0 0 1-11.45 7.22 1.67 1.67 0 0 0-1.15-.13l-1.227.329a1.3 1.3 0 0 1-1.591-1.592L2.91 18.6a1.67 1.67 0 0 0-.13-1.15A8 8 0 1 1 18 14M6.5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
      clipRule='evenodd'
    />
    <path fill='currentColor' d='M17.984 14.508a6 6 0 0 0 .32-.142c.291-.14.622-.189.934-.105l.996.267a1.056 1.056 0 0 0 1.294-1.294l-.267-.996a1.36 1.36 0 0 1 .105-.935A6.5 6.5 0 1 0 9.492 6.016a8 8 0 0 1 8.493 8.493' opacity={0.6} />
  </svg>
);
export default SvgDialog;
