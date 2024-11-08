import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSiren = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M20 21.25V16c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 11.8 4 13.2 4 16v5.25z' opacity={0.5} />
    <path d='M14.25 10.815a.75.75 0 0 1 .75-.75c1.618 0 2.996 1.272 2.935 2.962a.75.75 0 0 1-1.5-.054c.029-.77-.593-1.408-1.435-1.408a.75.75 0 0 1-.75-.75M4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H4M12.75 18.8a1.5 1.5 0 1 0-1.5 0v2.45h1.5zM12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M21.53 5.53l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06M3.53 4.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z' />
  </svg>
);
export default SvgSiren;
