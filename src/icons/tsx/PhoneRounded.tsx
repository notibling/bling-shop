import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhoneRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="m10.687 6.48-.65-1.164c-.884-1.585-3.106-1.772-4.5-.379-.836.837-1.487 1.863-1.53 2.996-.056 1.47.217 3.728 1.83 6.173l4.278-4.278c.922-.923 1.157-2.3.572-3.349m3.485 7.405-4.278 4.279c2.445 1.612 4.704 1.885 6.173 1.83 1.133-.043 2.159-.695 2.996-1.532 1.393-1.393 1.206-3.615-.38-4.5l-1.162-.649c-1.05-.585-2.426-.35-3.349.572"
      clipRule="evenodd"
    />
    <path d="M11.025 12.976c-2.03-2.03-.91-3.148-.91-3.148l-4.279 4.278c.482.73 1.084 1.478 1.832 2.226s1.495 1.35 2.226 1.832l4.278-4.279s-1.119 1.12-3.148-.91" opacity={0.5} />
  </svg>
);
export default SvgPhoneRounded;